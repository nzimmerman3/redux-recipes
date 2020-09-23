import React from "react";

export default function Recipe({ id, text }) {
  return (
    <div className="recipe">
      <li>{text}</li>
    </div>
  );
}
