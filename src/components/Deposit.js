import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUser } from '../actions/userActions';

class Deposit extends Component {
    constructor(props) {
        super(props);
        this.state = {
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

        const user = this.props.user;
        user.amount = parseInt(this.props.user.amount) + parseInt(this.state.deposit);
        user.transactions.push(`Deposited $${this.state.deposit} into account`);
        alert(`Your account now has $${user.amount}`)
        this.props.updateUser(user);
        this.props.history.push('/options');
    }

    render(){
        return (
            <div>
                <h2>Your account currently has ${this.props.user.amount}</h2>
                <h3>How much would you like to deposit</h3>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label for="deposit">Deposit Amount: </label> <br />
                        <input type="number" name="deposit" onChange={this.onChange} 
                            value={this.state.deposit} />
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                </form>
                <Link to="/transactions">
                    Go back
                </Link>
                <br />
            </div>
        )
    }
}

Deposit.propTypes = {
    user: PropTypes.object
}

const mapStateToProps = state => ({
    user: state.users.user
})

export default connect(mapStateToProps, {updateUser})(Deposit);