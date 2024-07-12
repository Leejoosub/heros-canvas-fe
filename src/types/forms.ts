import { DndStats } from "./dnd";

export type Genders = "Male" | "Female" | "Other";

export interface PortraitGeneratorFormData {
  name: string;
  level: number;
  race: string;
  charClass: string;
  gender: Genders;
  stats: DndStats;
  campaign?: string;
  bio?: string;
}

export interface PhysicalTraits {
  skinTexture?: string;
  eyeFeatures?: string;
  hairFeatures?: string;
  hairStyles?: string;
  extraAppendages?: string; // ie wings, tails, etc
  specialMarks?: string; //ie Magical Runes, ElementalMarkings
}

export interface WearableTraits {
  clothingStyles: string;
  armorType: string;
  accessories: string;
  footwear: string;
  weapon: string;
}
