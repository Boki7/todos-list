import React, { Component } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { connect } from "react-redux";
import { isSignedIn } from "../../store/actions/index";
import firebase from "firebase/app";
import "firebase/app";
import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyCsagXfkRVH9w9zZ9BBhauZegFXmkYbr-s",
  authDomain: "todolist-b3ae6.firebaseapp.com"
});

class Auth extends Component {
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccessWithAuthResult: function(
        currentUser,
        credential,
        redirectUrl
      ) {
        return false;
      }
    }
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
      this.props.isSignedIn(!!user);
    });
  };

  renderContent = () => {
    if (this.props.isSigned) {
      return <button onClick={() => firebase.auth().signOut()}>Logout</button>;
    }

    return (
      <StyledFirebaseAuth
        uiConfig={this.uiConfig}
        firebaseAuth={firebase.auth()}
      />
    );
  };

  render() {
    return this.renderContent();
  }
}

const mapStateToProps = state => {
  return {
    isSigned: state.auth.isSigned
  };
};

export default connect(
  mapStateToProps,
  {
    isSignedIn
  }
)(Auth);
