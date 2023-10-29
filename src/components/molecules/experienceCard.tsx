import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";

type ExperienceCardProps = {
  orgName: string;
  role: string;
  startDate: string;
  endDate: string;
  description: React.ReactNode;
};

const ExperienceCard = ({
  orgName,
  role,
  startDate,
  endDate,
  description,
}: ExperienceCardProps) => {
  return (
    <Card className="w-3/4">
      <CardHeader>
        <CardTitle>{orgName}</CardTitle>
        <CardDescription className="flex justify-between">
          <text>{role}</text>
          <text>
            {startDate} - {endDate}
          </text>
        </CardDescription>
      </CardHeader>
      <CardContent className="text-sm">{description}</CardContent>
    </Card>
  );
};

export { type ExperienceCardProps, ExperienceCard };
