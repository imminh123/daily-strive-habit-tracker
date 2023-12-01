import { useCompleteTask } from "@/features/tasks/api/completeTask";
import Link from "next/link";
import React, { useState } from "react";

export const TaskItem = ({
  id,
  title,
  streak,
  complete,
}: {
  id: string;
  title: string;
  streak: number;
  complete: boolean;
}) => {
  const { mutate: completeTask } = useCompleteTask();
  const [completed, setCompleted] = useState(complete);

  const handleCompleteTask = (e: any) => {
    completeTask(id);
    setCompleted(e.target.checked);
  };
  return (
    <li className="mb-3 flex items-center">
      <div className="form-control">
        <label className="label cursor-pointer">
          <input
            onChange={handleCompleteTask}
            type="checkbox"
            checked={completed}
            className="checkbox-accent checkbox rounded-full"
          />
        </label>
      </div>

      <Link href={`/todo/user/${id}`} className="ml-2">
        <span className="label-text font-medium">{title}</span>
        <p className="label-text text-gray-500">{streak}-day streak</p>
      </Link>
    </li>
  );
};
