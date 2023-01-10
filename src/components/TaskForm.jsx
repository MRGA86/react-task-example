import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext); //solo necesitamos el createTask, este contexto devuelve tmb el deleteTask y el arreglo tasks

  const handleSubmit = (e) => {
    e.preventDefault(); // evita que el formulario actualice la pagina para poder ver el mensaje con consola con el title
    // console.log(title);
    //title: title,
    //id: tasks.length
    // me da warning pq se crean las tareas con el mismo id, y aunke ponga tasks.length como id no sirve, pq ese es el arreglo de tasks inicial, no el que se actualiza cuando creo una nueva tarea, y tasks.length siempre seria 3, por tanto hago eso en APP que es donde tengo acceso al arreglos de task que se actualiza y aki solo paso el titulo que es lo que entra el ususario en el input
    //alert(tasks.length)

    createTask({
      title,
      description,
    });
    setTitle(""); //ponemos los estados en vacios, es decir, lo limpiamos, y limpiamos los input de abajo
    setDescription("");
  };
  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-gray-700 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
        />
        <textarea
          placeholder="Escribe una descripcion"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white rounded-md mt-4 hover:bg-indigo-400">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
