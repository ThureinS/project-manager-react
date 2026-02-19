import React from "react";
import Input from "./Input";

const NewProject = () => {
  return (
    <div>
      <menu>
        <li>
          <button>Cancel</button>
        </li>
        <li>
          <button>Save</button>
        </li>
      </menu>
      <Input label="Title" />
      <Input label="Description" isTextArea />
      <Input label="Due Date" />
    </div>
  );
};

export default NewProject;
