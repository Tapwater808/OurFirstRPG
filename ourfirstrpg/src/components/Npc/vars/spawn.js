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
  },
  '18,20': {
    location: {x: 18, y: 20},
    name: 'Apple',
    sprite: sprite.Apple,
    dialog: [
      'Yum, an apple!'
    ]
  },
  '22,24': {
    location: {x: 22, y: 24},
    name: 'Banana',
    sprite: sprite.Banana,
    dialog: [
      'Yum, a banana!'
    ]
  }
}

const spawn = {village}

export default spawn;