//* stateful means it can hold a dedicated value in multiple iterations but stateless can't do this
//? according to javascript mostly functions are stateless and objects are statefull

const counter = (amount) => {              //!this function is stateless (it can't hold previous data)
    let count = 0;
    count = count + amount;
  return count;
};

// console.log(counter(2));
// console.log(counter(3));

const counterr = {                        //*this object is statefull (it can hold previous data)   
  count: 0,
  add(amount) {
    this.count = this.count + amount;
  },
  print() {
    console.log(this.count);
  },
};

counterr.add(2);
counterr.add(3);
counterr.print();