import { TypographyH1 } from "@/components/typography/h1";
import { TypographyH2 } from "@/components/typography/h2";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rabbit, Workflow, MailOpen } from "lucide-react";

const features = [
  {
    index: 1,
    icon: <Rabbit />,
    title: "Fast & Easy",
    content:
      "Accessing computer science materials is quick and simple, with everything organized for easy navigation, so you can focus on learning.",
  },
  {
    index: 2,
    icon: <Workflow />,
    title: "Continueous Update",
    content:
      "Our content is regularly updated, ensuring you always have access to the latest resources and trends in computer science.",
  },
  {
    index: 3,
    icon: <MailOpen />,
    title: "Open To Suggestions",
    content:
      "We’re always open to your ideas! Share your suggestions, and we’ll work to improve the site and add new features.",
  },
];
export default function Features() {
  return (
    <div className="min-h-[60vh]">
      <div className="mx-auto container px-8 flex flex-col items-center gap-10">
        <TypographyH1 className="mb-10 text-center lg:text-5xl text-4xl">
          Features
        </TypographyH1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center mx-auto w-[80%]">
          {features.map((feature) => {
            return <FeatureCard key={feature.index} feature={feature} />;
          })}
        </div>
      </div>
    </div>
  );
}

interface FeatureCardProps {
  feature: {
    index: number;
    icon: React.ReactNode;
    title: string;
    content: string;
  };
}
function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <Card className="w-72 flex flex-col h-full">
      <CardHeader className="flex-shrink-0">
        <CardTitle className="mb-1">{feature.icon}</CardTitle>
        <CardTitle>
          <TypographyH2>{feature.title}</TypographyH2>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p>{feature.content}</p>
      </CardContent>
    </Card>
  );
}
