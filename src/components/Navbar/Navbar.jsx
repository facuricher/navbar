import React from 'react'
import { IconLogo, Menu, MenuItem, MenuItemLink, NavbarContainer, NavbarWrapper } from './navbar.element';
import { AiFillLike } from "react-icons/ai";

const Navbar = () => {
    return (
        <>
            <NavbarContainer>
                <NavbarWrapper>
                    <IconLogo>
                    <AiFillLike size={'2em'}/>
                        reactjs
                    </IconLogo>

                    <Menu>
                        <MenuItem>
                            <MenuItemLink>HOME</MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink>CHECK IN</MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink>ABOUT US</MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink>CONTACT</MenuItemLink>
                        </MenuItem>
                    </Menu>
                </NavbarWrapper>
            </NavbarContainer>
        </>
    )
}

export default Navbar;

