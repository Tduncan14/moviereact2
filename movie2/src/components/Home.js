import React,{Component} from 'react';
import config from './config.js';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const StyleMovie = styled.div`
 display:flex;
 min-height:500px;
 width:auto;
 margin-right:10px auto;
 text-align:center;


 img {
     height:300px;
     width:auto;
     display:block;
     margin-bottom:4px;
     margin-left:auto;
     margin-right:auto;
 }
 
 @media (max-width:800px){
     display:flex;
     flex-direction:column;
 }`;

 const Movie = styled.div `
    
 
 
 `

class Home extends Component{

    constructor(props){
        super(props)


        this.state = {
            movieData:[]
        }
    }


 async componentDidMount(){


    const movieData = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${config.api_key}`);


    const movieJson =  await movieData.json()


    if(movieJson){


        this.setState({
            movieData:movieJson.results
        }
        )
    }


   
 }


    render(){
        console.log(`this is the state`,this.state.movieData)
        const {movieData} = this.state

        const imageUrl = "http://image.tmdb.org/t/p/w300"

        const displayData = this.state.movieData.map((movie,key) => {

          return  (<Movie  className="col s3 card"key={key}>
           
        <div className="card-content">
            <Link to={`/movie/${movie.id}`}>
            <img src={`${imageUrl}${movie.poster_path}`} />
            </Link>
            </div>
            </Movie>)
        })
    
      return(
        <StyleMovie>
          <div className="row">
              {displayData}
          </div>
          </StyleMovie>
      )
    }
}


export default Home