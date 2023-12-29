import { useSelector } from "react-redux";

export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div>
      <h1 className="text-3xl font-weight-600 text-center my-7">Profile</h1>
      <form className="flex flex-col">
        <img
          src={currentUser.profilePicture}
          alt="profile"
          className="h-24 w-24 self-center cursor-pointer object-cover rounded-full"
        />
      </form>
    </div>
  );
}
