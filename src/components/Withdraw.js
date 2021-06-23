import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUser } from '../actions/userActions';

class Withdraw extends Component {
    constructor(props) {
        super(props);
        this.state = {
            withdraw: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const user = this.props.user;
        user.amount = parseInt(this.props.user.amount) - parseInt(this.state.withdraw);
        user.transactions.push(`Withdrew $${this.state.withdraw} from account`);
        alert(`Your account now has $${user.amount}`)
        this.props.updateUser(user);
        this.props.history.push('/options');
    }

    render(){
        return (
            <div>
                <h2>Your account currently has ${this.props.user.amount}</h2>
                <h3>How much would you like to withdraw</h3>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label for="withdraw">Withdraw Amount: </label> <br />
                        <input type="number" name="withdraw" onChange={this.onChange} 
                            value={this.state.withdraw} />
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                </form>
                <Link to="/options">
                    Go back
                </Link>
                <br />
            </div>
        )
    }
}

Withdraw.propTypes = {
    user: PropTypes.object
}

const mapStateToProps = state => ({
    user: state.users.user
})

export default connect(mapStateToProps, {updateUser})(Withdraw);