import React from 'react'
import { useProfileInformation } from "../store/Hooks/authHooks";
import ProfileComponent from '../components/ProfileComponent';

const MyProfileScreen = () => {
    const userInformation=useProfileInformation();
  return (
    <>
        {userInformation&& <ProfileComponent id={userInformation[0].id.toString()}/>}
    </>
  )
}

export default MyProfileScreen