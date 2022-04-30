import React from "react";

export const Button = ({ label, type, onClick }) => {
  return (
    <button type={type ? type : "button"} onClick={onClick}>
      {{ label }}
    </button>
  );
};
