import React from "react";
import style from "./Header.module.scss";
const Header = ()=>{
    return (
        <div className={style.header}>
            <h1 className={style.header_title}>Ты сегодня покормил кота?</h1>
        </div>
    )
}
export default Header;