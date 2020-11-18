import React from 'react';
import classes from './Nav.module.css';
const Nav = () => {
    return (
    <nav className={classes.nav}>
        <div>
        <a href= "/Content" className={classes.item}>Профиль</a>
        <a href= "/Dialogs "  className={classes.item}>Сообщения</a>
        <a href= "/News" className={classes.item}>Новости</a>
        <a href= "/Music"  className={classes.item}>Музыка</a>
        <a href= "/Settings"  className={classes.item}>Настройки</a>
        </div>
    </nav>

    )
}

export default Nav;