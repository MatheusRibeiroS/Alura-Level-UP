import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <section className="bg-black">
      <div className="flex justify-between p-4 text-white font-bold text-xl">
        <Link className="font-extrabold text-2xl" to={"/profile"}>FollowUp</Link>
        <Link to={"/"}>Inicio</Link>
        <Link to={"/followers"}>followers</Link>
      </div>
    </section>
  );
}
