// AI Directory structured sample data based on AI_Directory_Complete_Website_Plan.xlsx

export const categories = [
  {
    id: "coding-dev",
    name: "Coding & Development",
    slug: "coding-dev",
    icon: "Code",
    color: "#6366f1",
    count: 142,
    description: "AI code assistants, autonomous agent IDEs, refactoring tools, and API generators.",
    popularTasks: ["Code generation", "Bug fixing", "Frontend generation", "Test writing"]
  },
  {
    id: "content-writing",
    name: "Content & Copywriting",
    slug: "content-writing",
    icon: "FileText",
    color: "#8b5cf6",
    count: 188,
    description: "SEO blog generators, marketing copywriters, social media drafts, and rewrite engines.",
    popularTasks: ["SEO articles", "Ad copy", "Email sequences", "Proofreading"]
  },
  {
    id: "image-design",
    name: "Image & Graphic Design",
    slug: "image-design",
    icon: "Image",
    color: "#ec4899",
    count: 124,
    description: "Photorealistic image synthesis, background removal, vector art, and design mockup generation.",
    popularTasks: ["Product photos", "Art generation", "Banner design", "Image editing"]
  },
  {
    id: "video-voice",
    name: "Video & Voice AI",
    slug: "video-voice",
    icon: "Video",
    color: "#f43f5e",
    count: 96,
    description: "Text-to-video, AI voice cloning, automated captioning, and video avatar generation.",
    popularTasks: ["Voiceovers", "Shorts generation", "Video editing", "Dubbing"]
  },
  {
    id: "productivity-search",
    name: "Productivity & Research",
    slug: "productivity-search",
    icon: "Compass",
    color: "#06b6d4",
    count: 215,
    description: "Perplexity-style search, meeting recorders, document analysis, and second-brain systems.",
    popularTasks: ["Deep research", "Meeting notes", "PDF chat", "Task automation"]
  },
  {
    id: "marketing-seo",
    name: "Marketing & Growth",
    slug: "marketing-seo",
    icon: "TrendingUp",
    color: "#10b981",
    count: 89,
    description: "Keyword research, programmatic SEO, lead enrichment, and ad campaign optimization.",
    popularTasks: ["Competitor analysis", "Funnel building", "Social scheduling", "SEO audits"]
  },
  {
    id: "customer-support",
    name: "Customer Support & Agents",
    slug: "customer-support",
    icon: "MessageSquare",
    color: "#f59e0b",
    count: 73,
    description: "Autonomous customer service bots, live-chat agents, and ticketing automations.",
    popularTasks: ["Ticket triage", "24/7 Live chat", "Knowledge base sync", "Voice agents"]
  },
  {
    id: "audio-music",
    name: "Audio & Music Generation",
    slug: "audio-music",
    icon: "Headphones",
    color: "#3b82f6",
    count: 54,
    description: "Music production, noise suppression, stem separation, and audio restoration.",
    popularTasks: ["Background music", "Audio mastering", "Podcast cleanup", "Sound effects"]
  }
];

export const tasks = [
  {
    id: "full-stack-code",
    name: "Generate Full-Stack Code & UI",
    slug: "generate-full-stack-code",
    categorySlug: "coding-dev",
    toolCount: 38,
    icon: "Terminal",
    summary: "Write React, Node, Python, and SQL with conversational AI and agentic IDEs.",
    badge: "Popular"
  },
  {
    id: "seo-articles",
    name: "Write Long-Form SEO Articles",
    slug: "write-seo-articles",
    categorySlug: "content-writing",
    toolCount: 52,
    icon: "PenTool",
    summary: "Research keywords, structure outlines, and generate publication-ready articles.",
    badge: "High Intent"
  },
  {
    id: "product-photos",
    name: "Generate Photorealistic Product Images",
    slug: "generate-product-images",
    categorySlug: "image-design",
    toolCount: 41,
    icon: "Camera",
    summary: "Create studio-quality product showcases without expensive physical photography.",
    badge: "Trending"
  },
  {
    id: "voice-cloning",
    name: "Clone Voices & Generate Voiceovers",
    slug: "clone-voices-generate-voiceovers",
    categorySlug: "video-voice",
    toolCount: 29,
    icon: "Mic",
    summary: "Ultra-realistic synthetic human speech across 40+ languages with emotional range.",
    badge: "Creator Favorite"
  },
  {
    id: "deep-research",
    name: "Automate Deep Web Research",
    slug: "automate-deep-research",
    categorySlug: "productivity-search",
    toolCount: 34,
    icon: "Search",
    summary: "Synthesize hundreds of sources, academic papers, and live web datasets into reports.",
    badge: "Essential"
  },
  {
    id: "video-transcription",
    name: "Edit Video by Text & Generate Shorts",
    slug: "edit-video-generate-shorts",
    categorySlug: "video-voice",
    toolCount: 31,
    icon: "Scissors",
    summary: "Auto-detect viral moments, remove filler words, and export subtitles effortlessly.",
    badge: "Growth"
  }
];

