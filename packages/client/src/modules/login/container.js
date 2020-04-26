import { connect } from 'react-redux'
import Login from './page'

import { authActions } from '../../store/actions'
import { authSelectors } from '../../store/selectors'

const mapStateToProps = (state) => ({
  status: authSelectors.getStatus(state),
  message: authSelectors.getMessage(state),
  isAuth: authSelectors.getIsAuth(state),
  login: authSelectors.getLogin(state),
})

const mapDispatchToProps = (dispatch) => ({
  logIn: (login, password, remember = false) => dispatch(authActions.load.base({ login, password, remember })),
  logOut: () => dispatch(authActions.logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
