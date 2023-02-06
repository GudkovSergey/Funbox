import React from "react";
import style from "./Packing.module.scss"
import cat from "../../Assets/cat.png"
import cn from "classnames"

const Packing = (props) => {
    const [selected, setSelected] = React.useState(false)
    const [selectedHover,setSelectedHover] =React.useState('')

    const selectPacking = ()=> {
        setSelected(selected === false ? true : false);

    }
    const onMouseLeave = ()=>{

        setSelectedHover(selectedHover === false)
    }

    const onMouseEnter = ()=>{

        setSelectedHover(selectedHover === false)
    }

    return (
        <div className={style.packing_wrap}>

            <div onMouseLeave={onMouseLeave}
                 onMouseEnter={onMouseEnter}

                 onClick={selectPacking}

                 className={selected === false ? cn(style.packing_container, style.defaultHover) :
                     selectedHover===false? cn(style.packing_container, style.activeSelected):
                         cn(style.packing_container, style.selectedHover)}>

                <div className={style.packing_info__block}>

                    {!selectedHover  ?
                        <div className={style.packing_tagline}>{props.tagline}</div>:
                        <div className={cn(style.packing_tagline,style.packing_tagline__hover)}>{props.taglineHover}</div>



                    }


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
                        className={selected === false ? style.packing_volume__box :
                            selectedHover===false? cn(style.packing_volume__box, style.volume_box__active):
                            cn(style.packing_volume__box, style.volume_boxHover__active) }>

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