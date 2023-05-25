function List({children, name, handleDrop, id}) {
  function handleDragOver(event) {
    event.preventDefault();
    console.log(event);
  }

  const filteredChildren = children.filter((child) => child != null);

  return (
    <div
      data-list={id}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className="p-4 bg-gray-400 rounded-md flex-1 opacity-95"
    >
      <h2 className="p-4 text-gray-900 font-bold ">{name}</h2>
      <div className="flex flex-col gap-2">
        {filteredChildren.length > 0 ? (
          filteredChildren
        ) : (
          <p className=" font-bold text-green-600 flex justify-center items-center">
            vacio✅
          </p>
        )}
      </div>
    </div>
  );
}
export default List;
