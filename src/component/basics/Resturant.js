import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard";
//import Navbar from "./Navbar";

// const uniqueList = [
//   ...new Set(
//     Menu.map((curElem) => {
//       return curElem.category;
//     })
//   ),
// ];

//console.log(uniqueList);

const Resturant = () => {
  const [menuData] = useState(Menu);
  //const [menuList] = useState(uniqueList);

  return (
    <>
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Resturant;