import { handleCrashError } from '../../utils/errorMapping'
// import { stateMapUrl } from '../../utils/stateMapping'
import { gotoPage } from '../history'

const enhancer = WrappedComponent => class PreferredNameComponent extends WrappedComponent {
  constructor(props) {
    super(props)

    this.state = { isSubmitting: false }
    this.submitForm = this.submitForm.bind(this)
  }

  componentDidUpdate(props) {
    if(this.isSubmit) {
      window.setTimeout(() => {
        gotoPage('/profile')
      }, 1000)
    }
  }

  submitForm = ({ userName, password }) => {
    this.isSubmit = true
    this.setState({ ...this.state, isSubmitting: !this.state.isSubmitting })
  }

  render() {
    return super.render()
  }
}

export default enhancer
