import os
import django
import random
import uuid

# Set up Django environment
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "ubma.settings")
django.setup()

from academics.models import Degree, Major, Year, Semester, Module, Resource, ResourceType

def populate():
    print("Clearing existing data...")
    Resource.objects.all().delete()
    Module.objects.all().delete()
    Semester.objects.all().delete()
    Year.objects.all().delete()
    Major.objects.all().delete()
    Degree.objects.all().delete()

    print("Creating Degrees...")
    cs_degree = Degree.objects.create(name="Computer Science")
    se_degree = Degree.objects.create(name="Software Engineering")

    degrees = [cs_degree, se_degree]

    majors_data = [
        {"name": "Artificial Intelligence", "code": "AI", "degree": cs_degree},
        {"name": "Cyber Security", "code": "CYS", "degree": cs_degree},
        {"name": "Data Science", "code": "DS", "degree": cs_degree},
        {"name": "Web Development", "code": "WEB", "degree": se_degree},
        {"name": "Mobile Systems", "code": "MOB", "degree": se_degree},
        {"name": "Cloud Computing", "code": "CC", "degree": se_degree},
    ]

    print("Creating Majors...")
    for m_data in majors_data:
        Major.objects.create(
            name=m_data["name"],
            code=m_data["code"],
            description=f"A specialized program focusing on {m_data['name']}.",
            degree=m_data["degree"]
        )

    all_majors = Major.objects.all()

    for major in all_majors:
        print(f"Populating data for Major: {major.name}")
        # Create 3 Years for each Major
        for year_num in range(1, 4):
            year = Year.objects.create(year_number=year_num, major=major)
            
            # Create 2 Semesters for each Year
            for sem_num in range(1, 3):
                semester = Semester.objects.create(semester_number=sem_num, year=year)
                
                # Create 4-6 Modules for each Semester
                for mod_num in range(1, random.randint(5, 7)):
                    module_name = f"{major.code} {year_num}0{sem_num}0{mod_num}: Advanced {major.name} Topic {mod_num}"
                    module_code = f"{major.code}{year_num}{sem_num}{mod_num}"
                    module = Module.objects.create(
                        name=module_name,
                        code=module_code,
                        description=f"In-depth study of {module_name} in the context of {major.name}.",
                        semester=semester
                    )
                    
                    # Create 3-5 Resources for each Module
                    resource_types = [ResourceType.BOOK, ResourceType.DRIVE, ResourceType.YOUTUBE, ResourceType.WEBSITE]
                    for _ in range(random.randint(3, 6)):
                        res_type = random.choice(resource_types)
                        Resource.objects.create(
                            resource_type=res_type,
                            url=f"https://example.com/resource/{uuid.uuid4()}",
                            description=f"A great {res_type} for learning more about {module.name}.",
                            module=module
                        )

    print("Database population complete!")

if __name__ == "__main__":
    populate()
