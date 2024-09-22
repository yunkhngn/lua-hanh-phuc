
import React from 'react'
import Member from './Member'
import {memberList} from '../../lib'

const TeamMember = () => {
  return (
    <div className='teamMember'>
      {memberList.map((member, index) => (
        <Member key={index}
        name={member.name}
        desc={member.desc}
        link={member.link}
        img={member.img}
        type={member.type}
        />
      ))}
    </div>
  )
}

export default TeamMember