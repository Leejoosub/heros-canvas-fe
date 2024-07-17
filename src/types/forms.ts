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
  skinColor?: string;
  eyeFeatures?: string;
  eyeColor?: string;
  hairStyles?: string;
  hairColor?: string;
  physicalBuild?: string;
  physicalMarkings?: string; //ie Magical Runes, ElementalMarkings
  physicalAppendages?: string; // ie wings, tails, etc
}

export interface Equipment {
  clothingStyles: string;
  armor: string;
  accessories: string;
  footwear: string;
  weapon: string;
}
