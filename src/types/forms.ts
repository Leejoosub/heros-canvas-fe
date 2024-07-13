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
  physicalTraits: PhysicalTraits;
  equipment: Equipment;
}

export interface PhysicalTraits {
  skinTexture?: string;
  eyeFeatures?: string;
  eyeColor?: string;
  hairFeatures?: string;
  hairStyles?: string;
  hairColor?: string;
  extraAppendages?: string; // ie wings, tails, etc
  specialMarks?: string; //ie Magical Runes, ElementalMarkings
}

export interface Equipment {
  clothingStyles: string;
  armorType: string;
  accessories: string;
  footwear: string;
  weapon: string;
}
