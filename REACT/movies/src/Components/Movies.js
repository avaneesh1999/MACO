import React, { Component } from 'react'
import { movies } from './getMovies'

export default class Movies extends Component {
    render() {
        let movie = movies.results
        return (

            <>
                {

                    movie.length == 0 ?
                        <div class="spinner-border" role="status">
                            <span class="sr-only">Loading...</span>
                        </div> :
                        <div>
                            <h3 className='text-center'><strong>Trending</strong></h3>
                        <div className='movies-list'>

                        {
                    movie.map((movieObj) => (
                        <div className="card movies-card">
                            <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} style={{height:'40vh'}}/>
                            {/* <div className="card-body"> */}
                            <h1 className="card-title movies-title">{movieObj.original_title}</h1>
                            {/* <p classNmae="card-text movies-text">{movieObj.overview}</p> */}
                            <div className='button-wrapper'>

                            <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div> 

                    ))
                }
                       </div>
                       </div>


                }



            </>
        )
    }
}
