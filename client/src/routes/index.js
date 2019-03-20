import React from 'react'
//Tools
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
//Pages
import Dashboard from './../components/pages/Dashboard'
class Routes extends React.Component{
	render(){
		return(
			<Router>	
				<div id='Routes'>
					<Switch>
						<Route path='/' component={Dashboard} exact />
					</Switch>
				</div>
			</Router>
		)
	}
}

export default Routes