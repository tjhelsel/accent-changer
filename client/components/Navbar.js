import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export const Navbar = () => (
  <div id="navbar">
    <h1>Accentuize</h1>
    <nav>
      <div>
        <Link to="/">Home </Link>
      </div>
    </nav>
    <hr />
  </div>
);

// /**
//  * CONTAINER
//  */
// const mapState = state => {
//   return {
//     isLoggedIn: !!state.user.id
//   };
// };

// const mapDispatch = dispatch => {
//   return {
//     handleClick() {
//       dispatch(logout());
//     }
//   };
// };

// export default connect(
//   mapState,
//   mapDispatch
// )(Navbar);

// /**
//  * PROP TYPES
//  */
// Navbar.propTypes = {
//   handleClick: PropTypes.func.isRequired,
//   isLoggedIn: PropTypes.bool.isRequired
// };
