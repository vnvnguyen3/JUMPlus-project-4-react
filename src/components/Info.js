import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Info extends Component {
    render(){
        return (
            <div>
                <h2>{this.props.user.user.firstName} {this.props.user.user.lastName}</h2>
                <p>User Id: {this.props.user.user.userId} </p>
                <p>Your account currently has ${this.props.user.user.amount}</p>
                <p>Address: {this.props.user.user.address}</p>
                <Link to="/options">
                    Go back
                </Link>
                <br />
            </div>
        )
    }
}

Info.propTypes = {
    user: PropTypes.object
}

const mapStateToProps = state => ({
    user: state.users.user
})

export default connect(mapStateToProps, {})(Info);