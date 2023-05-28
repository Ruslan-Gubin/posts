import { Avatar } from "../../../../shared";



const UserAvatar = ({ userPhoto }: { userPhoto?: string }) => {

  return (
    <Avatar userPhoto={userPhoto} />
  );
};

export{ UserAvatar };