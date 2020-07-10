import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function getResume() {
	return axios.get("https://einthiri-resume.herokuapp.com/resume");
}

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = { resume: null };
	}

	render() {

		getResume().then(result => {
			this.setState({ resume: result.data });
		});

		return (
			<div className='container'>
				{
					this.state.resume == null ? (<h4> Resume is loading </h4>) : (<div>


						<h2> {this.state.resume.name} </h2>
						<div class="row">
							<div class="col-sm-4">.col-sm-4</div>
							<div class="col-sm-4">.col-sm-4</div>
							<div class="col-sm-4">.col-sm-4</div>
						</div>
						<h3> Age: {this.state.resume.age} </h3>
						<h4> Gpa: {this.state.resume.gpa} </h4>




						<h4 className=".bg-warning"> Hobbies </h4>
						<ul className="list-group">
							{this.state.resume.hobbies.map(hobby => <li className='list-group-		item'>{hobby}</li>)}
						</ul>

						<h4> Courses </h4>
						<ul className="list-group">
							{this.state.resume.courses.map(course => <li className='list-group-		item'>{course}</li>)}
						</ul>

						<h4> Awards </h4>
						<ul className="list-group">
							{this.state.resume.awards.map(award => <li className='list-group-		item'>{award}</li>)}
						</ul>

					

						<div className="container">
							<img src="profile.jpg" className="img-rounded" alt="Profile" />
						</div>
					</div>)
				}
			</div>

		);
	}
}


export default App;
