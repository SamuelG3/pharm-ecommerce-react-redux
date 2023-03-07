import React from "react";
import { Slider } from "../../components/hero/Slider";
import { Category } from "../../components/category/Category";
import { Order } from "../../components/hero/Order";

export const Home = () => {
  return (
    <>
      <Slider />
      <Order />
      <Category />
    </>
  );
};
