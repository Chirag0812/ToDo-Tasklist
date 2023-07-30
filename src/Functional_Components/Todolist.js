//todolist component displays data on UI

import React from "react";
import Table from 'react-bootstrap/Table';
import '../App.css'


const Todolist=({tasklist})=>{




	return (
		<>
		
			<Table striped bordered hover>
				<thead >
					<tr>
						<th className="thead-width">No.</th>
						<th>Tasks</th>
						<th>Action</th>

					</tr> 
				</thead>
				<tbody>
					{(tasklist || []).map((ele,key) => {//key starts from 0
						return (
							<tr >
								<td>{key+1}</td>
								<td>{ele.task}</td>
							</tr>
						)

					})}



				</tbody>
			</Table>

		</>
	)





}

 

export default Todolist;