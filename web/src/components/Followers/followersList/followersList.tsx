import { useEffect, useState } from "react";
import getUserAccount from "../../../http/getUserAccount";
import { UserInterface } from "../../../interfaces/interfaces";
export default function FollowersList({
  accounts,
}: {
  accounts: UserInterface[];
}) {
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
    <>
      {accounts.map((account, index) => {
        return account.email != user?.email ? (
          <section key={index} className="pb-1">
            <div className="bg-blue-900 text-white p-2">
              <div className="flex items-center">
                <img
                  className="p-3 rounded-[50%]"
                  src="https://source.unsplash.com/50x50"
                />
                <h2 className="font-bold text-orange-400 pr-2 m-3">
                  {account.name}
                </h2>
              </div>
            </div>
          </section>
        ) : (
          <div />
        );
      })}
    </>
  );
}
