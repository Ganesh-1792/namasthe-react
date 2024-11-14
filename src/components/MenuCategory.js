import React from "react";
import MenuItem from "./MenuItem";

const MenuCategory = (prop) => {
    const { menuList } = prop;
  return (
    <div key={menuList?.card?.card?.title}>
      <div className="menu-category-container">
        <h2>{menuList?.card?.card?.title}</h2>
        {menuList?.card?.card?.itemCards?.map((item) => {
          return <MenuItem key={item.card.info.id} resData={item.card.info} />;
        })}
      </div>
    </div>
  );
};

export default MenuCategory;
