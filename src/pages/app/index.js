import style from './style.css'

import React, { Component } from 'react'
import classNames from 'classnames'
import Header from './header'
import Filter from './filter'
import Tabs from './tabs'
import Offers from './offers'
import Map from './map'
import data from '../../data.js'

const { amenities, offers } = data

const tabs = [
    {name: 'Map', key: 'map'},
    {name: 'Accommodations', 'key': 'accommodations'}
]

export default class App extends Component {

    state = {
        filteredAmenities: [],
        currentTab: 'accommodations'
    }

    render () {

        const { filteredAmenities, currentTab } = this.state

        const offers = this.filteredOffers()

        const isActive = tab => currentTab == tab

        return (
            <div>
                <Header />
                <div className={style.container}>
                    <div className={classNames(style.column, [style.leftColumn])}>
                        <Filter
                            amenities={amenities}
                            selected={filteredAmenities}
                            onChange={filteredAmenities => this.setState({ filteredAmenities })}
                        />
                    </div>
                    <div className={style.column}>
                        <div className={classNames("flex flex-column", [style.rightColumn])}>
                            <Tabs
                                tabs={tabs}
                                isActive={isActive}
                                filteredAmenities={filteredAmenities}
                                offers={offers}
                                onAmenitiesClick={this.onAmenitiesClick.bind(this)}
                                changeTab={this.changeTab.bind(this)}
                            />
                            <div className="flex relative">
                                <Offers offers={offers} visible={isActive('accommodations')} />
                                <Map offers={offers} visible={isActive('map')} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    changeTab (currentTab) {
        this.setState({ currentTab })
    }

    filteredOffers () {
        const { filteredAmenities } = this.state

        let filter = filteredAmenities.map(item => item.value)

        if (!filter.length) {
            return offers
        }

         let items = offers.filter(offer => {

             let filtered = true

             filter.forEach(f => {

                 if (!~offer.amenities.indexOf(f)) {
                     filtered = false
                 }
             })

             return filtered
         })

        return items
    }

    onAmenitiesClick (item) {

        let { filteredAmenities } = this.state

        filteredAmenities = filteredAmenities.filter(sel => {
            return sel.value != item.value
        })

        this.setState({ filteredAmenities })
    }
}
