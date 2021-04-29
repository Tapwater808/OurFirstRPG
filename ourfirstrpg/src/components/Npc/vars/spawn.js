import sprite from '../../Sprite/vars/config';

const world = {
  '12,36': {
    location: {x: 12, y: 36},
    name: 'Boy',
    sprite: sprite.Boy2,
    dialog: [
      'You\'re looking for the store?',
      '...It\'s the only other building in the town besides your house.',
      'You can find it. I believe in you.'
    ]
  }
}

const house = {
  '60,36': {
    location: {x: 60, y: 36},
    name: 'Wife',
    sprite: sprite.BadGuy1,
    dialog: [
      'Hello, honey, I am back from work!',
      'I am awfully hungry, would you be a dear and run to the store to pick up some fruit?',
      'Any kind is fine.'
    ]
  },
  '20,40': {
    location: {x: 20, y: 40},
    name: 'Doggo',
    sprite: sprite.Spooder,
    dialog: [
      'Woof',
      'Pretend I am a dog, please.',
      'Woof woof'
    ]
  }
}

const dungeon = {
  '72,64': {
    location: {x: 72, y: 64},
    name: 'Dungeon Worker',
    sprite: sprite.BatLady,
    dialog: [
      'Hello, adventurer.',
      'Wait a moment, you don\'t seem to be an adventurer at all.',
      'Sorry, I can\'t let you in the dungeon, then. Wouldn\'t want you getting hurt.',
      'No, I don\'t take bribes. Tell your wife I say hi.'
    ]
  }
}

const store = {
  '36,52': {
    location: {x: 36, y: 52},
    name: 'Banan',
    sprite: sprite.Banan,
    dialog: [
      'I am Banan'
    ]
  },
  '100,36': {
    location: {x: 100, y: 36},
    name: 'Apple',
    sprite: sprite.Appl3,
    dialog: [
      'Appley juice'
    ]
  },
  '80,24': {
    location: {x: 80, y: 24},
    name: 'Employee',
    sprite: sprite.Girl1,
    dialog: [
      'Hello! Welcome to the Store!',
      'What\'s that? You want to buy some fruit?',
      'We don\'t sell fruit here. If you find any on the floor, you can just take it.',
      'Maybe just don\'t tell my manager about it, though.'
    ]
  }
}

const spawn = { world, house, dungeon, store }

export default spawn;