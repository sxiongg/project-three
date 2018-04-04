import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { changeStateToFalse } from '../redux/actions'

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const isLoggedIn = this.props.isLoggedIn;
        const user = this.props.user;

        return (
            <div>
                <ul className="nav nav-pills nav-justified">
                    <li> {isLoggedIn ? (
                        <p className="greeting"> Hello, {user}! </p>
                    ) : (
                            <Link to="/"> Home </Link>
                        )}
                    </li>
                    <li> <Link to="/generate-new-chart"> Generate Chart </Link></li>
                    <li> <Link to="/your-saved-charts"> Your Charts </Link></li>
                    <li onClick={this.setToFalse.bind(this)}>
                        {isLoggedIn ? (
                            <Link to="/"> Log Out </Link>
                        ) : (
                                <Link to="/sign-up"> Create Account </Link>
                            )}
                    </li>
                </ul>
            </div>
        )
    }

    setToFalse() {
        this.props.setLoggedInToFalse(false);
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.loggedIn,
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setLoggedInToFalse: bool => dispatch(changeStateToFalse(bool))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);