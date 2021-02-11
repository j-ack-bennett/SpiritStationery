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

            <img src="https://media.giphy.com/media/yCY0QS4BhonQ6KPPGn/giphy.gif" alt="a gif of an office related thing happening"/>
            <div>
            <button onClick={() => handleClick('form')}>jump to form</button>
            <button onClick={() => handleClick('all-matches')}>jump to all matches</button>
            </div>

        </div>
    )
}


export default connect()(Home)
