import style from './style.css'

import React, { Component } from 'react'

export default function () {
    return (
        <div className={style.container}>
            <div className={style.logo}>TEST</div>
            <div className={style.logo_image}></div>
            <div className={style.propBtn}>List your property</div>
        </div>
    )
}
