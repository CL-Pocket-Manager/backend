const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
	res.send('User list')

})

router.get('/new', (req, res) => {
	res.send('New user')
})

router.post('/', (req, res) => {
	res.send('Create new user')
})

router.route('/:id')
	.get((req, res) => {
		res.send(`Get user with id: ${req.params.id}`)
	})
	.put((req, res) => {
		res.send(`Update user with id: ${req.params.id}`)
	})
	.delete((req, res) => {
		res.send(`Delete user with id: ${req.params.id}`)
	}) 

const users = [
	{
		id: 1,
		name: 'John Doe'
	},
	{
		id: 2,
		name: 'Jane Doe'
	}
]

router.param('id', (req, res, next, id) => {
	req.user = users[id]
	next()
})

module.exports = router