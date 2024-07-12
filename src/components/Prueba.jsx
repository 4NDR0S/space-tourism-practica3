import React, { useState, useEffect } from 'react';

export default function Prueba() {

    const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching the JSON:', error));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Destinations</h1>
      {data.destinations.map((destination, index) => (
        <div key={index}>
          <h2>{destination.name}</h2>
          <p>{destination.description}</p>
          <img src={destination.images.png} alt={destination.name} />
          <p>Distance: {destination.distance}</p>
          <p>Travel Time: {destination.travel}</p>
        </div>
      ))}
      <h1>Crew</h1>
      {data.crew.map((member, index) => (
        <div key={index}>
          <h2>{member.name}</h2>
          <p>{member.role}</p>
          <p>{member.bio}</p>
          <img src={member.images.png} alt={member.name} />
        </div>
      ))}
      <h1>Technology</h1>
      {data.technology.map((tech, index) => (
        <div key={index}>
          <h2>{tech.name}</h2>
          <p>{tech.description}</p>
          <img src={tech.images.portrait} alt={tech.name} />
        </div>
      ))}
    </div>
  )
}
