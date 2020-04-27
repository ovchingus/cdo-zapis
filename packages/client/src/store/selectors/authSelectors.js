import { toJS } from '../utils'

export const getToken = (state) => toJS(state.getIn(['auth', 'token']))

export const isLoggedIn = (state) => toJS(state.getIn(['auth', 'isLoggedIn']))
export const isInitialized = (state) => toJS(state.getIn(['auth', 'initialized']))
