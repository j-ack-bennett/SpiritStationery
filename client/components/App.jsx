import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'


//components
import Home from './Home'
import Form from './Form'
import AllMatches from './AllMatches'

const App = (props) => {


  const renderSwitch = () => {
    switch (props.activePage.target) {

      case 'home':
        return <Home />
      case 'form' :
        return <Form />
      case 'all-matches' :
        return <AllMatches />
      default :
        break
    }
  }

  return (
    <div className="container" >
      {renderSwitch()}
    </div>
  )
}

function mapStateToProps(globalState) {
  return {
    activePage: globalState.activePage
  }
} 
export default connect(mapStateToProps)(App)

