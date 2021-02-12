import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { navigate } from '../actions'

const EntryPage = (props) => {
    const handleClick = () => {
        props.dispatch(navigate('home'))
    }

    return (
        <div className='entry-div'>
            <button onClick={handleClick} className='form-button'>
                Enter the office!
            </button>
        </div>
    )
}

function mapStateToProps(globalState) {
    return {
      activePage: globalState.activePage
    }
  } 

export default connect(mapStateToProps)(EntryPage)