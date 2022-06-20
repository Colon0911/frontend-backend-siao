import jwt from 'jsonwebtoken'
import config from '../config/config.js'

const auth = (req, _, next) => {
	// Verify Header
	const authHeader = req.get('Authorization')
	if (!authHeader) {
		const error = new Error('No autenticado!')
		error.statusCode = 401
		throw error
	}

	// Verify Token
	const token = authHeader.replace('Bearer ', '')
	let verifyToken
	try {
		verifyToken = jwt.verify(token, config.SECRET)
	} catch (err) {
		error.statusCode = 500
		throw error
	}

	// Valid Token but Unexpected Error
	if (!verifyToken) {
		const error = new Error('No autenticado!')
		error.statusCode = 401
		throw error
	}

	// All right, next middleware
	next()
}

export default auth
