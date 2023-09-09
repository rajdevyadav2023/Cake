import '../css/cake.css'
const Cake = ({cakedata}) => {
    // console.log(cakedata)
  return (
    <div className='cake'>
        <div className="cake-img">
            <img src={cakedata.img} alt="cake image " />
        </div>
        <div className="cake-details">
            <h3>${cakedata.price}</h3>
            <button>Add To Cart</button>
        </div>
    </div>
  )
}

export default Cake;