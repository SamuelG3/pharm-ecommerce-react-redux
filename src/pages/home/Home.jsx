import React from "react";
import { Slider } from "../../components/hero/Slider";
import { Category } from "../../components/category/Category";
import { Order } from "../../components/hero/Order";
import Product from "../../components/product/Product";

export const Home = () => {
  return (
    <>
      <Slider />
      <Order />
      <Category />
      <Product />
    </>
  );
};
