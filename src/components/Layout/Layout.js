import React from "react";
import { connect } from "react-redux";
import TodosPage from "../Pages/TodosPage";
import LoginPage from "../Pages/LoginPage";

const Layout = ({ isSigned }) => {
  const renderPage = () => {
    if (isSigned) {
      return <TodosPage />;
    }
    return <LoginPage />;
  };

  return renderPage();
};

const mapStateToProps = state => {
  return {
    isSigned: state.auth.isSigned
  };
};

export default connect(mapStateToProps)(Layout);
