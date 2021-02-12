import React, { useState } from 'react'
import { connect } from 'react-redux'
import { navigate, addName, saveName } from '../actions'
import { getItems, addNames } from '../apis/office'


const Form = (props) => {

	const [item, setItem] = useState(null)
	// const [name, setName] = useState({})

	const backToHome = () => {
		props.dispatch(navigate('home'))
	}

	const handleSubmit = (event) => {
		event.preventDefault()
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
				<button className='form-button'>Get Yo Match</button>
			</form>
			{item == null ? <img src='https://media.giphy.com/media/ZmuUzqOIEojjnd4tN8/giphy.gif' /> : <> <h1>{item.item}</h1>
			<img className='image' src={item.image}/> </> }
			{/* <img src='https://media.giphy.com/media/ZmuUzqOIEojjnd4tN8/giphy.gif' /> */}
			
			<button className='' onClick={backToHome}>back to home</button>
		</div>
	)
}



export default connect()(Form)