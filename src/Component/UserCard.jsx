import React from 'react'
import "../CSS/UserCard.css"

export default function UserCard(props) {
  return (
    <div className='card-container'>
      <span className={props.online?"pro online":"pro offline"}>{props.online?"ONLINE":"OFFLINE"}</span>
      <img src={props.profile} className='img' alt="User"  />
      <h3>{props.name}</h3>
      <h3>{props.city}</h3>
      <p>{props.description}</p>
      <div className='buttons'>
        <button className='primary'>Message</button>
        <button className='primary outline'>Following</button>
      </div>
      <div className='skills'>
        <h6>Skills</h6>
        <ul>
            {props.skills.map((skill,index)=>(
                <li key={index}>{skill}</li>
            ))}
            
        </ul>
      </div>
    </div>
  )
}
