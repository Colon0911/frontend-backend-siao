import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'

import {registerUser} from '../../services/userService'
import '../../build/css/app.css'

import FirstStep from './FirstStep'
import SecondStep from './SecondStep'

const RegisterForm = () => {
	const registerSchema = Yup.object().shape({
		identificationType: Yup.string().required('Tipo de Cédula obligatorio!'),
		identification: Yup.string().required('La cédula es obligatoria!'),
		fullName: Yup.string()
			.min(3, 'El nombre es muy corto')
			.max(40, 'El nombre es muy largo')
			.required('El nombre completo es obligatorio'),
		genre: Yup.string().when('identificationType', {
			is: 'physical',
			then: Yup.string().required('El género es obligatorio!')
		}),
		email: Yup.string().email('Email no valido').required('El email es obligatorio'),
		userName: Yup.string().required('El nombre de usuario es obligatorio!'),
		password: Yup.string()
			.min(6, 'Minimo 6 caracteres!')
			.required('La contraseña es obligatoria!'),
		confirmation: Yup.string()
			.min(6, 'Minimo 6 caracteres!')
			.required('Confirmación obligatoria!')
			.oneOf([Yup.ref('password'), null], 'Contraseñas no coinciden!')
	})

	const [step, setStep] = useState(1)
	const nextStep = () => setStep(step + 1)
	// const previousStep = () => setStep(step - 1)
	const handleSubmit = async e => {
		const res = await registerUser(e)
		console.log(res)
	}

	return (
		<div className="senara-dashboard">
			<div className="senara-content-principal senara-content-login senara-content-sm-login">
				<div className="senara-logo">
					<div className="senara-img-logo"></div>
				</div>
				<div className="senara-tagline"> Registro </div>
				<div className="senara-description-page">Ingrese los datos solicitados</div>
				<Formik
					initialValues={{
						identificationType: '',
						identification: '',
						fullName: '',
						genre: '',
						email: '',
						userName: '',
						password: '',
						confirmation: ''
					}}
					onSubmit={values => {
						handleSubmit(values)
					}}
					validationSchema={registerSchema}
				>
					{({errors, touched}) => {
						return (
							<Form>
								{step === 1 ? (
									<>
										<FirstStep
											errors={errors}
											touched={touched}
											nextStep={nextStep}
										/>
										<button
											type="button"
											onClick={nextStep}
											className="senara-btn-primary senara-form-group"
											// disabled={
											// 	Object.keys(errors).length === 0
											// 		? true
											// 		: false
											// }
										>
											Siguiente
										</button>
									</>
								) : (
									<>
										<SecondStep errors={errors} touched={touched} />
										<input
											type="submit"
											value="Enviar"
											className="senara-btn-primary senara-form-group"
										/>
									</>
								)}
							</Form>
						)
					}}
				</Formik>
				<Link to="/login"></Link>
			</div>
		</div>
	)
}

export default RegisterForm
