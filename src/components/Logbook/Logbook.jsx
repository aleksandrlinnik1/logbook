import React from "react";
import s from "./Logbook.module.css";
import Item from "./Item/Item";
import { useLogbook } from "../../state/logbook";
import { LogbookHeader } from "./LogbookHeader/LogbookHeader";

export const Logbook = () => {
  const { logbook, filter } = useLogbook();

  return (
    <div className="container">
      <div className={s.logbook}>
        <LogbookHeader />
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