export const tools = [
  {
    id: "cursor",
    name: "Cursor",
    tagline: "The AI Code Editor built for pair-programming with LLMs",
    slug: "cursor",
    category: "Coding & Development",
    categorySlug: "coding-dev",
    logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    rating: 4.9,
    reviewsCount: 348,
    pricingType: "Freemium",
    startingPrice: "$20/mo",
    freeTrial: true,
    verified: true,
    sponsored: false,
    trending: true,
    new: false,
    featured: true,
    tasks: ["Generate Full-Stack Code & UI", "Refactor Code", "Bug Fixing"],
    features: [
      "Full codebase indexing & semantic search",
      "Inline multi-line code diff predictions",
      "Chat with any documentation or branch",
      "Supports Claude 3.5 Sonnet and GPT-4o"
    ],
    bestFor: "Software engineers and dev teams who want deep context-aware code generation",
    notIdealFor: "Non-developers looking for no-code app builders",
    websiteUrl: "https://cursor.com"
  },
  {
    id: "claude-3-5",
    name: "Claude 3.5 Sonnet",
    tagline: "State-of-the-art intelligence for coding, analysis, and nuanced writing",
    slug: "claude-3-5-sonnet",
    category: "Productivity & Research",
    categorySlug: "productivity-search",
    logo: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=120&auto=format&fit=crop&q=80",
    rating: 4.9,
    reviewsCount: 512,
    pricingType: "Freemium",
    startingPrice: "$20/mo",
    freeTrial: true,
    verified: true,
    sponsored: false,
    trending: true,
    new: false,
    featured: true,
    tasks: ["Automate Deep Web Research", "Write Long-Form SEO Articles", "Generate Full-Stack Code & UI"],
    features: [
      "Artifacts interactive preview workspace",
      "200K token context window",
      "Top-tier coding benchmark performance",
      "Advanced visual reasoning & chart comprehension"
    ],
    bestFor: "Developers, analysts, and writers seeking highest logic & comprehension",
    notIdealFor: "Users needing live internet browsing out-of-the-box on free tier",
    websiteUrl: "https://anthropic.com/claude"
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    tagline: "Natural voice cloning and text-to-speech software",
    slug: "elevenlabs",
    category: "Video & Voice AI",
    categorySlug: "video-voice",
    logo: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=120&auto=format&fit=crop&q=80",
    rating: 4.8,
    reviewsCount: 284,
    pricingType: "Freemium",
    startingPrice: "$5/mo",
    freeTrial: true,
    verified: true,
    sponsored: true,
    trending: true,
    new: false,
    featured: true,
    tasks: ["Clone Voices & Generate Voiceovers"],
    features: [
      "Instant voice cloning from 1 minute sample",
      "Emotional nuance & inflection control",
      "Voice Isolator background noise reduction",
      "Multi-lingual dubbing in 32 languages"
    ],
    bestFor: "Podcasters, game studios, audiobooks, and content creators",
    notIdealFor: "Basic robotic system TTS where character tone doesn't matter",
    websiteUrl: "https://elevenlabs.io"
  },
  {
    id: "perplexity",
    name: "Perplexity AI",
    tagline: "Conversational answer engine with direct citations and live web sources",
    slug: "perplexity-ai",
    category: "Productivity & Research",
    categorySlug: "productivity-search",
    logo: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=120&auto=format&fit=crop&q=80",
    rating: 4.8,
    reviewsCount: 410,
    pricingType: "Freemium",
    startingPrice: "$20/mo",
    freeTrial: true,
    verified: true,
    sponsored: false,
    trending: true,
    new: false,
    featured: true,
    tasks: ["Automate Deep Web Research"],
    features: [
      "Real-time web search with source footnote citations",
      "Pro search with multi-step reasoning steps",
      "Collections workspace for research organization",
      "Model switching (Claude 3.5, GPT-4o, Sonar)"
    ],
    bestFor: "Researchers, journalists, students, and professionals seeking verifiable facts",
    notIdealFor: "Creative fictional story writing",
    websiteUrl: "https://perplexity.ai"
  },
  {
    id: "v0-dev",
    name: "v0 by Vercel",
    tagline: "Generative UI system turning natural language prompts into React Tailwind components",
    slug: "v0-vercel",
    category: "Coding & Development",
    categorySlug: "coding-dev",
    logo: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=120&auto=format&fit=crop&q=80",
    rating: 4.7,
    reviewsCount: 195,
    pricingType: "Freemium",
    startingPrice: "$20/mo",
    freeTrial: true,
    verified: true,
    sponsored: false,
    trending: true,
    new: true,
    featured: false,
    tasks: ["Generate Full-Stack Code & UI"],
    features: [
      "Direct copy-paste React + Tailwind + Lucide code",
      "Interactive component live preview sandbox",
      "Figma design-to-code screenshot prompts",
      "One-click deploy to Vercel"
    ],
    bestFor: "Frontend developers, designers, and founders building web apps rapidly",
    notIdealFor: "Backend logic or database architecture design",
    websiteUrl: "https://v0.dev"
  },
  {
    id: "midjourney",
    name: "Midjourney v6",
    tagline: "Industry standard for creative AI imagery, photorealism, and style coherence",
    slug: "midjourney",
    category: "Image & Graphic Design",
    categorySlug: "image-design",
    logo: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=120&auto=format&fit=crop&q=80",
    rating: 4.9,
    reviewsCount: 620,
    pricingType: "Paid",
    startingPrice: "$10/mo",
    freeTrial: false,
    verified: true,
    sponsored: false,
    trending: true,
    new: false,
    featured: true,
    tasks: ["Generate Photorealistic Product Images"],
    features: [
      "Photorealistic texture and lighting rendering",
      "Inpainting and pan/zoom region expansion",
      "Style reference (--sref) and character consistency (--cref)",
      "Web alpha interface alongside Discord bot"
    ],
    bestFor: "Creative directors, concept artists, marketers, and digital designers",
    notIdealFor: "Precise vector SVG icon creation",
    websiteUrl: "https://midjourney.com"
  },
  {
    id: "flux-ai",
    name: "Flux.1 by Black Forest Labs",
    tagline: "Open-weight image model with strong prompt adherence and typography",
    slug: "flux-1",
    category: "Image & Graphic Design",
    categorySlug: "image-design",
    logo: "https://images.unsplash.com/photo-1614680376593-902f749f7ffc?w=120&auto=format&fit=crop&q=80",
    rating: 4.8,
    reviewsCount: 162,
    pricingType: "Free",
    startingPrice: "Free / Open-Source",
    freeTrial: true,
    verified: true,
    sponsored: true,
    trending: true,
    new: true,
    featured: true,
    tasks: ["Generate Photorealistic Product Images"],
    features: [
      "Incredible in-image text and typography spelling",
      "12B parameter rectified flow transformer",
      "Available via API (Flux Pro/Dev) and local Schnell",
      "Photorealistic anatomy and lighting"
    ],
    bestFor: "Designers requiring legible typography in graphics and local self-hosters",
    notIdealFor: "Users with low-spec hardware seeking offline generation",
    websiteUrl: "https://blackforestlabs.ai"
  },
  {
    id: "descript",
    name: "Descript",
    tagline: "All-in-one audio and video editor where you edit videos like a text document",
    slug: "descript",
    category: "Video & Voice AI",
    categorySlug: "video-voice",
    logo: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=120&auto=format&fit=crop&q=80",
    rating: 4.7,
    reviewsCount: 230,
    pricingType: "Freemium",
    startingPrice: "$12/mo",
    freeTrial: true,
    verified: true,
    sponsored: false,
    trending: false,
    new: false,
    featured: false,
    tasks: ["Edit Video by Text & Generate Shorts"],
    features: [
      "Automatic transcription with word-level syncing",
      "Studio Sound one-click background noise elimination",
      "AI Eye Contact correction for webcam footage",
      "Underlord AI co-editor for clip trimming"
    ],
    bestFor: "Podcasters, YouTubers, course creators, and marketing video teams",
    notIdealFor: "Hollywood-grade color grading and VFX pipelines",
    websiteUrl: "https://descript.com"
  },
  {
    id: "jasper",
    name: "Jasper AI",
    tagline: "Enterprise AI marketing platform with brand voice memory and multi-channel campaigns",
    slug: "jasper-ai",
    category: "Content & Copywriting",
    categorySlug: "content-writing",
    logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=120&auto=format&fit=crop&q=80",
    rating: 4.6,
    reviewsCount: 310,
    pricingType: "Paid",
    startingPrice: "$39/mo",
    freeTrial: true,
    verified: true,
    sponsored: false,
    trending: false,
    new: false,
    featured: false,
    tasks: ["Write Long-Form SEO Articles"],
    features: [
      "Company Brand Voice and style guide ingestion",
      "Campaign wizard generating blog, ad, email in 1 click",
      "Integrated SEO scoring powered by Surfer",
      "Enterprise security and plagiarism checker"
    ],
    bestFor: "Growth marketing teams, copywriters, and agency marketing managers",
    notIdealFor: "Casual solo bloggers on a tight budget",
    websiteUrl: "https://jasper.ai"
  },
  {
    id: "runway-gen3",
    name: "Runway Gen-3 Alpha",
    tagline: "High-fidelity text-to-video, image-to-video, and cinematic motion control",
    slug: "runway-gen-3",
    category: "Video & Voice AI",
    categorySlug: "video-voice",
    logo: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=120&auto=format&fit=crop&q=80",
    rating: 4.8,
    reviewsCount: 178,
    pricingType: "Paid",
    startingPrice: "$12/mo",
    freeTrial: false,
    verified: true,
    sponsored: false,
    trending: true,
    new: true,
    featured: false,
    tasks: ["Edit Video by Text & Generate Shorts"],
    features: [
      "Temporal consistency and realistic physics",
      "Motion Brush & Camera Director controls",
      "Custom Lip Sync and audio generation",
      "Ultra-detailed lighting and motion"
    ],
    bestFor: "Filmmakers, VFX artists, and creative advertising teams",
    notIdealFor: "Simple screen recording edits",
    websiteUrl: "https://runwayml.com"
  }
];

