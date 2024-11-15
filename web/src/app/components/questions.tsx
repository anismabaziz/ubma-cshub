import { TypographyH1 } from "@/components/typography/h1";
import { TypographyH3 } from "@/components/typography/h3";
import { TypographyP } from "@/components/typography/p";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const questions = [
  {
    index: 1,
    question: "What is UBMA CShub?",
    answer:
      "UBMA CShub is an online resource platform created by and for computer science students at UBMA. It provides access to study materials, tutorials, and useful links to support your studies.",
  },
  {
    index: 2,
    question: "How do I access materials on UBMA CShub?",
    answer:
      "All students can freely access materials organized by year, semester, and course module. Just select your degree, year, and module to find the resources you need.",
  },
  {
    index: 3,
    question: "Do I need to create an account to use the hub?",
    answer:
      "No, all resources on UBMA CShub are publicly accessible. However, an account may be required if you wish to contribute materials or interact with other students.",
  },
  {
    index: 4,
    question: "Can I contribute study materials or resources?",
    answer:
      'Yes! We encourage contributions from students to keep resources updated and comprehensive. Please use the "Contribute" page to upload notes, slides, or links to external resources.',
  },
  {
    index: 5,
    question: "What types of resources are available on the hub?",
    answer:
      "You’ll find lecture notes, slides, recommended books, useful links (e.g., GitHub repositories), YouTube tutorials, and even programming exercises tailored to our courses.",
  },
];
export default function Questions() {
  return (
    <div className="min-h-[60vh] my-10">
      <div className="container mx-auto px-8 flex flex-col gap-10">
        <TypographyH1 className="lg:text-5xl text-center text-4xl">
          FAQ
        </TypographyH1>
        <div className="">
          {questions.map((question) => {
            return <Question key={question.index} question={question} />;
          })}
        </div>
      </div>
    </div>
  );
}

interface QuestionProps {
  question: {
    index: number;
    question: string;
    answer: string;
  };
}
function Question({ question }: QuestionProps) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <TypographyH3>{question.question}</TypographyH3>
        </AccordionTrigger>
        <AccordionContent>
          <TypographyP className="text-base">{question.answer}</TypographyP>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
