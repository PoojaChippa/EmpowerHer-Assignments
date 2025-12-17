import UserInfo from "./UserInfo";

function UserProfile() {
  const userName = "Pooja";
  const userAge = 21;

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Profile</h2>

      {/* Passing props to child */}
      <UserInfo name={userName} age={userAge} />
    </div>
  );
}

export default UserProfile;
