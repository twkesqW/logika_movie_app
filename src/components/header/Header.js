import React, { useState } from "react"
import "./Header.css"
import { Link } from "react-router-dom"
import {MdOutlineSearch } from "react-icons/md"
import {FaTimes,FaBars} from "react-icons/fa";
const Header = () => {
    const [search,setSearch] = useState()
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/" className="mainTitle">Укр Кіно.</Link>
            </div>
            <div className={click ? "headerRight active" : "headerRight"}>
                    <Link to="/movies/popular" className="navBtn" onClick={handleClick}><span>Популярні</span></Link>
                    <Link to="/movies/top_rated"  className="navBtn" onClick={handleClick}><span>Топ рейтинг</span></Link>
                    <Link to="/movies/upcoming" className="navBtn" onClick={handleClick}><span>Нещодавні</span></Link>
                    <div className="search_input">
                        <input className="search" placeholder="Пошук" value={search} onChange={(e) => setSearch(e.target.value)}></input>
                        <Link to={`/search_movie/${search}`}><MdOutlineSearch size={40} color="white" className="searchIcon"/></Link>
                    </div>
                </div>

                <div className="hamburger" onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{color: "#fff"}}/>) : (<FaBars size={20} style={{color: "#fff"}}/>)}
        
        
            </div>
        </div>
    )
}

export default Header