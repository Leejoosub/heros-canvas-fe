import {
  DEFAULT_EYE_COLOR,
  EYE_FEATURES,
  HAIRSTYLES,
  PHYSICAL_AGE_APPEARANCE,
  PHYSICAL_APPENDAGES,
  PHYSICAL_BUILD,
  PHYSICAL_MARKINGS,
} from "@/constants/forms";
import { PortraitGeneratorFormData } from "@/types/forms";
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
      <p className="bg-emphasisColor rounded-lg p-2 m-2">
        Note: Optional section. Specify any physical traits you want below. If
        you leave it blank, we'll randomize it for you so don't worry!
      </p>
      <label className="my-2">
        Age Appearance
        <select
          className="ml-2 px-1 rounded-lg bg-text text-primary"
          value={formData.physicalTraits?.ageAppearance}
          onChange={(e) => {
            setFormData({
              ...formData,
              physicalTraits: {
                ...formData.physicalTraits,
                ageAppearance: e.target.value,
              },
            });
          }}
        >
          {PHYSICAL_AGE_APPEARANCE.map((ageAppearance, index) => (
            <option key={`age_appearance_${index}`}>{ageAppearance}</option>
          ))}
        </select>
      </label>
      <label>
        Eye Features:
        <select
          className="ml-2 px-1 rounded-lg bg-text text-primary"
          value={formData.physicalTraits?.eyeFeatures}
          onChange={(e) => {
            setFormData({
              ...formData,
              physicalTraits: {
                ...formData.physicalTraits,
                eyeFeatures: e.target.value,
              },
            });
          }}
        >
          {EYE_FEATURES.map((eyeFeatures, index) => (
            <option key={`eye_features_${index}`}>{eyeFeatures}</option>
          ))}
        </select>
      </label>

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
          value={formData.physicalTraits?.hairStyles}
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
      <ColorPicker
        label="Select Skin Color"
        colorValue={formData.physicalTraits?.skinColor}
        handleColorChange={(newColor) =>
          setFormData({
            ...formData,
            physicalTraits: {
              ...formData.physicalTraits,
              skinColor: newColor,
            },
          })
        }
      />

      <label>
        Physical Build:
        <select
          className="ml-2 px-1 rounded-lg bg-text text-primary"
          value={formData.physicalTraits?.physicalBuild}
          onChange={(e) => {
            setFormData({
              ...formData,
              physicalTraits: {
                ...formData.physicalTraits,
                physicalBuild: e.target.value,
              },
            });
          }}
        >
          {PHYSICAL_BUILD.map((physicalBuild, index) => (
            <option key={`Physical_Build_${index}`}>{physicalBuild}</option>
          ))}
        </select>
      </label>

      <label className="my-2">
        Physical Markings:
        <select
          className="ml-2 px-1 rounded-lg bg-text text-primary"
          value={formData.physicalTraits?.physicalMarkings}
          onChange={(e) => {
            setFormData({
              ...formData,
              physicalTraits: {
                ...formData.physicalTraits,
                physicalMarkings: e.target.value,
              },
            });
          }}
        >
          {PHYSICAL_MARKINGS.map((physicalMarkings, index) => (
            <option key={`Physical_Markings_${index}`}>
              {physicalMarkings}
            </option>
          ))}
        </select>
      </label>

      <label className="my-2">
        Physical Appendages:
        <select
          className="ml-2 px-1 rounded-lg bg-text text-primary"
          value={formData.physicalTraits?.physicalAppendages}
          onChange={(e) => {
            setFormData({
              ...formData,
              physicalTraits: {
                ...formData.physicalTraits,
                physicalAppendages: e.target.value,
              },
            });
          }}
        >
          {PHYSICAL_APPENDAGES.map((physicalAppendages, index) => (
            <option key={`Physical_Appendages_${index}`}>
              {physicalAppendages}
            </option>
          ))}
        </select>
      </label>

      <label className="my-3 flex flex-row">
        Additional Info:
        <textarea
          onChange={(e) => {
            setFormData({ ...formData, bio: e.target.value });
          }}
          className="ml-3 w-1/2 resize-none text-primary bg-text rounded-md p-1"
          placeholder="Any custom additional details! ie gruff, captain morgan pose, has a pet rat, etc"
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
