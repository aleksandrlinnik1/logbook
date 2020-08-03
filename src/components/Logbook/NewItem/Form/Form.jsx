import React from "react";
import s from "./Form.module.css";
import { useLogbook } from "../../../../state/logbook";

const Form = () => {
  const {
    validInput,
    validForm,
    name,
    setName,
    price,
    setPrice,
    mileage,
    setMileage,
    description,
    setDescription,
  } = useLogbook();

  return (
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
  );
};

export default Form;
