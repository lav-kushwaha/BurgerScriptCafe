import {useState } from 'react'
import logo from '../../images/logo.png'
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';


const Header = () =>{
    const [btnName,setbtnName]=useState("Login")
    
    const cartItems = useSelector((store)=>store.cart.items)
 
    return (
        <div className='header'>
            <div className='logo-container'>
                <Link to="/"><img src={logo}/></Link>
            </div>
            <div className='nav-items'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    {/* <li><Link to="/contact">Contact Us</Link></li> */}
                    <Link to="/cart">
                        <IconButton color="inherit">
                            <ShoppingCartIcon sx={{ fontSize:33 }}/>
                         </IconButton>
                    </Link>
                    <span className='cart-items-count'>{cartItems.length}</span>
                    {/* <li>{LoggedInUser}</li> */}
                    <Link className='login-btn' 
                    onClick={()=>{
                        (btnName==="Login")
                        ?setbtnName("Logout")
                        :setbtnName("Login")}}>{btnName}
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default Header;