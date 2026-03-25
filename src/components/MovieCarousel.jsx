import { Swiper, SwiperSlide } from "swiper/react";
//Modulo de navegacion para habilitar flechas en el carrusel
import { Navigation } from "swiper/modules";
import "swiper/css"
import "swiper/css/navigation"

import MovieCard from "./MovieCard"

function MovieCarousel({ movies }) {
  return (
    <div className="movie-carousel-wrap">
      <Swiper
        className="movie-carousel-swiper"
        modules={[Navigation]}
        navigation
        slidesPerView={1}
        spaceBetween={0}
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={movie.id ?? movie.title ?? index}>
            <MovieCard
              title={movie.title}
              image={movie.image}
              variant="carousel"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default MovieCarousel