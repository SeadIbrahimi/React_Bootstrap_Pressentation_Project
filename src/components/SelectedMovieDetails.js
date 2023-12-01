import '../assets/style/MoviesStyle.css'
import Button from 'react-bootstrap/Button';
import { useLocalStorage } from '@uidotdev/usehooks';
import noMovieImage from '../assets/img/noMovieImage.png'

function SelectedMovieDetails({id, title, overview, vote_average, release_date, popularity, original_language, backdrop_path}) {
  const movieImg = (backdrop_path == null) ? noMovieImage : 'https://image.tmdb.org/t/p/w500/' + backdrop_path
  
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage('isloggedin')

  const handleFavorites = (e) => {
    e.preventDefault()
    const favExists = isLoggedIn.favorites.filter(favorite => favorite.id == id)
    if (favExists.length > 0){
      alert(`You already have '${title}' in your favorites list!`)
    }else{
      isLoggedIn.favorites.push({id, title, backdrop_path})
      setIsLoggedIn(isLoggedIn)
    }
    
  }

  return (
    
    <>
    <div className='col-1'></div>
        <div className='col-4 d-flex flex-column justify-content-center align-items-end m-0'>
            <h2 className='text-uppercase align-self-center mb-5'>{title}</h2>
            
            <p className='text-secondary'>About the movie: <br/>{overview}</p>
            <div className='d-flex justify-content-between w-100'>
            <p className='text-secondary'>IMDB: {vote_average}</p>
            <p className='text-secondary'>Released: {release_date}</p>
            </div>
            <div className='d-flex justify-content-between w-100'>
            <p className='text-secondary'>Popularity: {popularity}</p>
            <p className='text-secondary'>Language: <span className='text-uppercase'>{original_language}</span></p>
            </div>
            <div className='d-flex justify-content-between w-100 mt-5'>
              <Button onClick={handleFavorites} variant="outline-secondary">Add to favourites</Button>
              <Button  variant="outline-secondary">Watch the movie</Button>
            </div>
        </div>
        <div className='col-7 d-flex justify-content-center align-items-center '>
            <img src={movieImg} className='MovieImg border-start border-end m-0 p-5'/>
        </div>
    </>
          
    
  )
}

export default SelectedMovieDetails