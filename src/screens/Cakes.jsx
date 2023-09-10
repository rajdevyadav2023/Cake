import Cake from '../components/Cake';
import '../css/cakes.css';
import { birthdayCakes } from '../data/birthdayCakes';
import { popularCakes } from '../data/popularCakes';
import { weddingCakes } from '../data/weddingCakes';

const Cakes = () => {
  document.title = "Cakes Collection | The Cake";

    const allCakes = [...birthdayCakes, ...weddingCakes, ...popularCakes]
    // console.log(allCakes)
    return (
        <div className='cakes'>
            <div className="banner">
                <h1>Your bite of heaven</h1>
            </div>
            <div className="cakes-list">
                {
                    allCakes.map((cake, index) => (
                        <div className="cake-item" key={index}>
                            <Cake cakedata={cake} />
                        </div>
            ))
                }

        </div>
        </div >
    )
}

export default Cakes