import sprite from '../../Sprite/vars/config';

const village = {
  '12,16': {
    location: {x: 12, y: 16},
    name: 'Wife',
    sprite: sprite.BadGuy1,
    dialog: [
      'This is a new test',
      'I am your wife',
      'Make me a sandwich, please :)'
    ]
  }
}

const spawn = {village}

export default spawn;