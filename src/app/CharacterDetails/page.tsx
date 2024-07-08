"use client";
import Collapsable from "@/components/Collapsable";
import Layout from "@/components/Layout";
import { DND_CLASSES, DND_LEVELS, DND_RACES, DndStats } from "@/constants/dnd";
import { FormEvent, useState } from "react";

export default function CharacterDetailsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [level, setLevel] = useState(1);
  const [race, setRace] = useState("Dragonborn");
  const [charClass, setCharClass] = useState("Artificer");

  const [bio, setBio] = useState("");
  const [campaign, setCampaign] = useState("");

  const [stats, setStats] = useState<DndStats>({
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    console.log(" ======= handle submit ====== ");
    console.log("name: ", name);
    console.log("level: ", level);
    console.log("race: ", race);
    console.log("charClass: ", charClass);
    console.log("bio: ", bio);
    console.log("campaign: ", campaign);
    console.log("stats: ", stats);

    setIsLoading(false);
  };

  return (
    <Layout>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <form className="w-4/5">
          {/* Basic Details */}
          <Collapsable title={"Basic"}>
            <>
              <div className="m-2">
                <label>
                  Name:
                  <input
                    type="text"
                    className="ml-2 px-1 rounded-lg bg-text text-primary"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </label>
              </div>
              <div className="m-2">
                <label>
                  Level:{" "}
                  <select
                    className="ml-2 px-1 rounded-lg bg-text text-primary"
                    value={level}
                    onChange={(e) => {
                      setLevel(parseInt(e.target.value));
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
                    value={race}
                    onChange={(e) => {
                      setRace(e.target.value);
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
                    value={charClass}
                    onChange={(e) => {
                      setCharClass(e.target.value);
                    }}
                  >
                    {DND_CLASSES.map((_class, i) => {
                      return <option key={`class_${i}`}>{_class}</option>;
                    })}
                  </select>
                </label>
              </div>
            </>
          </Collapsable>
          {/* Stats */}
          <Collapsable title={"Stats"}>
            <>
              <div>
                <label>
                  Strength:{" "}
                  <input
                    type="number"
                    min={0}
                    defaultValue={10}
                    onChange={(e) => {
                      setStats({
                        ...stats,
                        strength: parseInt(e.target.value),
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
                    defaultValue={10}
                    onChange={(e) => {
                      setStats({
                        ...stats,
                        dexterity: parseInt(e.target.value),
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
                    defaultValue={10}
                    onChange={(e) => {
                      setStats({
                        ...stats,
                        constitution: parseInt(e.target.value),
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
                    defaultValue={10}
                    onChange={(e) => {
                      setStats({
                        ...stats,
                        intelligence: parseInt(e.target.value),
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
                    defaultValue={10}
                    onChange={(e) => {
                      setStats({
                        ...stats,
                        wisdom: parseInt(e.target.value),
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
                    defaultValue={10}
                    onChange={(e) => {
                      setStats({
                        ...stats,
                        charisma: parseInt(e.target.value),
                      });
                    }}
                    className="ml-2  my-1 px-1 rounded-lg bg-text text-primary  w-10"
                  />
                </label>
              </div>
            </>
          </Collapsable>
          <Collapsable title={"Additional Details"}>
            <div className="flex flex-col">
              <label className="my-3 flex flex-row">
                Biography:
                <textarea
                  onChange={(e) => {
                    setBio(e.target.value);
                  }}
                  className="ml-3 w-1/2 resize-none text-primary"
                />
              </label>
              <label className="my-3 flex flex-row">
                Campaign:{" "}
                <textarea
                  onChange={(e) => {
                    setCampaign(e.target.value);
                  }}
                  className="ml-3 w-1/2 resize-none text-primary"
                />
              </label>
            </div>
          </Collapsable>
          <div className="flex w-full justify-end">
            <button
              className="p-1 m-2 bg-accentColor rounded-lg"
              onClick={handleSubmit}
            >
              Summon!
            </button>
          </div>
        </form>
      )}
    </Layout>
  );
}
