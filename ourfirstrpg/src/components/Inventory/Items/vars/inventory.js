import worldObjects from './objects'

const inventory = [];

for (let i of worldObject) {
    if (i.state === 3) {
        inventory.push(i.name);
    }
};

console.log(inventory);