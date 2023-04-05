import { useNavigate } from "react-router-dom"

const SingleFilm=(props)=>{
    const navigate =useNavigate()
    return(
        <img src={props.singleFilm.Poster} alt='film cover' onClick={()=>{
            navigate('/movieDetails/'+props.singleFilm.imdbID)
        }}/>
    )
}

export default SingleFilm