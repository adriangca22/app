import Card from "../components/card";
import List from "../components/list";
import {useState, useEffect} from "react";

const todos = [
  {
    text: "tarea 1 ",
    id: "todos-task1",
  },
  {
    text: " tarea 2 ",
    id: "todos-task2",
  },
  {
    text: " tarea 3",
    id: "todos-task3",
  },
  {
    text: " tarea 4",
    id: "todos-task4",
  },
  {
    text: " tarea 5 ",
    id: "todos-task5",
  },
];
const progress = [
  {
    text: "solucionando problemas ✔ ",
    id: "progress-task2",
  },
];
const done = [{}];

export default function Board() {
  const [dragged, setDragged] = useState(null);

  const [ListOfAdri, setListOfAdri] = useState({
    todos,
    progress,
    done,
  });

  useEffect(() => {
    localStorage.setItem("ListOfAdri", JSON.stringify(ListOfAdri));
  }, [ListOfAdri]);

  function handleDrop(event) {
    event.preventDefault();
    const list = event.currentTarget.dataset.list;
    const ListOfAdriClone = structuredClone(ListOfAdri);
    const newList = ListOfAdriClone[dragged.list].filter(
      (item) => item.id !== dragged.data.id
    );
    ListOfAdriClone[dragged.list] = newList;
    ListOfAdriClone[list].push(dragged.data);
    setListOfAdri(ListOfAdriClone);

    console.log(event);
  }

  function handleSave(id, newText) {
    const listName = id.split("-")[0];
    const index = ListOfAdri[listName].findIndex((item) => item.id === id);
    const updatedList = ListOfAdri[listName].slice();
    updatedList[index].text = newText;
    const updatedListOfAdri = {...ListOfAdri, [listName]: updatedList};
    setListOfAdri(updatedListOfAdri);
  }

  return (
    <div className="p-2 ">
      <h1 className="text-3xl p-6 text-zinc-500 font-serif b-4 flex justify-center items-center ">
        {" "}
      </h1>
      <main className="flex  justify-between gap-4">
        <List name="tareas para realizar ✏ " handleDrop={handleDrop} id="todos">
          {ListOfAdri.todos.map((item, index) => (
            <Card
              setDragged={setDragged}
              handleSave={handleSave}
              {...item}
              key={item.id}
            />
          ))}
        </List>
        <List name="en procesos ⏳" handleDrop={handleDrop} id="progress">
          {ListOfAdri.progress.map((item, index) => (
            <Card
              setDragged={setDragged}
              handleSave={handleSave}
              {...item}
              key={item.id}
            />
          ))}
        </List>
        <List name="listos para revisar ✔" handleDrop={handleDrop} id="done">
          {ListOfAdri.done.map((item, index) =>
            item.text ? (
              <Card
                setDragged={setDragged}
                handleSave={handleSave}
                {...item}
                key={item.id}
              />
            ) : null
          )}
        </List>
      </main>
    </div>
  );
}
