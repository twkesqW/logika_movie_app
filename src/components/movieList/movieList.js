import React, {useEffect, useState} from "react"
import "./movieList.css"
import { useParams } from "react-router-dom"
import Cards from "../card/card"
import {FaArrowRight,FaArrowLeft} from 'react-icons/fa6'
import "classnames"
import classNames from "classnames"
const MovieList = () => {
    
    const [movieList, setMovieList] = useState([])
    const [page,setPage] = useState(1)
    const {type} = useParams()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        setMovieList([])
        getData()
    }, [type])

    const getData = () => {
        fetch(`http://127.0.0.1:8000/movies/${type}/${page}`)
        .then(res => res.json())
        .then(data => {setMovieList(data.results)
        })
    }

    const increasePage = () =>{
        setMovieList([])
        setPage(page+1)
        getData()
        window.scrollTo(0,0)
    }
    const decreasePage = () =>{
        setMovieList([])
        setPage(page-1)
        getData()
        window.scrollTo(0,0)
    }
 
    return (
        <div className="movie__list">
            <div>{type === "popular" ? <ListTitle name={"Популярні"} desc={"Улюбленці публіки"}/> : type === "top_rated" ? <ListTitle name={"Топ Фільми"} desc={"Насичені славою!"}/> : type === "upcoming" ? <ListTitle name={"Недавно вийшли"} desc={"Встигни подивитись найпершим"}/> : ""}</div>
            <div className="list__cards">
                
                {
                    movieList.map(movie => (
                        <Cards movie={movie} />
                    ))
                }
            </div>
            <div className="nav_btns">
                <FaArrowLeft size={30} onClick={decreasePage} className={classNames({
                    "hide":page === 1
                })}/>
                <h2 className="page_text">{page} сторінка</h2>
                <FaArrowRight size={30} onClick={increasePage}/>
            </div>
        </div>
    )
}





const ListTitle = ({name,desc}) =>{
    return(
        <div className="list__title_cont">
            <h1 className="list__title">{name}</h1>
            <h2 className="beauty__subtitle">"{desc}"</h2>
        </div>
    )
}

export default MovieList