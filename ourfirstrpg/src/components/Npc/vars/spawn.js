import sprite from '../../Sprite/vars/config';

const village = {
  '12,16': {
    location: {x: 12, y: 16},
    sprite: sprite.BadGuy1,
    dialog: [
      "This is a test",
      "Dammit",
      "I've been banned from Dave & Busters"
    ]
  }
}

const spawn = {village}

export default spawn;