type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-10">
      <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
        {eyebrow}
      </p>
      <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
