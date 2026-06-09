export default function Skills({ skills }: { skills: string[] }) {
  return (
    <div className="mt-5 border-t border-border/60 pt-5">
      <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
        Skills
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs text-muted-foreground"
            key={skill}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
