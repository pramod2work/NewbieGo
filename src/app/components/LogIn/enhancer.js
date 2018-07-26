import { handleCrashError } from '../../utils/errorMapping'
// import { stateMapUrl } from '../../utils/stateMapping'
// import { gotoPage } from '../history'

const enhancer = WrappedComponent => class PreferredNameComponent extends WrappedComponent {
  constructor(props) {
    super(props)

    this.submitForm = this.submitForm.bind(this)
  }

  submitForm = ({ userName, password }) => {
    this.isFormSubmit = true
    const { data } = this.props.logInInitData
    data.callbacks[0].input[0].value = userName
    data.callbacks[1].input[0].value = password
  }

  render() {
    return super.render()
  }
}

export default enhancer
