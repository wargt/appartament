import style from './styles/style.css'

import React, { Component } from 'react'
import classNames from 'classnames'
import ReactIScroll from 'react-iscroll'
import iScroll from 'iscroll'
import Select from 'react-select';

export default class Filter extends Component {

    state = {
        opened: {}
    }

    render () {
        return (
            <div className={classNames('flex', [style.leftPadding])}>
                <div className={classNames('flex-auto')}>
                    <div className={style.filterControl}>
                        <div className={style.minusIcon}></div>
                        <div className={style.filterLabel}>Amenities</div>
                    </div>
                </div>
                <div className={classNames('flex relative')}>
                     <ReactIScroll
                        className={style.filterContainer}
                        iScroll={iScroll}
                        options={{
                            mouseWheel: true,
                            scrollbars: true,
                            click: false,
                            preventDefaultException: { tagName:/.*/ }
                        }}>
                          <div>
                              <div className={style.filterTitle}>Amenities search</div>
                              <div className={style.searchCnt}>
                                  <Select
                                      name="searchField"
                                      className="searchField"
                                      value={this.props.selected}
                                      noResultsText="No amenities found"
                                      placeholder="Enter the names of amenities that you need in apartment"
                                      options={this.selectOptions()}
                                      onChange={this.changeSearchField.bind(this)}
                                      onValueClick={this.onSearchValueClick.bind(this)}
                                      multi={true}
                                      ref="search"
                                  />
                                  <div className={style.searchIcon}></div>
                              </div>
                              {this.props.amenities.map(this.renderAmenitiesBlock.bind(this))}
                          </div>
                    </ReactIScroll>
                </div>
            </div>
        )
    }

    changeSearchField(selected) {
        this.props.onChange(selected)
    }

    onSearchValueClick (item) {

        let { selected } = this.props

        selected = selected.filter(sel => {
            return sel.value != item.value
        })

        this.updateSearchHeight();

        this.props.onChange(selected)
    }

    selectOptions() {
        let options = []

        for (let block of this.props.amenities) {

            for (let item of block.items) {
                options.push({
                    value: item.key,
                    label: item.name
                })
            }
        }

        return options
    }

    renderAmenitiesBlock (item, key) {

        let hide = item.items.find(el => {
            return el.hidden
        })

        const { opened } = this.state

        const unique = item.name.toLowerCase().replace(/ /g, '')

        return (
            <div className={style.filterBlock} key={key}>
                <div className={style.blockControl} onClick={this.toogleControl.bind(this, unique)}>
                    {!hide ? null :
                        <div className={classNames({
                            [style.plusIcon] : !opened[unique],
                            [style.minusIcon] : opened[unique],
                        })}></div>
                    }
                    <div className={style.filterLabel}>{item.name}</div>
                </div>
                <div className={style.checkboxes}>
                    <div className={style.filterRow}>
                        {item.items.map(this.renderCheckboxes.bind(this, unique))}
                   </div>
                </div>
            </div>
        )
    }

    renderCheckboxes (parentname, item, key) {

        const { opened } = this.state
        const { selected } = this.props

        if (item.hidden && !opened[parentname]) {
            return null
        }

        let checked = !!selected.find(el => {
            return item.key == el.value
        })

        return (
            <div className={style.checkColumn} key={key}>
                <div className={style.checkboxBlock}>
                    <input type="checkbox" id={item.key} checked={checked} onChange={this.onCheckboxChange.bind(this, item, checked)}/>
                    <div className={style.checkbox}></div>
                </div>
                <label htmlFor={item.key} className={style.checkLabel}>
                    {item.name}
                </label>
            </div>
        )
    }

    onCheckboxChange (item, checked) {

        let { selected } = this.props

        if (!checked) {

            selected.push({
                value: item.key,
                label: item.name
            })

        } else {

            selected = selected.filter(sel => {
                return sel.value != item.key
            })
        }

        this.updateSearchHeight();

        this.props.onChange(selected)
    }

    toogleControl (key) {

        let { opened } = this.state

        if (!opened[key]) {
            opened[key] = true
        } else {
            delete opened[key]
        }

        this.setState({ opened })
    }

    updateSearchHeight () {

        let selectInput = this.refs.search.control

        let select = selectInput.getElementsByClassName("Select-multi-value-wrapper")[0]

        if (select.style.display == 'inline-block') {

            select.style.display = "block";

            setTimeout(() => {select.style.display = "inline-block";}, 300)
        } else {

            select.style.display = "inline-block";
        }

        window.dispatchEvent(new Event('resize'))
    }
}
