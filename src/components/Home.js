import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/userActions';

class Home extends Component {

    componentDidMount(){
        this.props.fetchUsers();
    }

    render(){
        return (
            <div>
                <h2>Would you like to make a log in or open a new account?</h2>
                <Link to="/login">
                    Login
                </Link>
                <br />
                <Link to="/new">
                    New Account
                </Link>
                <br />
            </div>
        )
    }
}

Home.propTypes = {
    fetchUsers: PropTypes.func.isRequired,
    user: PropTypes.object
}

const mapStateToProps = state => ({
    user: state.users.user
})

export default connect(mapStateToProps, {fetchUsers})(Home);
