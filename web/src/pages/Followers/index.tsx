import { useState, useEffect } from "react";
import FollowersList from "../../components/Followers/followersList/followersList";
import NavBar from "../../components/navbar/navbar";
("../../components/navbar/navbar");
import UserBar from "../../components/user-bar/welcomeUserBar";
import getUsersAccounts from "../../http/getUsersAccounts";
import getUserAccount from "../../http/getUserAccount";
import { UserInterface } from "../../interfaces/interfaces";
export default function Followers() {
  const [accounts, setAccounts] = useState<UserInterface[]>([]);
  const [user, setUser] = useState<UserInterface>();

  const fetchUserData = async () => {
    return await getUserAccount("cbd32fa0-6ecb-4adb-a657-f9bfb4ecf25f");
  };

  const fetchUsersData = async () => {
    return await getUsersAccounts();
  };

  useEffect(() => {
    fetchUserData()
      .then((res) => {
        setUser(res);
      })
      .catch((e) => {
        console.log(e.message);
      });

    fetchUsersData()
      .then((res) => {
        setAccounts(res);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  return (
    <section>
      <>
        <NavBar />
        {user && (
          <>
            <UserBar
              message={`Hello, ${user.name}! These are your Followers.`}
            />
            <FollowersList accounts={accounts} />
          </>
        )}
      </>
    </section>
  );
}
