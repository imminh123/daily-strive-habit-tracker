import Head from "next/head";
import React, { useState } from "react";

const SettingPage = () => {
  const [notificationToggle, setNotificationToggle] = useState(true);

  return (
    <>
      <Head>
        <title>Todo</title>
        <meta
          name="Todo page"
          content="Show all of your task according to days in week"
        />
      </Head>

      <main className="bg-primary p-3">
        <header className="py-3">
          <h1 className="text-center text-xl font-semibold text-white">Setting</h1>
        </header>

          <h1 className="self-start text-lg font-semibold text-white ml-1">System configuration</h1>
        <div className="mt-1 w-full rounded-xl bg-white px-5 py-3">
          <label className="label cursor-pointer">
            <span className="label-text text-lg font-semibold">
              Notification
            </span>
            <input
              checked={notificationToggle}
              onChange={(e) => setNotificationToggle(e.target.checked)}
              type="checkbox"
              className="toggle toggle-accent"
            />
          </label>
        </div>
      </main>
    </>
  );
};

export default SettingPage;
