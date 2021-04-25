import Apple from '../../../Items/food/apple/apple';
import Banana from '../../../Items/food/banana/banana';
import Item from '../items';

const worldObjects = [
    Apple= new Item ("apple", 0),
    Banana = new Item ("banana", 3),
];

Apple.description = "A naturally sweet fruit, may be poisonous depending on source.";
Banana.description = "A delicious fruit that has been heavily modified by man";

export default worldObjects;