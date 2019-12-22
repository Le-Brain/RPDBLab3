import React from 'react';
import { Link } from "react-router-dom";


class Header extends React.Component{
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li><Link to='/'>К журналу проката</Link></li>
                        <li><Link to='/items'>К списку снаряжения</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;