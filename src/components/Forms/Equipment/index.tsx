import { EQUIPMENT_ATTIRE, EQUIPMENT_HEADWEAR } from "@/constants/forms";
import { PortraitGeneratorFormData } from "@/types/forms";
import ColorPicker from "../ColorPicker";

interface EquipmentProps {
  formData: PortraitGeneratorFormData;
  setFormData: (formData: PortraitGeneratorFormData) => void;
}

export default function EquipmentForm({
  formData,
  setFormData,
}: EquipmentProps) {
  return (
    <div className="flex flex-col">
      <p className="bg-emphasisColor rounded-lg p-2 m-2">
        Note: Optional section. Specify any equipment you want below. If you
        leave it blank, we'll randomize it for you so don't worry!
      </p>
      <ColorPicker
        label="Main Color Theme:"
        colorValue={formData.equipment?.attirePrimaryColor}
        handleColorChange={(newColor) => {
          setFormData({
            ...formData,
            equipment: {
              ...formData.equipment,
              attirePrimaryColor: newColor,
            },
          });
        }}
      />
      <label>
        Armor:
        <select
          className="ml-2 px-1 rounded-lg bg-text text-primary"
          value={formData.equipment?.attire}
          onChange={(e) => {
            setFormData({
              ...formData,
              equipment: {
                ...formData.equipment,
                attire: e.target.value,
              },
            });
          }}
        >
          {EQUIPMENT_ATTIRE.map((attire, index) => (
            <option key={`attire_${index}`}>{attire}</option>
          ))}
        </select>
      </label>
      <label>
        Headwear:
        <select
          className="ml-2 px-1 rounded-lg bg-text text-primary"
          value={formData.equipment?.headwear}
          onChange={(e) => {
            setFormData({
              ...formData,
              equipment: {
                ...formData.equipment,
                headwear: e.target.value,
              },
            });
          }}
        >
          {EQUIPMENT_HEADWEAR.map((headwear, index) => (
            <option key={`headwear_${index}`}>{headwear}</option>
          ))}
        </select>
      </label>
    </div>
  );
}
