import { DndStats } from "@/constants/dnd";
import { HEROS_CANVAS_BE } from "@/constants/urls";

export const characterGenerator = async (
  name: string,
  level: number,
  race: string,
  charClass: string,
  gender: string,
  stats: DndStats,
  campaignDetails: string,
  bio: string
) => {
  console.log(`${HEROS_CANVAS_BE}/process-hero-data`);
  const res = await fetch(`${HEROS_CANVAS_BE}/process-hero-data`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      level,
      race,
      charClass,
      gender,
      stats,
      campaignDetails,
      bio,
    }),
  });

  console.log("detailsres stat: ", res.status);

  if (!res.ok) {
    throw new Error(`HTTP Error! Status: ${res.status}`);
  }

  return await res.json();
};
