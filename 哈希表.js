function hashStringToInt(s, tableSize) {
  let hash = 17;

  for (let i = 0; i < s.length; i++) {
    hash = (13 * hash * s.charCodeAt(i)) % tableSize;
  }

  return hash;
}

class HashTable {
  table = new Array(3333);
  numItems = 0;

  resize = () => {
    const newTable = new Array(this.table.length * 2);

    this.table.forEach((item) => {
      if (item) {
        const idx = hashStringToInt(item[0], newTable.length);
        newTable[idx] = item;
      }
    });

    this.table = newTable;
  };

  getItem = (key) => {
    const idx = hashStringToInt(key, this.table.length);

    if (!this.table[idx]) {
      return null;
    }

    return this.table[idx][1];
  };

  setItem = (key, val) => {
    this.numItems++;
    const loadFactor = this.numItems / this.table.length;

    if (loadFactor > 0.8) {
      this.resize();
    }

    const idx = hashStringToInt(key, this.table.length);
    this.table[idx] = [key, val];
  };
}

const myTable = new HashTable();
myTable.setItem('firstName', 'bob');
myTable.setItem('f', 'bob1');
myTable.setItem('firstNafe', 'bob2');
myTable.setItem('firstNafe', 'bob3');
console.log(myTable.getItem('firstName'));
console.log(myTable.getItem('f'));
console.log(myTable.getItem('firstNafe'));
