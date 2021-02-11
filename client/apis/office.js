import request from 'superagent'

const rootUrl = '/api/v1/items'

export function getItems () {
	return request.get(rootUrl)
		.then(res => {
			// console.log(res.body)
			return res.body
		})
}