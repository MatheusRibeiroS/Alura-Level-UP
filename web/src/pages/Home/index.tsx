import React, { useEffect, useState } from "react";
import NavBar from "../../components/navbar/navbar";
import StoryList from "../../components/userStory/storyList";
import UserBar from "../../components/user-bar/welcomeUserBar";
import getUsersStories from "../../http/getUsersStories";
import getUserAccount from "../../http/getUserAccount";
import { UserInterface, StoryInterface } from "../../interfaces/interfaces";

export default function Feed() {
  const [user, setUser] = useState<UserInterface>();
  const [stories, setStories] = useState<StoryInterface[]>([]);

  const fetchStoryData = async () => {
    return await getUsersStories();
  };

  const fetchUserData = async () => {
    return await getUserAccount("cbd32fa0-6ecb-4adb-a657-f9bfb4ecf25f");
  };

  useEffect(() => {
    fetchStoryData()
      .then((res) => {
        setStories(res);
      })
      .catch((e) => {
        console.log(e.message);
      });

    fetchUserData()
      .then((res) => {
        setUser(res);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  return (
    <main>
      <NavBar />
      {user && (
        <>
          <UserBar
            message={`Welcome, ${user.name}! This is your Story Feed.`}
          />
          <StoryList stories={stories} user={user} />
        </>
      )}
    </main>
  );
}
