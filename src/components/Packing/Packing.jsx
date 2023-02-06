import React from "react";
import style from "./Packing.module.scss"
import cat from "../../Assets/cat.png"
import cn from "classnames"

const Packing = (props) => {
    const [selected, setSelected] = React.useState(false)
    const [selectedHover,setSelectedHover] =React.useState(false)

    const selectPacking = ()=> {
        setSelected(selected === false ? true : false);

    }
    const selectPackingHover = ()=>{
        if(selected===true){

        }
    }

    return (
        <div className={style.packing_wrap}>

            <div onMouseLeave={selectPackingHover}

                 onClick={selectPacking}

                 className={selected === false ? cn(style.packing_container, style.defaultHover) : cn(style.packing_container, style.activeSelected)}>

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

                    <div
                        className={selected === false ? style.packing_volume__box : cn(style.packing_volume__box, style.volume_box__active)}>

                        <div className={style.packing_volume}>{props.volume} </div>

                        <span>кг</span>

                    </div>
                </div>
            </div>

            {
                selected === false ?
                    <div
                        className={style.packing_description}>{props.description_default}
                        <a onClick={() => setSelected(selected === false ? true : false)} href='#'>купи</a>
                    </div> :
                    <div className={style.packing_description}>{props.description_selected} </div>
            }
        </div>

    )
}
export default Packing;