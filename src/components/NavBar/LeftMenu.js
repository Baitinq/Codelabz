import React from "react";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const LeftMenu = ({ mode }) => {
  return (
    <Menu mode={mode}>
      <Menu.Item key="home">
        <NavLink to="/dashboard">Home</NavLink>
      </Menu.Item>
      <SubMenu title={<span>Tutorials</span>}>
        <MenuItemGroup title="Item 1">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </MenuItemGroup>
        <MenuItemGroup title="Item 2">
          <Menu.Item key="setting:3">Option 3</Menu.Item>
          <Menu.Item key="setting:4">Option 4</Menu.Item>
        </MenuItemGroup>
      </SubMenu>
      <Menu.Item key="contact">
        <NavLink to="/dashboard">Contact Us</NavLink>
      </Menu.Item>
    </Menu>
  );
};

export default LeftMenu;
