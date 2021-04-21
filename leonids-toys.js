const toys = [
  {
    id: 1,
    name: "pokemon",
    price: 10.99,
    color: "yellow",
    quantity: 99,
    instock: true,
  },

  {
    id: 2,
    name: "basketball",
    price: 15.99,
    color: "orange",
    quantity: 20,
    instock: true,
  },

  {
    id: 3,
    name: "skateboard",
    price: 35.99,
    color: "black",
    quantity: 0,
    instock: false,
  },
];

/* for (const toy of toys) {
  toy.price = toy.price * 1.05;

  console.log(`The ${toy.color} ${toy.name} costs $${toy.price}`);
} */

const jumprope = {
  name: "jumprope",
  price: 5.99,
  color: "pink",
  quantity: 10,
  instock: true,
};

const legos = {
  name: "legos",
  price: 25.99,
  color: "multi",
  quantity: 23,
  instock: true,
};

const addNewToy = (toyObject) => {
  const lastIndex = toys.length - 1;
  const currentLastToy = toys[lastIndex];
  const maxId = currentLastToy.id;
  const idForNewToy = maxId + 1;

  toyObject.id = idForNewToy;
  toys.push(toyObject);
};

addNewToy(legos);

const searchToyId = (toyId) => {
  let toyStatus = "";
  for (const toy of toys) {
    if (toy.id === toyId) {
      toyStatus = `The ${toy.color} ${toy.name} is $${toy.price}.`;
      return toyStatus;
    } else {
      toyStatus = "Toy not found";
    }
  }
  return toyStatus;
};

console.log(searchToyId(2));
console.log(searchToyId(8));

const removeProduct = (toyId) => {
  let toyToRemove;
  for (const toy of toys) {
    if (toys.id === toyId) {
      toyToRemove = toy;
    }
  }
  const toyIndex = toys.indexOf(toyToRemove);
  toys.splice(toyIndex, 1);
};

removeProduct(3);
removeProduct(1);

addNewToy(jumprope);

console.log(toys);
