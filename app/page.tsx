"use client";

function Student({
  name,
  course,
  birth,
}: {
  name: string;
  course: string;
  birth: string;
}) {
  return (
    <div className="border-2 p-4 rounded-lg h-[200px] bg-gray-200">
      <h2 className="text-xl font-bold">{name}</h2>
      <p>{course}</p>
      <p>{birth}</p>
    </div>
  );
}

function Elementary({ school, year }: { school: string; year: string }) {
  return (
    <div className="p-6 rounded-lg bg-gray-200 h-[400px] w-[450px] border-2 border-blue-300 hover:bg-gray-400 transition duration-150 delay-150">
      <h2 className="text-[40px] font-bold justify-left">{school}</h2>
      <p>{year}</p>
    </div>
  );
}

function JuniorHighSchool({ school, year }: { school: string; year: string }) {
  return (
    <div className="p-6 rounded-lg bg-gray-200 h-[400px] w-[450px] border-2 border-blue-300 hover:bg-gray-400 transition duration-150 delay-150">
      <h2 className="text-[40px] font-bold justify-center">{school}</h2>
      <p>{year}</p>
    </div>
  );
}

function SeniorHighSchool({ school, year }: { school: string; year: string }) {
  return (
    <div className="p-6 rounded-lg bg-gray-200 h-[400px] w-[450px] border-2 border-blue-300 hover:bg-gray-400 transition duration-150 delay-150">
      <h2 className="text-[40px] font-bold justify-center">{school}</h2>
      <p>{year}</p>
    </div>
  );
}

function Project1({
  project,
  note,
  description,
}: {
  project: string;
  note: string;
  description: string;
}) {
  return (
    <div className="p-6 rounded-lg bg-gray-200 h-[400px] w-[450px] border-2 border-blue-300 hover:bg-gray-400 transition duration-150 delay-150">
      <h2 className="text-[40px] font-bold justify-left">{project}</h2>
      <p>{note}</p>
      <p>{description}</p>
    </div>
  );
}

function Project2({
  project,
  note,
  description,
}: {
  children: Element;
  project: string;
  note: string;
  description: string;
}) {
  return (
    <div className="p-6 rounded-lg bg-gray-200 h-[400px] w-[450px] border-2 border-blue-300 hover:bg-gray-400 transition duration-150 delay-150">
      <h2 className="text-[40px] font-bold justify-left">{project}</h2>
      <p>{note}</p>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="p-8">
      <Student
        name="Zendrei Martin Jac A. Perales"
        course="Bachelor of Science in Information Technology"
        birth="2007-03-02"
      />

      <h1 className=" text-[45px] mt-[20px] font-bold">Education</h1>

      <div className="mt-[20px] flex justify-between">
        <Elementary
          school="Jose L. Porras Elementary School"
          year="2018-2019 (Elementary)"
        />

        <JuniorHighSchool
          school="Davao Central National High School"
          year="2022-2023 (Junior High School)"
        />

        <SeniorHighSchool
          school="Davao Chong Hua High School"
          year="2024-2025 (Senior High School)"
        />
      </div>

      <h1 className=" text-[45px] mt-[20px] font-bold">Projects</h1>

      <Project1
        project="C++ Quiz"
        note="(play it on VSCode or any terminal)"
        description="Basic knowledge quiz"
      >
        <a
          href="/projects/Trivia Quiz.cpp"
          download="Trivia Quiz.cpp"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 inline-block"
        >
          Try It!
        </a>
      </Project1>
    </main>
  );
}
