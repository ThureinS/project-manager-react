import React from "react";

const Input = ({ label, isTextArea, ...props }) => {
  return (
    <div>
      <label>{label}</label>
      {isTextArea ? <textarea {...props} /> : <input {...props} />}
    </div>
  );
};

export default Input;
