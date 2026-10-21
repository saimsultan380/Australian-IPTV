import { whatsapp } from "@/lib/whatsapp";

export const metadataCopy = {
  title: "IPTV Australia: Buy Australia IPTV Subscription at 70% Off",
  description:
    "Best IPTV Australia service with HD 4K streaming, sports, movies, entertainment & more. Get 12-month IPTV in Australia & save 100$. Instant IPTV Subscription",
};

export const hero = {
  eyebrow: "IPTV Australia",
  titleLead: "IPTV Australia: Get Australian IPTV Subscription from the ",
  titleAccent: "Best",
  titleTail: " IPTV Providers",
  paragraphs: [
    "Get high-quality HD 4K IPTV in Australia from top-rated IPTV providers at discounted pricing. Australian IPTV offers a premium IPTV streaming experience with live sports, movies, series, news, local channels, TV shows, and more.",
    "Buy an AU IPTV Subscription from our trusted IPTV services for Australia. Choose a 12-month IPTV Australia plan and save 100$+.",
  ],
  primary: { href: "#plans", label: "Choose Aus IPTV Plan" },
  secondary: { href: whatsapp.href, label: "WhatsApp Us" },
};

export const featuresTitle = "Core Features of Australians IPTV";

export const features = [
  { name: "Live TV Channels", image: "/images/live-tv-channels-realistic.jpg" },
  { name: "Sports and Live Events", image: "/images/sports-live-events-realistic.jpg" },
  { name: "Movies and TV Shows", image: "/images/movies-tv-shows-realistic.jpg" },
  { name: "HD and 4K Streaming", image: "/images/hd-4k-streaming-realistic.jpg" },
  { name: "Multi-Device Compatibility", image: "/images/multi-device-compatibility-realistic.jpg" },
  { name: "Fast Activation and Easy Setup", image: "/images/fast-activation-easy-setup-realistic.jpg" },
];

