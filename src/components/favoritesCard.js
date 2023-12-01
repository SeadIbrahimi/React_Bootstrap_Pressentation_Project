
import Card from 'react-bootstrap/Card'
import noMovieImage from '../assets/img/noMovieImage.png'
import CloseButton from 'react-bootstrap/CloseButton';
import { useLocalStorage } from '@uidotdev/usehooks';

function FavoritesCard({id, title, backdrop_path}) {
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage('isloggedin')
  
  const handleClick = () => {
    const leftFavorites = isLoggedIn.favorites.filter(favorite => favorite.id !== id);

    const user = {
      id: isLoggedIn.id,
      fullname: isLoggedIn.fullname,
      email: isLoggedIn.email,
      password: isLoggedIn.password,
      favorites: [...leftFavorites],
    }
    setIsLoggedIn(user)
  }

  const movieImg = (backdrop_path == null) ? noMovieImage : 'https://image.tmdb.org/t/p/w500/' + backdrop_path
 
  
  return (
    <Card  className='d-flex flex-column m-0 justify-items-center align-items-center cardHover bg-black text-light' style={{ width: '16rem' }}>
      <Card.Img  variant="top" src={movieImg} className='h-75'/>
      <Card.Body  className='w-100'>
        <Card.Title  className='text-uppercase text-nowrap text-truncate '>{title}</Card.Title>
      </Card.Body>
      <CloseButton data-index={id} onClick={handleClick}></CloseButton>
    </Card>
    
  )
}

export default FavoritesCard