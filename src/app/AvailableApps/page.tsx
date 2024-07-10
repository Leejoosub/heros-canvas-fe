import Layout from "@/components/Layout";
import ScalingImageCard from "@/components/ScalingImageCard";
import HalforcBarb from "@/assets/characters/half-orc-barbarian.png";
import Newbie from "@/assets/characters/beginner_halfling_.png";
import Guide from "@/assets/characters/old_wizard_helper.png";

export default function AvailableAppsPage() {
  return (
    <Layout>
      <div className="w-4/5 flex justify-center flex-col items-center">
        <h5 className="m-5">Choose Your Journey</h5>
        <div className="flex w-full justify-around">
          <ScalingImageCard
            title="Draw Portrait"
            image={HalforcBarb}
            link="CharacterDetails"
          >
            <p>
              Transform your character's stats and traits into a stunning visual
              masterpiece. Craft a detailed portrait that captures the essence
              of your hero. This personalized portrait will enhance your gaming
              experience, making your character truely unforgettable
            </p>
          </ScalingImageCard>
          <ScalingImageCard
            title="New Character"
            image={Newbie}
            link="CharacterDetails"
          >
            <p>
              Ready to embark on a new adventure but not sure where to begin?
              Click here for expert guidance to help you create a character that
              fits your style and story. We'll point you in the right direction
              to craft a hero that's ready to face any challenge. complete with
              a personalized portrait to bring them to life
            </p>
          </ScalingImageCard>

          <ScalingImageCard
            title="Guidance"
            image={Guide}
            link="CharacterDetails"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              elementum non justo at iaculis. Nulla facilisi. Proin quis nulla
              eu diam facilisis pharetra eget id ipsum. Suspendisse potenti.
              Phasellus a tempor eros, venenatis porta nibh. Curabitur aliquet
              elit massa, quis condimentum metus ornare eu. Aliquam vitae urna
              sapien. Donec eleifend ligula magna.{" "}
            </p>
          </ScalingImageCard>
        </div>
      </div>
    </Layout>
  );
}
