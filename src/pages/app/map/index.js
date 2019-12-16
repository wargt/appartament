import style from './style.css'

import React, { Component } from 'react'
import { Map, Marker, TileLayer } from 'react-leaflet'
import { divIcon } from 'leaflet'

export default class MapTab extends Component {

    state = {
        initialize: false
    }

    componentWillReceiveProps (nextProps) {

        if (nextProps.visible && !this.state.initialize) {

            this.setState({initialize: true})
        }

        setTimeout(() => {
            window.dispatchEvent(new Event('resize'))
        }, 0)
    }

    render () {

        const position = [41.393592, 2.163570]

        const { visible } = this.props

        const { initialize } = this.state

        return (
            <div className={style.container} style={{display: visible ? 'block' : 'none'}}>

                {!initialize ? null :
                    <Map center={position} zoom={17} zoomControl={false}>
                        <TileLayer
                           url='http://3.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
                        />
                        {this.props.offers.map(this.renderMarkers.bind(this))}
                      </Map>
                }
            </div>
        )
    }

    renderMarkers (offer, key) {

        const customIcon = new divIcon({
            className: style.divIcon,
            iconSize: [40, 48],
            iconAnchor:  [20, 48],
            html: '<div class="'+ style.price +'">€'+offer.price+'</div>'
        })

        return <Marker key={key} position={offer.coords} icon={customIcon} />
    }
}
