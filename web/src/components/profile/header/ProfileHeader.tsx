import { UserInterface } from "../../../interfaces/interfaces";

export default function ProfileHeader({ user }: { user: UserInterface }) {
  return (
    <>
      <section className=" bg-blue-900">
        <div className="flex">
          <img
            className="p-3 rounded-[50%]"
            src="https://source.unsplash.com/50x50"
          />

          <div className="flex justify-between items-center text-white font-bold text-xl">
            <h2 className="text-orange-400 text-2xl">{user.name}</h2>
          </div>
        </div>

        <div className="items-end">
          <p className="ml-24 pb-4 text-white">user description here</p>
        </div>
      </section>
    </>
  );
}
