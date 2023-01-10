import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    //validando que no se repita el titulo
    const searchTitle = tasks.find((element) => element.title === task.title); //find nos devuelve el elemente si lo encuentra, sino devuelve undefined
    if (searchTitle) {
      alert("Ya existe una tarea con ese titulo"); //si lo encuentra enviamos un alert y salimos
      return;
    }

    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]); //copia todos los valores de tasks y agrega a task, creando un nuevo arreglo, no altera a tasks
  }

  function deleteTask(taskId) {
    //console.log(tasks)
    //console.log(taskId)
    setTasks(tasks.filter((task) => task.id !== taskId)); //nos devuelve un new array con todos los valores excepto los que sean iguales al taskId. y lo actualizamos mediante el setTaks
  }

  useEffect(() => {
    setTasks(data); //de esta manera asigna nuestras tareas y no el arreglo vacio que tiene tasks cuando llega aki la ejecucion
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
