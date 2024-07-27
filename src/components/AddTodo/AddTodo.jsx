import React, { useState } from "react";
function AddTodo({ addTodo }) {
  const [inputText, setInputText] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Add your next todo..."
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
      />
      <button
        onClick={() => {
          addTodo(inputText);
          setInputText("");
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;
