import React from 'react'
import UserCard from './Component/UserCard'



const App = () => {

  const Userdata = [{
    name:"James",
     city:"Chennai",
     description:"Front-end developer",
      skills:["HTML","CSS","Bootstrap","JavaScript","React","MySql","ReactBootstrap"],
       online:true,
        profile:"images/1.jpg",
  },
  {
    name:"John",
     city:"Trichy",
     description:"Java developer",
      skills:["C","C++","Java Programming","Python","C#.Net" ,"HTML"],
       online:false,
        profile:"images/2.jpg",
  },
  {
    name:"Kevin",
     city:"Bangalore",
     description:"Backend developer",
      skills:["MySql","PHP","Python","Node","MongoDB","Javascript"],
       online:true,
        profile:"images/3.jpg",
  }]


  return (
    <>
    
    {Userdata.map((user,index)=>(
      <UserCard 
      key={index}
      name={user.name}
      city={user.city}
      description={user.description}
      skills={user.skills}
      profile={user.profile}
      online={user.online}
      
      />
    ))}
    </>
      

   
  )
}

export default App