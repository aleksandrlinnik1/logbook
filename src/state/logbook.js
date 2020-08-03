import React, { createContext, useContext, useEffect, useState } from "react";
import s from "../components/Logbook/NewItem/NewItem.module.css";

export const LogbookContext = createContext({});

export const useLogbook = () => useContext(LogbookContext);

const randId = () => Math.random().toString(36).substr(2, 9);

export const LogbookProvider = ({ children }) => {
  const [logbook, setLogbook] = useState([]);
  const [filter, setFilter] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [mileage, setMileage] = useState("");
  const [description, setDescription] = useState("");

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

  const keydownHandler = (e) => {
    setFilter(e.target.value.toLowerCase());
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

  const value = {
    logbook,
    deleteItem,
    sortPrice,
    filter,
    keydownHandler,
    addItem,
    validForm,
    validInput,
    sortName,
    name,
    setName,
    price,
    setPrice,
    mileage,
    setMileage,
    description,
    setDescription,
  };

  /*  useEffect(() => {
    fetch("https://api.jsonbin.io/b/5f256e3a6f8e4e3faf285d34")
      .then((r) => r.json())
      .then(({ data }) => setLogbook(data));
  }, []);*/

  useEffect(() => {
    const book = localStorage.getItem("logbook") || [];
    setLogbook(() => JSON.parse(book));
  }, []);
  useEffect(() => {
    localStorage.setItem("logbook", JSON.stringify(logbook));
  }, [logbook]);

  return (
    <LogbookContext.Provider value={value}>{children}</LogbookContext.Provider>
  );
};
