import type { ReactNode } from "react";
import Landing from "./landing";

type School = { name: string; level: string; years: string };
type Project = {
  title: string;
  description: string;
  runNote: string;
  file: string;
};

const student = {
  name: "Zendrei Martin Jac A. Perales",
  course: "Bachelor of Science in Information Technology",
  birth: "2007-03-02",
};

const education: School[] = [
  {
    level: "Elementary",
    name: "Jose L. Porras Elementary School",
    years: "2018–2019",
  },
  {
    level: "Junior High School",
    name: "Davao Central National High School",
    years: "2022–2023",
  },
  {
    level: "Senior High School",
    name: "Davao Chong Hua High School",
    years: "2024–2025",
  },
];

const projects: Project[] = [
  {
    title: "C++ Quiz",
    description: "Basic knowledge quiz for CC 102.",
    runNote: "Play it in VS Code or any terminal.",
    file: "/projects/Trivia Quiz.cpp",
  },
  {
    title: "Trolley Problem Java Edition",
    description: "Trolley problem project for CC 103.",
    runNote: "Play it in VS Code or any terminal.",
    file: "/projects/TrolleyProblemGame.zip",
  },
];

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    dateStyle: "long",
    timeZone: "UTC",
  });
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section aria-labelledby={id} className="mt-14">
      <h2 id={id} className="text-2xl font-semibold tracking-tight">
        {title}
      </h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function SchoolItem({ name, level, years }: School) {
  return (
    <li className="relative pb-8 pl-6 last:pb-0 sm:grid sm:grid-cols-[9rem_1fr] sm:items-baseline sm:gap-6">
      <span
        aria-hidden
        className="absolute top-2 left-[5.5px] size-2.5 rounded-full bg-accent"
      />
      <p className="text-muted tabular-nums">{years}</p>
      <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-muted">{level}</p>
      </div>
    </li>
  );
}

function ProjectItem({ title, description, runNote, file }: Project) {
  const fileName = file.split("/").pop() ?? file;
  const extension = fileName.split(".").pop();

  return (
    <li className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:p-6">
      <div className="max-w-prose">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-1">{description}</p>
        <p className="mt-1 text-sm text-muted">{runNote}</p>
      </div>
      <a
        href={file}
        download={fileName}
        className="inline-flex shrink-0 items-center justify-center rounded-lg border border-accent-border bg-accent px-4 py-2.5 font-medium text-accent-foreground transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none"
      >
        Download .{extension}
      </a>
    </li>
  );
}

export default function Home() {
  return (
    <Landing>
      <main className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-8 sm:py-20">
        <header className="border-b border-line pb-10">
          <h1 className="max-w-2xl text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl">
            {student.name}
          </h1>
          <p className="mt-6 text-lg">{student.course}</p>
          <p className="mt-1 text-muted">Born {formatDate(student.birth)}</p>
        </header>

        <Section id="education" title="Education">
          <ol className="border-l border-line">
            {education.map((school) => (
              <SchoolItem key={school.name} {...school} />
            ))}
          </ol>
        </Section>

        <Section id="projects" title="Projects">
          <ul className="divide-y divide-line rounded-xl border border-line bg-surface">
            {projects.map((project) => (
              <ProjectItem key={project.title} {...project} />
            ))}
          </ul>
        </Section>
      </main>
    </Landing>
  );
}
