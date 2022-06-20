import React from 'react'
import {Field} from 'formik'

const FirstStep = ({errors, touched}) => {
	return (
		<>
			<div className="senara-form-group">
				{errors.identificationType && touched.identificationType ? (
					<div className="senara-actions">{errors.identificationType}</div>
				) : null}
				<Field
					id="identificationType"
					name="identificationType"
					as="select"
					multiple={false}
					className="floating-select"
				>
					<option value=""> Tipo Identificación </option>
					<option value="physical"> Física </option>
					<option value="legal"> Jurídica </option>
				</Field>
			</div>

			<div className="senara-form-group">
				{errors.identification && touched.identification ? (
					<div className="senara-actions">{errors.identification}</div>
				) : null}
				<Field
					id="identification"
					name="identification"
					type="text"
					placeholder="Identificación"
					className="floating-input"
				/>
			</div>

			<div className="senara-form-group">
				{errors.fullName && touched.fullName ? (
					<div className="senara-actions">{errors.fullName}</div>
				) : null}
				<Field
					id="fullName"
					name="fullName"
					type="text"
					placeholder="Nombre Completo"
					className="floating-input"
				/>
			</div>

			<div className="senara-form-group">
				{errors.genre && touched.genre ? (
					<div className="senara-actions">{errors.genre}</div>
				) : null}
				<Field
					id="genre"
					name="genre"
					as="select"
					multiple={false}
					className="floating-select"
				>
					<option value=""> Genero </option>
					<option value="female"> Femenino </option>
					<option value="male"> Masculino </option>
				</Field>
			</div>
		</>
	)
}

export default FirstStep
