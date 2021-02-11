import request from 'superagent'

const rootUrl = '/api/v1/items'

export function getMatches () {
    return request.get(rootUrl + '/itemsandnames')
    .then(res => {
        console.log(res.body)
      return res.body.results
    })
}
