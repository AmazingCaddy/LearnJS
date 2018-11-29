Object.defineProperty(Array.prototype, 'findX', {
  value: function (name) {
    console.log(name);
  }
});

const x = [].findX("hahah");