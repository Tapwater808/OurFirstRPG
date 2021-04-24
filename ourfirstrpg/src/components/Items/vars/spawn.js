import sprite from '../../Sprite/vars/config';

const village = {
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
