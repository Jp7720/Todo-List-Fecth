import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

//create your first component
export function Home() {
	const [list, setList] = useState([]);
	var url = "https://assets.breatheco.de/apis/fake/todos/user/Jp7720 ";

	function GET_Data() {
		fetch(url, {
			method: "GET",
			//body:
			headers: { "Content-Type": "application/json" }
		})
			.then(res => res.json())
			.then(data => {
				setList(data); //Setea mi lista :  [{ label: "Make the bed", done: false }]
				console.log({ data });
			})
			.catch(error => console.log("Error:", error.message));
	}

	//nota:despues de invocar a cada accion
	function PUT_Data(list) {
		fetch(url, {
			method: "PUT",
			body: JSON.stringify(list),
			headers: { "Content-Type": "application/json" }
		})
			.then(res => res.json())
			.then(data => {
				//setList(data); //Setea mi lista :  [{ label: "Make the bed", done: false }]
				console.log({ data });
			})
			.catch(error => console.log("Error:", error.message));
		//adicionar fetch
		// method: "PUT",
		// body: JSON.stringify(list),
	}
	function DELETE_Data() {
		fetch(url, {
			method: "DELETE",

			headers: { "Content-Type": "application/json" }
		})
			.then(res => res.json())
			.then(data => {
				GET_Data();
			})
			.catch(error => console.log("Error:", error.message));
		//adicionar fetch
		// method: "DELETE",
		//nota:dsps de deletear llamar al metodo post como indica el el api
	}
	function POST_Data() {
		fetch(url, {
			method: "POST",
			body: JSON.stringify(list),
			headers: { "Content-Type": "application/json" }
		})
			.then(res => res.json())
			.then(data => {
				setList(data); //Setea mi lista :  [{ label: "Make the bed", done: false }]
				console.log({ data });
			})
			.catch(error => console.log("Error:", error.message));
		//adicionar fetch
		// let array = [];
		// method: "POST",
		// body: JSON.stringify(array),
	}

	useEffect(() => {
		GET_Data();
	}, []);

	return (
		<div className="text-center mt-5">
			<h1>Todo List Fetch</h1>
			<ul className="list-group">
				{!list
					? "loading...."
					: list.map((item, index) => {
							return (
								<li key={index} className="list-group-item">
									{item.label}
								</li>
							);
					  })}
			</ul>
			<div className="row d-flex justify-content-center">
				<button
					type="button"
					className="btn btn-outline-success"
					onClick={() => {
						POST_Data(list);
					}}>
					Update
				</button>
				<button
					type="button"
					className="btn btn-outline-danger"
					onClick={() => {
						DELETE_Data(list);
					}}>
					Delete
				</button>
			</div>
		</div>
	);
}
