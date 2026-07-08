import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  Code2,
  Rocket,
  Trophy,
  GraduationCap,
  Briefcase,
  User,
  Wrench,
  FolderGit2,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { LiveBackground } from "@/components/live-background";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

/* ---------------- Data ---------------- */

const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const SKILLS = [
  {
    category: "Programming Languages",
    items: [
      "Python",
      "Java",
      "C++",
      "JavaScript",
      "SQL",
      "R",
    ],
  },
  {
    category: "Frontend",
    items: [
      "HTML5",
      "CSS3",
      "Bootstrap",
      "React.js",
      "Tailwind CSS",
      "TypeScript",
    ],
  },
  {
    category: "Backend",
    items: [
      "Flask",
      "Spring Boot",
      "REST APIs",
      "Hibernate",
      "PyMongo",
      "Node.js"
    ],
  },
  {
    category: "AI / Machine Learning",
    items: [
      "TensorFlow",
      "Keras",
      "Scikit-Learn",
      "CNN",
      "LSTM",
      "Generative AI",
      "RAG",
      "Prompt Engineering",
      "LangChain",
      "LangGraph",
      "FAISS",
      "Sentence-Transformers",
      "NumPy",
      "Pandas",
      "EDA",
    ],
  },
  {
    category: "Databases",
    items: [
      "MySQL",
      "MongoDB",
      "PostgreSQL",
    ],
  },
  {
    category: "DevOps & Cloud",
    items: [
      "Docker",
      "Kubernetes",
      "Minikube",
      "Horizontal Pod Autoscaling",
      "Git",
      "GitHub",
      "Google Cloud Platform",
      "Maven",
    ],
  },
  {
    category: "Data Analytics",
    items: [
      "Power BI",
      "Matplotlib",
      "Data Visualization",
    ],
  },
  {
    category: "Core CS",
    items: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
  },
];

const EXPERIENCE = [
  {
    role: "Associate Software Engineer (Intern)",
    company: "Mphasis Ltd",
    period: "Feb 2026 — Apr 2026",
    location: "Bengaluru, Karnataka",
    points: [
      "Developed responsive web application modules using HTML5, CSS3, Bootstrap, and TypeScript.",
      "Built backend functionalities using Java, Spring, and Spring Boot.",
      "Managed MySQL databases with Hibernate while using Git, GitHub, and Maven.",
    ],
  },
  {
    role: "Data Science Intern",
    company: "Evoastra Ventures Pvt Ltd",
    period: "Jul 2025 — Aug 2025",
    location: "Remote",
    points: [
      "Extracted structured data using BeautifulSoup and Selenium.",
      "Developed a CNN-LSTM Image Captioning model using DenseNet201.",
      "Improved caption generation accuracy through optimized feature extraction.",
    ],
  },
];

