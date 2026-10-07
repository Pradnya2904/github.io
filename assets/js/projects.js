// Add only confirmed personal information. Paths are relative to index.html.
window.portfolioConfig = {
  email: 'mpradnya5@gmail.com', phone: '+91 9075367785', linkedin: '', github: '', resume: '',
  additionalSkills: [],
};
// Website features describe the public sites, not personal implementation claims.
// Screenshots: { desktop: { src: 'assets/images/example.webp', alt: '...', width: 1440, height: 900 }, mobile: { src: '...', alt: '...', width: 390, height: 844 } }
window.portfolioProjects = [
  { id: 'neebal', name: 'Neebal Technologies', category: 'Technology', url: 'https://neebal.com/', logo: { src: 'assets/images/logos/neebal.png', alt: 'Neebal Technologies logo', dark: true }, overview: 'A technology services website presenting digital, data, cloud, and AI offerings for businesses.', features: ['Service and industry information pages', 'Product overviews', 'Case studies and articles', 'Company and contact information'], technologies: [], contributions: [], screenshots: {} },
  { id: 'eventsiq', name: 'EventsIQ', category: 'Events', url: 'https://myeventsiq.com/', logo: { src: 'assets/images/logos/eventsiq.png', alt: 'EventsIQ logo', width: 864, height: 372 }, overview: 'An event intelligence website introducing event discovery and preparation for business opportunities.', features: ['Event intelligence overview', 'Upcoming event presentations', 'Dashboard preview sections'], note: 'Descriptions refer to the public marketing website. Dashboard previews do not confirm a working backend or my implementation of the underlying product.', technologies: [], contributions: [], screenshots: {} },
  { id: 'dextra', name: 'Dextra Labs', category: 'Technology', url: 'https://dextralabs.com/', logo: { src: 'assets/images/logos/dextra.webp', alt: 'Dextra Labs logo', dark: true, width: 300, height: 74 }, overview: 'A business website presenting enterprise AI consulting, data engineering, and technical due diligence services.', features: ['Service and industry navigation', 'AI consulting and technical audit information', 'Case studies and resources', 'Consultation calls to action'], technologies: [], contributions: [], screenshots: {} },
  { id: 'spuriq', name: 'SpurIQ', category: 'Technology', url: 'https://spuriq.ai/', logo: { src: 'assets/images/logos/spuriq.png', alt: 'SpurIQ logo', width: 200, height: 41 }, overview: 'A product marketing website presenting an AI platform for revenue workflows and sales-team actions.', features: ['Product and workflow explanations', 'Illustrative interface demonstrations', 'Integration information', 'Demo and consultation calls to action'], note: 'These are public marketing features, not confirmed personal contributions to the AI product, integrations, or backend.', technologies: [], contributions: [], screenshots: {} },
  { id: 'trinity', name: 'Trinity International School', category: 'Education', url: 'https://trinityinternationalschool.in/', overview: 'A school website introducing Trinity International School and its Pune and Vaduj campuses.', features: ['School introduction', 'Pune and Vaduj campus entry points'], technologies: [], contributions: [], screenshots: {} },
  { id: 'radicals', name: 'Radical Technologies', category: 'EdTech', url: 'https://radicals.in/', logo: { src: 'assets/images/logos/radicals.png', alt: 'Radical Technologies logo', dark: true, width: 1024, height: 265 }, overview: 'An IT training website presenting technology courses and training enquiry options.', features: ['Technology course information', 'Training programme navigation', 'Enquiry calls to action'], technologies: [], contributions: [], screenshots: {} },
  { id: 'bank', logo: { src: 'assets/images/logos/tasgaon.png', alt: 'Tasgaon Urban Bank logo', width: 1200, height: 170 }, name: 'Tasgaon Urban Bank', category: 'Banking', url: 'https://tasgaon.bank.in/', overview: 'A public-facing cooperative bank website presenting banking products, services, and customer information.', features: ['Loan and account information', 'Deposit and loan interest-rate pages', 'Branch and ATM information', 'Reports and document downloads', 'Notices and contact information', 'English/Marathi language options and text-size controls'], technologies: [], contributions: [], screenshots: {} },
  { id: 'techmentry', logo: { src: 'assets/images/logos/techmentry.png', alt: 'Techmentry logo', width: 887, height: 156 }, name: 'Techmentry', category: 'EdTech', url: 'https://techmentry.com/', overview: 'An education website presenting coding, computer science, and technology learning programmes.', features: ['Course and programme landing pages', 'Learning pathways and curriculum information', 'Mentor consultation and enquiry forms', 'Educational blog articles', 'Calls to action for demo or consultation enquiries'], technologies: [], contributions: [], screenshots: {} },
  { id: 'sahodaya', logo: { src: 'assets/images/logos/sahodaya.webp', alt: 'Sahodaya Schools Complex logo', compact: true }, name: 'Sahodaya Pune', category: 'Education', url: 'https://sahodayapune.org/', overview: 'A school association website supporting member-school information and membership enquiries/applications.', features: ['Member-school directory', 'Directory search and zone filtering', 'New membership and renewal information', 'Membership application interface', 'School login entry point', 'Circular and education-update navigation'], note: 'The public site describes payment verification and admin approval. These are not confirmed personal contributions; a visible interface does not establish backend functionality.', technologies: [], contributions: [], screenshots: {} },
  { id: 'transport', name: 'US Charter Bus Websites', category: 'Transportation', overview: 'A collection of 14 city-focused charter bus websites presenting fleet options, transport services, pricing information, and enquiry calls to action.', features: ['Fleet and vehicle-capacity information', 'Corporate shuttle service pages', 'Wedding and school-trip transportation pages', 'Sports and construction shuttle services', 'Pricing information and quote/contact calls to action', 'City-specific service content'], note: 'Features vary by website. This collection does not imply common ownership or a shared codebase.', technologies: [], contributions: [], screenshots: {}, websites: [
    ['Tulsa', 'Tulsa Charter Bus Company', 'https://www.tulsacharterbusco.com/'],
    ['Lincoln', 'Lincoln Charter Bus Company', 'https://www.lincolnbuschartercompany.com/'],
    ['Ontario', 'Ontario Charter Bus', 'https://www.ontariocacharterbus.com/'],
    ['Madison', 'Madison Charter Bus', 'https://www.madisoncharterbus.com/'],
    ['Lubbock', 'Lubbock Charter Bus Rentals', 'https://www.lubbockcharterbusrentals.com/'],
    ['Toledo', 'Toledo Charter Bus', 'https://www.toledocharterbus.com/'],
    ['Chattanooga', 'Chattanooga Charter Bus', 'https://www.chattanoogacharterbus.com/'],
    ['Cary', 'Cary Charter Bus', 'https://www.carycharterbus.com/'],
    ['Glendale', 'Glendale Charter Bus Rentals', 'https://www.glendalecharterbusrentals.com/'],
    ['Frisco', 'Frisco Charter Bus Rentals', 'https://www.friscocharterbusrentals.com/'],
    ['Clarksville', 'Clarksville Charter Bus Rentals', 'https://www.clarksvillecharterbusrentals.com/'],
    ['Islip', 'Islip Charter Bus Rentals', 'https://www.islipcharterbusrentals.com/'],
    ['Yonkers', 'Yonkers Charter Bus Rentals', 'https://www.yonkerscharterbusrentals.com/'],
    ['Fort Worth', 'Fort Worth Charter Bus Rentals', 'https://www.fortworthcharterbusrentals.com/']
  ] }
];


// Local city logos retrieved from the public websites; missing logos use text labels.
window.portfolioBusLogos = {
  "https://www.madisoncharterbus.com/": "assets/images/logos/madisoncharterbus.svg",
  "https://www.carycharterbus.com/": "assets/images/logos/carycharterbus.svg",
  "https://www.ontariocacharterbus.com/": "assets/images/logos/ontariocacharterbus.svg",
  "https://www.tulsacharterbusco.com/": "assets/images/logos/tulsacharterbusco.svg",
  "https://www.friscocharterbusrentals.com/": "assets/images/logos/friscocharterbusrentals.svg",
  "https://www.lincolnbuschartercompany.com/": "assets/images/logos/lincolnbuschartercompany.svg",
  "https://www.lubbockcharterbusrentals.com/": "assets/images/logos/lubbockcharterbusrentals.png",
  "https://www.chattanoogacharterbus.com/": "assets/images/logos/chattanoogacharterbus.webp",
  "https://www.glendalecharterbusrentals.com/": "assets/images/logos/glendalecharterbusrentals.png",
  "https://www.fortworthcharterbusrentals.com/": "assets/images/logos/fortworthcharterbusrentals.png"
};


