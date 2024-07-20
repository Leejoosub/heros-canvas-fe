import { DND_CLASSES, DND_LEVELS, DND_RACES } from "@/constants/dnd";
import { GENDERS } from "@/constants/dnd";
import { Genders, PortraitGeneratorFormData } from "@/types/forms";

interface BasicDetailsProps {
  formData: PortraitGeneratorFormData;
  setFormData: (formData: PortraitGeneratorFormData) => void;
}
export default function BasicDetailsForm({
  formData,
  setFormData,
}: BasicDetailsProps) {
  return (
    <>
      <div className="m-2">
        <label>
          Name:
          <input
            type="text"
            className="ml-2 px-1 rounded-lg bg-text text-primary"
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
            }}
            value={formData.name}
          />
        </label>
      </div>
      <div className="m-2">
        <label>
          Level:{" "}
          <select
            className="ml-2 px-1 rounded-lg bg-text text-primary"
            value={formData.level}
            onChange={(e) => {
              setFormData({ ...formData, level: parseInt(e.target.value) });
            }}
          >
            {DND_LEVELS.map((level, i) => {
              return <option key={`level_${i}`}>{level}</option>;
            })}
          </select>
        </label>
      </div>
      <div className="m-2">
        <label>
          Race:{" "}
          <select
            className="ml-2 px-1 rounded-lg bg-text text-primary"
            value={formData.race}
            onChange={(e) => {
              setFormData({ ...formData, race: e.target.value });
              // setRace(e.target.value);
            }}
          >
            {DND_RACES.map((race, i) => {
              return <option key={`race_${i}`}>{race}</option>;
            })}
          </select>
        </label>
      </div>
      <div className="m-2">
        <label>
          Class:{" "}
          <select
            className="ml-2 px-1 rounded-lg bg-text text-primary"
            value={formData.charClass}
            onChange={(e) => {
              setFormData({ ...formData, charClass: e.target.value });
            }}
          >
            {DND_CLASSES.map((_class, i) => {
              return <option key={`class_${i}`}>{_class}</option>;
            })}
          </select>
        </label>
      </div>
      <div className="m-2">
        <label>
          Gender:{" "}
          <select
            className="ml-2 px-1 rounded-lg bg-text text-primary"
            value={formData.gender}
            // onChange={(e) => {
            onChange={(e) => {
              setFormData({ ...formData, gender: e.target.value as Genders });
              // setGender(e.target.value);
            }}
          >
            {GENDERS.map((gender, i) => {
              return <option key={`class_${i}`}>{gender}</option>;
            })}
          </select>
        </label>
      </div>
    </>
  );
}
