import { Component } from "react";
import { Link } from "react-router-dom";
import { React } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundert component caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          There waw an erroer with this listing.{" "}
          <Link to="/">Click here to go back to the home page</Link>
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;