
import ProfileComponent from "../components/ProfileComponent";
import { useParams } from "react-router";




const ProfileScreen = () => {
  const profileId=useParams();
  return (
    <> {profileId.id && <ProfileComponent id={profileId.id}/>}</>
  );
};

export default ProfileScreen;
