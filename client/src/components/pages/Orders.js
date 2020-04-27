import React, { useState, useEffect } from "react";
import axios from "axios";
import Preloader from "../utils/Preloader";

const Orders = () => {
	const [orderlist, setOrders] = useState([]);
	const [loading, setLoading] = useState(false);
	const url =
		"https://td8ton72u4.execute-api.us-east-2.amazonaws.com/test/orders";
	const fetchData = async () => {
		try {
			// While waiting for the data to be fetched
			setLoading(true);
			// Make call to API
			const result = await axios.get(url);

			const ordersFound = result.data;

			setOrders(ordersFound.orders);
			setLoading(false);
		} catch (error) {
			if (error) {
				console.log(error);
			}
		}
	};
	// const fetchData = async () => {
	// 	try {
	// 		setLoading(true);
	// 		let result = await fetch(
	// 			"https://td8ton72u4.execute-api.us-east-2.amazonaws.com/test/orders"
	// 		);

	// 		const data = await result.json();
	// 		await setOrders(data.orders);
	// 		setLoading(false);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };
	useEffect(() => {
		fetchData();
	});
	console.log(orderlist);

	const showOrders = () => {
		if (orderlist) {
			return orderlist.map((eachOrder, index) => (
				<tr key={index}>
					<td>
						{eachOrder.customer.first_name} {eachOrder.customer.last_name}
					</td>
					<td>{eachOrder.name}</td>
					<td>
						{eachOrder.line_items.map((item) => {
							return item.quantity;
						})}
					</td>
					<td>{eachOrder.created_at}</td>
				</tr>
			));
		} else {
			return <Preloader />;
		}
	};

	return (
		<div className="container order order-menu">
			<div className="row">
				<div className="col-md-6">
					<h5 className="text-right text-danger">Orders Details:</h5>
				</div>

				<table className="table table-striped">
					<thead className="thead-light text-center">
						<tr>
							<th>Name of Customer</th>
							<th>Product Ordered</th>
							<th> Quantity</th>
							<th> Date</th>
						</tr>
					</thead>
					<tbody className="text-center">{showOrders()}</tbody>
				</table>
			</div>
		</div>
	);
};

export default Orders;
