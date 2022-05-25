const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  const newstate = {
    good: state.good,
    ok: state.ok,
    bad: state.bad
  };
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      newstate.good += 1
      return newstate
    case 'OK':
      newstate.ok += 1
      return newstate
    case 'BAD':
      newstate.bad += 1
      return newstate
    case 'ZERO':
      newstate.good = 0
      newstate.ok = 0
      newstate.bad = 0
      return newstate
    default: return state
  }
  
}

export default counterReducer