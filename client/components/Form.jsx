import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { navigate } from '../actions'
import { getItems } from '../apis/office'


const Form = (props) => {

	const [item, setItem] = useState({})

	const backToHome = () => {
		props.dispatch(navigate('home'))
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		getItems()
		.then(res=> {
			const results = res.results
			setItem(getRandomItem(results))
		})
	}

	const getRandomItem = (items) => {
		const random = Math.floor(Math.random() * items.length)
		return items[random]
	}

	return (
		<div>
			<h1>Welcome to the form</h1>
			<form onSubmit={handleSubmit}>
				<input type='text' name='name' placeholder='Dwight Schrute' />
				<button>Get Yo Match</button>
			</form>
			<h1>{item.item}</h1>
			<img src={item.image}/>
			<button onClick={backToHome}>back to home</button>
		</div>
	)
}

function mapStateToProps(globalState) {
	return {
		activePage: globalState.activePage
	}
}


export default connect(mapStateToProps)(Form)