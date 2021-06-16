import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/userActions';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            password: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const user = this.props.users.filter(user => user.userId === this.state.userId && user.password === this.state.password)[0];
        if (typeof user !== 'undefined'){
            this.props.login(user);
            alert("You have successfully logged in");
            this.props.history.push('/options');
        }
        else {
            alert("Incorrect username and/or password");
        }
    }

    render(){
        return (
            <div>
                <h2>Please Log In</h2>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label for="userId">User Id: </label> <br />
                        <input type="text" name="userId" onChange={this.onChange} 
                            value={this.state.userId} />
                    </div>
                    <div>
                        <label for="password">Password: </label> <br />
                        <input type="password" name="password" onChange={this.onChange} 
                            value={this.state.password} />
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                </form>
                <Link to="/">
                    Go Back
                </Link>
            </div>
        )
    }
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    users: PropTypes.array
}

const mapStateToProps = state => ({
    users: state.users.users
})

export default connect(mapStateToProps, {login})(Login);