class StringBuilder {
    #value
    constructor(initialValue) {
     this.#value = initialValue   
    }
    getValue(){
        return this.#value
    }
    padStart(obj){
        return this.#value = obj + this.#value
    }
    padEnd(obj){
        return this.#value += obj
    }
    padBoth(obj){
        return this.#value = obj + this.#value + obj
    }
}



const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