export const comparisons = [
  {
    id: "chatgpt-vs-claude",
    slug: "chatgpt-vs-claude-3-5-sonnet",
    toolA: "ChatGPT (GPT-4o)",
    toolB: "Claude 3.5 Sonnet",
    toolASlug: "chatgpt",
    toolBSlug: "claude-3-5-sonnet",
    category: "LLM & Assistants",
    summary: "Claude 3.5 Sonnet leads in coding accuracy and Artifacts UI, while GPT-4o excels in multimodal voice and live canvas widgets.",
    badge: "Most Compared"
  },
  {
    id: "cursor-vs-copilot",
    slug: "cursor-vs-github-copilot",
    toolA: "Cursor",
    toolB: "GitHub Copilot",
    toolASlug: "cursor",
    toolBSlug: "github-copilot",
    category: "Coding & Development",
    summary: "Cursor provides holistic whole-codebase awareness and multi-file edits; Copilot offers native enterprise compliance inside VS Code.",
    badge: "Developer Trending"
  },
  {
    id: "midjourney-vs-flux",
    slug: "midjourney-vs-flux-1",
    toolA: "Midjourney v6",
    toolB: "Flux.1",
    toolASlug: "midjourney",
    toolBSlug: "flux-1",
    category: "Image & Design",
    summary: "Flux.1 has remarkable prompt adherence and text spelling; Midjourney offers richer painterly aesthetics and community upscaling.",
    badge: "Hot Match"
  },
  {
    id: "elevenlabs-vs-descript",
    slug: "elevenlabs-vs-descript",
    toolA: "ElevenLabs",
    toolB: "Descript",
    toolASlug: "elevenlabs",
    toolBSlug: "descript",
    category: "Audio & Voice",
    summary: "ElevenLabs is the undisputed leader for synthetic voice cloning; Descript is the best all-in-one text-based audio/video editor.",
    badge: "Creator Stack"
  }
];

