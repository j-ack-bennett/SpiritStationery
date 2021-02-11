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
            <h1>Welcome to the AllMatches</h1>
            {
                props.officeStuff.map(match => {
                    return (
                        <div key={match.id}> 
                            <h3>{match.name} is a {match.item}</h3>
                            <img className='item-image' 
                                src={match.image} 
                                alt={match.item} 
                            />
                        </div>
                    )
                })
            }
            <button onClick={backToHome}>back to home</button>
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