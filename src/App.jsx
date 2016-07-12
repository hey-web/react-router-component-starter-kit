import React, { Component, PropTypes } from 'react'
import Router from 'react-router-component'
import PageMain from './PageMain.jsx'
import PageA from './PageA.jsx'
import PageB from './PageB.jsx'
import Page404 from './Page404.jsx'
import FriendsPage from './Friends.jsx'
import PageForm from './PageForm.jsx'
import PageFormResult from './FormResult.jsx'

let Locations = Router.Locations
let Location = Router.Location
let NotFound = Router.NotFound


const App = () => (

	<Locations>
		<Location path="/" handler={PageMain} />
		<Location path="/a/" handler={PageA} />
		<Location path="/b/" handler={PageB} />
		<Location path="/friends/:name" handler={FriendsPage} />
        <Location path="/form/" handler={PageForm} />
        <Location path="/formresult/:name/:phone" handler={PageFormResult} />
		<NotFound handler={Page404} />
	</Locations>

)

export default App
