
// components 
import Cake from './Cake'
import Carousel from 'react-multi-carousel';
// css 
import 'react-multi-carousel/lib/styles.css';
import '../css/cakes-row.css';

const CakesRow = ({title, cakesList}) => {
    
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    // console.log(title, cakesList)
    return (
        <div className="cakes-row">
            <h2 className='cakes-row-title'> {title}</h2>
            <Carousel responsive={responsive}>
                {
                    cakesList.map((cake, index)=>(
                        <Cake cakedata={cake}  key={index}/>
                    ))
                }
            </Carousel>
        </div>
    )
}

export default CakesRow