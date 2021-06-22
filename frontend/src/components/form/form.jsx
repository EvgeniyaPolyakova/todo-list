import React, { useState } from "react";

const Form = ({ saveToDo }) => {
  const [value, setValue] = useState("");
 
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        saveToDo(value);
        setValue("");
      }}
    >
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        required
      />
      <button type="submit">Добавить</button>
    </form>
  );
};

export default Form;
