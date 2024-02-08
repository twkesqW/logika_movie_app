import React, {useEffect, useState} from "react"
import "./movie.css"
import { useParams } from "react-router-dom"
const Movie = () => {
    const [currentMovieDetail, setMovie] = useState()
    const { id } = useParams()
    const [trailer, setTrailer] = useState()

    useEffect(() => {
        getTrailer()
        getData()     
        window.scrollTo(0,0)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getData = () => {
        fetch(`http://127.0.0.1:8000/movie/${id}`)
        .then(res => res.json())
        .then(data => {setMovie(data)
        console.log(data)
        })
    }

    const getTrailer = () =>{
        fetch(`http://127.0.0.1:8000/trailers/${id}`)
        .then(res => res.json())
        .then(data => {
        setTrailer(data)
        console.log(data)
        })
        .catch(err => console.log( err))
    }
    

    return (
        <div className="movie">
            <div className="movie__intro">
                <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} />
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} />
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">{currentMovieDetail ? currentMovieDetail.title : ""}</div>
                        <div className="movie__tagline">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
                        <div className="movie__rating">
                            {currentMovieDetail ? currentMovieDetail.vote_average: ""} <i class="fas fa-star" />
                            <span className="movie__voteCount">{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") голосів" : ""}</span>
                        </div>  
                        <div className="movie__runtime">{currentMovieDetail ? currentMovieDetail.runtime + " хвилин" : ""}</div>
                        <div className="movie__releaseDate">{currentMovieDetail ? "Дата виходу: " + currentMovieDetail.release_date : ""}</div>
                        <div className="movie__genres">
                            {
                                currentMovieDetail && currentMovieDetail.genres
                                ? 
                                currentMovieDetail.genres.map(genre => (
                                    <><span className="movie__genre" id={genre.id} key={genre.id}>{genre.name}</span></>
                                )) 
                                : 
                                ""
                            }
                        </div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Опис</div>
                        <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                    </div>
                    <hr color="white"/>
                </div>
                
            </div>

            <div className="movie_preview">
                <div className="movie__trailer">
                        <iframe width="1060" height="755" src={`https://www.youtube.com/embed/${trailer}`} title={currentMovieDetail ? currentMovieDetail.title : ""} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;" allowfullscreen></iframe>
                </div>
            </div>
            <div className="imdb_link">
                <a href={`https://www.imdb.com/title/${currentMovieDetail ? currentMovieDetail.imdb_id : ""}`}><img src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" alt="Imdb" className="logo"/></a>
            </div>
        </div>
    )
}

export default Movie