export const deals = [
  {
    id: "deal-cursor",
    toolName: "Cursor Pro",
    discount: "20% OFF",
    code: "AIDIRECTORY20",
    type: "Annual Discount",
    expiry: "Active",
    verified: true,
    toolSlug: "cursor",
    description: "Get 20% off your first year of Cursor Pro for unlimited Claude 3.5 and GPT-4o usage."
  },
  {
    id: "deal-elevenlabs",
    toolName: "ElevenLabs Creator",
    discount: "50% OFF",
    code: "ELEVATEDAI",
    type: "First Month",
    expiry: "Limited Slots",
    verified: true,
    toolSlug: "elevenlabs",
    description: "50% discount on Creator Plan with 100,000 characters and commercial rights."
  },
  {
    id: "deal-descript",
    toolName: "Descript Creator",
    discount: "14-Day Pro Trial",
    code: "TRYDESCRIPT",
    type: "Extended Trial",
    expiry: "Verified Deal",
    verified: true,
    toolSlug: "descript",
    description: "Unlock full Underlord AI features and Studio Sound without watermarks for 14 days."
  }
];

export const founderPricingPlans = [
  {
    id: "free-listing",
    name: "Standard Listing",
    price: "₹0",
    period: "Free forever",
    description: "Basic organic listing after standard editorial queue review.",
    features: [
      "Standard directory placement",
      "Basic tool profile page",
      "Categorization & tags",
      "Standard review queue (14-21 days)",
      "Community review collection"
    ],
    cta: "Submit Free",
    popular: false,
    badge: "Free"
  },
  {
    id: "fast-track",
    name: "Fast Track Review",
    price: "₹1,499",
    period: "One-time fee",
    description: "Expedited editorial review and enhanced listing within 48 hours.",
    features: [
      "Guaranteed review within 48 hours",
      "Enhanced tool profile with custom FAQ",
      "Direct 'Visit Website' do-follow badge",
      "Screenshots & product demo video embed",
      "Founder Q&A section enabled"
    ],
    cta: "Get Fast Track",
    popular: false,
    badge: "Fast 48h"
  },
  {
    id: "pro-launch",
    name: "Pro Launch Package",
    price: "₹4,999",
    period: "One-time package",
    description: "7-day featured spotlight across homepage, category hubs, and weekly dispatch.",
    features: [
      "Everything in Fast Track",
      "7 Days featured spot on Homepage & Category",
      "Featured badge in 'Newly Launched' & 'Trending'",
      "Dedicated feature in weekly AI Newsletter",
      "Founder launch analytics tracking dashboard"
    ],
    cta: "Choose Pro Launch",
    popular: true,
    badge: "Most Popular"
  },
  {
    id: "growth-campaign",
    name: "Growth Package",
    price: "₹9,999",
    period: "One-time campaign",
    description: "Deep distribution across comparison matrices, alternatives, and editorial guide.",
    features: [
      "Everything in Pro Launch",
      "Guaranteed placement in top 3 Alternatives pages",
      "Comparison matrix inclusion against top competitors",
      "Custom editorial review article highlight",
      "Social blast across official directory channels"
    ],
    cta: "Scale with Growth",
    popular: false,
    badge: "Growth"
  },
  {
    id: "launch-max",
    name: "Launch Max",
    price: "₹24,999+",
    period: "Multi-channel campaign",
    description: "Product launch campaign with a custom demo review and newsletter placement.",
    features: [
      "Everything in Growth Package",
      "Exclusive Category Top Sponsor banner for 30 days",
      "Dedicated solo email blast to all subscribers",
      "Hands-on video teardown produced by editorial team",
      "Priority verified partner badge & direct lead access"
    ],
    cta: "Contact Launch Team",
    popular: false,
    badge: "Custom"
  },
  {
    id: "founder-pro-monthly",
    name: "Founder Pro",
    price: "₹2,499",
    period: "per month",
    description: "Continuous organic visibility, live analytics, deal promotions, and listing updates.",
    features: [
      "Live listing telemetry (clicks, saves, comparisons)",
      "Publish unlimited deals & discount coupon codes",
      "Monthly changelog updates promoted to followers",
      "Priority founder support & badge verification",
      "Cancel or pause anytime"
    ],
    cta: "Start Monthly Pro",
    popular: false,
    badge: "Monthly Retention"
  }
];
