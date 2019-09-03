class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;

  }
  add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort((a, b) => a - b)
  }
  get(pos) {
    return this.items[pos];

  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.items);
    }
  }
  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.items);
    }
  }
  average() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items.reduce((accumulator, curentValue) => accumulator + curentValue, 0) / this.items.length;
    }
  }
  sum() {
    return this.items.reduce((accumulator, curentValue) => accumulator + curentValue, 0);
  }
};

module.exports = SortedList;