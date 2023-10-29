// components
import { ExperienceCard } from "@/components/molecules/experienceCard";

// constants
import { EXPERIENCES } from "./constants";

export default function Home() {
  return (
    <div className="flex p-7 flex-col overflow-auto">
      <section className="text-6xl w-1/3 h-60">
        <h1>Mohammed Fayaz Salim</h1>
      </section>

      <section className="text-3xl w-1/2">
        Software Engineer with over 3 years of experience in building complex
        web applications
      </section>

      <section className="flex p-8 flex-col gap-6 h-3/4 items-center">
        {EXPERIENCES.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </section>
    </div>
  );
}
