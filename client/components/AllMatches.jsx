import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchMatches, navigate } from '../actions'

const AllMatches = (props) => {

    const backToHome = () => {
        props.dispatch(navigate('home'))
    }
    useEffect(() => {
        props.dispatch(fetchMatches())
    },[])
    
    return (
        <>
        {/* {console.log(props.officeStuff)} */}
        <div>
            <h1>Previous Matches</h1>
            {
                props.officeStuff.map(match => {
                    return (
                        <div key={match.id}> 
                            <h3>{match.name} is a {match.item}</h3>
                            <img className='image' 
                                src={match.image} 
                                alt={match.item} 
                            />
                        </div>
                    )
                })
            }
            <button className='home-button' onClick={backToHome}>Back to Home</button>
        </div>
        </>
    )
}

function mapStateToProps(globalState) {
    return {
      activePage: globalState.activePage,
      officeStuff: globalState.officeStuff
    }
  } 

export default connect(mapStateToProps)(AllMatches)