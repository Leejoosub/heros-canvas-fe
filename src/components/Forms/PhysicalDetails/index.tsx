import { PortraitGeneratorFormData } from "@/types/forms";

interface PhysicalDetailsProps {
  formData: PortraitGeneratorFormData;
  setFormData: (formData: PortraitGeneratorFormData) => void;
}

export default function PhysicalDetailsForm({
  formData,
  setFormData,
}: PhysicalDetailsProps) {
  return (
    <div className="flex flex-col">
      <label className="my-3 flex flex-row">
        Additional Info:
        <textarea
          onChange={(e) => {
            // setBio(e.target.value);
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
