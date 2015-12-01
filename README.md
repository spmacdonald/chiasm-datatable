# chiasm-datatable
A basic HTML `<table>` component for the [Chiasm](https://github.com/chiasm-project/chiasm) project

## Usage
* Expects `data` property to be an array of objects such as what is emitted by `d3.json`
* Expects `columns` property to be an array of objects with the following keys: `value`, `formatter`, `color`.

## TODO
- [ ] Tests
- [ ] Allow `formatter` and `color` functions to be optional
- [ ] Expose hover and click events. Rows? Cells? Both?
- [ ] Pagination?
