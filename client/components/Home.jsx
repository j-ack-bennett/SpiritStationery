import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { navigate } from '../actions'



const Home = (props) => {

    const handleClick = (target) => {
        props.dispatch(navigate(target))
    }

    return (
        <div>
            <h1>Welcome to the Office</h1>
            {/* <div className='gif'></div> */}
            <img className='gif' src="https://media.giphy.com/media/yCY0QS4BhonQ6KPPGn/giphy.gif" alt="a gif of an office related thing happening"/>
            <div>
                <button className='button-hp' onClick={() => handleClick('form')}>Find Your Match</button>
                <button className='button-hp' onClick={() => handleClick('all-matches')}>Go To All Matches</button>
            </div>

        </div>
    )
}


export default connect()(Home)
