export default function Loading() {
  return (
    <div className="bg-transparent w-full min-h-screen flex justify-center items-center">
      <div className="flex min-h-screen w-full items-center justify-center bg-transparent">
        <div className="flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 animate-spin">
          <div className="h-32 w-32 rounded-full bg-black"></div>
        </div>
      </div>
    </div>
  );
}
