import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { navigate } from '../actions'



const AllMatches = (props) => {

    const backToHome = () => {
        props.dispatch(navigate('home'))
    }

    return (
        <div>
            <h1>Welcome to the AllMatches</h1>

            
            <button onClick={backToHome}>back to home</button>
        </div>
    )
}

function mapStateToProps(globalState) {
    return {
      activePage: globalState.activePage
    }
  } 

export default connect(mapStateToProps)(AllMatches)