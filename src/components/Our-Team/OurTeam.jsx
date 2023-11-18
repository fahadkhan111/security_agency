import React from 'react';

const TeamMemberCard = ({ name, position, image, intro, contact }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`relative w-64 h-80 transform-gpu transition-transform duration-300 ${
        isFlipped ? 'rotate-y-180' : ''
      }`}
    >
      <div
        className={`card front bg-white rounded-lg shadow-lg p-4 ${
          isFlipped ? 'invisible' : 'visible'
        }`}
        
      >
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover rounded-lg"
        />
        <div className="mt-2 text-center">
          <h2 className="text-xl font-bold ">{name}</h2>
          <p className="text-primary font-bold">{position}</p>
          <button onClick={handleCardFlip} className='mt-2 w-full border border-primary rounded-lg bg-secondary hover:bg-orange-700 flex justify-center items-center'> Profile </button>
        </div>
      </div>

      <div
        className={`card back bg-white rounded-lg shadow-lg p-4 absolute top-0 left-0 w-full h-full rotate-y-180 ${
          isFlipped ? 'visible' : 'invisible'
        }`}
        onClick={handleCardFlip}
      >
        <div className="pt-3 text-center flex flex-col items-center justify-center gap-2">
        <h2 className=" text-xl font-bold ">{name}</h2>
          <p className=" text-primary font-bold">{position}</p>
          <p className=" text-primary">{intro}</p>
          <p className=" text-primary">{contact}</p>
          
        </div>
        <div className="mt-4">
          {/* Add credentials or additional information here */}
        </div>
      </div>
    </div>
  );
};

const OurTeam = () => {
  const teamMembers = [
    {
      name: 'Mrs John',
      position: 'CEO',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPfO37MK81JIyR1ptwqr_vYO3w4VR-iC2wqQ&usqp=CAU',
      intro: 'Lorem ipsum credentials',
      contact: '12345'
    },
    // Add more team members here
  ];

  return (
    <div className="px-40 grid grid-cols-1 md:grid-cols-3 gap-4">
      {teamMembers.map((member, index) => (
        <TeamMemberCard key={index} {...member} />
      ))}
    </div>
  );
};

export default OurTeam;
