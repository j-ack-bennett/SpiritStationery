import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'



//components
import Home from './Home'
import Form from './Form'
import AllMatches from './AllMatches'
import EntryPage from './EntryPage'

const App = (props) => {

  // const [audio] = useState(new Audio('https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3'))

  // const playTunes = () => {
  //     audio.play()
  // }



  const renderSwitch = () => {
    switch (props.activePage.target) {

      case 'entry-page':
        return <EntryPage />
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
    <>
      <div className="container">
        {renderSwitch()}
      </div>
    </>

  )
}

function mapStateToProps(globalState) {
  return {
    activePage: globalState.activePage
  }
} 
export default connect(mapStateToProps)(App)

