import React, { useState } from 'react'
import { connect } from 'react-redux'
import { navigate, addName, saveName } from '../actions'
import { getItems, addNames } from '../apis/office'


const Form = (props) => {

	const [item, setItem] = useState({})
	// const [name, setName] = useState({})

	const backToHome = () => {
		props.dispatch(navigate('home'))
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		// console.log(event.target.name.value)
		const name = event.target.name.value
		getItems()
		.then(res=> {
			const results = res.results
			const randomItem = getRandomItem(results)
			setItem(randomItem)
			props.dispatch(saveName(name, randomItem.id))
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
		activePage: globalState.activePage,
		officeStuff: globalState.officeStuff
	}
}


export default connect(mapStateToProps)(Form)