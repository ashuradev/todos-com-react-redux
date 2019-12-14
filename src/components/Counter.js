import React from 'react';
import { connect } from 'react-redux';

const Counter = ({ todos }) => (
  <h2>Você tem: {todos.length} todos</h2>
);

const mapStateToProps = ({ todos }) => ({
  todos,
});

export default connect(
  mapStateToProps,
)(Counter);