import { useState } from "react";
import styles from "./index.module.css";

interface CollapsableProps {
  children: JSX.Element;
  title: string;
}
export default function Collapsable(props: CollapsableProps) {
  const [isCollapsed, setIsBasicCollapsed] = useState(true);
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
            isCollapsed ? "max-h-0" : "max-h-60"
          }`}
      >
        {props.children}
      </div>
    </div>
  );
}
