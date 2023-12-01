import TaskImage from '../../assets/images/taskscreen.png'
import Head from "next/head";
import React from "react";
import { TaskItem } from "@/components/pages/TaskItem";
import Image from 'next/image';
import { useGetListTask } from '@/features/tasks/api/getListTask';

const TodoPage = () => {
  const {data: listTask} = useGetListTask()

  return (
    <>
      <Head>
        <title>Todo</title>
        <meta name="Todo page" content="Show all of your task according to days in week" />
      </Head>
      <main>
        <header className="py-6">
          <h1 className="text-center text-xl font-semibold">Tasks</h1>
        </header>

        <div className='px-3'>
        <section className='flex justify-between items-center bg-purple-2 p-5 rounded-2xl text-white'>
          <div> 
            <span className='text-xl font-bold block'>80%</span>
            <span className='font-semibold'>Today Habits</span>
            <p className='font-light mt-3 leading-5'>Ain’t no mountain high enough.</p>
          </div>

          <Image className='w-1/3' src={TaskImage} alt='Productity image' />
        </section>

        <section className='flex my-5'>
          <div className='text-center bg-purple-3 rounded-xl w-16 h-16 mr-3 flex justify-center items-center flex-col border-purple border-2'>
            <span className='font-light block'>Wed</span>
            <span>18</span>
          </div>
          <div className='text-center border bg-gray-100 rounded-xl w-16 h-16 mr-3 flex justify-center items-center flex-col'>
            <span className='font-light block'>Thu</span>
            <span>19</span>
          </div>
          <div className='text-center border bg-gray-100 rounded-xl w-16 h-16 mr-3 flex justify-center items-center flex-col'>
            <span className='font-light block'>Fri</span>
            <span>20</span>
          </div>
          <div className='text-center border bg-gray-100 rounded-xl w-16 h-16 mr-3 flex justify-center items-center flex-col'>
            <span className='font-light block'>Sat</span>
            <span>21</span>
          </div>
          <div className='text-center border bg-gray-100 rounded-xl w-16 h-16 mr-3 flex justify-center items-center flex-col'>
            <span className='font-light block'>Sun</span>
            <span>22</span>
          </div>
        </section>
        </div>
      
        <section
          style={{ height: "calc(59vh)" }}
          className="bg-softTeal rounded-t-3xl p-4 overflow-hidden"
        >
          <ul className="mt-3 overflow-y-auto h-full" >
            {listTask?.data.map((item: any) => (
              <TaskItem
                key={item._id}
                id={item._id}
                streak={0}
                complete={item.completed}
                title={item.name}
              />
            ))} 
          </ul>
        </section>
      </main>
    </>
  );
};

export default TodoPage;
