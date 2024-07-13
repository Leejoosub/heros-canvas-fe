import { BACKGROUND_COLOR } from "@/constants/forms";
import { useState } from "react";
import { HexColorPicker } from "react-colorful";

interface ColorPickerProps {
  colorValue: string | undefined;
  handleColorChange: (color: string) => void;
  label: string;
}

export default function ColorPicker({
  colorValue,
  handleColorChange,
  label,
}: ColorPickerProps) {
  const [showColorPicker, setShowColorPicker] = useState(false);
  return (
    <label className="flex flex-row my-2">
      {label}
      <div
        onClick={() => setShowColorPicker(!showColorPicker)}
        style={{
          backgroundColor: colorValue ?? BACKGROUND_COLOR,
          padding: colorValue ? "15px" : 0,
        }}
        className="cursor-pointer mx-2"
      >
        {colorValue ? "" : "None Selected"}
      </div>
      <div
        className="mx-3 cursor-pointer text-red-600"
        onClick={() => handleColorChange("")}
      >
        {colorValue ? "X" : ""}
      </div>
      <div hidden={!showColorPicker} className="absolute">
        <HexColorPicker
          color={colorValue ? colorValue : BACKGROUND_COLOR}
          onChange={(value) => {
            handleColorChange(value);
          }}
          onMouseUp={(e) => {
            setShowColorPicker(false);
          }}
        />
      </div>
    </label>
  );
}
