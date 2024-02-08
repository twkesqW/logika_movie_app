import React, {useEffect, useState} from "react"
import "./movieList.css"
import { useParams } from "react-router-dom"
import Cards from "../card/card"

const SearchMovieList = () => {
    
    const [movieList, setMovieList] = useState([])
    const {title} = useParams()

    useEffect(() => {
        getData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [title])

    const getData = () => {
        fetch(`http://127.0.0.1:8000/search/${title}`)
        .then(res => res.json())
        .then(data => {setMovieList(data.results)
        })
    }

    return (
        <div className="movie__list">
            <h1 className="list__title">Пошук за запитом: {title}</h1>
            <div className="list__cards">
                {
                    movieList.length ? 
                    movieList.map(movie => (
                        <Cards movie={movie} key={movie.id}/>
                    )) : <h1 className="not_found">Нічого не знайдено😥</h1>
                }
            </div>
        </div>
    )
}




export default SearchMovieList