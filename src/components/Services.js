import React from 'react'
import Title from './Title'

import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

function Services() {
    const items = [{
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info: "jhjiugiu  oh iuhfidh h isfisheffih e e!",
    },
    {
        icon: <FaHiking />,
        title: "End Hiking",
        info: "jhjiugiu  oh iuhfidh h isfisheffih e e!  h isfisheffih e jhjiugiu  oh iuhfidh!",

    },
    {
        icon: <FaShuttleVan />,
        title: "Free shuttle",
        info: "jhjiugiu  oh iuhfidh h isfisheffih e e!",

    },
    {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info: "jhjiugiu  oh iuhfidh h isfisheffih e e!",

    }];
    return (
        <section className="services">
            <Title title="services" />
            <div className="services-center">
                {items.map((item, index) => {
                    return <article key={index} className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                })}
            </div>
        </section>
    )
}

export default Services
