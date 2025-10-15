const SITE_CONTENT = {
  home: {
    title: "Welcome to JoeyLLM",
    subtitle:
      "Your gateway to sovereign Australian AI. Our chat interface pairs state-of-the-art models with your curiosity.",
    introduction:
      "Chat with JoeyLLM, LittleJoey, and Magpie - three distinct AI models built for Australian contexts.",
    features: [
      {
        title: "Australian AI Models",
        description:
          "Purpose-built language models trained with Australian context and values.",
        icon: "🇦🇺",
      },
      {
        title: "Open Source First",
        description:
          "All our models are open source, transparent, and available for commercial use.",
        icon: "🌟",
      },
      {
        title: "Community Driven",
        description:
          "Built by the community, for the community. Join our Discord and contribute.",
        icon: "🤝",
      },
    ],
    mission: {
      title: "Our Mission",
      content:
        "Our mission at JoeyLLM is simple: AI for everybody. We share open Sovereign AI models, support community projects and foster collaboration, while our commercial arm focuses on providing pathways for rapid-deploying AI solutions.",
    },
  },
  opensource: {
    title: "Australian AI Models, Open to All",
    subtitle:
      "Download, fine-tune, and deploy our models for your projects. All models released under permissive licenses.",
    models: [
      {
        name: "JoeyLLM",
        description:
          "Large language model centered on Australian English, culture, and knowledge. Designed for research, creative writing, and general AI applications. Full transparency: we provide architecture details, training data sources, and evaluation metrics.",
        license: "Apache 2.0",
      },
      {
        name: "LittleJoey",
        description:
          "Compact variant optimized for resource-constrained environments. Fewer parameters mean faster responses and lower memory usage. Perfect for edge devices, experimentation, and offline applications.",
        license: "Apache 2.0",
      },
      {
        name: "Magpie",
        description:
          "Fine-tuned Mistral model using curated Australian datasets. Excels at document extraction and question-answering with reduced regional confusion around currency, law, and location.",
        license: "Apache 2.0 (based on Mistral)",
      },
    ],
    customModels: {
      title: "Custom Models",
      description:
        "Commission bespoke AI variants trained on your data. Can be hosted on our infrastructure or installed on-site. Process typically requires several months depending on data scope and functionality requirements. Email us at business@joeyllm.com.au for more information.",
    },
    contributing: {
      title: "Contributing",
      description:
        "Submit pull requests, report issues, or propose features via GitHub. Read our contribution guidelines and code-of-conduct before participating. We encourage learning by doing.",
    },
  },
  littlejoey: {
    title: "LittleJoey - Compact AI Power",
    subtitle: "Speed and efficiency in a smaller package",
    introduction:
      "LittleJoey delivers the core capabilities of JoeyLLM in a streamlined model designed for speed and resource efficiency. At 7B parameters, it runs comfortably on consumer hardware while maintaining strong performance on Australian-context tasks.",
    keyFeatures: [
      "4x faster inference than JoeyLLM",
      "Runs on 8GB VRAM",
      "Optimized for edge deployment",
      "Full commercial license",
      "Australian cultural context retained",
    ],
    technicalSpecs: {
      architecture: "Transformer-based decoder",
      parameters: "7 billion",
      contextLength: "8,192 tokens",
      quantization: "INT8 and INT4 variants available",
      memoryFootprint: "8-16GB depending on precision",
    },
    useCases: [
      "Real-time chat applications",
      "Edge AI deployments",
      "Educational environments",
      "Prototype development",
      "Resource-constrained production systems",
    ],
  },
  magpie: {
    title: "Magpie - Australian-Tuned Mistral",
    subtitle:
      "Specialized for Australian question-answering and document processing",
    introduction:
      "Magpie builds on the proven Mistral architecture with Australian-specific fine-tuning. Trained on curated datasets focusing on local knowledge, legal frameworks, and cultural nuances.",
  },
  community: {
    title: "Join Our AI Community",
    subtitle:
      "Connect with developers, researchers, and AI enthusiasts across Australia",

    discord: {
      title: "Join the Discussion",
      description:
        "Join the JoeyLLM Discord to connect with like-minded people. Our server hosts channels for general discussion, technical support, upskilling and collaboration. Whether you're a seasoned developer or just getting started, you'll find peers willing to answer questions and share ideas.",
      link: "https://discord.gg/F2VsZs6D",
    },

    upskilling: {
      title: "Upskilling Resources",
      description:
        "We believe in continuous learning and that AI is most valuable when it is combined with expertise from other fields. Our community hub lists tutorials, webinars and workshops on topics such as prompt engineering, model fine-tuning and experimental AI. Upcoming events are posted with dates and times; recordings are made available for later viewing when possible.",
    },

    events: {
      title: "Events and Meetups",
      description:
        "We host regular online developer meetups for our community. These sessions are opportunities to discuss new features, showcase projects, and get hands-on guidance from our team. In addition to ad-hoc events, we hold a general all-hands meeting on the first Monday of every month.",
      schedule:
        "Both the developer meetups and the all-hands session are organised through our Discord server. While we may list or mirror events on other platforms, the definitive schedule and access links will always be available on JoeyLLM.com.au.",
    },

    collaboration: {
      title: "Collaborate and Mentor",
      description:
        "We generally discourage unstructured mentoring or random pair-ups. Instead, the best way to learn and collaborate is by joining one of our community projects. These initiatives are curated and led by experienced members of the JoeyLLM team to ensure a positive, productive environment. Start by browsing the current projects and contributing where your skills fit---coding, documentation, data gathering, testing, or community engagement.",
      entrepreneurial:
        "That said, we welcome those who have an entrepreneurial bent and working groups often form into business teams who use our RAG showroom to pitch and deliver projects to clients. And if you've already got a working team formed and are ready to hit the road, don't let us stop you. Request team access to the RAG showroom and get building solutions.",
    },
  },
  services: {
    title: "Expert AI Consulting & Development",
    subtitle:
      "Professional AI solutions with transparent pricing and quality guarantees",

    dataCleaningService: {
      title: "Data Cleaning Service",
      intro:
        "In order to extract the maximum value from AI and reduce the possibility of incorrect AI conclusions or hallucinations, you need to clean and prepare your data into a format that can be integrated into an AI model or accessed at runtime.",
      approach:
        "At JoeyLLM, we want to make your data-quality projects predictable and transparent. That's why we keep our pricing simple:",
      pricing: [
        {
          name: "Initial Assessment",
          price: "A$250",
          description:
            "We start every engagement with a flat-fee analysis. Our experts examine your files, profile the data and identify any issues such as duplicates, missing values or inconsistent formats. You'll receive a report outlining what needs to be done and how long it's likely to take.",
        },
        {
          name: "On-Site Assessment",
          price: "A$2,500",
          description:
            "For clients who have a large volume of data that they cannot transmit, or that require a working security clearance (up to NV2) to access, we can arrange for one of our data cleaning experts to attend your site. These typically require some advance notice and can book up quickly during peak periods like EOFY. Travel must be paid by the client when required.",
        },
        {
          name: "Hourly Cleaning",
          price: "A$250/hr",
          description:
            "After the assessment, we'll provide a fixed range of hours for the cleaning work itself. We base this quote on the complexity of your data and the tasks required (deduplication, standardisation, formatting, etc.). You'll know the minimum and maximum cost before any cleaning begins, so there are no surprises.",
        },
      ],
      example:
        "For example, if the assessment shows that your dataset needs eight to twelve hours of work, your quote will be A$2,000--A$3,000. We cap our hours at the high end of the range unless you choose to expand the scope by introducing additional data to the backlog.",
      goal: "Our goal is to deliver clean, reliable data while giving you complete control over your budget.",
      contact: "datacleaning@joeyllm.com.au",
    },

    aiHosting: {
      title: "AI Hosting Service",
      description:
        "Professional infrastructure and deployment solutions for AI applications. Contact us for details.",
    },

    customAI: {
      title: "Custom AI Creation",
      description:
        "Organisations looking to maintain their own in-house, offline and bespoke AIs can commission us to create a variant trained on whatever data the client requires. These AIs can be hosted on our infrastructure or installed on-site on a dedicated server. This is typically a quite involved process that requires several months, depending on the scope of the data to be integrated, specialist functionality, and number of users.",
      contact: "business@joeyllm.com.au",
    },
  },
  datacleaning: {
    title: "Professional Data Preparation",
    subtitle: "Clean, reliable data for maximum AI value",
  },
  aihosting: {
    title: "Reliable AI Infrastructure",
    subtitle: "Australian-hosted AI solutions with enterprise reliability",
  },
  customai: {
    title: "Bespoke AI Solutions",
    subtitle: "Tailored AI models designed for your specific requirements",
  },
  requestproposal: {
    title: "Get Your Custom AI Quote",
    subtitle: "Professional assessment and detailed project proposal",
  },
  rag: {
    title: "Build and Deploy RAG Applications",
    subtitle: "Retrieval-augmented generation tools and marketplace",

    whatIsRAG: {
      title: "What is RAG?",
      description:
        "Retrieval-augmented generation (RAG) is a technique that combines a generative language model with a retrieval system to pull in relevant information from external documents. It improves the model's accuracy and reduces hallucinations by grounding responses in a knowledge base.",
      workflow:
        "A typical RAG workflow involves splitting documents into chunks, creating vector embeddings, storing them in a database, retrieving the most relevant chunks for a query, and then feeding this context to the language model to generate a final answer.",
      context:
        "The RAG system covers a vast variety of potential use cases that offer immediate and measurable benefits to businesses, but to maximise that value each solution needs to be aligned to the specific business and organisational priorities of the client. In order to put RAG systems within the reach of everyone and to create new commercial opportunities, we built the RAG Showroom: a streamlined suite of tools to rapidly stand-up applications.",
    },

    showroom: {
      title: "Showroom Demos",
      description:
        "We offer interactive demos that illustrate what RAG can do. These cover a variety of industries and organisations, everything from civil aviation, through to charities, emergency services, healthcare and more. We and our partners are continuing to add new demos to the showroom to show off the power of our system and how easily solutions can be built for it. In most cases, client-specific demos can be built in days, not months.",
    },

    builder: {
      title: "Build Your Own",
      description:
        "For those with some technical grit and a willingness to get their hands dirty, our low-code builder lets you create your own RAG applications without writing much code.",
      process:
        "Upload documents, choose a base model, adjust retrieval parameters and define prompts. The builder generates an app you can embed on your site or share with others. We charge for hosting and take twenty percent of revenue earned (either as a subscription, direct sales or food delivery or a up-front fee charged to a client).",
      freeTier:
        "Yes, that means if you give away the app for free or are a non-profit, we only charge hosting. If an app doesn't directly make money (say from sales or a paid subscription) you can give it away for free without restriction, so long as it abides by our user license. We also don't touch advertising revenue; so long as hosting is paid its fine to support your free apps with ads if you wish.",
      complexity:
        "Note that complex tasks may require fine-tuning or additional programming. For organisations or businesses without technical expertise, we'd recommend using one of our partners. Our marketplace has a 'Request for Proposal' board for this exact purpose.",
    },

    marketplace: {
      title: "Marketplace",
      description:
        "If you build something useful, you can list it in our marketplace. Set a price, provide a description and preview link, and we handle the rest. Sales revenue is split 80/20 (your share is 80%). Please ensure your app complies with our guidelines: it must respect user privacy, avoid harmful content and clearly state any limitations. The marketplace is curated; we may remove listings that violate our policies.",
    },
  },
  showroom: {
    title: "RAG Applications in Action",
    subtitle: "Interactive demonstrations across industries",
  },
  toolsuite: {
    title: "No-Code RAG Development",
    subtitle: "Build sophisticated applications without extensive coding",
  },
  partnerprogram: {
    title: "Certified RAG Solution Providers",
    subtitle: "Join our network of professional implementation partners",
  },
  news: {
    title: "Latest AI Developments",
    subtitle: "Community updates, technical insights, and industry analysis",

    stayInformed: {
      title: "Stay Informed",
      description:
        "Our news feed features blog posts, research updates, tutorials and community stories. Browse by category or search for topics of interest. We strive to provide balanced coverage: we celebrate successes but also discuss challenges, ethical considerations and limitations of current AI models. Our mission is difficult and setbacks are to be expected -- and learned from! You can subscribe to our RSS feed or sign up for email updates.",
    },

    contribute: {
      title: "Contribute a Post",
      description:
        "We welcome guest posts from the community. If you have insights to share or want to report on a project, please submit your article via the contact form. All submissions are reviewed for clarity, accuracy and alignment with our values.",
    },
  },
  newspage: {
    title: "Community & Industry News",
    subtitle: "Breaking developments in AI and community updates",
  },
  articles: {
    title: "Technical Articles & Tutorials",
    subtitle: "In-depth analysis and tutorials from our community",
  },
  socialmedia: {
    title: "Follow JoeyLLM",
    subtitle: "Real-time updates across platforms",
    discord: {
      handle: "@joeyllm-community",
      description:
        "Primary hub for technical discussions, project collaboration, and community support. Most active platform with dedicated channels for different topics.",
    },
    github: {
      handle: "@joeyllm",
      description:
        "Code repositories, issue tracking, and documentation for all open-source projects. Contributors welcome via pull requests and issue reports.",
    },
    linkedin: {
      handle: "JoeyLLM",
      description:
        "Professional updates, partnership announcements, and industry insights. Connect with our team and community professionals.",
    },
    twitter: {
      handle: "@joeyllm",
      description:
        "Quick updates, community highlights, and industry commentary. Real-time responses during events and announcements.",
    },
    youtube: {
      handle: "JoeyLLM Channel",
      description:
        "Technical tutorials, community showcases, and recorded presentations. New videos weekly covering various AI topics.",
    },
    reddit: {
      handle: "r/joeyllm",
      description:
        "Community-moderated discussions, Q&A, and project sharing. Less formal than Discord but equally valuable for learning.",
    },
    engagementGuidelines: {
      title: "Engagement Guidelines",
      description:
        "Professional and respectful communication across all platforms. Technical questions best handled on Discord or GitHub. Follow platform-specific community guidelines.",
    },
  },
  projects: {
    title: "Collaborative AI Initiatives",
    subtitle:
      "Open projects building practical solutions for Australian communities",

    praxis: {
      title: "Praxis -- Community Resource Platform",
      description:
        "Praxis is our experimental AI-powered platform for sharing know-how, labour and resources within -- and between - local communities. It started with an article called 'What if your town knew you were sad' that posited that a non-profit AI system could help fight isolation, coordinate community expertise and time, and even create a way for communities to share and trade knowledge and resources.",
      context:
        "With AI-driven economic disruption an unfortunate (and fairly scary) reality, we are investigating ways that AI can be used to pull communities together and leverage their resources more effectively, especially in communities facing economic disruption.",
      concept:
        "It's a big ideas project that crosses a lot of technical, cultural and discipline boundaries. While still very high concept at this stage, Praxis is a 'reciprocity engine' that tracks contributions to ensure fairness and encourages reciprocity, and treats the mental and physical well-being of individual community members as an ongoing concern.",
    },

    grantSearch: {
      title: "Grant Search Engine",
      description:
        "Finding funding can be overwhelming. Our grant search engine aggregates Australian grants and funding opportunities into a single database with chat support. Filter by location, funding amount, sector and eligibility criteria to find opportunities that match your needs. The database is updated regularly; you can save your searches and receive alerts when new grants become available. Access is provided free for charities and not-for-profits; commercial users can purchase a subscription for advanced features.",
    },

    otherProjects: {
      title: "Other Community Projects",
      description:
        "We support a variety of community-driven initiatives. Examples include:",
      examples: [
        "Open datasets: Curating publicly available Australian data sets for training and evaluation.",
        "Educational outreach: Organising workshops and hackathons at schools and universities to promote AI literacy.",
        "Gender and multicultural representation within AI: Australia is a multicultural nation woven from many origins, creeds and identities.",
      ],
      propose:
        "You can propose new projects through our Discord; if it serves a good cause and there's community interest to work on it, go for it. Please include a summary of your idea, its intended impact and any resources you need. We review proposals based on feasibility, alignment with our mission and community interest. Once a project is on the board we do our best to try to support it with internal and technical resources where we can.",
    },
  },
  grantsearch: {
    title: "AI-Powered Funding Discovery",
    subtitle:
      "Find Australian grants and funding opportunities with intelligent search",
  },
  communityresources: {
    title: "Praxis Platform for Knowledge Sharing",
    subtitle:
      "AI-enabled platform for community collaboration and resource allocation",
  },
  wellbeingagent: {
    title: "AI-Powered Community Mental Health",
    subtitle: "Privacy-focused therapeutic support within community networks",
  },
  buzzby: {
    title: "Community-Driven Local Discovery",
    subtitle:
      "AI-powered platform connecting neighbors around local activities and resources",
  },
  donations: {
    title: "Support Open-Source AI Development",
    subtitle: "Fund community initiatives and model development",

    whyDonate: {
      title: "Why Donate?",
      disclaimer:
        "Note: Donations to JoeyLLM are NOT tax deductible and no receipt will be issued.",
      description:
        "Running and improving open models requires substantial compute and human effort. We rely on contributions from supporters like you. Donations help fund training runs, maintain servers, sponsor community events and keep our resources accessible to everyone.",
      mission:
        "Because we are a sovereign, community-driven organisation, your support directly impacts the advancement of Australian AI. Ultimately, we want to take a mission beyond Australia's borders, but one step at a time!",
    },

    waysToGive: {
      title: "Ways to Give",
      methods: [
        {
          type: "Credit or Debit Card",
          description:
            "Make a one-time or recurring contribution using your preferred payment method. We appreciate every bit of support, but please note there is no charitable tax deduction.",
        },
        {
          type: "Cryptocurrency",
          description:
            "We accept Bitcoin, Dogecoin and Ethereum -- among others, see our full list of supported cryptocurrencies. We generate secure wallet addresses for each currency and display QR codes for convenience. You can donate anonymously if you prefer; we don't require personal details. We use a licensed provider to manage wallets and ensure funds are secure and compliant.",
          supportedCoins: [
            "Bitcoin (BTC)",
            "Ethereum (ETH)",
            "Tether (USDT)",
            "USD Coin (USDC)",
            "Binance Coin (BNB)",
            "XRP (XRP)",
            "Solana (SOL)",
            "Cardano (ADA)",
            "Dogecoin (DOGE)",
            "Avalanche (AVAX)",
            "Polygon (MATIC)",
          ],
        },
        {
          type: "Memberships",
          description:
            "Choose a monthly supporter plan if you'd like to contribute regularly. Membership perks include access to exclusive backgrounds, early beta features and feature requests, and recognition on our supporters page. You can cancel at any time.",
        },
      ],
    },

    compliance: {
      title: "Compliance",
      description:
        "We follow Australian legal and taxation regulations for handling donations. Records of gifts are kept for auditing and tax purposes.",
    },
  },
  donatecard: {
    title: "Support via Card Payment",
    subtitle: "Secure donation processing with flexible options",
  },
  donatecrypto: {
    title: "Anonymous Crypto Support",
    subtitle: "Secure, private donations in digital currencies",
  },
  merch: {
    title: "Official JoeyLLM Gear",
    subtitle: "Show support with quality merchandise",
  },
  partners: {
    title: "Our Supporters and Collaborators",
    subtitle: "Organizations and individuals advancing Australian AI",

    introduction: {
      description:
        "We're grateful to the organizations and individuals who support our mission to make AI accessible to all Australians. Our partners contribute in various ways -- through funding, technical collaboration, community support, and shared values.",
    },

    partnershipTypes: {
      title: "Partnership Types",
      types: [
        {
          type: "Supporter Sponsors",
          description:
            "Organizations and individuals who provide financial support for our infrastructure, training runs, and community events. Your contributions keep our models open and accessible.",
        },
        {
          type: "Technical Collaborators",
          description:
            "Universities, research institutions, and technology companies working with us on model development, evaluation, and deployment.",
        },
        {
          type: "Community Champions",
          description:
            "Local organizations, educational institutions, and community groups who help us reach diverse audiences and ensure our work serves real community needs.",
        },
        {
          type: "RAG Solution Providers",
          description:
            "Certified partners who build and deploy RAG applications using our platform. These partners bring domain expertise and help clients implement AI solutions effectively.",
        },
      ],
    },

    becomePartner: {
      title: "Become a Partner",
      description:
        "We're always looking for organizations that share our values of openness, transparency, and community benefit. Partnership opportunities range from sponsorship to technical collaboration to community outreach.",
      contact:
        "If you're interested in partnering with JoeyLLM, please contact us at business@joeyllm.com.au with information about your organization and how you'd like to collaborate.",
    },
  },
  privacypolicy: {
    title: "Privacy and Data Protection",
    subtitle:
      "How we protect your personal information in compliance with Australian law",

    introduction:
      "Our footer includes links to our privacy policy, terms of service, code-of-conduct and open-source licences. Because we operate in Australia, personal data is handled in accordance with local privacy laws. We encourage users to review these documents; they outline how we collect and process data and the rights you have over your information.",

    dataCollection: {
      title: "What We Collect",
      description:
        "We collect information necessary to provide our services: account details (email, username), chat history when you create an account, usage data for improving our models, and payment information when you make donations or purchases.",
    },

    dataUse: {
      title: "How We Use Your Data",
      description:
        "Your data is used to provide and improve services, train and evaluate our models (anonymized where possible), communicate with you about updates and events, and process transactions.",
    },

    dataRights: {
      title: "Your Rights",
      description:
        "Under Australian privacy law, you have the right to access your data, request corrections, delete your account and associated data, and opt out of certain data uses. Contact us to exercise these rights.",
    },
  },

  terms: {
    title: "Terms and Conditions",
    subtitle: "Legal terms governing use of JoeyLLM services",

    acceptance: {
      title: "Acceptance of Terms",
      description:
        "By using JoeyLLM services, you agree to these terms. If you do not agree, please do not use our services.",
    },

    userResponsibilities: {
      title: "User Responsibilities",
      items: [
        "Use services in compliance with applicable laws",
        "Do not attempt to abuse, exploit, or harm the platform",
        "Respect intellectual property rights",
        "Follow community guidelines and code of conduct",
      ],
    },

    limitations: {
      title: "Limitations and Disclaimers",
      description:
        "Our AI models are provided 'as is' without warranties. We are not liable for decisions made based on model outputs. Models may produce incorrect or biased information. Always verify critical information independently.",
    },
  },

  licenses: {
    title: "Licensing Information",
    subtitle: "Open source licenses for our projects and models",

    modelLicenses: {
      title: "Model Licenses",
      description:
        "JoeyLLM and LittleJoey are released under Apache 2.0 license. Magpie is based on Mistral and inherits its upstream license in addition to our Apache 2.0 modifications. You are free to use, modify, and distribute these models commercially or non-commercially, subject to license terms.",
    },

    codeLicenses: {
      title: "Code Licenses",
      description:
        "Our platform code and tools are released under permissive open source licenses. Specific license information is available in each repository's LICENSE file.",
    },

    thirdParty: {
      title: "Third-Party Components",
      description:
        "We use various open source libraries and components. Attributions and license information for third-party code are maintained in our documentation.",
    },
  },
  contact: {
    title: "Get in Touch",
    subtitle: "Multiple ways to reach our team and community",
  },
  accessibility: {
    title: "Accessibility Commitment",
    subtitle: "Making AI accessible to all Australians",
  },
  guidelines: {
    title: "Community Standards",
    subtitle: "Creating a respectful, inclusive environment for all members",
  },
  careers: {
    title: "Join the JoeyLLM Team",
    subtitle: "Building Australia's AI future together",
  },
  research: {
    title: "AI Research and Development",
    subtitle: "Advancing the science of language models",
  },
};

export default SITE_CONTENT;