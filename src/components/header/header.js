import React from 'react'
import {Link} from 'react-router-dom'
import  './header.scss';
export default function Header() {
    return (
        <div className="header">
            <Link to="/">
                <div className="logo"></div>
            </Link>
        </div>
    )
}

