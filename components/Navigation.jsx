import Link from "next/link";
import { useState } from 'react'

export default function Navigation({ username, onLogout }) {    
    const [isActive, setIsActive] = useState(false)

    return (
        <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <span className="navbar-item is-size-5">Exam Dumps</span>
                <a 
                    role="button" 
                    className="navbar-burger" 
                    aria-label="menu" 
                    aria-expanded="false" 
                    data-target="navbarMenu"
                    onClick={() => setIsActive(!isActive)}
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarMenu" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
                <div className="navbar-start">
                    <Link href="/" className="navbar-item">
                        Home
                    </Link>
                </div>
               
                <div className="navbar-end">
                    <div className="navbar-item">
                        <span>{username}</span>
                    </div>
                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button is-primary" onClick={() => onLogout()}>
                                <strong>Logout</strong>
                            </a>    
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}