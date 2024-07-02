interface HeaderProps {
  appStarted?: boolean;
}

export default function Header({ appStarted = true }: HeaderProps) {
  return (
    <div className="w-full p-3">
      <div className="flex justify-between items-center">
        <p className="text-xl font-bold">Hero's Canvas</p>
        {appStarted ? (
          <p>Home</p>
        ) : (
          <button className="bg-accentColor p-2 rounded-lg">Start App</button>
        )}
      </div>
    </div>
  );
}
