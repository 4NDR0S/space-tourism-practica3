import React from 'react'

export default function CrewDetail({ crew }) {
    const crewsData = {
        Douglas: {
            name: "Douglas Hurley",
            bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
            imageUrl: "../../assets/crew/image-douglas-hurley.png",
            role: "Commander",
            travel: "3 days"
        },
        Mark: {
            name: "Mark Shuttleworth",
            bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
            imageUrl: "../../assets/crew/image-mark-shuttleworth.png",
            role: "Mission Specialist",
            travel: "9 months"
        },
        Victor: {
            name: "Victor Glover",
            bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
            imageUrl: "../../assets/crew/image-victor-glover.png",
            role: "Pilot",
            travel: "3 years"
        },
        Anousheh: {
            name: "Anousheh Ansari",
            bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
            imageUrl: "../../assets/crew/image-anousheh-ansari.png",
            role: "Flight Engineer",
            travel: "7 years"
        }
    }

    const crewData = crewsData[crew]
    console.log(crewData);

    return (
        <div className='grid grid-cols-2 gap-10 left-0 right-0 mx-auto px-10 justify-center text-white'>

            <div className=' w-[540px] block top-0 bottom-0 my-auto'>
                <span className='uppercase text-[32px] text-[#979797] font-thin'>{crewData.role}</span>
                <h3 className="uppercase text-[64px]">{crewData.name}</h3>
                <p className="text-[17px]">{crewData.bio}</p>
            </div>

            <div className='w-[540px] max-h-[600px]'>
                <img src={crewData.imageUrl} alt={crew} 
                className='h-full'/>
            </div>
        </div>
    )
}
