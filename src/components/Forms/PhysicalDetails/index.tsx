"use client";
import { DEFAULT_EYE_COLOR, HAIRSTYLES } from "@/constants/forms";
import { PortraitGeneratorFormData } from "@/types/forms";
import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import ColorPicker from "../ColorPicker";

interface PhysicalDetailsProps {
  formData: PortraitGeneratorFormData;
  setFormData: (formData: PortraitGeneratorFormData) => void;
}

export default function PhysicalDetailsForm({
  formData,
  setFormData,
}: PhysicalDetailsProps) {
  return (
    <div className="flex flex-col w-full">
      <p className="bg-slate-500 rounded-lg p-2 m-2">
        Note: Optional physical descriptors! If you do not select an option,
        we'll fill in the blanks for you
      </p>
      <ColorPicker
        label="Select Eye Color"
        colorValue={formData.physicalTraits?.eyeColor}
        handleColorChange={(newColor) =>
          setFormData({
            ...formData,
            physicalTraits: {
              ...formData.physicalTraits,
              eyeColor: newColor,
            },
          })
        }
      />

      <label>
        Hairstyles:
        <select
          className="ml-2 px-1 rounded-lg bg-text text-primary"
          value={formData.race}
          onChange={(e) => {
            setFormData({
              ...formData,
              physicalTraits: {
                ...formData.physicalTraits,
                hairStyles: e.target.value,
              },
            });
          }}
        >
          {HAIRSTYLES.map((hairstyle, index) => (
            <option key={`Hairstyle_${index}`}>{hairstyle}</option>
          ))}
        </select>
      </label>
      <ColorPicker
        label="Select Hair Color"
        colorValue={formData.physicalTraits?.hairColor}
        handleColorChange={(newColor) =>
          setFormData({
            ...formData,
            physicalTraits: {
              ...formData.physicalTraits,
              hairColor: newColor,
            },
          })
        }
      />
      <label className="my-3 flex flex-row">
        Additional Info:
        <textarea
          onChange={(e) => {
            setFormData({ ...formData, bio: e.target.value });
          }}
          className="ml-3 w-1/2 resize-none text-primary bg-text rounded-md p-1"
          placeholder="Example: Blue scales, gruff, wielding a battleaxe"
        />
      </label>
      <label className="my-3 flex flex-row">
        Campaign details:{" "}
        <textarea
          placeholder="Examples: 'Curse of Strahd' 'The campaign takes place in an Icy Tundra' "
          onChange={(e) => {
            setFormData({ ...formData, campaign: e.target.value });
          }}
          className="ml-3 w-1/2 resize-none text-primary bg-text rounded-md p-1"
        />
      </label>
    </div>
  );
}
