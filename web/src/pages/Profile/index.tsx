import { useState, useEffect } from "react";
import NavBar from "../../components/navbar/navbar";
import ProfileHeader from "../../components/profile/header/ProfileHeader";
import StoryList from "../../components/userStory/storyList";
import getUserAccount from "../../http/getUserAccount";
import { UserInterface } from "../../interfaces/interfaces";

export default function Profile() {
  const [user, setUser] = useState<UserInterface>();

  const fetchUserData = async () => {
    return await getUserAccount("cbd32fa0-6ecb-4adb-a657-f9bfb4ecf25f");
  };

  useEffect(() => {
    fetchUserData()
      .then((res) => {
        setUser(res);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  return (
    <section>
      <NavBar />
      {user && (
        <header>
          <ProfileHeader user={user} />
        </header>
      )}
    </section>
  );
}
