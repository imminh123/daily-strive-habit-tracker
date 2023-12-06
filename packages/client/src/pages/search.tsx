import { Search } from "@/components/common/Search";
import { useSearchStaticTask } from "@/features/tasks/api/getListTask";
import { StaticTaskItem } from "@/features/tasks/components/StaticTaskItem";
import Head from "next/head";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

const TaskListPage = () => {
  const params = useSearchParams();
  const router = useRouter()
  const { data } = useSearchStaticTask(params.get("q"));
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
          {!!data?.data.length ? (
            data?.data?.map((item) => (
              <Link href={`/task/${item._id}`} key={item._id}>
                <StaticTaskItem
                  key={item.name}
                  name={item.name}
                  description={item.description}
                />
              </Link>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center mt-40">
              <span>No task found</span> <button className="btn btn-link btn-accent" onClick={() => router.push('/')}>Go back</button>{" "}
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default TaskListPage;
