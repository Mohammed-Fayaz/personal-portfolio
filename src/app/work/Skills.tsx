export default function Skills({ skills }: { skills: string[] }) {
  return (
    <>
      <p className="mt-4 font-semibold">Skills Highlight:</p>
      <div className="flex flex-wrap gap-2 mt-2">
        {skills.map((skill) => (
          <span
            className="bg-blue-100 dark:bg-blue-800 px-2 py-1 rounded-md text-sm"
            key={skill}
          >
            {skill}
          </span>
        ))}
      </div>
    </>
  );
}
