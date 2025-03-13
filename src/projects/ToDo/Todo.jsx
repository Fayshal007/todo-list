import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

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
      alert("Please insert a task");
      return;
    }
    //----------------- checking the same task is included or not
    if (tasks.includes(inputValue)) {
      alert("Same task is already added");
      setInputValue("");
      return;
    }
    //---------------- setting the task array
    setTask((prev) => [...prev, inputValue]);
    //---------------- clearing the input field
    setInputValue("");
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

        {/*---------------------------------------- Showing all task ----------------------------------------*/}
        <section>
          <ul className="list bg-base-100 w-[300px] rounded-box shadow-md">
            {tasks.map((task, index) => (
              <li className="list-row flex justify-between items-center" key={index}>
                <p>{task}</p>
                <div>
                    <button className="btn bg-green-600"><FaCheck className="text-white text-xl"/></button>
                    <button className="btn bg-red-600 "><MdDelete  className="text-white text-xl"/></button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </>
  );
};

export default Todo;
