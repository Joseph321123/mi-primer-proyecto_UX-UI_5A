import { Swiper, SwiperSlide } from "swiper/react";
//Modulo de navegacion para habilitar flechas en el carrusel
import { Navigation } from "swiper/modules";
import "swiper/css"
import "swiper/css/navigation"

import MovieCard from "./MovieCard"

function MovieCarousel({movies}){
    return(
        <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView={1}
        spaceBetween={10}
        >
            {movies.map((movie, index) => (
                <SwiperSlide key={movie.id ?? movie.title ?? index}>
                    <MovieCard
                    title={movie.title}
                    image={movie.image}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default MovieCarousel