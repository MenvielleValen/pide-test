import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { RiShoppingBasketLine } from 'react-icons/ri'
import { Avatar } from '@material-ui/core'
import './Nav.scss'
import Logo from './../../Assets/img/headerLogo.png'

export default function Nav() {

    const [menu, setMenu] = useState(false)


    //Abre o cierra menu lateral
    const openMenu = () => {
        setMenu(!menu);
    }

    return (
        <div>
            <header className="header-container">
                <img src={Logo} alt="Pide - Más que un delivery" className="header-logo" />
                <div className="btn-open-menu" onClick={openMenu}>{menu ? <AiOutlineClose /> : <AiOutlineMenu />}</div>
                <div className="btn-shopping-card" ><RiShoppingBasketLine /></div>
                {
                    menu && //Menu lateral abierto
                    <nav className="nav-container">
                        <ul>
                            <li className="avatar-container"><Avatar className="avatar" alt="Remy Sharp" src="" /></li>
                            <a className="nav-link" href="#" >
                                <li>Cuenta</li>
                            </a>
                            <a className="nav-link" href="#">
                                <li>Favoritos</li>
                            </a>
                            <NavLink onClick={()=>{setMenu(false)}} exact className="nav-link" activeClassName="link-active" to="/">
                                <li>Comercios</li>
                            </NavLink>
                            <a className="nav-link" href="#">
                                <li>Salir</li>
                            </a>
                        </ul>
                    </nav>
                }
            </header>
        </div>
    )
}
