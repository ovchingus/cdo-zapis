import { fromJS } from 'immutable'
import { load } from '../actions/answersActions'


export const initialState = fromJS({
  answers: [],
})

const schedule = (state = initialState, action) => {
  switch (action.type) {
    case load.types.SUCCESS: {
      const { answers } = action.payload
      return state.setIn(['answers'], fromJS(answers))
    }

    case load.types.FAILED: {
      return {
        answers: [],
      }
    }

    default:
      return state
  }
}

export default schedule
