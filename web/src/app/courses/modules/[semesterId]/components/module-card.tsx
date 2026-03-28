import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, ChevronRight } from "lucide-react";
import { Module } from "@/types/db";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface ModuleCardProps {
  module: Module;
}

export default function ModuleCard({ module }: ModuleCardProps) {
  return (
    <Card
      key={module.id}
      className="group flex flex-col h-full cursor-pointer hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border-2 hover:border-primary/20 bg-card overflow-hidden"
    >
      <CardHeader className="pb-4 relative">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2.5 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
            <BookOpen className="h-6 w-6" />
          </div>
          <Badge variant="outline" className="font-mono text-xs tracking-tighter bg-muted/50">
            {module.code}
          </Badge>
        </div>
        
        <div className="space-y-2">
          <CardTitle className="text-2xl font-bold leading-tight group-hover:text-primary transition-colors">
            {module.name}
          </CardTitle>
          <CardDescription className="line-clamp-3 text-sm leading-relaxed min-h-[4.5rem]">
            {module.description}
          </CardDescription>
        </div>
      </CardHeader>

      <CardFooter className="mt-auto pt-6 pb-6 border-t bg-muted/5 group-hover:bg-muted/10 transition-colors">
        <Link href={`/courses/modules/resources/${module.id}/`} className="w-full">
          <Button variant="ghost" className="w-full justify-between px-2 hover:bg-transparent group-hover:translate-x-1 transition-transform">
            <span className="font-semibold text-primary">View Resources</span>
            <ChevronRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-all" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
