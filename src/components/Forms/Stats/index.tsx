import { PortraitGeneratorFormData } from "@/types/forms";

interface StatsProps {
  formData: PortraitGeneratorFormData;
  setFormData: (formData: PortraitGeneratorFormData) => void;
}

export default function StatsForm({ formData, setFormData }: StatsProps) {
  return (
    <>
      <p>Your stats will affect your portrait!</p>
      <div>
        <label>
          Strength:{" "}
          <input
            type="number"
            min={0}
            value={formData.stats.strength}
            onChange={(e) => {
              setFormData({
                ...formData,
                stats: {
                  ...formData.stats,
                  strength: parseInt(e.target.value),
                },
              });
            }}
            className="ml-2 my-1 px-1 rounded-lg bg-text text-primary w-10"
          />
        </label>
      </div>
      <div>
        <label>
          Dexterity:{" "}
          <input
            type="number"
            min={0}
            value={formData.stats.dexterity}
            onChange={(e) => {
              setFormData({
                ...formData,
                stats: {
                  ...formData.stats,
                  dexterity: parseInt(e.target.value),
                },
              });
            }}
            className="ml-2 my-1 px-1 rounded-lg bg-text text-primary w-10"
          />
        </label>
      </div>
      <div>
        <label>
          Constitution:{" "}
          <input
            type="number"
            min={0}
            value={formData.stats.constitution}
            onChange={(e) => {
              setFormData({
                ...formData,
                stats: {
                  ...formData.stats,
                  constitution: parseInt(e.target.value),
                },
              });
            }}
            className="ml-2  my-1 px-1 rounded-lg bg-text text-primary  w-10"
          />
        </label>
      </div>
      <div>
        <label>
          Intelligence:{" "}
          <input
            type="number"
            min={0}
            value={formData.stats.intelligence}
            onChange={(e) => {
              setFormData({
                ...formData,
                stats: {
                  ...formData.stats,
                  intelligence: parseInt(e.target.value),
                },
              });
            }}
            className="ml-2  my-1 px-1 rounded-lg bg-text text-primary  w-10"
          />
        </label>
      </div>
      <div>
        <label>
          Wisdom:{" "}
          <input
            type="number"
            min={0}
            value={formData.stats.wisdom}
            onChange={(e) => {
              setFormData({
                ...formData,
                stats: {
                  ...formData.stats,
                  wisdom: parseInt(e.target.value),
                },
              });
            }}
            className="ml-2  my-1 px-1 rounded-lg bg-text text-primary  w-10"
          />
        </label>
      </div>
      <div>
        <label>
          Charisma:{" "}
          <input
            type="number"
            min={0}
            value={formData.stats.charisma}
            onChange={(e) => {
              setFormData({
                ...formData,
                stats: {
                  ...formData.stats,
                  charisma: parseInt(e.target.value),
                },
              });
            }}
            className="ml-2  my-1 px-1 rounded-lg bg-text text-primary  w-10"
          />
        </label>
      </div>
    </>
  );
}
