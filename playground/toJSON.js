
const pet = {
    name: 'Hal'
}

// console.log(JSON.stringify(pet))

// {"name":"Hal"}
//In Express : when we pass an object to response.send it calling JSON.stringify behind the seen

// when we setup toJSON its gon get called whenever that object get stringify; 
pet.toJSON = function () {
    console.log(this);
    this.type = 'dog';
    return this;
    // return { };
}

console.log(JSON.stringify(pet))


