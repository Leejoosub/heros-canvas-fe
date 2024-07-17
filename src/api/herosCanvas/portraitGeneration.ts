import { DndStats } from "@/types/dnd";
import { HEROS_CANVAS_BE } from "@/constants/urls";
import { PortraitGeneratorFormData } from "@/types/forms";
import { convertToPythonDict } from "@/constants/forms";

export const portraitGenerator = async (
  formData: PortraitGeneratorFormData
) => {
  console.log("formdata: ", formData);
  const pythonFormData = convertToPythonDict(formData);
  console.log("python form data: ", pythonFormData);
  const res = await fetch(`${HEROS_CANVAS_BE}/generate-hero-portrait`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pythonFormData),
  });

  if (!res.ok) {
    throw new Error(`HTTP Error! Status: ${res.status}`);
  }

  const data = await res.json();

  if (Object.hasOwn(data, "errorMessage")) {
    throw new Error(`Error generating image:  ${data.errorMessage}`);
  }

  return data;
};
