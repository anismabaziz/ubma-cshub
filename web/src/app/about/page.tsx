import { 
  BookOpen, 
  Search, 
  Users, 
  GraduationCap,
  Sparkles,
  Library
} from "lucide-react";
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent 
} from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="min-h-screen pb-20 pt-16 px-4 md:px-8 container mx-auto">
      {/* Hero Section */}
      <div className="max-w-4xl mb-16">
        <h1 className="text-5xl font-extrabold tracking-tight lg:text-7xl mb-6 bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
          About Ubma Cshub
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
          Ubma Cshub is a dedicated academic resource platform designed to 
          simplify the student journey for Computer Science undergraduates.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Main Content */}
        <div className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <Library className="h-8 w-8 text-primary" />
              What is Ubma Cshub?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe that every student should have easy access to the materials they need to succeed. 
              Ubma Cshub serves as a central hub where students can find lecture notes, textbooks, 
              recorded sessions, and helpful external links—all organized by year and semester.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <Sparkles className="h-8 w-8 text-primary" />
              Our Goal
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our primary goal is to foster a more efficient learning environment. By centralizing 
              resources, we save students time and effort, allowing them to focus on what truly matters: 
              mastering the logic and creativity of Computer Science.
            </p>
          </section>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 gap-6">
          <Card className="border-2 hover:border-primary/50 transition-colors bg-muted/20">
            <CardHeader className="flex flex-row items-center gap-4 space-y-0">
              <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                <Search className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-xl">Easy Discovery</CardTitle>
                <CardDescription>Filter resources by Major, Year, and Semester.</CardDescription>
              </div>
            </CardHeader>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-colors bg-muted/20">
            <CardHeader className="flex flex-row items-center gap-4 space-y-0">
              <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                <BookOpen className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-xl">Centralized Content</CardTitle>
                <CardDescription>Everything from PDFs to YouTube playlists in one place.</CardDescription>
              </div>
            </CardHeader>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-colors bg-muted/20">
            <CardHeader className="flex flex-row items-center gap-4 space-y-0">
              <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-xl">Student Focused</CardTitle>
                <CardDescription>Designed specifically for the needs of CS students.</CardDescription>
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}
