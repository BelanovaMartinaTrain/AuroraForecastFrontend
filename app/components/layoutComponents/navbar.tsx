"use client";

import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = ["Dashboard", "Graphs", "Weather", "Blog"];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} position="static">
            <NavbarContent>
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden" />
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color={index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"}
                            className="w-full"
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
