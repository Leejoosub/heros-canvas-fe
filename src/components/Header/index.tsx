interface HeaderProps {
  appStarted?: boolean;
}

export default function Header({ appStarted = true }: HeaderProps) {
  return (
    <div className="w-full p-3">
      <div className="flex justify-between">
        <p>Hero's Canvas</p>
        {appStarted ? <p>Home</p> : <button>Start App</button>}
      </div>
    </div>
  );
}
