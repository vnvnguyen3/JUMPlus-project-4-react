import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../actions/userActions';

class NewAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first: '',
            last: '',
            address: '',
            userId: '',
            password: '',
            deposit: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            firstName: this.state.first,
            lastName: this.state.last,
            address: this.state.address,
            userId: this.state.userId,
            password: this.state.password,
            amount: this.state.deposit,
            transactions: []
        }
        this.props.signup(user);
        alert("You have successfully created a new account");
        this.props.history.push('/options');
    }

    render() {
        return (
            <div>
                <h2>Enter pin and make a deposit</h2>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label for="first">First Name: </label> <br />
                        <input type="text" name="first" onChange={this.onChange} 
                            value={this.state.first} />
                    </div>
                    <div>
                        <label for="last">Last Name: </label> <br />
                        <input type="text" name="last" onChange={this.onChange} 
                            value={this.state.last} />
                    </div>
                    <div>
                        <label for="address">Address: </label> <br />
                        <input type="text" name="address" onChange={this.onChange} 
                            value={this.state.address} />
                    </div>
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
                    <div>
                        <label for="deposit">Enter initial deposit: </label> <br />
                        <input type="number" name="deposit" onChange={this.onChange} 
                            value={this.state.deposit} />
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                    <br />
                    <Link to="/">
                        Go Back
                    </Link>
                </form>
            </div>
        )
    }
}

NewAccount.propTypes = {
    signup: PropTypes.func.isRequired,
    users: PropTypes.array
}

const mapStateToProps = state => ({
    users: state.users.users
})

export default connect(mapStateToProps, {signup})(NewAccount);