"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardTitle,
  CardDescription,
  CardHeader,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Major, Semester, Year } from "@/types/db";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface SelectCourseCardProps {
  majors: Major[];
  years: Year[];
  semesters: Semester[];
}

export default function SelectCourseCard({
  majors,
  years,
  semesters,
}: SelectCourseCardProps) {
  const [selectedMajor, setSelectedMajor] = useState<string | undefined>(
    undefined
  );
  const [selectedYear, setSelectedYear] = useState<string | undefined>(
    undefined
  );
  const [selectedSemester, setSelectedSemester] = useState<string | undefined>(
    undefined
  );
  const router = useRouter();

  const handleMajorChange = (value: string) => {
    setSelectedMajor(value);
    setSelectedYear(undefined);
    setSelectedSemester(undefined);
  };

  const handleYearChange = (value: string) => {
    setSelectedYear(value);
    setSelectedSemester(undefined);
  };

  const handleContinue = () => {
    if (selectedSemester) {
      router.push(`/courses/modules/${selectedSemester}`);
    }
  };

  const yearsFiltered = years.filter((year) => year.major.id === selectedMajor);
  const semestersFiltered = semesters.filter(
    (semester) => semester.year.id === selectedYear
  );

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Find Your Resources</CardTitle>
        <CardDescription>
          Select your major and year to discover relevant modules and learning
          materials
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="major">Major</Label>
          <Select
            value={selectedMajor}
            onValueChange={handleMajorChange}
          >
            <SelectTrigger id="major">
              <SelectValue placeholder="Select your major" />
            </SelectTrigger>
            <SelectContent>
              {majors.map((major) => (
                <SelectItem key={major.id} value={major.id}>
                  {major.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="year">Year</Label>
          <Select
            value={selectedYear}
            onValueChange={handleYearChange}
            disabled={!selectedMajor}
          >
            <SelectTrigger id="year">
              <SelectValue placeholder="Select your year" />
            </SelectTrigger>
            <SelectContent>
              {yearsFiltered.map((year) => (
                <SelectItem key={year.id} value={year.id}>
                  Year {year.year_number}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="semester">Semester</Label>
          <Select
            value={selectedSemester}
            onValueChange={setSelectedSemester}
            disabled={!selectedYear}
          >
            <SelectTrigger id="semster">
              <SelectValue placeholder="Select your semester" />
            </SelectTrigger>
            <SelectContent>
              {semestersFiltered.map((semester) => (
                <SelectItem key={semester.id} value={semester.id}>
                  Semester {semester.semester_number}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          size="lg"
          disabled={!selectedSemester}
          onClick={handleContinue}
        >
          Continue
        </Button>
      </CardFooter>
    </Card>
  );
}
