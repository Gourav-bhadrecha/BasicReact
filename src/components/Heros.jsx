import React from 'react'

const Heros = () => {
  return (<>
            <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://media.istockphoto.com/id/1500563478/photo/traveler-asian-woman-relax-and-travel-on-thai-longtail-boat-in-ratchaprapha-dam-at-khao-sok.webp?b=1&s=170667a&w=0&k=20&c=PL6F9_KtlUx4E6pl9ryJxR3kLSv-l6aiHAi1DLw84vk=" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="https://t3.ftcdn.net/jpg/02/45/68/40/360_F_245684006_e55tOria5okQtKmiLLbY30NgEHTIB0Og.jpg" className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="https://media.istockphoto.com/id/1344771294/photo/happy-family-in-masks-enjoying-travel-together.jpg?s=612x612&w=0&k=20&c=JMGLBlMM4TyAQ1CAgDJx9igoSucyehARKkvN2rZpec0=" className="d-block w-100" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
              </div>
    </>
  )
}

export default Heros