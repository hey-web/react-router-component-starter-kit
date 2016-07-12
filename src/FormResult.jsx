import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router-component'

const FormResult = ({name, phone}) => (
	<div>
		<h1><Link href="/">Home</Link></h1>
		<section>
			<span>Name : {name}</span>
			<br/>
			<span>Phone No : {phone}</span>
		</section>
	</div>
)


export default FormResult