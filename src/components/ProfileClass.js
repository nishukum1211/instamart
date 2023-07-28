import React from 'react';


class Profile extends React.Component {
    constructor(props) {
        super(props);
        //create state
        this.state = {
            userInfo: {
                name: "Dummy Name",
                location: "Dummy Location",

            }
        }
        console.log("child-Constructor");
    }
    async componentDidMount () {
        const data= await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        this.setState({
            userInfo: json,
        });

    }
    render () {
        const {Count} = this.state;

        return (

            <div>
                <h1>Profile Class Component</h1>
                <img src={this.state.userInfo.avatar_url} />
                <h2>Name: {this.state.userInfo.name}</h2>
                <h2>Location: {this.state.userInfo.location}</h2>
                
                
            </div>
        );

            

    }

}
export default Profile;