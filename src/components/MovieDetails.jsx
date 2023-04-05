import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Spinner from 'react-bootstrap/Spinner';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AddComment from "./AddComment";

const MovieDetails = () => {
    const params = useParams();

    const [film, setFilm] = useState([])
    const [loading, setLoading] = useState(true)
    const [comments, setComments] = useState([])
    const [counter, setCounter] = useState(0)

    console.log(params.idFilm);


    const getSingleMovie = () => {
        return (
            fetch(`https://www.omdbapi.com/?&apikey=59562621&i=${params.idFilm}`)
                .then(response => {
                    if (response.ok) {
                        return (response.json())

                    } else {
                        console.log('ERROR during Fetch')
                    }
                })
                .then(dati => {
                    // console.log(Dati.Search)
                    setFilm(dati)
                    setLoading(false)
                })
                .catch(err => (console.log(err)))

        )
    }

    const getSingleMovieComments = () => {
        return (
            fetch(`https://striveschool-api.herokuapp.com/api/comments/${params.idFilm}`, {

                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MzBkZGY4MWI0MjAwMTM5YjI3ZTciLCJpYXQiOjE2ODA1MjQ5NjMsImV4cCI6MTY4MTczNDU2M30.H1RTrJ1fRu495y_VYqsAHm2xWipWLTP6ZSl-UrPpoH0"
                }
            })
                .then(response => {
                    if (response.ok) {
                        return (response.json())

                    } else {
                        console.log('ERROR during Fetch')
                    }
                })
                .then(dati => {
                    //console.log(Dati.Search)
                    setComments(dati)
                    setLoading(false)
                })
                .catch(err => (console.log(err)))

        )
    }

    useEffect(() => {
        getSingleMovie()
        getSingleMovieComments()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.idFilm])

    useEffect(() => {
        getSingleMovieComments()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [counter])

    console.log(film)
    console.log(comments)




    return (
        <>
            {loading && (<><Spinner animation="grow" /> <h4 className='text-danger'>Your film is loading....</h4></>)}
            <Row className="justify-content-center">
                <Col xs={12} md={6}>
                    <h3>{film.Title}</h3>
                    <img src={film.Poster} alt='{film.Title}' />
                    <p>Relesed: {film.Released} <br />
                        Genere: {film.Genre} <br />
                        Actors: {film.Actors}<br />
                        Duration: {film.Runtime}
                    </p>
                </Col>
                <Col xs={12} md={6}>
                    <Row className="row-cols-2">
                        <Col>

                            {
                                comments.length === 0 && !loading && (<div>Non ci sono commenti</div>)
                            }
                            {comments.length > 0 && (
                                <>
                                    <p>Comments on {film.Title}: </p>
                                    {
                                        comments.map(comment => {
                                            return (
                                                <div key={comment._id}>
                                                    {comment.comment} - {comment.rate} ⭐️
                                                </div>
                                            )

                                        })
                                    }

                                    

                                </>

                            )


                            }


                        </Col>
                        <Col>
                            <AddComment counter={counter} incremento={setCounter} idFilm={film.imdbID} />
                        </Col>
                    </Row>
                </Col>
            </Row>

        </>

    )
}

export default MovieDetails