import schedule from "node-schedule";
import nodemailer from "nodemailer";
import { UserTaskServices } from "@/components/userTask/services";
import { UserServices } from "@/components/user/services";
import { error } from "console";
import CONFIG from "@/config";
import { emailModel } from "./emailModel";
// email stransporter dev: ethereal & prod: sengrid.
const transporter =
  CONFIG.APP.ENV == "development"
    ? nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
          user: `${CONFIG.APP.TESTEMAIL}`,
          pass: `${CONFIG.APP.TESTPASSWORD}`,
        },
      })
    : nodemailer.createTransport({
        host: "smtp.sendgrid.net",
        port: 587,
        auth: {
          user: "apikey",
          pass: `${CONFIG.APP.SENDGRID_APIKEY}`,
        },
      });

// email structure
const emailDesign = (description: string, id: string, streak: number) => {
  const doneLink = `${CONFIG.APP.BASE_URL}/completeUserTask/${id}`; // TODE: Change to redirect to webapp's task completion page not api endpoint (ugly).
  return emailModel(description, doneLink, streak);
};

// notification fuction
const sendEmail = async (task: any) => {
  try {
    const userservice = new UserServices();
    const foundUser = await userservice.getUser(task.user);
    if (foundUser?.notification) {
      const info = {
        from: `${CONFIG.APP.SENGRID_SENDER}`,
        to: `${foundUser?.email}`,
        subject: `${task.name}`,
        html: emailDesign(task.description, task.id, task.streak),
      };
      const sentEmail = await transporter.sendMail(info);
      console.log(`Email sent to: ${foundUser?.email}`);
      if (CONFIG.APP.ENV == "development") {
        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(sentEmail));
      }
    } else {
      console.log(`${foundUser?.email} notifications are turned off.`);
    }
  } catch {
    console.log(error);
  }
};

// schedule jobs for every minute
schedule.scheduleJob("* * * * *", async () => {
  try {
    const datetimeNow = new Date();
    const usertaskservice = new UserTaskServices();
    const tasks = await usertaskservice.findUserTasks({
      notificationToggle: true,
      $expr: {
        $and: [
          { $eq: [{ $hour: "$notificationTime" }, datetimeNow.getHours()] },
          {
            $eq: [{ $minute: "$notificationTime" }, datetimeNow.getMinutes()],
          },
        ],
      },
    });
    console.log(
      "Usertasks, read & retrieved by:",
      `${datetimeNow.getHours()}:${datetimeNow.getMinutes()}`,
    );
    if (tasks != null) {
      for (const task of tasks) {
        sendEmail(task);
      }
    } else {
      console.log("No actions");
    }
  } catch {
    console.log(error);
  }
});
// schedule task reset jobs in 0:00 for notifications etc.
schedule.scheduleJob("0 0 * * *", async () => {
  try {
    const usertaskservice = new UserTaskServices();
    // reset streaks
    const updates = await usertaskservice.updateUserTasks(
      { completed: false },
      { $set: { streak: 0 } },
    );
    console.log(`Streak losses: ${updates.modifiedCount}`);
    // reset task completions
    await usertaskservice.updateUserTasks({}, { $set: { completed: false } });
    console.log(`UserTask resets finalized: ${new Date()}.`);
  } catch {
    console.log(error);
  }
});
export default { schedule };
