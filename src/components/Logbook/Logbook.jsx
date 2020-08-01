import React, { useState } from "react";
import s from "./Logbook.module.css";
import Item from "./Item/Item";
import { useLogbook } from "../../state/logbook";
import { NavLink } from "react-router-dom";

export const Logbook = () => {
  const { logbook, sortName, sortPrice } = useLogbook();
  const [filter, setFilter] = useState("");
  const keydownHandler = (e) => {
    setFilter(e.target.value.toLowerCase());
  };

  return (
    <div className="container">
      <div className={s.logbook}>
        <div className={s.logbookHeader}>
          <div className={s.divAdd}>
            <NavLink className={s.addBtn} to="/new-job">
              Написать в бортжурнал
            </NavLink>
          </div>
          <input
            className={s.search}
            placeholder={"Поиск"}
            type="text"
            onInput={keydownHandler}
          />
          <p className={s.count}>Записей в журнале: {logbook.length} </p>
          <div className={s.sort}>
            <p>Отсортировать:</p>
            <button className={s.sortBtn} onClick={() => sortName()}>
              По названию <i className={s.arrowDown}></i>
            </button>
            <button className={s.sortBtn} onClick={() => sortPrice()}>
              По стоимости <i className={s.arrowDown}></i>
            </button>
          </div>
        </div>
        <div className={s.jobParam}>
          <div className={s.jobParamName}>Название</div>
          <div className={s.jobParamItem}>Стоимость (BYN)</div>
          <div className={s.jobParamItem}>Пробег (км)</div>
        </div>
        {logbook
          .filter((item) => item.name.search(filter) >= 0)
          .map(({ id, name, price, mileage, description }) => (
            <Item
              key={id}
              id={id}
              name={name}
              price={price}
              mileage={mileage}
              description={description}
            />
          ))}
      </div>
    </div>
  );
};
