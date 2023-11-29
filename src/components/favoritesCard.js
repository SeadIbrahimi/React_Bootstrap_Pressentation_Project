

import Card from 'react-bootstrap/Card'

function FavoritesCard(id, title, backdrop_path) {
  
  console.log(id, title, backdrop_path)
  const movieImg = (backdrop_path == null) ? '../../assets/img/NoImage.png' : 'https://image.tmdb.org/t/p/w500/' + backdrop_path
 
  
  return (
    <Card  className='d-flex flex-column m-0 justify-items-center align-items-center cardHover bg-black text-light' style={{ width: '16rem' }}>
      <Card.Img  variant="top" src={movieImg} className='h-75'/>
      <Card.Body  className='w-100'>
        <Card.Title  className='text-uppercase text-nowrap text-truncate '>{title}</Card.Title>
      </Card.Body>
    </Card>
  )
}

export default FavoritesCard