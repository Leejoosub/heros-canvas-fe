import { useState } from "react";

interface CollapsableProps {
  children: JSX.Element;
  title: string;
  size?: "m" | "l" | "xl" | "screen";
  speed?: "slow" | "medium" | "fast" | "none";
}

export default function Collapsable(props: CollapsableProps) {
  const [isCollapsed, setIsBasicCollapsed] = useState(true);

  let maxHeight = "max-h-72";
  let speed = "duration";
  if (props.size) {
    switch (props.size) {
      case "m":
        maxHeight = "max-h-52";
        break;
      case "l":
        maxHeight = "max-h-80";
        break;
      case "xl":
        maxHeight = "max-h-96";
        break;
      case "screen":
        maxHeight = "max-h-screen";
        break;
    }
  }
  if (props.speed) {
    switch (props.speed) {
      case "slow":
        speed = "duration-1000";
        break;
      case "medium":
        speed = "duration-500";
        break;
      case "fast":
        speed = "duration-100";
        break;
      case "none":
        speed = "duration-0";
        break;
    }
  }

  return (
    <div className="w-full flex flex-col items-center">
      <div
        className="w-full border-b-2 cursor-pointer"
        onClick={() => setIsBasicCollapsed(!isCollapsed)}
      >
        {props.title} {isCollapsed ? "+" : "-"}
      </div>
      <div
        className={`w-11/12
          overflow-hidden transition-collapsable ${
            isCollapsed ? "max-h-0" : maxHeight
          } ${speed ? "duration-500" : speed}`}
      >
        {props.children}
      </div>
    </div>
  );
}
