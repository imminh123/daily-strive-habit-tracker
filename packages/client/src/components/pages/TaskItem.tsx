import React from "react";

export const TaskItem = ({title, streak}: {title: string, streak: number}) => {
  return (
    <li className="flex items-center mb-3">
      <div className="form-control">
        <label className="label cursor-pointer">
          <input
            type="checkbox"
            className="checkbox checkbox-accent rounded-full"
          />
        </label>
      </div>

      <div className="ml-2">
        <span className="label-text font-medium">{title}</span>
        <p className="label-text text-gray-500">{streak}-day streak</p>
      </div>
    </li>
  );
};
