import React from 'react'
class DataModal extends React.Component {
  constructor(props) {
    super(props)
    this.dataRef = React.createRef()
    this.callBack = props.callBack
  }

  render() {
    return <div ref={this.dataRef}>{this.props.children}</div>
  }
  componentDidMount() {
    const { elemType } = this.props
    const inputElem = this.dataRef.current.querySelector(
      `${elemType}[rg-modal]`
    )
    if (inputElem) {
      const _modal = inputElem.getAttribute('rg-modal')
      inputElem.addEventListener('input', (event) => {
        const arr = _modal.split('.')
        const dataState = arr.reverse().reduce((acc, cur, index) => {
          if (index === 0) {
            return Object.assign(acc, { [cur]: event.target.value })
          } else {
            return Object.assign({}, { [cur]: acc })
          }
        }, {})
        this.callBack(dataState)
      })
    }
  }
}

export default DataModal
