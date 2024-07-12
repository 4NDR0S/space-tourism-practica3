import React from 'react'

export default function TechnologyDetail({ techno }) {
    const technosData = {
        Launch: {
            name: "Launch vehicle",
            description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
            imageUrl: "../../assets/technology/image-launch-vehicle-portrait.jpg"
        },
        Spaceport: {
            name: "Spaceport",
            description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
            imageUrl: "../../assets/technology/image-spaceport-portrait.jpg"
        },
        Capsule: {
            name: "Space capsule",
            description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
            imageUrl: "../../assets/technology/image-space-capsule-portrait.jpg"
        }
    }

    const technologyData = technosData[techno]
    console.log(technologyData);

    return (
        <div className='grid grid-cols-2 gap-10 left-0 right-0 mx-auto px-10 justify-center text-white'>

            <div className=' w-[540px] block top-0 bottom-0 my-auto'>
                <h4 className='uppercase text-[37px] font-thin'>The therminology...</h4>
                <h3 className="uppercase text-[64px]">{technologyData.name}</h3>
                <p className="text-[17px] pt-8">{technologyData.description}</p>
            </div>

            <div className='w-[540px] max-h-[600px]'>
                <img src={technologyData.imageUrl} alt={techno}
                    className='h-full' />
            </div>
        </div>
    )
}
