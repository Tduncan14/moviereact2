import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import config from './config.js';
import styled from 'styled-components';



const MovieWrapper = styled.div`
 display:flex;
 margin:auto auto !important;
 text-align:center;
 justify-content:center;




 .card{
     width:800px;
 }

 .card img{
     width:200px;
     height:200px;
     border-radius:50%;
 }

 span{
     font-weight:bold;
 }
`

class Movie extends Component{

      constructor(props){
          super(props)


       this.state={
           movie:{}
       }
      }



      async componentDidMount(){

         const movie = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.movieid}?api_key=${config.api_key}`);

         const movieJson = await movie.json()
       

         if(movieJson){

            this.setState({
                movie:movieJson
            })
         }
      }


      componentWillUnmount(){

        this.setState({
            movie:{}
        })
      }



    render(){
        
        const {movie} = this.state

        if(movie.title == false){

            return(
                <h1>..Loading</h1>
            )
        }

         console.log(this.props.match)
         console.log(this.state.movie,'movie area')
        return(
            <MovieWrapper>
                <div className="card">
                <h1>
                 {movie.title}
                </h1>
                  
                  <div className="card-content">
                      <img src={`http://image.tmdb.org/t/p/w300${movie.poster_path}`} alt="movie"/>

                      <p>
                        {movie.overview}
                      </p>

                      <p>
                      <span>Rating :</span>{movie.vote_average}/10
                      </p>
                        

                  </div>
                </div>
            </MovieWrapper>
        )
    }
}


export default Movie;