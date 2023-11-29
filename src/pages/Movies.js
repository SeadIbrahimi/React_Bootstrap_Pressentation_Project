import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import SideMenu from '../components/SideMenu';
import axios from 'axios';
import '../assets/style/MoviesStyle.css'
import SelectedMovieDetails from '../components/SelectedMovieDetails';


function Movies() {
  const [movieId, setMovieId] = useState('670292')
  const handleCardClick = (e) => {
    e.preventDefault()
    setMovieId(e.target.getAttribute('index'))
  }

  
  const [movies, setMovies] = useState([])

  const apiKey = '3e52e2f5350ae60de5e2fc58e818d2a0'
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`)
    .then(response => setMovies(response.data.results))
  }, [])
  const scroller = document.querySelector('#scroller')
  const leftArrow = document.querySelector('.arrowCardLeft')
  const rightArrow = document.querySelector('.arrowCardRight')
  const scrollLeftHendler = () =>{
    
    const maxValueScroller = scroller.scrollWidth - scroller.clientWidth
    scroller.scrollLeft -= 700;
    if (scroller.scrollLeft <= 700){
      leftArrow.classList.add('not-active')
    }else if (scroller.scrollLeft <= maxValueScroller){
      rightArrow.classList.remove('not-active')
    }else{
      rightArrow.classList.remove('not-active')
    }
  }
  
  const scrollRightHendler = () =>{
    
    const maxValueScroller = scroller.scrollWidth - scroller.clientWidth - 700
    scroller.scrollLeft += 700;
    if (scroller.scrollLeft >= maxValueScroller){
      rightArrow.classList.add('not-active')
    }else if (scroller.scrollLeft >= 0){
      leftArrow.classList.remove('not-active')
    }else{
      leftArrow.classList.add('not-active')
    }
  }

  
  
  return (
    <div style={{height: '100vh'}} className='d-flex w-auto bg-dark text-light'>
      <div className='bg-black h-100'>
        <SideMenu/>
      </div>
      
      <div className='h-100 bg-dark' style={{display: 'grid', gap: '10px', gridTemplateRows: '2.1fr 1.4fr' }}>
        <div className='w-100 row m-0'>
          {
            movies.filter(movie => movie.id == movieId).map((selectedMovie) => (
              <SelectedMovieDetails {...selectedMovie}/>
            ))
          }
        </div>
        
        <div className='movieContainer m-0 overflow-hidden position-relative d-flex align-items-center bg-black' >
            <div id='scroller' style={{height: '65%'}} className='pt-3 row overflow-y-hidden overflow-x-scroll flex-nowrap'>
              {
                movies.map((movie, index) => (

                  <div onClick={handleCardClick} key={movie.id} index={movie.id} className='m-0 border-0 col-2 text-center'>
                    <MovieCard {...movie}/>
                    
                  </div>
                ))
              }
              
              <div onClick={scrollLeftHendler} className='arrowCardLeft position-absolute d-flex left-0 top-0 justify-content-start not-active'>
                  <i className="bi bi-arrow-left-circle fa-10x"></i>
              </div>
              <div onClick={scrollRightHendler} className='arrowCardRight position-absolute d-flex justify-content-end '>
                  <i className="bi bi-arrow-right-circle"></i>
              </div>
              
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Movies