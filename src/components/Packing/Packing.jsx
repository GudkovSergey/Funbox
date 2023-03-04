import React from "react";
import style from "./Packing.module.scss"
import cat from "../../Assets/cat.png"
import cn from "classnames"

const Packing = (props) => {
    const [selected, setSelected] = React.useState(false);
    const [selectedHover, setSelectedHover] = React.useState();

    const selectPacking = () => {
        setSelected(selected === false ? true : false);

    }
    const onMouseToggle = () => {

        setSelectedHover(selectedHover === false)
    }
    const disabled = (selected === true && props.quantity <= 0);

    return (

        <div className={style.packing_wrap}>

            <div onMouseLeave={onMouseToggle}
                 onMouseEnter={onMouseToggle}
                 onClick={selectPacking}

                 className={selected === false ? cn(style.packing_container, style.defaultHover) : props.quantity <= 0 ?
                     cn(style.packing_container, style.disabled_border__color) :
                     selectedHover === false ? cn(style.packing_container, style.activeSelected) :
                         cn(style.packing_container, style.selectedHover)}>


                <div className={style.packing_info__block}>

                    {(!selectedHover || selected === false) ?
                        <div
                            className={disabled ? cn(style.packing_tagline, style.disabled_text__color) : style.packing_tagline}>{props.tagline}</div> : props.quantity <= 0 ?
                            <div
                                className={cn(style.packing_tagline, style.disabled_text__color)}>{props.tagline}</div> :
                            <div
                                className={cn(style.packing_tagline, style.packing_tagline__hover)}>{props.taglineHover}</div>


                    }


                    <div className={style.packing_title}>{props.title}</div>
                    <div className={style.packing_topping}>{props.topping} </div>
                    <div
                        className={disabled ? cn(style.packing_portion, style.disabled_text__color) : style.packing_portion}>{props.portion} порций
                    </div>

                    <div
                        className={disabled ? cn(style.packing_bonus__container, style.disabled_text__color) :
                            style.packing_bonus__container}>

                        <div className={style.packing_bonus__quantity}>{props.bonus_quantity} </div>
                        <div className={style.packing_bonus}>{props.bonus}  </div>


                    </div>
                    <div
                        className={disabled ? cn(style.packing_comment, style.disabled_text__color) :
                            style.packing_comment
                        }>{props.comment}  </div>


                </div>


                <div className={style.packing_visualBlock}>
                    {selected === false || props.quantity > 0 ?
                        <img className={style.packing_cat} src={cat} alt="cat"/> :
                        <img className={cn(style.packing_cat, style.cat__disabled)} src={cat} alt="cat"/>
                    }
                    <div
                        className={
                            selected === false ? style.packing_volume__box :

                                props.quantity <= 0 ? cn(style.packing_volume__box, style.volume_box__disabled) :

                                    selectedHover === false ? cn(style.packing_volume__box, style.volume_box__active) :
                                        cn(style.packing_volume__box, style.volume_boxHover__active)

                        }>

                        <div className={style.packing_volume}>{props.volume} </div>

                        <span>кг</span>

                    </div>
                </div>
            </div>
            {/*Если количество продукта (quantyty) в cart.json равно нулю, то при клике товар становится недоступным*/}
            {
                selected === false ?
                    <div
                        className={style.packing_description}>{props.description_default}
                        <a onClick={() => setSelected(selected === false ? true : false)} href='#'>купи</a>
                    </div> :
                    props.quantity > 0 ?
                        <div className={style.packing_description}>{props.description_selected} </div> :
                        <div
                            className={cn(style.packing_description, style.disabled_description__color)}>{props.description_disabled} </div>

            }
        </div>

    )
}
export default Packing;