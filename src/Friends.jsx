import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router-component'

const Friends = ({name}) => (
	<div>
		<h1><Link href="/">Home</Link></h1>
		<section>{name}, welcome my friend</section>
	</div>
)


export default Friends