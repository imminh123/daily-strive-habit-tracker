import { Search } from "@/components/common/Search";
import { StaticTaskItem } from "@/features/tasks/components/StaticTaskItem";
import Head from "next/head";

const TaskListPage = ({ taskId }: { taskId: string }) => {
  return (
    <>
      <Head>
        <title>Task List</title>
        <meta name="description" content="Task list" />
      </Head>
      <main className="p-3">
        <header className="py-3">
          <h1 className="text-center text-xl font-semibold">Morning Run</h1>
        </header>

        <h1>Morning Run</h1>
        <p>Kick start your day with a morning run</p>

        <button className="btn">Add</button>
      </main>
    </>
  );
};

export default TaskListPage;
