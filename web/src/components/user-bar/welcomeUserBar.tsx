interface props {
  message: string;
}

export default function UserBar({ message }: props) {
  return (
    <>
      <div className="bg-white p-3">
        <p>{message}</p>
      </div>
    </>
  );
}
