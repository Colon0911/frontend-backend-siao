import React from 'react'
import {Field} from 'formik'

const SecondStep = ({errors, touched}) => {
	return (
		<>
			<div className="senara-form-group">
				{errors.email && touched.email ? (
					<div className="senara-actions">{errors.email}</div>
				) : null}
				<Field
					id="email"
					name="email"
					type="email"
					placeholder="Correo"
					className="floating-input"
				/>
			</div>

			<div className="senara-form-group">
				{errors.userName && touched.userName ? (
					<div className="senara-actions">{errors.userName}</div>
				) : null}
				<Field
					id="userName"
					name="userName"
					type="text"
					placeholder="Nombre de Usuario"
					className="floating-input"
				/>
			</div>

			<div className="senara-form-group">
				{errors.password && touched.password ? (
					<div className="senara-actions">{errors.password}</div>
				) : null}
				<Field
					id="password"
					name="password"
					type="password"
					placeholder="Contraseña"
					className="floating-input"
				/>
			</div>

			<div className="senara-form-group">
				{errors.confirmation && touched.confirmation ? (
					<div className="senara-actions">{errors.confirmation}</div>
				) : null}
				<Field
					id="confirmation"
					name="confirmation"
					type="password"
					placeholder="Confirmación"
					className="floating-input"
				/>
			</div>
		</>
	)
}

export default SecondStep
