import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUser } from '../actions/userActions';

class Update extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pin: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const userExists = this.props.users.filter(user => user.user.pin === this.state.pin)[0];
        if(typeof userExists !== 'undefined'){
            alert("Someone already has this PIN");
        }else if(this.state.pin.length !== 4){
            alert("pin is not the correct length");
        }else if(isNaN(this.state.pin)){
            alert("pin needs to be a number")
        }else{
            const user = this.props.user.user;
            user.pin = this.state.pin;
            alert("PIN successfully changed")
            this.props.updateUser(user);
            this.props.history.push('/transactions');
        }
    }

    render(){
        return (
            <div>
                <h2>Update your PIN</h2>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label for="pin">Pin: </label> <br />
                        <input type="text" name="pin" onChange={this.onChange} 
                            value={this.state.pin} />
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

Update.propTypes = {
    user: PropTypes.object,
    users: PropTypes.array
}

const mapStateToProps = state => ({
    user: state.users.user,
    users: state.users.users
})

export default connect(mapStateToProps, {updateUser})(Update);