const PROJECTS = [
  {
    title: "AI Multi-Agent Social Debate System",
    tag: "AI · RAG",
    description:
      "Developed an AI-powered multi-agent debate platform using LangGraph, LangChain, and FAISS with semantic retrieval, conversation memory, and secure Retrieval-Augmented Generation (RAG) for intelligent context-aware discussions.",
    stack: [
      "Python",
      "LangGraph",
      "LangChain",
      "Groq API",
      "Multi-Agent AI",
    ],
    href: "https://github.com/ankush-48/AI-Multi-Agent-Social-Debate-System",
  },
  {
    title: "Containerized Flask REST API with Kubernetes & MongoDB",
    tag: "Cloud & DevOps",
    description:
      "Built and deployed a production-ready Flask REST API using Docker and Kubernetes with MongoDB StatefulSets, Persistent Volumes, Kubernetes Secrets, and Horizontal Pod Autoscaling.",
    stack: [
      "Flask",
      "Docker",
      "Kubernetes",
      "MongoDB",
      "Minikube",
    ],
    href: "https://github.com/ankush-48/Containerized-Flask-REST-API-with-Kubernetes-MongoDB",
  },
  {
    title: "Image Captioning Model",
    tag: "Deep Learning",
    description:
      "Developed a deep learning image captioning system using TensorFlow, Keras, and DenseNet201, deployed as a Flask web application capable of generating descriptive captions for uploaded images.",
    stack: [
      "Python",
      "TensorFlow",
      "Keras",
      "DenseNet201",
      "Flask",
      "HTML/CSS",
    ],
    href: "https://github.com/ankush-48/image-captioning-MODEL",
  },
  {
    title: "Fear & Greed vs Profit – Behavioral Analysis of Crypto Trading",
    tag: "Data Analytics",
    description:
      "Analyzed cryptocurrency trader behavior against the Fear & Greed Index using exploratory data analysis and visualizations to identify sentiment-driven market patterns.",
    stack: [
      "Python",
      "Pandas",
      "Matplotlib",
      "Data Analysis",
    ],
    href: "https://github.com/ankush-48/Fear-Greed-vs-Profit-A-Behavioral-Analysis-of-Crypto-Trading",
  },
  {
    title: "IPL Score Predictor",
    tag: "Machine Learning",
    description:
      "Built a machine learning application to predict first-innings IPL scores using historical match data, feature engineering, and regression models with a Flask interface.",
    stack: [
      "Python",
      "Machine Learning",
      "Scikit-learn",
      "Flask",
    ],
    href: "https://github.com/ankush-48/IPL-SCORE-PREDICTOR",
  },
  {
    title: "Binance Testnet Trading Bot",
    tag: "Python · API",
    description:
      "Developed an automated cryptocurrency trading bot using the Binance Testnet API with configurable trading strategies, real-time market monitoring, and simulated order execution.",
    stack: [
      "Python",
      "Binance API",
      "REST API",
      "Trading Bot",
    ],
    href: "https://github.com/ankush-48/binance-testnet-trading-bot",
  },
];

const ACHIEVEMENTS = [
  {
    title: "Innovation Expo Finalist",
    detail:
      "Selected among the Top 70 teams out of 450 at the World's Largest Innovation Expo held at Presidency University.",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    detail: "Amazon Web Services Cloud Practitioner Certification.",
  },
  {
    title: "Google GenAI Studio",
    detail: "Completed Google's Generative AI Studio program.",
  },
  {
    title: "Cisco Networking Basics",
    detail: "Completed Cisco Networking Basics certification.",
  },
];

const EDUCATION = [
  {
    school: "Presidency University, Bengaluru",
    degree: "Bachelor of Technology in Computer Science",
    period: "2022 — 2026",
    detail:
      "Graduated with a strong focus on Artificial Intelligence, Software Development, and Cloud Technologies.",
  },
  {
    school: "Kendriya Vidyalaya AFS Yelahanka",
    degree: "CBSE Class XII (Computer Science)",
    period: "2021 — 2022",
    detail: "Completed Higher Secondary Education with Computer Science.",
  },
];

/* ---------------- Page ---------------- */

function Portfolio() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Scroll progress */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed left-0 top-0 z-50 h-0.5 w-full origin-left bg-primary"
      />
      {/* Live animated background */}
      <LiveBackground />

      <div className="relative z-10">
        <Header />
        <main className="mx-auto max-w-6xl px-6 pb-24">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Achievements />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

/* ---------------- Header ---------------- */
function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="group flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground font-display text-sm font-bold">
            AY
          </div>

          <span className="hidden font-display text-sm font-semibold sm:inline">
            Ankush Yadav
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
function Hero() {
  return (
    <section id="top" className="pt-20 pb-24 md:pt-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto flex max-w-3xl flex-col items-center text-center"
      >
        <Badge
          variant="outline"
          className="mb-6 gap-1.5 border-primary/30 bg-primary/10 text-primary"
        >
          <Sparkles className="h-3.5 w-3.5" />
          Open to Full-Time Software Engineering Opportunities
        </Badge>

        <h1 className="font-display text-5xl font-semibold leading-[1.05] sm:text-6xl md:text-7xl">
          Hi, I'm{" "}
          <span className="text-gradient">Ankush Yadav</span>
        </h1>

        <h2 className="mt-4 text-2xl font-semibold text-foreground">
          Software Engineer | AI Engineer | Python Developer
        </h2>

        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Recent Computer Science graduate passionate about building scalable
          software, AI-powered applications, and cloud-native solutions. I enjoy
          solving real-world problems through Full-Stack Development, Machine
          Learning, DevOps, and Generative AI while continuously learning and
          exploring new technologies.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">

          <Button asChild variant="outline" size="lg">
            <a
              href="https://www.linkedin.com/in/ankush-yadav48"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
          </Button>

          <Button asChild variant="ghost" size="lg">
            <a
              href="https://github.com/ankush-48"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
        </div>

        <dl className="mt-14 grid w-full grid-cols-3 gap-6 border-t border-border/60 pt-8">
          {[
            { k: "2", v: "Internships" },
            { k: "10+", v: "Projects Built" },
            { k: "7", v: "Professional Certifications" },
          ].map((s) => (
            <div key={s.v}>
              <dt className="font-display text-3xl font-semibold text-foreground">
                {s.k}
              </dt>
              <dd className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                {s.v}
              </dd>
            </div>
          ))}
        </dl>
      </motion.div>
    </section>
  );
}

