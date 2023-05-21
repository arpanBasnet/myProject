import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard";
//import Navbar from "./Navbar";
//import { useHistory } from 'react-router-dom';


const Resturant = () => {
  const [menuData,setMenuData] = useState(Menu);
  //const [menuList] = useState(uniqueList);

  const filteritem =(category) => {
    if (category==="all"){
      setMenuData(Menu)
    }else{
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList);
  };
}


  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          <button
            className="btn-group_item"
            onClick={() => filteritem("breakfast")}>breakfast
          </button>
          <button
            className="btn-group_item"
            onClick={() => filteritem("lunch")}>lunch
          </button>
          <button
            className="btn-group_item"
            onClick={() => filteritem("evening")}>evening
          </button>
          <button
            className="btn-group_item"
            onClick={() => filteritem("dinner")}>dinner
          </button>
          <button
            className="btn-group_item"
            onClick={() => filteritem("all")}>All
          </button>
        </div>
      </nav>
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Resturant;