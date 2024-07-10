import { DndStats } from "@/constants/dnd";
import { HEROS_CANVAS_BE } from "@/constants/urls";

export const portraitGenerator = async (
  name: string,
  level: number,
  race: string,
  charClass: string,
  gender: string,
  stats: DndStats,
  campaignDetails: string,
  bio: string
) => {
  console.log(`${HEROS_CANVAS_BE}/generate-hero-portrait`);
  const res = await fetch(`${HEROS_CANVAS_BE}/generate-hero-portrait`, {
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

  console.log("portrait res stat: ", res.status);

  if (!res.ok) {
    throw new Error(`HTTP Error! Status: ${res.status}`);
  }

  // console.log("response: ", await res.json());
  return await res.json();
};
