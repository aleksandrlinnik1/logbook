import React from "react";
import s from "./JobParam.module.css";

export const JobParam = () => {
  return (
    <div className={s.jobParam}>
      <div className={s.jobParamName}>Название</div>
      <div className={s.jobParamItem}>Стоимость (BYN)</div>
      <div className={s.jobParamItem}>Пробег (км)</div>
    </div>
  );
};
