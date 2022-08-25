import * as React from 'react'
import './ImgCarousel.css'

function ImgCarousel({ imgs }) {
  return (
    <div className='carousel-container'>
      {
        imgs.forEach(img => {
          return (
            <div className='img-container fade'>
            </div>
          )
        })
      }

      <a className='prev' onClick={handleSlide(-1)}>#&10094</a>
      <a className='next' onClick={handleSlide(1)}>#&10095</a>

    </div>
  )
}

export default ImgCarousel