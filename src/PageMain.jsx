import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router-component'

const PageMain = () => (
	<div>
		welcome to main page
		<ul>
			<li><Link href="/a/">PageA</Link></li>
			<li><Link href="/b/">PageB</Link></li>
			<li><Link href="/c/">PageC(not found)</Link></li>
			<li><Link href="/friends/Remind">friends Remind</Link></li>
			<li><Link href="/form/">go to route by js</Link></li>
		</ul>
	</div>
)

export default PageMain
