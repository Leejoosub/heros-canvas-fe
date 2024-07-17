import { PortraitGeneratorFormData } from "@/types/forms";

export const NONE_SELECTED_OPTION = "None Selected";
export const DEFAULT_EYE_COLOR = "#0C1B33";
export const BACKGROUND_COLOR = "#0C1B33";

export const HAIRSTYLES = [
  NONE_SELECTED_OPTION,
  "Ponytail",
  "Buzz cutt",
  "Mohawk",
  "Braids",
  "Top Knot",
  "Dreadlocks",
  "Pixie Cut",
  "Spiky Hair",
  "Long Flowing Hair",
  "Side Shave",
  "Afro",
  "Curly Hair",
  "Bun",
  "Bob Cut",
  "Undercut",
  "Braided Crown",
  "Shaggy Hair",
  "Faux Hawk",
  "Pigtails",
  "Cornrows",
];

export const HEIGHT = [NONE_SELECTED_OPTION, "Short", "Average", "Tall"];

export const PHYSICAL_BUILD = [
  NONE_SELECTED_OPTION,
  "Slim",
  "Athletic",
  "Muscular",
  "Heavyset",
];

export const EYE_FEATURES = [
  NONE_SELECTED_OPTION,
  "Beast-like eyes",
  "Cat-like eyes",
  "Multiple Eyes",
  "No Pupils",
];

export const PHYSICAL_MARKINGS = [
  NONE_SELECTED_OPTION,
  "Tribal Tattoos",
  "Tattoos",
  "Battle Scars",
  "Magical Runes",
  "Elemental Markings",
];

export const PHYSICAL_APPENDAGES = [
  NONE_SELECTED_OPTION,
  "Wings",
  "Horns",
  "Tails",
  "Extra Limbs",
];

export const convertToPythonDict = (formData: PortraitGeneratorFormData) => {
  return {
    ...formData,
    char_class: formData.charClass,
    physical_traits: {
      skin_texture: formData.physicalTraits?.skinTexture,
      skin_color: formData.physicalTraits?.skinColor,
      eye_features: formData.physicalTraits?.eyeFeatures,
      eye_color: formData.physicalTraits?.eyeColor,
      hair_styles: formData.physicalTraits?.hairStyles,
      hair_color: formData.physicalTraits?.hairColor,
      physical_build: formData.physicalTraits?.physicalBuild,
      physical_markings: formData.physicalTraits?.physicalMarkings,
      physical_appendages: formData.physicalTraits?.physicalAppendages,
    },
    equipment: {
      ...formData.equipment,
      clothing_style: formData.equipment?.clothingStyles,
    },
  };
};
