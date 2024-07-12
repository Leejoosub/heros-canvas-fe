import { DND_LEVELS } from "@/constants/dnd";

export type DND_LEVELS_type = (typeof DND_LEVELS)[number];

export type DndStats = {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
};
