//todolist component displays data on UI

import React from "react";
import Table from 'react-bootstrap/Table';
import '../App.css'


const Todolist = ({ tasklist, markAsDone, clearTodo }) => {

	function doneBtnHandler(id) {
		markAsDone(id)
	}

	function clearTask(id) {
		clearTodo(id)
	}

	return (
		<>
			<Table striped bordered hover>
				<thead >
					<tr>
						<th className="thead-width">No.</th>
						<th>Tasks</th>
						<th>Actions</th>

					</tr>
				</thead>
				<tbody>
					{(tasklist || []).map((ele, key) => {//key starts from 0
						return (
							<tr className={ele.status === 3 ? "hidden" : ''}>
								<td className={ele.status === 2 ? "strikethrough" : ''} >{key + 1}</td>
								<td className={ele.status === 2 ? "strikethrough" : ''} >{ele.task}</td>

								<td>
									<button danger onClick={() => { doneBtnHandler(ele.id) }} className='btn btn-success btn-sm' >Done</button>
									{/* We are passing current element id(unique data) to the doneBtnHandler so we used arrow fn in button above */}
									&nbsp;&nbsp;&nbsp;
									<button danger onClick={() => { clearTask(ele.id) }} className='btn btn-success btn-sm'>Clear</button>
								</td>
							</tr>
						)

					})}

				</tbody>
			</Table>
		</>
	)





}



export default Todolist;