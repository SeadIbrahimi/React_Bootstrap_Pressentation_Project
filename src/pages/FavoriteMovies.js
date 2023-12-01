

import SideMenu from '../components/SideMenu';
import '../assets/style/favoritesStyle.css';
import { useLocalStorage } from '@uidotdev/usehooks';
import FavoritesCard from '../components/favoritesCard';

function FavoriteMovies() {
  const [isLoggedIn, setisLoggedIn] = useLocalStorage('isloggedin')
 
  const favorites =isLoggedIn.favorites
  return (
    <div style={{height: '100vh'}} className='d-flex w-auto bg-dark text-light'>
      <div className='bg-black h-100'>
        <SideMenu/>
      </div>
      <div className='row m-5 text-center overflow-scroll w-100 overflow-x-hidden Slide border-top border-bottom' >
      
            
              {
                favorites.length > 0 ? (
                  favorites.map((favorite, i) => (
                    <div key={i} className='col-2 mb-1 p-5'>
                      <FavoritesCard {...favorite}/>
                    </div>
                  ))
                ) : (
                  <div>
                    <h1 className='text-secondary text-align-center'>Favorite list is empty...</h1>
                  </div>
                )
              }

      </div>
    </div>
  )
}

export default FavoriteMovies