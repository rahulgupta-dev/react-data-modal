# react-data-modal

Two way data binding for react components

# Installation 
npm i react-data-modal

# Usage

```
<DataModal callBack={this.setState} elemType="input">
    <input
      type="text"
      name="inputValue"
      value={this.state.inputValue}
      rg-modal="inputValue"
    />
</DataModal>
<DataModal callBack={this.setState} elemType="input">
   <select rg-modal="modal.selectVal" value={this.state.modal.selectVal}>
      <option value="">Select something</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
   </select>
</DataModal>
```
