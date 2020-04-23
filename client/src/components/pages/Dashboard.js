import React, { Component } from "react";
import Sidebar from "../layout/Sidebar";

class Dashboard extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="row">
					<div className="col-md-2">
						<Sidebar />
					</div>
					<div className="col-md-10">
						<main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
							<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
								<nav class="navbar navbar-light bg-light">
									<form class="form-inline">
										<input
											class="form-control mr-sm-2"
											type="search"
											placeholder="Search"
											aria-label="Search"
										/>
									</form>
								</nav>
							</div>
						</main>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Dashboard;
