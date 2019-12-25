import React from 'react';
import { Link } from "react-router-dom";


class Header extends React.Component{
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li><Link to='/'>Список оборудований</Link></li>
                        <li><Link to='/ipmac'>Список IP и MAC адресов</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;