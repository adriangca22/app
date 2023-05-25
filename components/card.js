import Image from "next/image";
import {useState, useEffect} from "react";

const imagePaths = {
  "todos-task1": "/static/images/avatar.png",
  "todos-task2": "/static/images/mortal.png",
  "todos-task3": "/static/images/xbox.png",
  "todos-task4": "/static/images/fenix.png",
  "todos-task5": "/static/images/yutube.png",
  "progress-task2": "/static/images/yutube.png",
};

function Card({text, id, setDragged, handleSave}) {
  function handleDragStart(event) {
    setDragged({
      data: {
        text,
        id,
      },
      list: event.target.closest("[data-list]").dataset.list,
    });
  }

  const [editing, setEditing] = useState(false);
  const [inputText, setInputText] = useState(text);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSaveClick = () => {
    handleSave(id, inputText); // Llama a la función que se pasó como prop al componente
    setEditing(false);
    // Opcional: Actualiza el estado local del componente con el nuevo texto
    // setInputText(inputText);
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      className="bg-slate-100 text-slate-900 rounded-md p-2 flex flex-col gap-2 hover:cursor-pointer"
    >
      {editing ? (
        <div className="flex flex-col gap-2">
          <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            className="border-gray-300 border bg-slate-200 rounded-md p-2"
          />
          <button
            onClick={handleSaveClick}
            className="bg-green-500 text-white rounded-md p-2"
          >
            Save
          </button>
        </div>
      ) : (
        <>
          <div className="flex justify-between">
            <p className="font-medium">{text}</p>
            <button onClick={() => setEditing(true)}>
              {" "}
              <Image
                src="/static/icons/edit.svg"
                width={20}
                height={20}
                alt=""
              />
            </button>
          </div>
          <div className="flex justify-between">
            <Image src={imagePaths[id]} width={32} height={32} alt="" />
            <Image
              src="/static/icons/message.svg"
              width={20}
              height={20}
              alt=""
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
