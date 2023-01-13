interface props {
  name: string;
}

export default function WelcomeUserBar({ name }: props) {
  return (
    <>
      <div className="bg-white p-3">
        <p>Welcome, {name}! This is your Story Feed.</p>
      </div>
    </>
  );
}