/* ---------------- Section shell ---------------- */

function Section({
  id,
  eyebrow,
  icon: Icon,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-border/40 py-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-12 flex items-end justify-between gap-6"
      >
        <div>
          <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary">
            <Icon className="h-3.5 w-3.5" />
            {eyebrow}
          </div>
          <h2 className="font-display text-4xl font-semibold sm:text-5xl">{title}</h2>
        </div>
      </motion.div>
      {children}
    </section>
  );
}

/* ---------------- About ---------------- */

function About() {
  return (
    <Section id="about" eyebrow="About" icon={User} title="Get to know me.">
      <div className="grid gap-10 md:grid-cols-3">
        <div className="md:col-span-2 space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            I'm <span className="text-foreground font-medium">Ankush Yadav</span>, a
            Computer Science graduate passionate about Software Engineering,
            Artificial Intelligence, Cloud Computing, and Full-Stack Development.
            I enjoy building scalable applications that solve real-world problems
            while continuously learning emerging technologies.
          </p>

          <p>
            During my internships at{" "}
            <span className="text-foreground font-medium">Mphasis Ltd</span> and{" "}
            <span className="text-foreground font-medium">
              Evoastra Ventures Pvt. Ltd.
            </span>
            , I worked on frontend and backend development, REST APIs, Spring Boot,
            AI-powered applications, and data-driven solutions.
          </p>

          <p>
            My interests include Generative AI, Retrieval-Augmented Generation
            (RAG), Machine Learning, DevOps, and Cloud Technologies. I enjoy
            transforming ideas into practical applications and continuously
            improving my technical skills through hands-on projects.
          </p>
        </div>

        <Card className="border-border/60 bg-card/60 p-6 backdrop-blur">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            Currently
          </p>

          <ul className="mt-4 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Rocket className="mt-0.5 h-4 w-4 text-primary" />
              <span>Seeking Full-Time Software Engineer opportunities</span>
            </li>

            <li className="flex items-start gap-3">
              <Code2 className="mt-0.5 h-4 w-4 text-primary" />
              <span>Building AI, Cloud & Full-Stack Development projects</span>
            </li>

            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-primary" />
              <span>Bengaluru, Karnataka, India</span>
            </li>
          </ul>
        </Card>
      </div>
    </Section>
  );
}

/* ---------------- Skills ---------------- */

