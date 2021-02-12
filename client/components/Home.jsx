import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { navigate } from '../actions'
import Sound from 'react-sound'

const baseColours = [
    ['purple','green', 'yellow'],
    ['green', 'yellow','purple'],
    ['yellow','purple','green'],
]

const Home = (props) => {

    const [playing, setPlaying] = useState(false);
    const [index, setIndex] = useState(0)
    const [colours, setColours] = useState({c1 : 'purple', c2: 'green', c3: 'yellow'})

    useEffect (() => {
        const [c1,c2,c3] = baseColours[index]
        setColours({c1, c2, c3})
    }, [index])

    useEffect (() => {
        const interval = setInterval(() => {
            setIndex(current => {
                let newIndex = current + 1
                if (newIndex > 2) newIndex = 0
                console.log({newIndex})
                return newIndex
            })
        }, 1000)
    }, [])

    const handleClick = (target) => {
        props.dispatch(navigate(target))
    }

    return (
        <div onMouseMove={() => setPlaying(true)}>
            <h1 style={{textShadow: `4px 4px ${colours.c1}, 8px 8px ${colours.c2}, 12px 12px ${colours.c3}`}}>Welcome to the Office</h1>
            {/* <div className='gif'></div> */}
            <img className='gif' src="https://media.giphy.com/media/yCY0QS4BhonQ6KPPGn/giphy.gif" alt="a gif of an office related thing happening"/>
            <div>
                <button className='button-hp' onClick={() => handleClick('form')}>Find Your Match</button>
                <button className='button-hp' onClick={() => handleClick('all-matches')}>Go To All Matches</button>
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
