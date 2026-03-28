import { getModuleById } from "@/services/modules";
import { getResourcesByModule } from "@/services/resources";
import { ArrowLeft, Book, Globe, Youtube, Database, ExternalLink, Library, FolderOpen, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ResourcesProps {
  params: Promise<{
    moduleId: string;
  }>;
}

export default async function Resources({ params }: ResourcesProps) {
  const { moduleId } = await params;
  const [resources, moduleData] = await Promise.all([
    getResourcesByModule(moduleId),
    getModuleById(moduleId),
  ]);

  const getResourceIcon = (type: string) => {
    switch (type) {
      case "BOOK":
        return <Book className="h-6 w-6" />;
      case "YOUTUBE":
        return <Youtube className="h-6 w-6" />;
      case "DRIVE":
        return <Database className="h-6 w-6" />;
      default:
        return <Globe className="h-6 w-6" />;
    }
  };

  const getResourceColorClass = (type: string) => {
    switch (type) {
      case "YOUTUBE":
        return "text-red-600 bg-red-50 dark:bg-red-950/30";
      case "DRIVE":
        return "text-blue-600 bg-blue-50 dark:bg-blue-950/30";
      case "BOOK":
        return "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30";
      default:
        return "text-indigo-600 bg-indigo-50 dark:bg-indigo-950/30";
    }
  };

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case "BOOK":
        return "default";
      case "YOUTUBE":
        return "destructive";
      case "DRIVE":
        return "secondary";
      default:
        return "outline";
    }
  };

  return (
    <div className="min-h-screen mx-auto container pt-10 px-8 pb-20">
      <Link href={`/courses/modules/${moduleData.semester.id}`}>
        <Button variant="ghost" className="mb-8 flex items-center gap-2 hover:bg-primary/5 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to {moduleData.semester.semester_number} Modules
        </Button>
      </Link>

      <div className="mb-12 space-y-4">
        <div className="flex items-center gap-3 text-muted-foreground mb-2">
          <Library className="h-5 w-5" />
          <span className="text-sm font-medium uppercase tracking-wider">
            {moduleData.semester.year.major.name} • Year {moduleData.semester.year.year_number} • Semester {moduleData.semester.semester_number}
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                {moduleData.name}
              </h1>
              <Badge variant="outline" className="text-lg py-1 px-3 font-mono">
                {moduleData.code}
              </Badge>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Access all learning materials, recorded lectures, and shared drives for this module.
            </p>
          </div>
          <Badge variant="secondary" className="w-fit h-fit px-4 py-1 text-base font-semibold">
            {resources.length} Resources
          </Badge>
        </div>
      </div>

      {resources.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <Card key={resource.id} className="group flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 hover:border-primary/20 bg-card overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-2xl transition-colors duration-300 ${getResourceColorClass(resource.resource_type)}`}>
                    {getResourceIcon(resource.resource_type)}
                  </div>
                  <Badge variant={getBadgeVariant(resource.resource_type)} className="capitalize font-semibold">
                    {resource.resource_type.toLowerCase()}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold leading-tight line-clamp-2 min-h-[3.5rem] group-hover:text-primary transition-colors">
                  {resource.description}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow pb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/30 p-3 rounded-lg border border-muted/50">
                  <LinkIcon className="h-4 w-4 shrink-0" />
                  <p className="truncate italic">
                    {resource.url}
                  </p>
                </div>
              </CardContent>
              <CardFooter className="pt-6 pb-6 border-t bg-muted/5 group-hover:bg-muted/10 transition-colors">
                <Link href={resource.url} target="_blank" className="w-full">
                  <Button className="w-full flex items-center gap-2 font-bold shadow-sm group-hover:shadow-md transition-all">
                    Access Material
                    <ExternalLink className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 text-center bg-muted/20 rounded-3xl border-2 border-dashed border-muted/60">
          <div className="p-5 rounded-full bg-muted/50 mb-4 text-muted-foreground/20">
            <FolderOpen className="h-16 w-16" />
          </div>
          <h3 className="text-2xl font-bold mb-2">No Materials Added Yet</h3>
          <p className="text-muted-foreground max-w-sm mx-auto">
            We haven&apos;t shared any resources for {moduleData.name} still. Keep studying and check back later!
          </p>
        </div>
      )}
    </div>
  );
}
