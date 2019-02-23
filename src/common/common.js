exports.install = function (Vue, options) {
  Vue.prototype.getRow = function ({row, column, rowIndex, columnIndex}){
    if (rowIndex == 0) {
      return 'background:#F5F8F9'
    }
  };
};
