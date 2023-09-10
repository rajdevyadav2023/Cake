import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../css/cart.css';
import empty from '../img/empty.gif';




const Cart = () => {
  const navigate = useNavigate();
  const login = useSelector(state => state.user.details.login);
  const cartItems = useSelector(state => state.user.cart);
  // console.log(login, cartItems.length)

  document.title = "My Cart | The Cake ";

  return (
    <div className='cart'>
      {
        login ? (<div className="cart-list">
          {
            cartItems.length == 0 ? (<div className="empty-cart-message">
              <h2>Your Cart Is Empty 🍰!</h2>
              <img src={empty} alt="empty cart image" />
            </div>) : (<div className="cart-items">
              {
                cartItems.map((item, index) => (
                  <div className="item" key={index}>
                    <div className="cake-img">
                      <img src={item.img} alt="cake image " />
                    </div>
                    <div className="cake-details">
                      <h3>${item.price}</h3>
                      <div className="btn-group">
                        <button>Remove From Cart</button>
                        <button>Buy Now</button>
                      </div>
                    </div>
                  </div>

                ))
              }
            </div>)
          }
        </div>) : (<div className="cart-login-message">
          <h2>Welcome To You In Your Cart </h2>
          <p>Please, Login Or Sign Up To Start Working With Your Cart.</p>

          <div className="btn-group">
            <button onClick={() => navigate('/login')}>Log In</button>
            <button onClick={() => navigate('/signup')}>Sign Up</button>
          </div>
        </div>)
      }
    </div>
  )
}

export default Cart;