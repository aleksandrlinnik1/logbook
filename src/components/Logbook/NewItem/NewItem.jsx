import React from "react";
import s from "./NewItem.module.css";
import Form from "./Form/Form";

const NewItem = () => {
  return (
    <div className="container">
      <div className={s.addJob}>
        <h2 className={s.title}>Новая запись : </h2>
        <Form />
      </div>
    </div>
  );
};

export default NewItem;
