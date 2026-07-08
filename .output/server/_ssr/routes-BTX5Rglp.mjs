import { a as __toESM } from "../_runtime.mjs";
import { n as useScroll, r as motion, t as useSpring } from "../_libs/framer-motion.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { i as Slot, s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { _ as Check, a as Sparkles, b as ArrowUpRight, c as Moon, d as Linkedin, f as GraduationCap, g as CodeXml, h as Download, i as Sun, l as MapPin, m as FolderGit2, n as User, o as Rocket, p as Github, r as Trophy, s as Palette, t as Wrench, u as Mail, v as Briefcase, y as Award } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { i as Trigger, n as Portal, r as Root2, t as Content2 } from "../_libs/@radix-ui/react-popover+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BTX5Rglp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var badgeVariants = cva("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
		secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
		destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
		outline: "text-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
var Card = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("rounded-xl border bg-card text-card-foreground shadow", className),
	...props
}));
Card.displayName = "Card";
var CardHeader = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("flex flex-col space-y-1.5 p-6", className),
	...props
}));
CardHeader.displayName = "CardHeader";
var CardTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("font-semibold leading-none tracking-tight", className),
	...props
}));
CardTitle.displayName = "CardTitle";
var CardDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
CardDescription.displayName = "CardDescription";
var CardContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("p-6 pt-0", className),
	...props
}));
CardContent.displayName = "CardContent";
var CardFooter = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("flex items-center p-6 pt-0", className),
	...props
}));
CardFooter.displayName = "CardFooter";
var Popover = Root2;
var PopoverTrigger = Trigger;
var PopoverContent = import_react.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	align,
	sideOffset,
	className: cn("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-popover-content-transform-origin)", className),
	...props
}) }));
PopoverContent.displayName = Content2.displayName;
var ACCENTS = [
	{
		id: "violet",
		label: "Amethyst",
		color: "oklch(0.68 0.22 280)"
	},
	{
		id: "emerald",
		label: "Emerald",
		color: "oklch(0.68 0.17 155)"
	},
	{
		id: "amber",
		label: "Solar",
		color: "oklch(0.78 0.19 65)"
	},
	{
		id: "rose",
		label: "Crimson",
		color: "oklch(0.70 0.20 12)"
	},
	{
		id: "cyan",
		label: "Ocean",
		color: "oklch(0.72 0.18 210)"
	},
	{
		id: "lime",
		label: "Neon",
		color: "oklch(0.80 0.22 130)"
	}
];
function readAttr(attr, fallback) {
	if (typeof document === "undefined") return fallback;
	return document.documentElement.getAttribute(attr) || fallback;
}
function ThemeSwitcher() {
	const [accent, setAccent] = (0, import_react.useState)("violet");
	const [mode, setMode] = (0, import_react.useState)("dark");
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setAccent(readAttr("data-accent", "violet"));
		setMode(readAttr("data-mode", "dark"));
		setMounted(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!mounted) return;
		document.documentElement.setAttribute("data-accent", accent);
		localStorage.setItem("pf-accent", accent);
	}, [accent, mounted]);
	(0, import_react.useEffect)(() => {
		if (!mounted) return;
		document.documentElement.setAttribute("data-mode", mode);
		localStorage.setItem("pf-mode", mode);
	}, [mode, mounted]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Popover, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverTrigger, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			variant: "outline",
			size: "icon",
			"aria-label": "Customize theme",
			className: "relative border-border/60 bg-card/60 backdrop-blur hover:bg-card",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Palette, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full ring-2 ring-background",
				style: { background: "var(--primary)" }
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverContent, {
		align: "end",
		className: "w-72 border-border/60 bg-card/95 backdrop-blur",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-widest text-muted-foreground",
					children: "Accent color"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 grid grid-cols-6 gap-2",
					children: ACCENTS.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setAccent(a.id),
						"aria-label": a.label,
						className: cn("group relative aspect-square rounded-full ring-offset-2 ring-offset-card transition-transform hover:scale-110", accent === a.id && "ring-2 ring-foreground"),
						style: { background: a.color },
						children: accent === a.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							className: "absolute inset-0 m-auto h-3.5 w-3.5 text-background",
							strokeWidth: 3
						})
					}, a.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs text-muted-foreground",
					children: ACCENTS.find((a) => a.id === accent)?.label
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium uppercase tracking-widest text-muted-foreground",
				children: "Appearance"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 grid grid-cols-2 gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setMode("dark"),
					className: cn("flex items-center justify-center gap-2 rounded-md border border-border/60 px-3 py-2 text-sm transition-colors", mode === "dark" ? "bg-primary text-primary-foreground border-transparent" : "hover:bg-muted"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-4 w-4" }), " Dark"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setMode("light"),
					className: cn("flex items-center justify-center gap-2 rounded-md border border-border/60 px-3 py-2 text-sm transition-colors", mode === "light" ? "bg-primary text-primary-foreground border-transparent" : "hover:bg-muted"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-4 w-4" }), " Light"]
				})]
			})] })]
		})
	})] });
}
var BUBBLES = [
	{
		size: 420,
		top: "6%",
		left: "-6%",
		delay: 0,
		duration: 18,
		opacity: .55
	},
	{
		size: 320,
		top: "40%",
		left: "72%",
		delay: 2,
		duration: 22,
		opacity: .5
	},
	{
		size: 260,
		top: "72%",
		left: "10%",
		delay: 4,
		duration: 20,
		opacity: .45
	},
	{
		size: 200,
		top: "18%",
		left: "55%",
		delay: 1,
		duration: 16,
		opacity: .4
	},
	{
		size: 360,
		top: "82%",
		left: "60%",
		delay: 3,
		duration: 24,
		opacity: .5
	},
	{
		size: 160,
		top: "30%",
		left: "25%",
		delay: 5,
		duration: 14,
		opacity: .35
	}
];
function LiveBackground() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"aria-hidden": true,
		className: "pointer-events-none fixed inset-0 z-0 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: { background: "var(--gradient-radial)" }
			}),
			BUBBLES.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
				className: "absolute rounded-full blur-3xl",
				style: {
					width: b.size,
					height: b.size,
					top: b.top,
					left: b.left,
					background: i % 2 === 0 ? "radial-gradient(circle at 30% 30%, var(--primary), transparent 65%)" : "radial-gradient(circle at 60% 40%, var(--primary-glow), transparent 60%)",
					opacity: b.opacity
				},
				animate: {
					x: [
						0,
						40,
						-30,
						0
					],
					y: [
						0,
						-50,
						30,
						0
					],
					scale: [
						1,
						1.1,
						.95,
						1
					]
				},
				transition: {
					duration: b.duration,
					delay: b.delay,
					repeat: Infinity,
					ease: "easeInOut"
				}
			}, i)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-grid opacity-30" })
		]
	});
}
var NAV = [
	{
		id: "about",
		label: "About"
	},
	{
		id: "skills",
		label: "Skills"
	},
	{
		id: "experience",
		label: "Experience"
	},
	{
		id: "projects",
		label: "Projects"
	},
	{
		id: "achievements",
		label: "Achievements"
	},
	{
		id: "education",
		label: "Education"
	},
	{
		id: "contact",
		label: "Contact"
	}
];
var SKILLS = [
	{
		category: "Programming Languages",
		items: [
			"Python",
			"Java",
			"C++",
			"JavaScript",
			"SQL",
			"R"
		]
	},
	{
		category: "Frontend",
		items: [
			"HTML5",
			"CSS3",
			"Bootstrap",
			"React.js",
			"Tailwind CSS",
			"TypeScript"
		]
	},
	{
		category: "Backend",
		items: [
			"Flask",
			"Spring Boot",
			"REST APIs",
			"Hibernate",
			"PyMongo"
		]
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
			"EDA"
		]
	},
	{
		category: "Databases",
		items: [
			"MySQL",
			"MongoDB",
			"Service Discovery"
		]
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
			"Maven"
		]
	},
	{
		category: "Data Analytics",
		items: [
			"Power BI",
			"Matplotlib",
			"Data Visualization"
		]
	},
	{
		category: "Core CS",
		items: [
			"Data Structures & Algorithms",
			"Object-Oriented Programming",
			"DBMS",
			"Operating Systems",
			"Computer Networks"
		]
	}
];
var EXPERIENCE = [{
	role: "Associate Software Engineer (Intern)",
	company: "Mphasis Ltd",
	period: "Feb 2026 — Apr 2026",
	location: "Bengaluru, Karnataka",
	points: [
		"Developed responsive web application modules using HTML5, CSS3, Bootstrap, and TypeScript.",
		"Built backend functionalities using Java, Spring, and Spring Boot.",
		"Managed MySQL databases with Hibernate while using Git, GitHub, and Maven."
	]
}, {
	role: "Data Science Intern",
	company: "Evoastra Ventures Pvt Ltd",
	period: "Jul 2025 — Aug 2025",
	location: "Remote",
	points: [
		"Extracted structured data using BeautifulSoup and Selenium.",
		"Developed a CNN-LSTM Image Captioning model using DenseNet201.",
		"Improved caption generation accuracy through optimized feature extraction."
	]
}];
var PROJECTS = [
	{
		title: "AI Multi-Agent Social Debate System",
		tag: "AI · RAG",
		description: "Developed an AI-powered multi-agent debate platform using LangGraph, LangChain, and FAISS with semantic retrieval, conversation memory, and secure Retrieval-Augmented Generation (RAG) for intelligent context-aware discussions.",
		stack: [
			"Python",
			"LangGraph",
			"LangChain",
			"Groq API",
			"Multi-Agent AI"
		],
		href: "https://github.com/ankush-48/AI-Multi-Agent-Social-Debate-System"
	},
	{
		title: "Containerized Flask REST API with Kubernetes & MongoDB",
		tag: "Cloud & DevOps",
		description: "Built and deployed a production-ready Flask REST API using Docker and Kubernetes with MongoDB StatefulSets, Persistent Volumes, Kubernetes Secrets, and Horizontal Pod Autoscaling.",
		stack: [
			"Flask",
			"Docker",
			"Kubernetes",
			"MongoDB",
			"Minikube"
		],
		href: "https://github.com/ankush-48/Containerized-Flask-REST-API-with-Kubernetes-MongoDB"
	},
	{
		title: "Image Captioning Model",
		tag: "Deep Learning",
		description: "Developed a deep learning image captioning system using TensorFlow, Keras, and DenseNet201, deployed as a Flask web application capable of generating descriptive captions for uploaded images.",
		stack: [
			"Python",
			"TensorFlow",
			"Keras",
			"DenseNet201",
			"Flask",
			"HTML/CSS"
		],
		href: "https://github.com/ankush-48/image-captioning-MODEL"
	},
	{
		title: "Fear & Greed vs Profit – Behavioral Analysis of Crypto Trading",
		tag: "Data Analytics",
		description: "Analyzed cryptocurrency trader behavior against the Fear & Greed Index using exploratory data analysis and visualizations to identify sentiment-driven market patterns.",
		stack: [
			"Python",
			"Pandas",
			"Matplotlib",
			"Data Analysis"
		],
		href: "https://github.com/ankush-48/Fear-Greed-vs-Profit-A-Behavioral-Analysis-of-Crypto-Trading"
	},
	{
		title: "IPL Score Predictor",
		tag: "Machine Learning",
		description: "Built a machine learning application to predict first-innings IPL scores using historical match data, feature engineering, and regression models with a Flask interface.",
		stack: [
			"Python",
			"Machine Learning",
			"Scikit-learn",
			"Flask"
		],
		href: "https://github.com/ankush-48/IPL-SCORE-PREDICTOR"
	},
	{
		title: "Binance Testnet Trading Bot",
		tag: "Python · API",
		description: "Developed an automated cryptocurrency trading bot using the Binance Testnet API with configurable trading strategies, real-time market monitoring, and simulated order execution.",
		stack: [
			"Python",
			"Binance API",
			"REST API",
			"Trading Bot"
		],
		href: "https://github.com/ankush-48/binance-testnet-trading-bot"
	}
];
var ACHIEVEMENTS = [
	{
		title: "Innovation Expo Finalist",
		detail: "Selected among the Top 70 teams out of 450 at the World's Largest Innovation Expo held at Presidency University."
	},
	{
		title: "AWS Certified Cloud Practitioner",
		detail: "Amazon Web Services Cloud Practitioner Certification."
	},
	{
		title: "Google GenAI Studio",
		detail: "Completed Google's Generative AI Studio program."
	},
	{
		title: "Cisco Networking Basics",
		detail: "Completed Cisco Networking Basics certification."
	}
];
var EDUCATION = [{
	school: "Presidency University, Bengaluru",
	degree: "Bachelor of Technology in Computer Science",
	period: "2022 — 2026",
	detail: "Graduated with a strong focus on Artificial Intelligence, Software Development, and Cloud Technologies."
}, {
	school: "Kendriya Vidyalaya AFS Yelahanka",
	degree: "CBSE Class XII (Computer Science)",
	period: "2021 — 2022",
	detail: "Completed Higher Secondary Education with Computer Science."
}];
function Portfolio() {
	const { scrollYProgress } = useScroll();
	const progress = useSpring(scrollYProgress, {
		stiffness: 120,
		damping: 20
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen overflow-hidden bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				style: { scaleX: progress },
				className: "fixed left-0 top-0 z-50 h-0.5 w-full origin-left bg-primary"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LiveBackground, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
						className: "mx-auto max-w-6xl px-6 pb-24",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skills, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Achievements, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Education, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
				]
			})
		]
	});
}
function Header() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 border-b border-border/40 bg-background/70 backdrop-blur-xl",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl items-center justify-between px-6 py-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "group flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground font-display text-sm font-bold",
						children: "AY"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden font-display text-sm font-semibold sm:inline",
						children: "Ankush Yadav"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 md:flex",
					children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `#${n.id}`,
						className: "rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
						children: n.label
					}, n.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeSwitcher, {})
				})
			]
		})
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "top",
		className: "pt-20 pb-24 md:pt-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				y: 24
			},
			animate: {
				opacity: 1,
				y: 0
			},
			transition: {
				duration: .7,
				ease: [
					.22,
					1,
					.36,
					1
				]
			},
			className: "mx-auto flex max-w-3xl flex-col items-center text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
					variant: "outline",
					className: "mb-6 gap-1.5 border-primary/30 bg-primary/10 text-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), "Open to Full-Time Software Engineering Opportunities"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "font-display text-5xl font-semibold leading-[1.05] sm:text-6xl md:text-7xl",
					children: [
						"Hi, I'm",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: "Ankush Yadav"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-2xl font-semibold text-foreground",
					children: "Software Engineer | AI Engineer | Python Developer"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-2xl text-lg text-muted-foreground",
					children: "Recent Computer Science graduate passionate about building scalable software, AI-powered applications, and cloud-native solutions. I enjoy solving real-world problems through Full-Stack Development, Machine Learning, DevOps, and Generative AI while continuously learning and exploring new technologies."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap items-center justify-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							className: "glow-accent",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "/Resume_.pdf",
								download: true,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-2 h-4 w-4" }), "Download Resume"]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://www.linkedin.com/in/ankush-yadav48",
								target: "_blank",
								rel: "noreferrer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "mr-2 h-4 w-4" }), "LinkedIn"]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "ghost",
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://github.com/ankush-48",
								target: "_blank",
								rel: "noreferrer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "mr-2 h-4 w-4" }), "GitHub"]
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-14 grid w-full grid-cols-3 gap-6 border-t border-border/60 pt-8",
					children: [
						{
							k: "2",
							v: "Internships"
						},
						{
							k: "10+",
							v: "Projects Built"
						},
						{
							k: "7",
							v: "Professional Certifications"
						}
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "font-display text-3xl font-semibold text-foreground",
						children: s.k
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1 text-xs uppercase tracking-widest text-muted-foreground",
						children: s.v
					})] }, s.v))
				})
			]
		})
	});
}
function Section({ id, eyebrow, icon: Icon, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id,
		className: "scroll-mt-24 border-t border-border/40 py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				opacity: 0,
				y: 16
			},
			whileInView: {
				opacity: 1,
				y: 0
			},
			viewport: {
				once: true,
				margin: "-80px"
			},
			transition: { duration: .6 },
			className: "mb-12 flex items-end justify-between gap-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-3.5 w-3.5" }), eyebrow]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-4xl font-semibold sm:text-5xl",
				children: title
			})] })
		}), children]
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "about",
		eyebrow: "About",
		icon: User,
		title: "Get to know me.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 md:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-2 space-y-5 text-lg leading-relaxed text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"I'm ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground font-medium",
							children: "Ankush Yadav"
						}),
						", a Computer Science graduate passionate about Software Engineering, Artificial Intelligence, Cloud Computing, and Full-Stack Development. I enjoy building scalable applications that solve real-world problems while continuously learning emerging technologies."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"During my internships at",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground font-medium",
							children: "Mphasis Ltd"
						}),
						" and",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground font-medium",
							children: "Evoastra Ventures Pvt. Ltd."
						}),
						", I worked on frontend and backend development, REST APIs, Spring Boot, AI-powered applications, and data-driven solutions."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "My interests include Generative AI, Retrieval-Augmented Generation (RAG), Machine Learning, DevOps, and Cloud Technologies. I enjoy transforming ideas into practical applications and continuously improving my technical skills through hands-on projects." })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "border-border/60 bg-card/60 p-6 backdrop-blur",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-widest text-muted-foreground",
					children: "Currently"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-4 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rocket, { className: "mt-0.5 h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Seeking Full-Time Software Engineer opportunities" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { className: "mt-0.5 h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Building AI, Cloud & Full-Stack Development projects" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Bengaluru, Karnataka, India" })]
						})
					]
				})]
			})]
		})
	});
}
function Skills() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "skills",
		eyebrow: "Skills",
		icon: Wrench,
		title: "The stack I reach for.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 sm:grid-cols-2",
			children: SKILLS.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "border-border/60 bg-card/60 p-6 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-primary/40",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-lg font-semibold",
					children: group.category
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 flex flex-wrap gap-2",
					children: group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "secondary",
						className: "border border-border/60 bg-background/60 font-normal",
						children: item
					}, item))
				})]
			}, group.category))
		})
	});
}
function Experience() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "experience",
		eyebrow: "Experience",
		icon: Briefcase,
		title: "Where I've built.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "relative space-y-10 border-l border-border/60 pl-8",
			children: EXPERIENCE.map((job, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
				initial: {
					opacity: 0,
					x: -12
				},
				whileInView: {
					opacity: 1,
					x: 0
				},
				viewport: { once: true },
				transition: {
					duration: .5,
					delay: i * .05
				},
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -left-[37px] top-2 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-primary ring-4 ring-background" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-baseline justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "font-display text-xl font-semibold",
							children: [
								job.role,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-muted-foreground",
									children: ["· ", job.company]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs uppercase tracking-widest text-muted-foreground",
							children: [
								job.period,
								" · ",
								job.location
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-1.5 text-muted-foreground",
						children: job.points.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "pl-4 relative before:absolute before:left-0 before:top-2.5 before:h-1 before:w-1 before:rounded-full before:bg-primary",
							children: p
						}, p))
					})
				]
			}, job.company))
		})
	});
}
function Projects() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "projects",
		eyebrow: "Projects",
		icon: FolderGit2,
		title: "A selection of work.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 md:grid-cols-2",
			children: PROJECTS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
				href: p.href,
				initial: {
					opacity: 0,
					y: 16
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: {
					duration: .5,
					delay: i * .05
				},
				className: "group relative overflow-hidden rounded-xl border border-border/60 bg-card/60 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-[var(--shadow-glow)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/15 blur-3xl transition-opacity group-hover:opacity-100" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-widest text-primary",
								children: p.tag
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1 font-display text-2xl font-semibold",
								children: p.title
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted-foreground",
							children: p.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 flex flex-wrap gap-1.5",
							children: p.stack.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-md border border-border/60 bg-background/60 px-2 py-0.5 font-mono text-xs text-muted-foreground",
								children: s
							}, s))
						})
					]
				})]
			}, p.title))
		})
	});
}
function Achievements() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "achievements",
		eyebrow: "Achievements",
		icon: Trophy,
		title: "Notable moments.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 sm:grid-cols-2",
			children: ACHIEVEMENTS.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "flex items-start gap-4 border-border/60 bg-card/60 p-5 backdrop-blur",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-5 w-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-semibold",
					children: a.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: a.detail
				})] })]
			}, a.title))
		})
	});
}
function Education() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "education",
		eyebrow: "Education",
		icon: GraduationCap,
		title: "How I learned.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 md:grid-cols-2",
			children: EDUCATION.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "border-border/60 bg-card/60 p-6 backdrop-blur",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-baseline justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl font-semibold",
							children: e.school
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs uppercase tracking-widest text-muted-foreground",
							children: e.period
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-primary",
						children: e.degree
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted-foreground",
						children: e.detail
					})
				]
			}, e.school))
		})
	});
}
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "contact",
		eyebrow: "Contact",
		icon: Mail,
		title: "Let's Connect.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "relative overflow-hidden border-border/60 bg-card/60 p-10 backdrop-blur",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/25 blur-3xl",
				"aria-hidden": true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-3xl font-semibold sm:text-4xl",
					children: "Looking for a Software Engineer, AI Engineer, or Python Developer? Let's connect."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted-foreground",
					children: "I'm actively seeking full-time Software Engineering, AI/ML, Python Development, and Cloud opportunities. Feel free to reach out for collaborations or career opportunities."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							className: "glow-accent",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://mail.google.com/mail/?view=cm&fs=1&to=ay3068756@gmail.com&su=Software%20Engineer%20Opportunity",
								target: "_blank",
								rel: "noreferrer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mr-2 h-4 w-4" }), "Email Me"]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "/Resume_SE.pdf",
								download: true,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-2 h-4 w-4" }), "Resume (Software Engineer)"]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "/Resume_AI_ML.pdf",
								download: true,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-2 h-4 w-4" }), "Resume (AI / ML & Data Science)"]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-1 flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "ghost",
								size: "sm",
								className: "flex-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "https://www.linkedin.com/in/ankush-yadav48",
									target: "_blank",
									rel: "noreferrer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "mr-2 h-4 w-4" }), "LinkedIn"]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "ghost",
								size: "sm",
								className: "flex-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "https://github.com/ankush-48",
									target: "_blank",
									rel: "noreferrer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "mr-2 h-4 w-4" }), "GitHub"]
								})
							})]
						})
					]
				})]
			})]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "relative z-10 border-t border-border/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-muted-foreground",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Ankush Yadav. Built with React, TypeScript & Tailwind CSS."
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://www.linkedin.com/in/ankush-yadav48",
						"aria-label": "LinkedIn",
						className: "transition-colors hover:text-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://github.com/ankush-48",
						"aria-label": "GitHub",
						className: "transition-colors hover:text-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "mailto:ay3068756@gmail.com",
						"aria-label": "Email",
						className: "transition-colors hover:text-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" })
					})
				]
			})]
		})
	});
}
//#endregion
export { Portfolio as component };
