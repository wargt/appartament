import style from './style.css'

import React, { Component } from 'react'
import classNames from 'classnames'
import ReactIScroll from 'react-iscroll'
import iScroll from 'iscroll'

export default class Offers extends Component {

    componentDidMount() {
        this.updateScroll()
    }

    render () {

        const { visible } = this.props

        return (
            <div className={style.scrollCnt} style={{display: visible ? 'block' : 'none'}}>
                <ReactIScroll
                   className={style.filterContainer}
                   iScroll={iScroll}

                   options={{
                       mouseWheel: true,
                       scrollbars: false,
                       click: false,
                       preventDefaultException: { tagName:/.*/ }
                   }}>
                     <div className={style.scrollInner}>
                         {this.props.offers.map(this.renderOffer.bind(this))}
                     </div>
                </ReactIScroll>
            </div>
        )
    }

    renderOffer (item, key) {

        const path = 'url(' +require( "./img/"+ item.img) + ')'

        return (
            <div key={key} className={style.offerCnt}>
                <div className={style.offer}>
                     <img className={style.resizeImg} src={require("./img/offer.png")} />
                    <div className={style.gradient} style={{
                      backgroundImage: path
                    }}></div>
                    <div className={style.dataOffer}>
                        <div className={style.offerName}>
                            {item.name}
                        </div>
                        <div className={style.offerPrice}>
                            <span>€</span> {item.price}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    updateScroll () {
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'))
        }, 200)
    }
}
