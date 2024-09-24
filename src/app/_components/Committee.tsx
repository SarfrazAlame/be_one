import { CommunityWithOrganization } from '@/auth/data'
import { getUserId } from '@/lib/UserId'
import React from 'react'

const Committee = async() => {
  const organizations = await CommunityWithOrganization()
  console.log(organizations)
  return (
    <div>
        
    </div>
  )
}

export default Committee