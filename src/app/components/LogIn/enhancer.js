import { handleCrashError } from '../../utils/errorMapping'
// import { stateMapUrl } from '../../utils/stateMapping'
// import { gotoPage } from '../history'

const enhancer = WrappedComponent => class PreferredNameComponent extends WrappedComponent {
  constructor(props) {
    super(props)

    this.state = { isSubmitting: false }
    this.submitForm = this.submitForm.bind(this)
  }

  componentDidUpdate(props) {
    window.setTimeout(() => {
      this.setState({ ...this.state, isSubmitting: !this.state.isSubmitting })
    }, 2000)
  }

  submitForm = ({ userName, password }) => {
    this.setState({ ...this.state, isSubmitting: !this.state.isSubmitting })
  }

  render() {
    return super.render()
  }
}

export default enhancer
