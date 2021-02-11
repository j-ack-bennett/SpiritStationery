import request from 'superagent'

const rootUrl = '/api/v1/items'

export function getItems () {
	return request.get(rootUrl)
		.then(res => {
			// console.log(res.body)
			return res.body
		})
}

export function addNames (name, item_id) {
	console.log(name, item_id)
	return request.post(rootUrl)
	.send(name, item_id)
	.then(res => {
		return res.body
	})

}

