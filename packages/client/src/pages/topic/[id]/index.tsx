import { Search } from "@/components/common/Search";
import { useGetListStaticTask } from "@/features/tasks/api/getListTask";
import { StaticTaskItem } from "@/features/tasks/components/StaticTaskItem";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const TaskListPage = () => {
  const { query } = useRouter();
  const { data } = useGetListStaticTask(query.id as string);
  return (
    <>
      <Head>
        <title>Task List</title>
        <meta name="description" content="Task list" />
      </Head>
      <main className="p-3">
        <header className="py-3">
          <h1 className="text-center text-xl font-semibold">Habits</h1>
        </header>
        <Search inputClassName="bg-softGrey" />

        <div className="mt-6">
          {data?.data && data?.data?.map((item) => (
            <Link href={`/topic/${query.id}/${item._id}`} key={item._id}>
              <StaticTaskItem
                key={item.name}
                name={item.name}
                description={item.description}
              />
            </Link>
          ))}
        </div>
      </main>
    </>
  );
};

export default TaskListPage;
