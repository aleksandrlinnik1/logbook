import React, { useState } from "react";
import s from "./NewItem.module.css";
import { useLogbook } from "../../../state/logbook";

const NewItem = () => {
  const { addItem } = useLogbook();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [mileage, setMileage] = useState("");
  const [description, setDescription] = useState("");

  const validForm = (e) => {
    e.preventDefault();
    [].forEach.call(e.target.elements, (item) => {
      if (!item.value) {
        item.className = `${s.errorInput}`;
      }
    });
    if (name.trim() && price && mileage && description.trim()) {
      addItem(name, price, mileage, description);
      setName("");
      setPrice("");
      setMileage("");
      setDescription("");
      window.location.hash = "/bmw-e46";
    }
  };
  const validInput = (e) => {
    if (e.target.value.trim().length < 1) {
      e.target.className = `${s.errorInput}`;
    } else {
      e.target.className = `${s.validInput}`;
    }
  };

  return (
    <div className="container">
      <div className={s.addJob}>
        <h2 className={s.title}>Новая запись : </h2>
        <form onSubmit={validForm} className={s.formAddJob}>
          <div>
            <label>
              <p>Название:*</p>
              <input
                className={s.inputName}
                type={"text"}
                placeholder="Введите данные"
                value={name}
                onInput={validInput}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </label>
          </div>
          <div>
            <label>
              <p>Стоимость:*</p>
              <input
                type={"number"}
                min="0"
                placeholder="Введите данные"
                value={price}
                onInput={validInput}
                onChange={(e) => setPrice(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              <p>Пробег:*</p>
              <input
                type={"number"}
                min="0"
                placeholder="Введите данные"
                value={mileage}
                onInput={validInput}
                onChange={(e) => setMileage(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              <p>Описание:*</p>
              <textarea
                type={"text"}
                placeholder="Введите данные"
                value={description}
                onInput={validInput}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
          </div>
          <button type={"submit"}>Добавить запись</button>
        </form>
      </div>
    </div>
  );
};

export default NewItem;
