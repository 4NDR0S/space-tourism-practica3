import React from 'react'

export default function DestinationDetail({ destination }) {
    const destinationsData = {
        Moon: {
            description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
            imageUrl: "../../assets/destination/image-moon.png",
            distance: "384,400 km",
            travel: "3 days"
        },
        Mars: {
            description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
            imageUrl: "../../assets/destination/image-mars.webp",
            distance: "225 mil. km",
            travel: "9 months"
        },
        Europa: {
            description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
            imageUrl: "../../assets/destination/image-europa.png",
            distance: "628 mil. km",
            travel: "3 years"
        },
        Titan: {
            description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
            imageUrl: "../../assets/destination/image-titan.png",
            distance: "1.6 bil. km",
            travel: "7 years"
        }
    }

    const destinationData = destinationsData[destination]

    return (
        <div className='grid grid-cols-2 gap-10 left-0 right-0 mx-auto px-10 justify-center text-white'>
            <div className='w-[540px]'>
                <img src={destinationData.imageUrl} alt={destination} />
            </div>

            <div className=' w-[540px] p-[40px]'>
                <h3 className=" text-[110px]">{destination}</h3>
                <p className=" pb-[40px] text-[17px]">{destinationData.description}</p>
                <hr className='pb-[40px]'/>
                <div className='flex justify-around'>
                    <div>
                        <h4 className='uppercase text-[18px]'>avg. distance</h4>
                        <span className='text-[32px]'>{destinationData.distance}</span>
                    </div>
                    <div>
                        <h4 className='uppercase text-[18px]'>est. travel time</h4>
                        <span className='text-[32px]'>{destinationData.travel}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
