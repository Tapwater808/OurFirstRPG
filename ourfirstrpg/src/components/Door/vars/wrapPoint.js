const HouseToWorld = {
  '52,68': {
    location: {x: 52, y: 68},
    to: 'world',
    spawnPlayerAt: {x: 20, y: 32},
    width: 8,
    height: 4
  }
}

const WorldToHouse = {
  '20,28': {
    location: {x: 20, y: 28},
    to: 'house',
    spawnPlayerAt: {x: 52, y: 64},
    width: 4,
    height: 4
  }
}

const WorldToStore = {
  '32,56': {
    location: {x: 32, y: 56},
    to: 'store',
    spawnPlayerAt: {x: 64, y: 12},
    width: 4,
    height: 4
  }
}

const StoreToWorld = {
  '48,8': {
    location: {x: 48, y: 8},
    to: 'world',
    spawnPlayerAt: {x: 32, y: 52},
    width: 24,
    height: 4
  }
}

const WorldToDungeon = {
  '100,44': {
    location: {x: 100, y: 44},
    to: 'dungeon',
    spawnPlayerAt: {x: 52, y: 72},
    width: 8,
    height: 8
  }
}

const DungeonToWorld = {
  '52,76': {
    location: {x: 52, y: 76},
    to: 'world',
    spawnPlayerAt: {x: 96, y: 44},
    width: 8,
    height: 4
  }
}
const wrapPoint = {house:{...HouseToWorld},store:{...StoreToWorld},dungeon:{...DungeonToWorld},world:{...WorldToHouse,...WorldToDungeon,...WorldToStore}}
export default wrapPoint;