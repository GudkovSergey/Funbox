import React from "react";
import style from "./Packing.module.scss"
import Packing from "./Packing";
import cart from "../../Assets/cart.json";

const PackingContainer = () => {

    return (
        <div className={style.packing}>

            {
                cart.map((obj) => (
                    <Packing {...obj}

                    />))
            }


        </div>
    )
}
export default PackingContainer;