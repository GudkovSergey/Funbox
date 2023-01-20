import React from "react";
import style from "./Packing.module.scss"
import cat from "../../Assets/cat.png"

const Packing = (props) => {
    return (
        <div className={style.packing_wrap}>

            <div className={style.packing_container}>

                <div className={style.packing_info__block}>

                  <div className={style.packing_tagline}>{props.tagline}</div>
                  <div className={style.packing_title}>{props.title}</div>
                  <div className={style.packing_topping}>{props.topping} </div>
                  <div className={style.packing_portion}>{props.portion} порций</div>

                  <div className={style.packing_bonus__container}>
                      <div className={style.packing_bonus__quantity}>{props.bonus_quantity} </div>
                      <div className={style.packing_bonus}>{props.bonus}  </div>

                  </div>
                      <div className={style.packing_comment}>{props.comment}  </div>
                  </div>


                <div className={style.packing_visualBlock}>

                    <img className={style.packing_cat} src={cat} alt="cat"/>

                    <div className={style.packing_volume__box}>

                        <div className={style.packing_volume}>{props.volume} </div>

                        <span>кг</span>

                    </div>
                </div>
            </div>

            <div className={style.packing_description}>{props.descriotion_default} <a href=''>купи</a></div>
        </div>

    )
}
export default Packing;