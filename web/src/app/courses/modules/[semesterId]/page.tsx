import { getModulesBySemester } from "@/services/modules";
import { getSemesterById } from "@/services/semesters";
import ModuleCard from "./components/module-card";
import { ArrowLeft, BookOpen, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface ModulesProps {
  params: Promise<{
    semesterId: string;
  }>;
}

export default async function Modules({ params }: ModulesProps) {
  const { semesterId } = await params;
  const [modules, semester] = await Promise.all([
    getModulesBySemester(semesterId),
    getSemesterById(semesterId),
  ]);

  return (
    <div className="min-h-screen mx-auto container pt-10 px-8 pb-20">
      <Link href={"/courses"}>
        <Button variant="ghost" className="mb-8 flex items-center gap-2 hover:bg-primary/5 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Selection
        </Button>
      </Link>

      <div className="mb-12 space-y-4">
        <div className="flex items-center gap-3 text-muted-foreground mb-2">
          <GraduationCap className="h-5 w-5" />
          <span className="text-sm font-medium uppercase tracking-wider">
            {semester.year.major.name} • Year {semester.year.year_number}
          </span>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
              Semester {semester.semester_number} Modules
            </h1>
            <p className="text-xl text-muted-foreground mt-2 max-w-2xl">
              Explore your course materials, lecture notes, and study resources for this semester.
            </p>
          </div>
          <Badge variant="secondary" className="w-fit h-fit px-4 py-1 text-base font-semibold">
            {modules.length} Modules Found
          </Badge>
        </div>
      </div>

      {modules.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => (
            <ModuleCard module={module} key={module.id} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center bg-muted/30 rounded-3xl border-2 border-dashed border-muted">
          <div className="p-4 rounded-full bg-muted mb-4 text-muted-foreground/30">
            <BookOpen className="h-12 w-12" />
          </div>
          <h3 className="text-2xl font-bold mb-2">No Modules Found</h3>
          <p className="text-muted-foreground max-w-xs mx-auto">
            We haven&apos;t added any modules for this specific semester yet. Check back soon!
          </p>
        </div>
      )}
    </div>
  );
}
