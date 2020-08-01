import React, { createContext, useContext, useEffect, useState } from "react";

export const LogbookContext = createContext({});

export const useLogbook = () => useContext(LogbookContext);

const randId = () => Math.random().toString(36).substr(2, 9);

export const LogbookProvider = ({ children }) => {
  const [logbook, setLogbook] = useState([]);

  const deleteItem = (id) => {
    setLogbook((prev) => prev.filter((e) => e.id !== id));
  };
  const sortName = () => {
    setLogbook((prev) => {
      return [...prev].sort((a, b) => (a.name > b.name ? 1 : -1));
    });
  };
  const sortPrice = () => {
    setLogbook((prev) => {
      return [...prev].sort((a, b) => (a.price > b.price ? 1 : -1));
    });
  };

  const addItem = (name, price, mileage, description) => {
    setLogbook((prev) => [
      {
        id: randId(),
        name,
        price,
        mileage,
        description,
      },
      ...prev,
    ]);
  };

  const value = {
    logbook,
    deleteItem,
    sortPrice,
    addItem,
    sortName,
  };

  useEffect(() => {
    fetch("https://api.jsonbin.io/b/5f256e3a6f8e4e3faf285d34")
      .then((r) => r.json())
      .then(({ data }) => setLogbook(data));
  }, []);

  return (
    <LogbookContext.Provider value={value}>{children}</LogbookContext.Provider>
  );
};
