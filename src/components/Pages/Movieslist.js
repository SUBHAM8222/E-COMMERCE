
import Display from "./Display";
const Movieslist=(props)=>{
    console.log(props);

    return(
<ul>{props.movies.map((moviess)=>(
            <Display 
            title={moviess.title}
            releaseDate={moviess.release_date}
            openingdate={moviess.opening_crawl}/>

       ) )}</ul>
        
    )
};

export default Movieslist;