import React from "react";
import style from "./Packing.module.scss"
import Packing from "./Packing";
import cart from "../../Assets/cart.json";

const PackingContainer = ()=>{
    return(
        <div className={style.packing}>

            {
                cart.map((obj) =>(
                    <Packing
                         key={obj.id}
                         tagline={obj.tagline}
                         title={obj.title}
                         topping ={obj.topping}
                         portion={obj.portion}
                         bonus={obj.bonus}
                         bonus_quantity={obj.bonus_quantity}
                         comment={obj.comment}
                         volume={obj.volume}
                         descriotion_default={obj.descriotion_default}

                />))
            }




        </div>
    )
}
export default PackingContainer;