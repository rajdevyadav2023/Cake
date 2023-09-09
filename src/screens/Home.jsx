import CakesRow from "../components/CakesRow"
import { EmblaCarousel } from "../components/Carousel"
import { birthdayCakes } from "../data/birthdayCakes"
import { popularCakes } from "../data/popularCakes"
import { weddingCakes } from "../data/weddingCakes"


const Home = () => {
  return (
    <div>
        <EmblaCarousel/>
        <CakesRow cakesList={popularCakes} title='Our Popular Cake Sweets' />
        <CakesRow cakesList={weddingCakes} title='Amazing Wedding Cakes ' />
        <CakesRow cakesList={birthdayCakes} title='Beautiful & Delicious Birthday Cakes ' />
    </div>
  )
}

export default Home