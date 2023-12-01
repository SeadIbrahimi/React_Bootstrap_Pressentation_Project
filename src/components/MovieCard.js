
import '../assets/style/MovieCardStyle.css'
import Card from 'react-bootstrap/Card'
import noMovieImage from '../assets/img/noMovieImage.png'


function MovieCard({id, title, backdrop_path}) {
  const movieImg = (backdrop_path == null) ? noMovieImage : 'https://image.tmdb.org/t/p/w500/' + backdrop_path
 
  
  return (
    
    <Card index={id} className='h-100 d-flex flex-column m-0 justify-items-center align-items-center cardHover bg-black text-light' style={{ width: '16rem' }}>
      <Card.Img index={id} variant="top" src={movieImg} className='h-75'/>
      <Card.Body index={id} className='w-100'>
        <Card.Title index={id} className='text-uppercase text-nowrap text-truncate '>{title}</Card.Title>
      </Card.Body>
    </Card>
          
    
  )
}

export default MovieCard