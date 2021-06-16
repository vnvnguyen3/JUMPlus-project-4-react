import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class ViewTransactions extends Component {
    render(){
        const transactions = this.props.user.transactions.map(transaction => (
            <p>{transaction}</p>
        ));
        return (
            <div>
                <h2>View Transactions</h2>
                {transactions}
                <br />
                <Link to="/options">
                    Go back
                </Link>
            </div>
        )
    }
}

ViewTransactions.propTypes = {
    user: PropTypes.object
}

const mapStateToProps = state => ({
    user: state.users.user
})

export default connect(mapStateToProps, {})(ViewTransactions);