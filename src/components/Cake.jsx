// hooks 
import {useDispatch,useSelector} from 'react-redux';

// actions 
import { addToCart } from '../redux/userSlice';
// css 
import '../css/cake.css'
const Cake = ({cakedata}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.user.cart);
  // console.log(cartItems)
    // console.log(cakedata)
  return (
    <div className='cake'>
        <div className="cake-img">
            <img src={cakedata.img} alt="cake image " />
        </div>
        <div className="cake-details">
            <h3>${cakedata.price}</h3>
            <button onClick={()=>dispatch(addToCart({...cakedata, id:cartItems.length + 1}))}>Add To Cart</button>
        </div>
    </div>
  )
}

export default Cake;