import React from "react";

class ProfileClassCompo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userName : "",
			registration : 0
		}
	}

	componentDidMount() {
		console.log("fetch the API");
	}

	

	render() {
		this.setState({
			userName : this.props.userName,
			registration : this.props.registration
		})
		return(
			<div className=" flex flex-col text-2xl font-sans font-normal">
				<h1>Name : {this.state.userName}</h1>
				<h1>Registration Number : {this.state.registration}</h1>
				<h1>Branch : {(this.state.registration == 8888)? "--":"Computer Science Engineering"}</h1>
				<h1>Batch : 2019</h1>
				<h1>Semester : 8th</h1>
			</div>
		);
	}
}

export default ProfileClassCompo;
