import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { navigate } from '../actions'
import Sound from 'react-sound'



const Home = (props) => {

    const [playing, setPlaying] = useState(false);

    // useEffect (() => {
    //     setPlaying(true)
    // }, [])

    const handleClick = (target) => {
        props.dispatch(navigate(target))
    }

    return (
        <div onMouseMove={() => setPlaying(true)}>
            <h1>Welcome to the Office</h1>

            <img src="https://media.giphy.com/media/yCY0QS4BhonQ6KPPGn/giphy.gif" alt="a gif of an office related thing happening"/>
            <div>
            <button onClick={() => handleClick('form')}>jump to form</button>
            <button onClick={() => handleClick('all-matches')}>jump to all matches</button>
            </div>

            <Sound
            url='/Kalimba.mp3'
            autoLoad={true}
            playStatus={playing ? Sound.status.PLAYING : Sound.status.STOPPED}
            playFromPosition={1000} 
            />

        </div>
    )
}


export default connect()(Home)
