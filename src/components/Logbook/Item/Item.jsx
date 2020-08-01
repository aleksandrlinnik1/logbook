import React, { useState } from "react";
import s from "./Item.module.css";
import { useLogbook } from "../../../state/logbook";

const Item = ({ name, price, id, mileage, description }) => {
  const { deleteItem } = useLogbook();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className={s.job}>
        <div className={s.jobName}>{name}</div>
        <div className={s.jobPrice}>{price}</div>
        <div className={s.jobMileage}>{mileage}</div>
        <button className={s.close} onClick={() => deleteItem(id)} />
        <button className={s.btnDes} onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? "Скрыть" : "Подробнее"}
        </button>
      </div>
      {isOpen && <div className={s.description}>{description}</div>}
    </div>
  );
};
export default Item;
