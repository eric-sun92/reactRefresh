import "./App.css";
import { useState } from "react";
import Planet from "./Planet";

function App() {
  const [task, setTask] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const addTaskToList = () => {
    setToDoList((previous) => {
      return [
        ...previous,
        {
          id: previous.length == 0 ? 1 : previous[previous.length - 1],
          name: task,
          completed: false,
        },
      ];
    });
    setTask((previous) => "");
  };

  const deleteToDo = (toDoid) => {
    const removedTaskList = toDoList.filter((toDo) => {
      return toDo.id != toDoid;
    });
    setToDoList((previous) => {
      return removedTaskList;
    });
  };

  const completeToDo = (toDoid) => {
    setToDoList((previous) => {
      return previous.map((task) => {
        return task.id == toDoid ? { ...task, completed: true } : task;
      });
    });
  };

  return (
    <>
      <div>
        <input value={task} onChange={(e) => setTask(e.target.value)} />
        <button onClick={addTaskToList}>Add Task</button>
      </div>
      <div>
        {toDoList.map((toDo, key) => {
          return (
            <div key={key} style={{ display: "flex" }}>
              <button onClick={() => deleteToDo(toDo.id)}>Delete</button>
              <button onClick={() => completeToDo(toDo.id)}>Complete</button>
              <h1 style={{ color: toDo.completed == true ? "green" : "red" }}>
                {toDo.name}
              </h1>
            </div>
          );
        })}
      </div>
    </>
  );
}
//   const [count, setCount] = useState(0);

//   const decreaseCount = () => {
//     setCount((previous) => {
//       return previous - 1;
//     });
//   };

//   const increaseCount = () => {
//     setCount((previous) => {
//       return previous + 1;
//     });
//   };

//   const resetCount = () => {
//     setCount((previous) => {
//       return 0;
//     });
//   };

//   return (
//     <div className="App">
//       <div>
//         <button onClick={decreaseCount}>Decrease</button>
//         {count}
//         <button onClick={increaseCount}>Increase</button>
//       </div>

//       <button onClick={resetCount}>Reset</button>
//     </div>
//   );
// }

export default App;
