import React, { Component } from "react";

class Orders extends Component {
	render() {
		return (
			<div className="container order">
				<div className="row">
					<div className="col-md-6">
						<h5 className="text-right text-danger">Orders Details:</h5>
					</div>

					<table className="table table-striped">
						<thead className="thead-light">
							<tr>
								<th>Name of Customer</th>
								<th>Product Ordered</th>
								<th> Quantity</th>
								<th> Date</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Omega B</td>
								<td>Celgevity</td>
								<td>Vitabiotics</td>
								<td>Covid-19 cure</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default Orders;
