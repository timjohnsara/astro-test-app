// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Website metadata
export const SITE_URL: string = "https://datadog.com";
export const SITE_TITLE: string = "DataDog";
export const SITE_DESCRIPTION: string = "Datadog Test!";

// SEO metadata
export const TWITTER_CREATOR: string = "@xxx";

// Navigation
type Page = {
	title: string;
	href: string;
	children?: Page[];
};

export const PAGES: Page[] = [
	{
		title: "Products",
		href: "#",
	},
	{
		title: "Docs",
		href: "#",
	},
	{
		title: "Pricing",
		href: "#",
	},
	{
		title: "Customer",
		href: "#",
	},
	{
		title: "About",
		href: "#",
	},
	{
		title: "Blog",
		href: "#",
	}
];



type Pricing = {
	tag: string;
	header: string;
	price: string;
	subheader: string;
	url: string;
	cta: string;
	details: Array<string>;
	category_color: string;
};
export const PRICINGS: Pricing[] = [
	{
		tag: 'Infrastructure',
		header: 'Starting at',
		price: '$15',
		subheader: 'Per host, per month*',
		details: [
			'<ul class="flex flex-col space-y-2"><li>Centralize your monitoring of systems and services</li>',
			'<li>- 250+ integrations</li>',
			'<li>– Out-of-the-box dashboards</li>',
			'<li>– 15-month metric retention</li></ul>'
		],
		url: '#',
		cta: 'See Details',
		category_color: 'text-dd-purple',
	},
	{
		tag: 'APH',
		header: 'Starting at',
		price: '$31',
		subheader: 'Per host, per month*',
		details: [
			'<ul class="flex flex-col space-y-2"><li>Centralize your monitoring of systems and services</li>',
			'<li>– Java, Ruby, Python, Go, Node, and more\n</li>',
			'<li>– Out-of-the-box application health dashboards</li>',
			'<li>– 1 million trace events per host included</li></ul>'
		],
		url: '#',
		cta: 'See Details',
		category_color: 'text-dd-green',
	},
	{
		tag: 'Logs Management',
		header: 'Starting at',
		price: '$1.27',
		subheader: 'Per host, per month*',
		details: [
			'<ul class="flex flex-col space-y-2"><li>Analyze and explore log data in context</li>',
			'<li>– Collect from any source</li>',
			'<li>– Automated & custom processing</li>',
			'<li>– Fully integrated with Infrastructure and APM</li></ul>'
		],
		url: '#',
		cta: 'See Details',
		category_color: 'text-dd-orange',
	}
]

type feature = {
	tag: string;
	feature_header: string;
	feature_image: string;
	class_name: string;
};

export const FEATURES: feature[] = [
	{
		tag: 'APH',
		feature_header: 'See across systems, apps, and services',
		feature_image: "apm-bg.png",
		class_name: 'db-tile-4',
	},
	{
		tag: 'Infrastructure',
		feature_header: 'See across systems, apps, and services',
		feature_image: "../assets/images/apm-bg.png",
		class_name: 'db-tile-3',
	},
	{
		tag: 'LogsManagement',
		feature_header: 'See across systems, apps, and services',
		feature_image: "logs-bg.png",
		class_name: 'db-tile-5',
	}
]

type carousel = {
	image: string;
	alt: string;
	category: string;
	text: string;
	link: string;
	format: string;
	width: number;
	height: number;
};

export const CAROUSEL: carousel[] = [
	{
		image: "/src/assets/images/carousel/slide-1.png",
		alt: "Observability",
		category: "Observability",
		text: "With turn-key integrations, Datadog seamlessly aggregates metrics and events across the full devops stack",
		link: '#',
		format: "webp",
		width: 1350,
		height: 1080,
	}
]

type customer = {
	name: string;
	bio: string;
	bio_author: string;
	image: string;
	state: string;
	color_class: string;
};

export const CUSTOMERS: customer[] = [
	{
		name: 'airbnb',
		bio: 'lorem ipsum',
		bio_author: "Valentino Volonghi\n" +
			"Chief Technology Officer",
		image: '/src/assets/images/logos/airbnb.png',
		state: 'inactive',
		color_class: 'bg-airbnb',
	},
	{
		name: 'adroll',
		bio: '“Datadog has been instrumental in managing our real-time infrastructure, globally distributed in 5 data centers across hundreds of instances, and thousands of different metrics and dimensions for each host. I can\'t believe there was a time when we didn\'t have Datadog.”',
		bio_author: "",
		image: '/src/assets/images/logos/adroll.png',
		state: 'active',
		color_class: 'bg-adroll',
	},
	{
		name: 'peloton',
		bio: 'lorem ipsum',
		bio_author: "",
		image: '/src/assets/images/logos/peloton.png',
		state: 'inactive',
		color_class: 'bg-peloton',
	},
	{
		name: 'evernote',
		bio: 'lorem ipsum',
		bio_author: "",
		image: '/src/assets/images/logos/evernote.png',
		state: 'inactive',
		color_class: 'bg-evernote',
	},
	{
		name: 'samsung',
		bio: 'lorem ipsum',
		bio_author: "",
		image: '/src/assets/images/logos/samsung.png',
		state: 'inactive',
		color_class: 'bg-samsung',
	},
	{
		name: 'nginx',
		bio: 'lorem ipsum',
		bio_author: "",
		image: '/src/assets/images/logos/nginx.png',
		state: 'inactive',
		color_class: 'bg-nginx',
	},
	{
		name: 'pagerduty',
		bio: 'lorem ipsum',
		bio_author: "",
		image: '/src/assets/images/logos/pageduty.png',
		state: 'inactive',
		color_class: 'bg-pagerduty',
	},
	{
		name: 'wholefoods',
		bio: 'lorem ipsum',
		bio_author: "",
		image: '/src/assets/images/logos/wholefoods.png',
		state: 'inactive',
		color_class: 'bg-wholefoods',
	},
	{
		name: 'att',
		bio: 'lorem ipsum',
		bio_author: "",
		image: '/src/assets/images/logos/att.png',
		state: 'inactive',
		color_class: 'bg-att',
	},

]


// i18n
export const DEFAULT_LOCALE = "en";
export const LOCALES = {
	en: "en", // the `defaultLocale` value must present in `locales` keys
};
