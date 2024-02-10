
import ProfileComponent from "../components/ProfileComponent";
import { useProfileInformation } from "../store/Hooks/authHooks";
import { useParams } from "react-router";




const ProfileScreen = () => {
  let queryUserId=useParams();
  const userProfile=useProfileInformation();
  return (
   <ProfileComponent/>
  );
};

export default ProfileScreen;
