import React from 'react'
//Reactstrap
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap'
export const ContainerRow = (props) => {
	const { children } = props 
	return(
		<Container>
			<Row>
				{children}
			</Row>
		</Container>
	)
}

export const ColCard = (props) => {
	const { lgCol, mdCol, smCol, xsCol, colClass, brCard, tlCard, styleCard, actionCard, children } = props
	const viewHeader = tlCard === '' ? null : (<CardHeader> {tlCard} </CardHeader>);
	return(
		<Col lg={lgCol} md={mdCol} sm={smCol} xs={xsCol} className={colClass}>
			<Card className={brCard}>
				{viewHeader}
				<CardBody>
					{children}
				</CardBody>
			</Card>
		</Col>
	)
}

export const B_Col = (props) => {
	const { lgCol, mdCol, smCol, xsCol, colClass } = props
	return{
		<Col lg={lgCol} md={mdCol} sm={smCol} xs={xsCol} className={colClass}>
		</Col>
	}
}