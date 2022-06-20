import React from 'react'
import {Navigate} from 'react-router-dom'
import {useAuth} from '../hooks/useAuth'

const Dashboard = () => {
	const {email, user, logout} = useAuth()
	if (!user) {
		return <Navigate to="/" />
	}
	return (
		<>
			<h1>Dashboard</h1>
			<p>{email}</p>
			<button onClick={logout}>Cerrar Seccion</button>
		</>
	)
}

export default Dashboard
