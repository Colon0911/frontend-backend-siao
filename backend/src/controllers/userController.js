import jwt from 'jsonwebtoken'

import User from '../models/User.js'
import config from '../config/config.js'

// Create token to authenticate
const createToken = user => {
	return jwt.sign({id: user.id, email: user.email}, config.SECRET, {
		expiresIn: 86400
	})
}

// Register New User
export const register = async (req, res) => {
	const {identification, email} = req.body
	try {
		const userExist = await User.findOne({identification: identification})
		if (userExist) return res.status(400).json({msg: 'El usuario ya existe!'})

		const emailExist = await User.findOne({email: email})
		if (emailExist) return res.status(400).json({msg: 'El email ya existe!'})

		const newUser = new User(req.body)
		await newUser.save()
		return res.status(200).json({msg: 'Usuario registrado con exito!'})
	} catch (error) {
		return res.status(500).send({msg: 'Error inesperado!'})
	}
}

export const login = async (req, res) => {
	const {email, password} = req.body

	try {
		const user = await User.findOne({email})
		if (!user) {
			return res.status(401).json({msg: 'Este usuario no existe!'})
		}

		const isMatch = await user.comparePassword(password)

		if (isMatch) {
			const token = createToken(user)
			return res.status(200).json({token: token, fullName: user.fullName})
		}
		return res.status(401).json({msg: 'Contraseña incorrecta!'})
	} catch (error) {
		return res.status(500).json({msg: 'Error Inesperado!'})
	}
}
