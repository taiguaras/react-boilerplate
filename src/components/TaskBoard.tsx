import { useState } from 'react';
import { PlayIcon, ArrowPathIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

function TaskBoard() {
    

  const [toDoTasks, settoDoTasks] = useState([
    { id: 1, title: 'Task 1', description: 'Description 1', completed: false },
    { id: 2, title: 'Task 2', description: 'Description 2', completed: true },
    { id: 3, title: 'Task 3', description: 'Description 3', completed: false },
  ]);

  const [inProgressTasks, setinProgressTasks] = useState([
    { id: 4, title: 'Task 4', description: 'Description 1', completed: false },
    { id: 5, title: 'Task 5', description: 'Description 2', completed: true },
    { id: 6, title: 'Task 6', description: 'Description 3', completed: false },
  ]);

  const [doneTasks, setdoneTasks] = useState([
    { id: 7, title: 'Task 7', description: 'Description 1', completed: false },
    { id: 8, title: 'Task 8', description: 'Description 2', completed: true },
    { id: 9, title: 'Task 9', description: 'Description 3', completed: false },
  ]);

  function handleStartTask(taskId: number) {
    const task = toDoTasks.find((task) => task.id === taskId);
    if (task) {
      settoDoTasks(toDoTasks.filter((task) => task.id !== taskId));
      setinProgressTasks([...inProgressTasks, task]);
      console.log("A",toDoTasks);
      console.log("B",inProgressTasks); 
      console.log("C",doneTasks);
    }
  } 

  function handleFinishTask(taskId: number) {
    const task = inProgressTasks.find((task) => task.id === taskId);
    if (task) {
      setinProgressTasks(inProgressTasks.filter((task) => task.id !== taskId));
      setdoneTasks([...doneTasks, task]);
    }
  }

  function handleOpenTask(taskId: number) {
    const task = doneTasks.find((task) => task.id === taskId);
    if (task) {
      setdoneTasks(doneTasks.filter((task) => task.id !== taskId));
      settoDoTasks([...toDoTasks, task]);
    }
  }

  function handleReopenTask(taskId: number) {
    const task = doneTasks.find((task) => task.id === taskId);
    if (task) {
      setdoneTasks(doneTasks.filter((task) => task.id !== taskId));
      setinProgressTasks([...inProgressTasks, task]);
    }
  }

  function handleRestartTask(taskId: number) {
    const task = inProgressTasks.find((task) => task.id === taskId);
    if (task) {
      setinProgressTasks(inProgressTasks.filter((task) => task.id !== taskId));
      settoDoTasks([...toDoTasks, task]);
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1>Tasks Board</h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg">
          <h2 className="text-lg font-bold">To Do</h2>
          <ul className="mt-4 space-y-2">
            {toDoTasks.map((task) => (
              <li key={task.id} className="flex items-center justify-between">
                <span>{task.title}</span>
                <div className="flex items-center gap-2">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center gap-2" onClick={() => handleStartTask(task.id)}>
                    <PlayIcon className="h-5 w-5" />
                    </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-4 rounded-lg">
            <h2 className="text-lg font-bold">In Progress</h2>
            <ul className="mt-4 space-y-2">
                {inProgressTasks.map((task) => (
                <li key={task.id} className="flex items-center justify-between">
                    <span>{task.title}</span>
                    <div className="flex items-center gap-2">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center gap-2" onClick={() => handleRestartTask(task.id)}>
                            <ArrowPathIcon className="h-5 w-5" />
                        </button>
                        <button className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center gap-2" onClick={() => handleFinishTask(task.id)}>
                            <CheckCircleIcon className="h-5 w-5" />   
                        </button>
                    </div>
                </li>
                ))}
            </ul>
        </div>

                <div className="bg-white p-4 rounded-lg">
          <h2 className="text-lg font-bold">Done</h2>
          <ul className="mt-4 space-y-2">
            {doneTasks.map((task) => (
              <li key={task.id} className="flex items-center justify-between">
                <span>{task.title}</span>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center gap-2" onClick={() => handleOpenTask(task.id)}>
                  <ArrowPathIcon className="h-5 w-5" />
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded-md flex items-center gap-2" onClick={() => handleReopenTask(task.id)}>
                  <XCircleIcon className="h-5 w-5" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TaskBoard; 