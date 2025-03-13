import React from "react";

const Todo = () => {
  return (
    <>
      <section className="mx-auto h-screen bg-emerald-900 flex flex-col items-center">
        {/*---------------------------------------- header ----------------------------------------*/}
        <header className="text-white">
          <h1 className="text-7xl underline text-center font-bold">
            ToDo List
          </h1>
          <p className="text-center mt-2">
            by{" "}
            <a
              className="text-blue-500 underline"
              target="_blank"
              href="https://www.facebook.com/fayshal.islam.9"
            >
              Fayshal Islam
            </a>
          </p>
        </header>
        {/*---------------------------------------- input field ----------------------------------------*/}
        <section className="my-3">
          <form>
            <div className="flex gap-1">
              <input
                type="text"
                placeholder="write a task"
                className="input input-md"
              />
              <button className="btn btn-success">Add Task</button>
            </div>
          </form>
        </section>
      </section>
    </>
  );
};

export default Todo;
