import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../../store/actions';

class GoogleAuth extends React.Component {
    //call the client.auth2 library when this component loads
    componentDidMount() {
        window.gapi.load('client:auth2',() => {
            window.gapi.client.init({
                clientId: '262047326509-1r9nn573psmdemg81m35vn9kpjlch41m.apps.googleusercontent.com', //From the developers website
                scope: 'email' // We are only asking for their email
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance(); //Delcaration of the getAuthInstance object once the request is done
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if(this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon" /> Sign Out
                </button>
            ) 
        } else {
            return(
                <button onClick={this.onSignInClick} className="ui red google button">
                    <i className="google icon" />
                    Sign in
                </button>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
            )
    }
}

const mapStateToProps = state => {
    return {
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);

