class Storage {
    #items
    constructor(parameters) {
        this.#items = parameters;
    }
    getItems() {
        return this.#items
    }
    addItem(newItem){
        return this.#items.push(newItem)
    }
    removeItem(oldItem){
        const index = this.#items.indexOf(oldItem);
        if (index !== -1) {
            return  this.#items.splice(index, 1); 
          }
          return this.#items
    }
}








const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
