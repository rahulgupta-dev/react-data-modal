# react-data-bind

Two way data binding for react components.
No need to write listener for each input element to set the state.

# Installation 

```
npm install react-data-bind
npm i react-data-bind
```

# Usage

```
import React from 'react' 
import DataBind from 'react-data-bind' 
class Product extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      product: {
        name: 'Product 1',
      },
      selectValue: 1,
    }
    this.bindData = this.bindData.bind(this)
  }
  bindData(partialState) {
    this.setState(partialState)
  }
  render() {
    return (
	<div>
	<DataBind callBack={this.bindData} elemType="input">
		<input
		  type="text"
		  name="product.name"
		  value={this.state.product.name}
		  rg-modal="product.name"
		/>
	</DataBind>
	<DataBind callBack={this.bindData} elemType="select">
	   <select rg-modal="selectValue" value={this.state.selectValue}>
		  <option value="">Select something</option>
		  <option value="1">Option 1</option>
		  <option value="2">Option 2</option>
		  <option value="3">Option 3</option>
	   </select>
	</DataBind>
	</div>)
  }
}
export default Product

```
