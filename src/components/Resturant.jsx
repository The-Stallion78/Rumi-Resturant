import React, { useState } from 'react';
import './Style.css';
import Menu from './MenuAPI';
import MenuCard from './MenuCard';
import NavBar from './NavBar';

// Create a unique list of categories including "All"
const uniqueList = [...new Set(Menu.map(currElement => currElement.category)), "All"];

export default function Resturant() {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  // Filter items based on category
  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
    } else {
      const updatedList = Menu.filter(currElement => currElement.category === category);
      setMenuData(updatedList);
    }
  };

  return (
    <>
      <NavBar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
}
