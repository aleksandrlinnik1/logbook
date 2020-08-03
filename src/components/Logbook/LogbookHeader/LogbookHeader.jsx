import React from "react";
import s from "./LogbookHeader.module.css";
import { NavLink } from "react-router-dom";
import { useLogbook } from "../../../state/logbook";
import { JobParam } from "./JobParam/JobParam";

export const LogbookHeader = () => {
  const { logbook, sortName, sortPrice, keydownHandler } = useLogbook();

  return (
    <div>
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
      <JobParam />
    </div>
  );
};
