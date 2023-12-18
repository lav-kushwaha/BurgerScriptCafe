import { useEffect, useState } from "react";
import Shimmer from './Shimmer'
import Burger from '../../images/Burger.png'
const User = () => {

    const description =  {
        desc:"Welcome to The world of",
        name:"BurgerScript Cafe"
    }

    return(
        <div className="userCard">
           <div className="about">
            <h2>{description.desc}</h2>
            <h3>{description.name}</h3>
            <h2>"Better you will feel if you eat a BurgerScript Cafe healthy meal"</h2>
           </div>
           <img src={Burger} alt="profile" />
        </div>
    )
}
export default User;