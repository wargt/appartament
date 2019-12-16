import style from './style.css'

import React, { Component } from 'react'
import classNames from 'classnames'
import Utils from '../../../utils'

export default class Tabs extends Component {

    render () {

        return (
            <div className="flex-auto">
                <ul className={ style.tabCnt }>
                    { this.props.tabs.map(this.renderTab.bind(this)) }
                </ul>
                 <div className={ style.tagsPanel }>
                    <div className={ style.tagsList }>
                        { this.props.filteredAmenities.map(this.renderAmenities.bind(this)) }
                        &nbsp;
                    </div>
                    <div className={ style.offerCount }>
                        { this.props.offers.length }
                        { Utils.declOfNum(this.props.offers.length, [' offer', ' offers', ' offers']) }
                    </div>
                </div>
            </div>
        )
    }

    renderAmenities (item, key) {
        return <div
                key={ key }
                onClick={ this.props.onAmenitiesClick.bind(this, item) }
                className={ style.ametiesTag }>
                    { item.label }
                </div>
    }

    renderTab (tab, key) {

        return (
            <li
                key={ key }
                className={classNames(style.tab, {
                    [style.tabActive]: this.props.isActive(tab.key)
                })}
                onClick={ this.props.changeTab.bind(this, tab.key) }>
                <div className={ classNames(style.tabShadow) }></div>
                <div className={ classNames(style.tabName) }>
                    { tab.name }
                </div>
            </li>
        )
    }

}