export type Plan = {
  name: string;
  price: string;
  duration: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

export const plansIntro = {
  eyebrow: "Subscription",
  title: "Choose the Best Discounted Australian IPTV Plan",
  lede: "Explore our IPTV Australia subscription plans and choose the right option for your viewing needs. Each plan offers a convenient way to get started, with quick activation and streaming on compatible devices.",
};

export const plans: Plan[] = [
  {
    name: "Basic",
    price: "$12",
    duration: "1 Month",
    cta: "Get 1 Month",
    features: [
      "IPTV streaming on compatible devices",
      "Quick subscription activation",
      "Access to available live TV channels",
      "Simple setup guidance",
      "Customer support for setup queries",
    ],
  },
  {
    name: "Standard",
    price: "$25",
    duration: "3 Months",
    cta: "Get 3 Months",
    features: [
      "IPTV streaming on compatible devices",
      "Quick subscription activation",
      "Access to available live TV channels",
      "Setup assistance when needed",
      "Three-month subscription convenience",
    ],
  },
  {
    name: "Premium",
    price: "$40",
    duration: "6 Months",
    cta: "Get 6 Months",
    features: [
      "IPTV streaming on compatible devices",
      "Quick subscription activation",
      "Access to available live TV channels",
      "Assistance with initial setup",
      "Six months of subscription access",
    ],
  },
  {
    name: "Super",
    price: "$55",
    duration: "12 Months",
    cta: "Get 12 Months",
    featured: true,
    features: [
      "IPTV streaming on compatible devices",
      "Quick subscription activation",
      "Access to available live TV channels",
      "Setup guidance and support",
      "Convenient 12-month subscription period",
    ],
  },
];

export const devicesIntro = {
  eyebrow: "Setup",
  title: "Australian IPTV Compatible Devices and Installation Guides",
  lede: "Australians IPTV can be configured on many popular streaming devices, Smart TVs, smartphones, and computers. The exact steps depend on your device and the IPTV player you choose, but most setups require a compatible app and your subscription login details or M3U playlist URL.",
};

export type Guide = {
  id?: string;
  title: string;
  paragraphs: string[];
  note?: string;
};

export type DeviceEntry = {
  name: string;
  icon: "firestick" | "samsung" | "lg" | "androidtv" | "android" | "apple" | "computer" | "appletv" | "chromecast" | "roku" | "googletv" | "box";
  guideIndex: number;
};

export const devices: DeviceEntry[] = [
  { name: "Amazon Firestick", icon: "firestick", guideIndex: 0 },
  { name: "Samsung Smart TV", icon: "samsung", guideIndex: 1 },
  { name: "LG Smart TV", icon: "lg", guideIndex: 2 },
  { name: "Android TV", icon: "androidtv", guideIndex: 3 },
  { name: "Android Phones & Tablets", icon: "android", guideIndex: 4 },
  { name: "iPhone & iPad", icon: "apple", guideIndex: 5 },
  { name: "Windows PC & Mac", icon: "computer", guideIndex: 6 },
  { name: "Apple TV", icon: "appletv", guideIndex: 7 },
  { name: "Chromecast", icon: "chromecast", guideIndex: 8 },
  { name: "Roku", icon: "roku", guideIndex: 9 },
  { name: "Google TV", icon: "googletv", guideIndex: 3 },
  { name: "TV Boxes", icon: "box", guideIndex: 3 },
];

export const deviceNames = devices.map((device) => device.name);

export const guides: Guide[] = [
  {
    id: "firestick",
    title: "How to Set Up IPTV on Amazon Firestick?",
    paragraphs: [
      "Connect your Amazon Fire TV Stick to your television, select the correct HDMI input, and connect to Wi-Fi.",
      "From the Fire TV home screen, open Find/Search and look for a compatible IPTV player in the Amazon Appstore.",
      "Install and open the app.",
      "Select the relevant login method and enter your IPTV provider's M3U playlist URL or Xtream Codes credentials.",
      "Wait for the playlist to load, then select a channel or on-demand title to begin streaming.",
    ],
  },
  {
    title: "IPTV on Samsung Smart TV",
    paragraphs: [
      "Connect your Samsung Smart TV to the internet.",
      "Press Home on your remote and open Apps.",
      "Search for an IPTV player supported by your TV model and region, then install it.",
      "Open the player and enter your subscription details as instructed by the app.",
      "Load the playlist and check that your channels and programme guide appear.",
    ],
    note: "Samsung TV app availability varies by model and region.",
  },
  {
    title: "IPTV on LG Smart TV",
    paragraphs: [
      "Connect your LG TV to Wi-Fi or Ethernet.",
      "Press Home and open Apps or the LG Content Store, depending on your webOS version.",
      "Search for a compatible IPTV player and install it.",
      "Launch the app and add your M3U playlist or supported login credentials.",
      "Refresh the playlist and select the content you want to watch.",
      "If the player is unavailable, check your TV model and regional app store before trying another installation method.",
    ],
  },
  {
    title: "How to Install IPTV on Android TV and Google TV",
    paragraphs: [
      "Connect your Android TV or Google TV device to the internet.",
      "Open the Google Play Store and search for a compatible IPTV player, such as TiviMate or IPTV Smarters Pro, if available.",
      "Install and launch the app.",
      "Choose the playlist or login option supported by your IPTV provider.",
      "Enter your subscription details, allow the channels to load, and test playback.",
    ],
  },
  {
    title: "How to Download IPTV on Android Phones and Tablets",
    paragraphs: [
      "Open the Google Play Store on your Android device.",
      "Install a compatible IPTV player.",
      "Open the app and choose the option to add a playlist or sign in.",
      "Enter your M3U URL or supported Xtream Codes details.",
      "Save the settings, refresh the playlist if needed, and select a channel to stream.",
    ],
  },
  {
    title: "How to Set Up IPTV on iPhone and iPad",
    paragraphs: [
      "Open the Apple App Store and search for an IPTV player compatible with iOS or iPadOS.",
      "Install and launch the app.",
      "Select Add Playlist or the equivalent setup option.",
      "Enter your provider's M3U playlist URL or supported login credentials.",
      "Save the playlist and check that the channel list loads correctly.",
    ],
  },
  {
    title: "IPTV on Windows PC and Mac: Complete Setup Guide",
    paragraphs: [
      "Download a compatible IPTV or media player from its official website or app store.",
      "Open the player and find its network stream or playlist option.",
      "If supported, paste your provider's M3U stream URL or import the playlist file.",
      "Start playback and check that your internet connection can stream smoothly.",
      "If the playlist does not work, confirm the URL and subscription status with your provider.",
    ],
    note: "Note: VLC can play supported network streams, but it does not automatically provide an IPTV subscription or guarantee that every provider's playlist format will work.",
  },
  {
    title: "A Detailed Guide to Setting Up IPTV on Apple TV",
    paragraphs: [
      "Connect your Apple TV to the internet.",
      "Open the tvOS App Store and search for a compatible IPTV player.",
      "Install and open the player.",
      "Add your subscription playlist or login details using the method supported by the app.",
      "Wait for the channels to load, then test playback.",
    ],
  },
  {
    title: "How to Install or Download IPTV on Chromecast",
    paragraphs: [
      "For Chromecast with Google TV, open Google Play and install a compatible IPTV player.",
      "Launch the app and enter your provider's playlist URL or supported login details.",
      "Load the playlist and select a channel.",
      "For older Chromecast models without Google TV, you may need to cast from a compatible mobile app rather than install an IPTV player directly on the device.",
    ],
  },
  {
    title: "Install IPTV on Roku",
    paragraphs: [
      "Open the Roku Channel Store and check whether a compatible IPTV app is available for your device and region.",
      "Install the app if supported, then follow its playlist setup instructions.",
      "Enter your provider details only through a supported, trusted app.",
      "If no suitable player is available, check whether casting or another compatible streaming device is an option.",
      "Roku does not support every IPTV player or installation method, so compatibility should be confirmed before setup.",
    ],
  },
];

export type Article = { title: string; paragraphs: string[]; image: string };

export const watch = {
  eyebrow: "Line-up",
  title: "What Can You Watch with IPTV in Australia?",
  lede: "The right IPTV subscription should match what you actually enjoy watching. Explore the available content categories and check the channel list before subscribing.",
  articles: [
    {
      title: "Live TV and Television Channels",
      image: "/images/card-live-tv-channels.jpg",
      paragraphs: [
        "Enjoy live television through compatible IPTV applications. Check the available Australian and international channels to see whether they include the programmes, news and entertainment you want to watch.",
      ],
    },
    {
      title: "Live Sports IPTV Australia",
      image: "/images/card-live-sports-australia.jpg",
      paragraphs: [
        "For sports fans, live coverage and stream reliability are important when choosing an IPTV service. If you follow AFL, NRL, cricket, football, rugby or other competitions, confirm that the relevant channels have the necessary broadcasting rights and are included in your selected package. Experience the best IPTV for AFL.",
        "Before a major match, check your internet connection and test playback on your preferred device.",
      ],
    },
    {
      title: "Movies and TV Series",
      image: "/images/card-movies-tv-series-replacement.jpg",
      paragraphs: [
        "Explore on-demand entertainment when you want something to watch outside scheduled television broadcasts. The available movie and series catalogue depends on the service and the rights associated with its content.",
        "Check the current library and supported playback features before purchasing a subscription.",
      ],
    },
    {
      title: "International Entertainment",
      image: "/images/card-international-entertainment.jpg",
      paragraphs: [
        "Viewers who enjoy programmes from different countries can check whether their preferred international channels are available. Channel availability may vary by subscription, region, and licensing arrangements.",
      ],
    },
  ] satisfies Article[],
};

export const whyClients = {
  id: "clients",
  eyebrow: "Clients",
  title: "Why Thousands of Clients Choose Australia IPTV?",
  lede: "When comparing IPTV providers in Australia, look beyond headline channel counts and promotional offers. The details that matter most are the quality of the viewing experience, compatibility, clear pricing, and support when you need assistance.",
  tone: "white" as const,
  points: [
    {
      title: "Flexible IPTV Subscription Options",
      body: "Choose a subscription period that suits your viewing needs and budget. Review the price, duration, number of permitted connections, and renewal conditions before completing your purchase.",
    },
    {
      title: "Compatible Streaming Devices",
      body: "Your IPTV setup should work with the device and application you prefer. Check compatibility before subscribing, particularly if you use a specific Smart TV, streaming stick, or IPTV player.",
    },
    {
      title: "Easy Installation",
      body: "You can easily install IPTV in Australia without unnecessary technical steps. Follow the appropriate installation guide for your device and use the activation details supplied for your subscription.",
    },
    {
      title: "Helpful Customer Support",
      body: "You can contact our support for the questions about activation, compatible apps, installation guides or playback problems.",
    },
    {
      title: "Clear Subscription Information",
      body: "A reliable buying decision starts with transparent information. Review the complete plan details, supported content, payment terms, and cancellation or renewal policy before choosing an IPTV subscription.",
    },
  ],
};

export const steps = {
  eyebrow: "Getting started",
  title: "How to Get Started with Australians IPTV",
  items: [
    {
      title: "Check the available plans",
      body: "Review the subscription options and make sure the included content, duration, and device limits meet your requirements.",
    },
    {
      title: "Confirm device compatibility",
      body: "Identify the device you intend to use and check which IPTV player and activation method it supports.",
    },
    {
      title: "Request a trial, if available",
      body: "Use the available trial to assess compatibility and playback before making a longer-term commitment. Confirm the trial's duration, restrictions, and any conditions that apply.",
    },
    {
      title: "Complete your subscription",
      body: "Once you have checked the service details, choose the appropriate plan and follow the official activation instructions.",
    },
    {
      title: "Set up and start watching",
      body: "Install the compatible player, enter the credentials supplied by your provider, and test your preferred channels. Keep your activation details secure.",
    },
  ],
};

export const buyingGuide = {
  eyebrow: "Buying guide",
  title: "How to Choose the Best IPTV Australia Service",
  ledes: [
    "Searching for the best IPTV Australia option can produce many similar offers. A large advertised channel count alone does not establish that a service is reliable, suitable for your device, or authorised to distribute its content.",
    "Use these checks when comparing Australian IPTV providers:",
  ],
  checks: [
    {
      title: "Content rights",
      body: "Confirm that the provider is authorised to distribute the channels and programmes it offers.",
    },
    {
      title: "Trial availability",
      body: "Check whether you can test the service before paying and understand the trial conditions.",
    },
    {
      title: "Peak-time performance",
      body: "Test the connection during the hours you normally watch, especially during live events.",
    },
    {
      title: "Device compatibility",
      body: "Confirm that the service supports your television, streaming stick, or preferred player.",
    },
    {
      title: "Pricing transparency",
      body: "Compare the total cost, renewal terms, and any additional charges.",
    },
    {
      title: "Support quality",
      body: "Check how to contact the provider and whether assistance is available for your device.",
    },
    {
      title: "Privacy and security",
      body: "Review the provider's privacy policy and use secure payment methods.",
    },
  ],
  closing:
    "These checks are more useful than relying on labels such as “top rated IPTV” without independent evidence. They can help you compare IPTV services on the factors that matter to your household.",
};

export const reseller = {
  eyebrow: "Business",
  title: "Start Your Own Business: Australian IPTV Reseller Panel",
  paragraphs: [
    "Looking to start your own IPTV business? Our Australian IPTV reseller panel section helps you explore reseller options for managing customer subscriptions and renewals. Contact our team to learn about available reseller plans, panel features, and how to get started.",
    "Interested in becoming an IPTV reseller in Australia? Get in touch today to discuss reseller access and available packages.",
  ],
  benefitsTitle: "Benefits of Our Australian IPTV Reseller Panel",
  benefits: [
    "Easy Subscription Management",
    "Centralised Customer Accounts",
    "Simple Subscription Renewals",
    "Flexible Reseller Packages",
    "Customer Support Assistance",
    "Scalable Reseller Business",
  ],
};

export const speed = {
  eyebrow: "Playback",
  title: "IPTV in Australia: Internet Speed and Buffering",
  intro:
    "A suitable internet connection is essential for IPTV streaming. The speed you need depends on video resolution, network congestion, the number of devices using the connection, and the requirements of the streaming service.",
  leadIn: "For a smoother experience, follow these practical steps:",
  steps: [
    "Test your internet speed on the device or network you normally use.",
    "Use an Ethernet connection where practical, especially for a stationary television.",
    "If you use Wi-Fi, keep your device within a good signal range of the router.",
    "Pause large downloads and other bandwidth-heavy activities while watching.",
    "Restart your streaming device and router if playback problems persist.",
    "Check whether the issue affects one channel or the entire service.",
  ],
  closing:
    "If your IPTV keeps buffering even when other online services work normally, the problem may relate to the particular stream, application, or provider. Contact support with the device model, application name, and approximate time the issue occurred.",
};

export const faqs = [
  {
    question: "What is Australian IPTV?",
    answer:
      "Australian IPTV is a way to watch television over an internet connection instead of relying only on traditional cable or satellite services. Depending on the provider and subscription, IPTV can include live TV channels, sports, movies and on-demand shows. You need a compatible device, an IPTV player if required, and access to content you are authorised to watch.",
  },
  {
    question: "Is IPTV legal in Australia?",
    answer:
      "IPTV technology itself is a method of delivering video over the internet. Whether a particular service is lawful depends on factors including the provider's rights to distribute the content. Before purchasing an Australian IPTV subscription, check that the provider can explain its content licensing and distribution arrangements. Do not assume a service is authorised simply because it has a website or accepts payment.",
  },
  {
    question: "Which devices support Australian IPTV?",
    answer:
      "IPTV can work on many internet-connected devices, including Amazon Fire TV Stick, Android TV boxes, compatible Samsung and LG Smart TVs, Android phones, iPhones, tablets, Apple TV and Windows or Mac computers. However, support depends on the IPTV player, operating system and device model. Check compatibility before subscribing.",
  },
  {
    question: "How do I install IPTV on Firestick in Australia?",
    answer:
      "Connect your Fire TV Stick to Wi-Fi, open the Amazon Appstore and search for a compatible IPTV player. Install and open the app, then enter the M3U playlist URL or Xtream Codes details supplied by your provider. Once the playlist loads, select a channel to test playback. Only use trusted installation sources and follow the app's official instructions.",
  },
  {
    question: "What do I need to set up an IPTV subscription?",
    answer:
      "You generally need three things: a stable internet connection, a compatible device with an IPTV player, and valid subscription details. Depending on the player, your provider may supply an M3U playlist URL or a server address, username and password for Xtream Codes login. Follow the provider's setup instructions for your specific device.",
  },
  {
    question: "What internet speed do I need for IPTV in Australia?",
    answer:
      "As a practical starting point, allow around 10 Mbps per device for HD streaming and 25 Mbps or more for 4K streaming. These are estimates rather than guarantees. Your actual requirements depend on stream quality, network congestion, Wi-Fi strength and how many devices are streaming at once. A wired Ethernet connection can help if your TV has an unreliable Wi-Fi connection.",
  },
  {
    question: "Why does my IPTV keep buffering or freezing?",
    answer:
      "IPTV buffering can result from a weak Wi-Fi signal, a congested internet connection, an overloaded streaming server, an outdated app or a device with limited resources. First, restart your IPTV player and router, check the connection on the streaming device, and install available updates. If other online services work normally but IPTV still buffers, contact your provider to check for a stream or server issue.",
  },
  {
    question: "Why is my IPTV login failing?",
    answer:
      "A failed IPTV login can happen when the username, password or server URL is incorrect, the subscription has expired, or the provider's server is temporarily unavailable. Check each detail carefully, including capital letters and accidental spaces. If the information is correct but the error continues, ask your provider to confirm your account status and connection details.",
  },
  {
    question: "What is an M3U playlist, and what are Xtream Codes?",
    answer:
      "An M3U playlist is a link or file that tells a compatible player where to find available streams. Xtream Codes login usually requires a server URL, username and password. Both are common IPTV setup methods, but not every player supports both. Use the method supplied or recommended by your provider, and keep your login details private.",
  },
  {
    question: "Do I need a VPN to watch IPTV in Australia?",
    answer:
      "A VPN is not automatically required for IPTV to work. It routes your internet traffic through another server, which can affect speed and connectivity. If you experience streaming problems, first test your internet connection and check for a provider-side issue. A VPN may help in some network situations, but it cannot guarantee better streaming or fix an unavailable channel.",
  },
  {
    question: "Can I use one Australian IPTV subscription on multiple devices?",
    answer:
      "You may be able to install the IPTV player on several compatible devices, but that does not necessarily mean you can stream on all of them simultaneously. The number of permitted concurrent streams depends on your subscription terms. Before purchasing, confirm how many devices can watch at the same time and whether additional connections cost extra.",
  },
  {
    question: "Can I try IPTV before buying a long-term subscription?",
    answer:
      "A trial can help you assess channel availability, picture quality, device compatibility and performance during busy viewing periods. Australians IPTV currently advertises a free trial on its homepage. Check the current trial terms with the provider, including its duration, included content and any device or connection limits, before committing to a longer plan.",
  },
];

export const closing = {
  eyebrow: "Begin",
  title: "Start Your IPTV Australia Setup Today",
  paragraphs: [
    "Choosing an IPTV service should be about more than a headline offer. Check the available content, compare subscription terms and confirm that your preferred device is supported before getting started.",
    "Australians IPTV provides a starting point for exploring available subscription options, installation guidance and compatible streaming setups.",
    "Review the plans, check the service details and choose the option that fits your viewing needs.",
  ],
  primary: { href: "#plans", label: "Explore Subscription Plans" },
  secondary: { href: whatsapp.supportHref, label: "Contact Support" },
};

export const footer = {
  blurb: "HD and 4K streaming, live sports, movies, and local channels for households across Australia.",
  explore: [
    { href: "#plans", label: "Plans" },
    { href: "#devices", label: "Installation guides" },
    { href: "#watch", label: "What you can watch" },
    { href: "#faq", label: "FAQs" },
  ],
  contact: [
    { href: whatsapp.href, label: "WhatsApp Us" },
    { href: whatsapp.supportHref, label: "Contact Support" },
    { href: "#reseller", label: "Reseller panel" },
  ],
};
