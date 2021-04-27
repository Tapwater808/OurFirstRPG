import sprite from '../../Sprite/vars/config';

const world = {
  '12,16': {
    location: {x: 12, y: 16},
    name: 'Wife',
    sprite: sprite.BadGuy1,
    dialog: [
      'Hello, honey, I am back from work!',
      'I am awfully hungry, would you be a dear and run to the store to pick up some fruit?',
      'Any kind is fine. '
    ]
  },
  '16,16': {
    location: {x: 16, y: 16},
    name: 'Doggo',
    sprite: sprite.Spooder,
    dialog: [
      'Woof',
      'Pretend I am a dog, please.',
      'Woof woof'
    ]
  }
}

const spawn = {world}

export default spawn;