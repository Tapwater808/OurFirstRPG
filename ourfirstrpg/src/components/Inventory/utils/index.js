import inventory from '../Items/vars/inventory'

const getItemDetail = (name) => {
    return inventory[name];
};

export default getItemDetail;