import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Link, NavigatableMixin } from 'react-router-component'

class PageForm extends Component {

	constructor(props){
		super(props)
		this.onSubmit = this.onSubmit.bind(this)

		//ES6 React doesn't support Mixin, so use following to add properties
		for(let x in NavigatableMixin){
			if(x == 'contextTypes'){
				continue
			}
			if(typeof NavigatableMixin[x] == 'function'){
				this[x] = NavigatableMixin[x].bind(this)	
			}else{
				this[x] = NavigatableMixin[x]
			}
		}
	}

	onSubmit(e) {
		e.preventDefault()
		let name = ReactDOM.findDOMNode(this.refs.myName).value
		let phoneNo = ReactDOM.findDOMNode(this.refs.myPhone).value
		this.navigate('/formresult/' + name + '/' + phoneNo)
	}

	render() {
		return (
			<div>
				<form target="" action="">
					<input type="text" placeholder="name" ref="myName"/>
					<input type="number" placeholder="phone" ref="myPhone"/>
					<button onClick={this.onSubmit}>submit</button>
				</form>
			</div>
		)
	}

}


export default PageForm