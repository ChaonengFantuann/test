const initState = {
  name: "",
  sex: "",
  age: ""
}

exports.reducer = (state = initState, action) => {
  // console.log(`action.state:${JSON.stringify(action.state)}`);
  switch (action.type) {
    case "action":
      return {
        name: action.state.name,
        sex: action.state.sex,
        age: action.state.age
      }
    default:
      return state
  }
}