"use client";
import { portraitGenerator } from "@/api/herosCanvas/portraitGeneration";
import Collapsable from "@/components/Collapsable";
import BasicDetailsForm from "@/components/Forms/BasicDetails";
import EquipmentForm from "@/components/Forms/Equipment";
import PhysicalDetailsForm from "@/components/Forms/PhysicalDetails";
import StatsForm from "@/components/Forms/Stats";
import Layout from "@/components/Layout";
import { EMPTY_PORTRAIT_FORM_DATA } from "@/constants/dnd";
import { PortraitGeneratorFormData } from "@/types/forms";
import Image from "next/image";
import { FormEvent, useState } from "react";

export default function CharacterDetailsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<PortraitGeneratorFormData>(
    EMPTY_PORTRAIT_FORM_DATA
  );

  const [generatedPortrait, setGeneratedPortrait] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    await portraitGenerator(formData)
      .then((res) => {
        console.log(".then res: ", res);
        setGeneratedPortrait(res.portrait_url);
      })
      .catch((e: Error) => {
        alert(`Error Generating Portrait: ${e.message}`);
      })
      .finally(() => setIsLoading(false));
  };

  const handleRestart = () => {
    setGeneratedPortrait("");
    setFormData(EMPTY_PORTRAIT_FORM_DATA);
  };

  return (
    <Layout>
      {isLoading ? (
        <p>loading...</p>
      ) : generatedPortrait ? (
        <div className="w-4/5 flex flex-col justify-center text-center">
          <h1 className="text-text text-3xl m-3">{formData.name}</h1>
          <Image
            src={generatedPortrait}
            alt={`character ${name}'s portrait`}
            width={1024}
            height={1024}
          />
          <div className="w-full flex justify-center">
            <button onClick={handleSubmit} className="bg-accentColor m-3 p-3">
              Generate Another
            </button>
            <button onClick={handleRestart} className="bg-accentColor m-3 p-3">
              Start Over
            </button>
          </div>
        </div>
      ) : (
        <form className="w-4/5">
          {/* Basic Details */}
          <Collapsable title={"Basic"}>
            <BasicDetailsForm formData={formData} setFormData={setFormData} />
          </Collapsable>
          {/* Stats */}
          <Collapsable title={"Stats"}>
            <StatsForm formData={formData} setFormData={setFormData} />
          </Collapsable>
          <Collapsable title={"Physical Details"} size="screen" speed="slow">
            <PhysicalDetailsForm
              formData={formData}
              setFormData={setFormData}
            />
          </Collapsable>
          <Collapsable title="Equipment">
            <EquipmentForm formData={formData} setFormData={setFormData} />
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
