import React from 'react'
import { RoomConsumer, withRoomConsumer } from '../RoomProvider';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import Loading from './Loading';

function RoomContainer({ context }) {
    const { loading, rooms, sortedRooms } = context;
    //console.log(context);
    if (loading)
        return <Loading />;
    return (
        <div>
            <RoomFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />
        </div>

        // <RoomConsumer>
        //     {value => {
        //         const { loading, rooms, sortedRooms } = value;
        //         if (loading)
        //             return <Loading />;

        //         return (
        //             <div>
        //                 <h6>from rooms Container</h6>
        //                 <RoomFilter rooms={rooms} />
        //                 <RoomList rooms={sortedRooms} />
        //             </div>
        //         )
        //     }}
        // </RoomConsumer>
    );
}

export default withRoomConsumer(RoomContainer);
