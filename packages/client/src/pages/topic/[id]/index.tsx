import { Search } from "@/components/common/Search";
import { StaticTaskItem } from "@/features/tasks/components/StaticTaskItem";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const TaskListPage = () => {
  const {query} = useRouter()
  console.log("🚀 ~ file: index.tsx:9 ~ TaskListPage ~ query:", query)
  const data = [
    {
      id: 1,
      name: "Staying fit",
      description: "Be strong and full of energy",
    },
    {
      id: 2,
      name: "Learn & explore",
      description: "Be strong and full of energy",
    },
    {
      id: 3,
      name: "Better sleep",
      description: "Be strong and full of energy",
    },
    {
      id: 4,
      name: "Getting stuff done",
      description: "Be strong and full of energy",
    },
    {
      id: 5,
      name: "Stress relief",
      description: "Be strong and full of energy",
    },
  ];

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
          {data.map((item) => (
            <Link href={`/topic/${query.id}/${item.id}`}>
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
