import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import config from './config.js'

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
            <div>
                <h1>
                 {this.state.movie.title}
                </h1>
            </div>
        )
    }
}


export default Movie;