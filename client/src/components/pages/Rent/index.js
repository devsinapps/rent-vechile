import React from 'react'
//Grid
import { ContainerRow, ColCard } from './../../grid/BootstrapGrid'
class Rent extends React.Component{
	render(){
		return(
			<ContainerRow>
				<ColCard lgCol='6' mdCol='6' smCol='6' xsCol='6' colClass='' brCard='mb-3' tlCard='Rent Data'>
				</ColCard>
			</ContainerRow>
		)
	}
}

export default Rent