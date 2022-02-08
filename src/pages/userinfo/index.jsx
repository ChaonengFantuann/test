import React from "react";
import { connect } from "react-redux";


class Userinfo extends React.Component {
  render() {
    return (
      <>
      <p>{`姓名：${this.props.name}`}</p>
      <p>{`性别：${this.props.sex}`}</p>
      <p>{`年龄：${this.props.age}`}</p>
      </>
    )
  }
}

const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps)(Userinfo)