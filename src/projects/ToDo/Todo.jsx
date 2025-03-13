import React, { useState } from "react";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTask] = useState([]);

  // ---------------handleInputField---------------
  const handleInputField = (value) => {
    setInputValue(value);
  };

  // ---------------handleSubmit---------------
  const handleSubmit = (e) => {
    e.preventDefault();
    //-------------- checking if the inputfield is empty or not
    if (!inputValue) {
        alert("Please insert a task")
        return
    }
    //----------------- checking the same task is included or not
    if (tasks.includes(inputValue)) {
        alert("Same task is already added")
        setInputValue('')
        return
    }
    //---------------- setting the task array
    setTask((prev) => [...prev, inputValue])
    //---------------- clearing the input field
    setInputValue('')
  };

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
          <form onSubmit={handleSubmit}>
            <div className="flex gap-1">
              <input
                type="text"
                value={inputValue}
                placeholder="write a task"
                className="input input-md"
                onChange={(e) => handleInputField(e.target.value)}
              />
              <button type="submit" className="btn btn-success">
                Add Task
              </button>
            </div>
          </form>
        </section>
      </section>
    </>
  );
};

export default Todo;
