import React from 'react'

class DataModal extends React.Component {
  constructor(props) {
    super(props)
    this.dataRef = React.createRef()
    this._parent = props._this
  }

  render() {
    return <div ref={this.dataRef}>{this.props.children}</div>
  }
  componentDidMount() {
    const { inputType } = this.props
    const inputElem = this.dataRef.current.querySelector(
      `${inputType}[rg-modal]`
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
        this._parent['setState'](dataState)
      })
    }
  }
}

export default DataModal
