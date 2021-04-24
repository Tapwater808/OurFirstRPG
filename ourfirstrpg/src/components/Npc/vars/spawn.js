import sprite from '../../Sprite/vars/config';

const world = {
  '12,16': {
    location: {x: 12, y: 16},
    name: 'Wife',
    sprite: sprite.BadGuy1,
    dialog: [
      'Hello, honey, I am back from work!',
      'I am awfully hungry, would you be a dear and make me a ham and cheese sandwich?',
      'The ingredients should be in various places around the house.'
    ]
  }
}

const spawn = {world}

export default spawn;