function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" icon={Wrench} title="The stack I reach for.">
      <div className="grid gap-4 sm:grid-cols-2">
        {SKILLS.map((group) => (
          <Card
            key={group.category}
            className="border-border/60 bg-card/60 p-6 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-primary/40"
          >
            <h3 className="font-display text-lg font-semibold">{group.category}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge
                  key={item}
                  variant="secondary"
                  className="border border-border/60 bg-background/60 font-normal"
                >
                  {item}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Experience ---------------- */

function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" icon={Briefcase} title="Where I've built.">
      <ol className="relative space-y-10 border-l border-border/60 pl-8">
        {EXPERIENCE.map((job, i) => (
          <motion.li
            key={job.company}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="relative"
          >
            <span className="absolute -left-[37px] top-2 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-primary ring-4 ring-background" />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-xl font-semibold">
                {job.role}{" "}
                <span className="text-muted-foreground">· {job.company}</span>
              </h3>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                {job.period} · {job.location}
              </span>
            </div>
            <ul className="mt-3 space-y-1.5 text-muted-foreground">
              {job.points.map((p) => (
                <li key={p} className="pl-4 relative before:absolute before:left-0 before:top-2.5 before:h-1 before:w-1 before:rounded-full before:bg-primary">
                  {p}
                </li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}

/* ---------------- Projects ---------------- */

function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" icon={FolderGit2} title="A selection of work.">
      <div className="grid gap-5 md:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.href}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-xl border border-border/60 bg-card/60 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-[var(--shadow-glow)]"
          >
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/15 blur-3xl transition-opacity group-hover:opacity-100" />
            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-primary">{p.tag}</p>
                  <h3 className="mt-1 font-display text-2xl font-semibold">{p.title}</h3>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
              </div>
              <p className="mt-4 text-muted-foreground">{p.description}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-border/60 bg-background/60 px-2 py-0.5 font-mono text-xs text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Achievements ---------------- */

function Achievements() {
  return (
    <Section id="achievements" eyebrow="Achievements" icon={Trophy} title="Notable moments.">
      <div className="grid gap-4 sm:grid-cols-2">
        {ACHIEVEMENTS.map((a) => (
          <Card key={a.title} className="flex items-start gap-4 border-border/60 bg-card/60 p-5 backdrop-blur">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold">{a.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{a.detail}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Education ---------------- */

function Education() {
  return (
    <Section id="education" eyebrow="Education" icon={GraduationCap} title="How I learned.">
      <div className="grid gap-5 md:grid-cols-2">
        {EDUCATION.map((e) => (
          <Card key={e.school} className="border-border/60 bg-card/60 p-6 backdrop-blur">
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="font-display text-xl font-semibold">{e.school}</h3>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">{e.period}</span>
            </div>
            <p className="mt-1 text-primary">{e.degree}</p>
            <p className="mt-3 text-sm text-muted-foreground">{e.detail}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Contact ---------------- */

function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      icon={Mail}
      title="Let's Connect."
    >
      <Card className="relative overflow-hidden border-border/60 bg-card/60 p-10 backdrop-blur">
        <div
          className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/25 blur-3xl"
          aria-hidden
        />

        <div className="relative grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div>
            <p className="font-display text-3xl font-semibold sm:text-4xl">
              Looking for a Software Engineer, AI Engineer, or Python Developer?
              Let's connect.
            </p>

            <p className="mt-4 text-muted-foreground">
              I'm actively seeking full-time Software Engineering, AI/ML,
              Python Development, and Cloud opportunities. Feel free to reach
              out for collaborations or career opportunities.
            </p>
          </div>

          <div className="flex flex-col gap-3">

              <Button asChild size="lg" className="glow-accent">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ay3068756@gmail.com&su=Software%20Engineer%20Opportunity"
                target="_blank"
                rel="noreferrer"
  >
              <Mail className="mr-2 h-4 w-4" />
                  Email Me
                </a>
              </Button>

            <Button asChild variant="outline" size="lg">
              <a href="/Resume_SE.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Resume (Software Engineer)
              </a>
            </Button>

            <Button asChild variant="outline" size="lg">
              <a href="/Resume_AI_ML.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Resume (AI / ML & Data Science)
              </a>
            </Button>

            <div className="mt-1 flex items-center gap-2">
              <Button asChild variant="ghost" size="sm" className="flex-1">
                <a
                  href="https://www.linkedin.com/in/ankush-yadav48"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>

              <Button asChild variant="ghost" size="sm" className="flex-1">
                <a
                  href="https://github.com/ankush-48"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </Section>
  );
}

/* ---------------- Footer ---------------- */

function Footer() {
  return (
    <footer className="relative z-10 border-t border-border/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Ankush Yadav. Built with React, TypeScript & Tailwind CSS.
        </p>

        <div className="flex items-center gap-3 text-muted-foreground">

          <a
            href="https://www.linkedin.com/in/ankush-yadav48"
            aria-label="LinkedIn"
            className="transition-colors hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" />
          </a>

          <a
            href="https://github.com/ankush-48"
            aria-label="GitHub"
            className="transition-colors hover:text-foreground"
          >
            <Github className="h-4 w-4" />
          </a>

          <a
            href="mailto:ay3068756@gmail.com"
            aria-label="Email"
            className="transition-colors hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
          </a>

        </div>
      </div>
    </footer>
  );
}
