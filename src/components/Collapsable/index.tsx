import { useState } from "react";
import styles from "./index.module.css";

interface CollapsableProps {
  children: JSX.Element;
  title: string;
  size?: "m" | "l" | "xl";
}

export default function Collapsable(props: CollapsableProps) {
  const [isCollapsed, setIsBasicCollapsed] = useState(true);

  let maxHeight = "max-h-60";
  if (props.size) {
    switch (props.size) {
      case "m":
        maxHeight = "max-h-48";
        break;
      case "l":
        maxHeight = "max-h-80";
        break;
      case "xl":
        maxHeight = "max-h-96";
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
          overflow-hidden transition-collapsable duration-500 ${
            isCollapsed ? "max-h-0" : maxHeight
          }`}
      >
        {props.children}
      </div>
    </div>
  );
}
