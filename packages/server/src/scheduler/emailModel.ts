export const emailModel = (
  description: string,
  doneLink: string,
  streak: number,
) => {
  return `
<div style="font-family: 'Arial', sans-serif; background-color: #f4f4f4; padding: 20px; border-radius: 10px; text-align: center;">
  <h2 style="color: #333;">Task Notification</h2>
  <p style="font-size: 16px; color: #555;">Task: ${description}</p>
  <p style="font-size: 16px; color: #555;">Have you completed this task?</p>
  <p style="font-size: 16px; color: #555;">Keep up your current Streak: ${streak}</p>
  <div id="buttonContainer" style="margin-top: 20px;">
    <a id="yesButton" href="${doneLink}" style="display: inline-block; padding: 10px 20px; background-color: #4CAF50; color: white; text-decoration: none; border-radius: 5px; font-size: 16px;">Yes</a>
  </div>
`;
};
