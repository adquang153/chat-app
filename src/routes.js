import PublicChat from './components/PublicChat';
import RoomChat from './components/RoomChat';
import Location from './components/Location';

export default [
    { path: '/', exact: true, Components: Location },
    { path: '/chat', exact: true, Components: PublicChat },
    { path: '/roomChat', Components: RoomChat },
];