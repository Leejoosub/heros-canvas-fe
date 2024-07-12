import { PortraitGeneratorFormData } from "@/types/forms";

export const DND_LEVELS = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

export const DND_RACES = [
  "Dragonborn",
  "Dwarf",
  "Elf",
  "Gnome",
  "Half-Elf",
  "Halfling",
  "Half-Orc",
  "Human",
  "Tiefling",
];

export const DND_CLASSES = [
  "Artificer",
  "Barbarian",
  "Bard",
  "Cleric",
  "Druid",
  "Fighter",
  "Monk",
  "Paladin",
  "Ranger",
  "Rogue",
  "Sorcerer",
  "Warlock",
  "Wizard",
];

export const GENDERS = ["Male", "Female", "Other"];

export const DND_BASE_STATS = {
  strength: 10,
  dexterity: 10,
  constitution: 10,
  intelligence: 10,
  wisdom: 10,
  charisma: 10,
};

export const EMPTY_PORTRAIT_FORM_DATA: PortraitGeneratorFormData = {
  name: "",
  level: 1,
  race: DND_RACES[0],
  charClass: DND_CLASSES[0],
  gender: "Male",
  stats: DND_BASE_STATS,
};
