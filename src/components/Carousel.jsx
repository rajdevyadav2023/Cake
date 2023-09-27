import Autoplay from 'embla-carousel-autoplay'
import '../css/carousel.css'
import useEmblaCarousel from 'embla-carousel-react'

export const EmblaCarousel = () => {
    const autoplayOptions = {
        delay: 8000,
        rootNode: (emblaRoot) => emblaRoot.parentElement,
      }
      
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay(autoplayOptions)])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide embla__slide_1">
            <div className="slide-content dark-slide">
                <h1>Love is like an ocean. Deep and dynamic.</h1>
            </div>
        </div>
        <div className="embla__slide embla__slide_2">
        <div className="slide-content dark-slide">
                <h1>celebration gives you many happy memories!</h1>
            </div>
        </div>
        <div className="embla__slide embla__slide_3">
        <div className="slide-content dark-slide">
                <h1>Friends Forever, Through All Weather</h1>
            </div>
        </div>
        <div className="embla__slide embla__slide_4">
        <div className="slide-content dark-slide">
                <h1>Anything can happen with a good team.</h1>
            </div>
        </div>
      </div>
    </div>
  )
}