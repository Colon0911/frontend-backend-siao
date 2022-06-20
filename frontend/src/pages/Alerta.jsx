import React from 'react';
import '../build/css/app.css';

const Alerta = ({ children, type }) => {
	return <div className={`alert-senara ${type}`}> {children} </div>;
};

export default Alerta;
