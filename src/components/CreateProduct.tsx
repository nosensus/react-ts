import React, { useState } from "react";
import { IProduct } from "../models";
import axios from "axios";
import { ErrorMessage } from "./ErrorMessage";

const productData: IProduct = {
  title: "",
  price: 13.5,
  description: "lorem ipsum set",
  image: "https://i.pravatar.cc",
  category: "electronic",
  rating: {
    rate: 10,
    count: 33,
  },
};

interface CreateProductProps {
  onCreate: (product: IProduct) => void; // добавили product: IProduct чтобы получить обратно добавленный продукт для отрисовки на UI
}

export function CreateProduct({ onCreate }: CreateProductProps) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

    if (value.trim().length === 0) {
      setError("Enter title");
      return;
    }

    productData.title = value;
    const response = await axios.post<IProduct>(
      "https://fakestoreapi.com/products",
      productData
    );

    onCreate(response.data); // передаем добавленный продукт
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <form action="" onSubmit={submitHandler}>
      <input
        type="text"
        className="border py-2"
        placeholder="Enter"
        value={value}
        onChange={changeHandler}
      />

      {error && <ErrorMessage errorMsg={error} />}

      <button className="px-4 border bg-yellow-300">Create</button>
    </form>
  );
}
