import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@heroui/react";
import {AcmeLogo} from "./ui/AcmeLogo";

export default function App() {
  return (
    <Navbar
      className="bg-primary text-secondary border-b border-seven"
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-four",
        ],
      }}
    >
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-four">nee</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link className="text-five hover:text-four transition-colors" href="#">
            About
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link className="text-four font-semibold" href="#" aria-current="page">
            Reach me
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-five hover:text-four transition-colors" href="#">
            works
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        
        <NavbarItem>
         
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
