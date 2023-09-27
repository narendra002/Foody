import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { AcmeLogo } from "../assets/AcmeLogo";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation(); // Get the current location
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const menuItems = [];

  if (!isAuthenticated) {
    menuItems.push(
      { name: "Login", path: "/login" },
      { name: "Sign Up", path: "/signup" }
    );
  } else {
    menuItems.push(
      { name: "Search", path: "/search", icon: " https://img.icons8.com/ios-glyphs/30/search--v1.png" },
      { name: "Add", path: "/add_restaurent", icon: "https://img.icons8.com/ios/50/tableware.png" },
      { name: "Help", path: "/help", icon: "https://img.icons8.com/ios/50/help--v1.png" },
      { name: "Cart", path: "/cart", icon: "https://img.icons8.com/ios/50/shopping-cart--v1.png" }
    );
  }

  const renderButtonOrLink = (menu) => {
    const isActive = location.pathname === menu.path;

    if (!isAuthenticated) {
      return (
        <Link
          to={menu.path}
          className={`btn btn-warning btn-flat ${
            isActive ? "font-bold" : ""
          }`}
        >
          {menu.name}
        </Link>
      );
    } else {
      return (
        <Link
          to={menu.path}
          className={`text-foreground text-base font-medium flex items-center ${
            isActive ? "font-extrabold color-blue-600 text-lg" : ""
          }`}
        >
          <img
            src={menu.icon}
            alt={menu.name}
            className="w-6 h-6 mr-2"
          />{" "}
          {/* Add margin to create space */}
          {menu.name}
        </Link>
      );
    }
  };

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <Link to={"/"}>
            <AcmeLogo />
          </Link>
          <Link to={"/"}>
            <p className="font-bold text-inherit">ACME</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="sm:hidden hidden" justify="end">
        {menuItems.map((menu) => (
          <NavbarItem
            key={menu.path}
            className={location.pathname === menu.path ? "text-primary" : ""}
          >
            {renderButtonOrLink(menu)}
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent className="hidden sm:flex " justify="end">
        {menuItems.map((menu) => (
          <NavbarItem key={menu.path}>{renderButtonOrLink(menu)}</NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem  className="mt-2 cursor-pointer" key={item.path}>
            {renderButtonOrLink(item)}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
