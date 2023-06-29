import ClassRoom from './0-classroom.js';

function initializeRooms() {
  const roomSizes = [19, 20, 34];
  const rooms = [];

  for (const roomSize of roomSizes) {
    const room = new ClassRoom(roomSize);
    rooms.push(room);
  }

  return rooms;
}

export default initializeRooms;
