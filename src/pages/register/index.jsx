import React from "react";
import { Outlet, Link } from "react-router-dom";
import { connect } from "react-redux";


class Register extends React.Component {

  state = {
    name: "",
    sex: "",
    age: ""
  }

  handleChangeName = e => {
    this.setState({
      name: e.target.value
    })
  }

  handleChangeSex = e => {
    this.setState({
      sex: e.target.value 
    })
  }

  handleChangeAge = e => {
    this.setState({
      age: e.target.value
    })
  }

  handleClick = () => {
    this.props.secdAction(this.state)
  }

  render() {
    return (
      <>
      <div>姓名：</div>
      <input type="text" value={this.state.name} placeholder="请输入您的姓名" onChange={this.handleChangeName} />
      <div>性别：</div>
      <input type="text" value={this.state.sex} placeholder="请输入您的性别" onChange={this.handleChangeSex} />
      <div>年龄：</div>
      <input type="text" value={this.state.age} placeholder="请输入您的年龄" onChange={this.handleChangeAge} />
      <br />
      <button onClick={this.handleClick}>
        <Link to="userinfo">注册</Link>
      </button>
      <Outlet />
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    secdAction: (value) => {
      dispatch({
        type: "action",
        state: value
      })
    }
  }
}

export default connect(null, mapDispatchToProps)(Register)
