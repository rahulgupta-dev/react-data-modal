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
<DataBind callBack={this.setState} elemType="input">
    <input
      type="text"
      name="inputValue"
      value={this.state.inputValue}
      rg-modal="inputValue"
    />
</DataBind>
<DataBind callBack={this.setState} elemType="select">
   <select rg-modal="modal.selectVal" value={this.state.modal.selectVal}>
      <option value="">Select something</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
   </select>
</DataBind>
```
