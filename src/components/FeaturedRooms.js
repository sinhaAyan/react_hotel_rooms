import React, { Component } from 'react'
import { RoomContext } from '../RoomProvider'
import Loading from './Loading';
import Room from './Room';
import Title from './Title';

export default class FeaturedRooms extends Component {
    static contextType = RoomContext; //accessing CONTEXT object.
    render() {
        //let { greeting, name } = this.context;     
        let { loading, featuredRooms: rooms } = this.context;   //accessing context value.
        rooms = rooms.map(room => {        //returning new rooms array  
            return <Room key={room.id} room={room} />
        });
        //console.log(rooms); 
        return (
            <section className="featured-rooms">
                <Title title="featured rooms" />
                <div className="featured-rooms-center">
                    {loading ? <Loading /> : rooms}
                </div>
            </section>
        );
    }
}
