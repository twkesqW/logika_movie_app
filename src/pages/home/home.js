import React, { useEffect, useState } from "react"
import "./home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import {MdOutlineSearch } from "react-icons/md"
import Cards from "../../components/card/card"
const Home = () => {

    const [ popularMovies, setPopularMovies ] = useState([])
    const [trendingMovies,setTrendingMovies] = useState([])
    const [search,setSearch] = useState()
    useEffect(() => {
        fetch("https://movie-server-twk.netlify.app/movies/popular/1")
        .then(res => res.json())
        .then(data => setPopularMovies(data.results))

        fetch("http://127.0.0.1:8000/trending")
        .then(res => res.json())
        .then(data => setTrendingMovies(data))
    }, [])

    return (
        <>
            <div className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        popularMovies.map(movie => (
                            <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} >
                                <div className="posterImage">
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="Film"/>
                                </div>
                                <div className="posterImage__overlay">
                                    <div className="posterImage__title">{movie ? movie.title: ""}</div>
                                    <div className="posterImage__runtime">
                                        {movie ? movie.release_date : ""}
                                        <span className="posterImage__rating">
                                            {movie ? movie.vote_average : ""}
                                            <i className="fas fa-star" />{" "}
                                        </span>
                                    </div>
                                    <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>
                <div className="best_films">
                    <h1>Шукай улюблені фільми тут!</h1>
                    <h2>Найбільша фільмова база, де є любі фільми на любий смак!</h2>

                    <div className="home_input">
                        <input className="home_search" placeholder="Пошук" value={search} onChange={(e) => setSearch(e.target.value)}></input>
                        <Link to={`/search_movie/${search}`}><MdOutlineSearch size={40} color="white" className="searchIcon"/></Link>
                    </div>
                </div>
                <div className="top_films">
                    <h1>Тренди дня</h1>
                    <div className="trend_list">
                        {
                        trendingMovies.map(movie => (
                            <Cards movie={movie} />
                        ))
                        }
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home