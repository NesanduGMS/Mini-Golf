import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  servicesIcon1,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  golfbg,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  searchMd,
  slack,
  collaboration1,
  collaboration2,
  collaboration3,
  collaboration4,
  collaboration5,
  collaboration6,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  portable,
  qulity,
  fun,
  aforadble,
  americanexpress,
  mastercard,
  visa,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "/",
  },
  {
    id: "1",
    title: "About Us",
    url: "/aboutus",
  },
  {
    id: "2",
    title: "Courses",
    url: "/courses",
  },
  {
    id: "3",
    title: "Gallery",
    url: "/gallery",
  },
  {
    id: "4",
    title: "Book Now",
    url: "/booknow",
    onlyMobile: true,
  },
];

export const heroIcons = [
  {
    id: "portable",
    title: "Portable",
    text: "Our mini golf courses are portable and can be set up anywhere.",
    iconUrl: portable,
  },

  {
    id: "quality",
    title: "Quality",
    text: "We only use high-quality equipment and materials for our courses.",
    iconUrl: qulity,
  },

  {
    id: "fun",
    title: "Fun",
    text: "Our courses are designed to be fun and engaging for all ages.",
    iconUrl: fun,
  },

  {
    id: "affordable",
    title: "Affordable",
    text: "We offer competitive prices for our mini golf courses.",
    iconUrl: aforadble,
  },
];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

// export const brainwaveServices = [
//   "Photo generating",
//   "Photo enhance",
//   "Seamless Integration",
// ];

// export const brainwaveServicesIcons = [
//   recording03,
//   recording01,
//   disc02,
//   chromecast,
//   sliders04,
// ];
export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "$10 Million in Public Liability Insurance",
  },
  {
    id: "1",
    title: "Flexible Pick-up and Delivery options",
  },
  {
    id: "2",
    title: "On-site supervision available",
  },
  {
    id: "3",
    title: "Design and Build service for custom courses",
  },
  {
    id: "4",
    title:
      "Portable fencing, scorecards, pencils, and golfer certificates provided",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "collaboration1",
    icon: collaboration1,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "collaboration2",
    icon: collaboration2,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "collaboration3",
    icon: collaboration3,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "collaboration4",
    icon: collaboration4,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "collaboration5",
    icon: collaboration5,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "collaboration6",
    icon: collaboration6,
    width: 34,
    height: 34,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Corporate Mini Golf Hire",
    text: "Take your corporate event to the next level with our adjustable camber green (3.0 meters x 600mm) and Hole in One challenges, perfect for indoor or outdoor use.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: servicesIcon1,
    imageUrl: golfbg,
  },
  {
    id: "1",
    title: "9-Hole Golf Course",
    text: "Our 9-hole mini golf course is versatile for small or large spaces, making it a hit for festivals, corporate events, and trade shows.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: servicesIcon1,
    imageUrl: golfbg,
    light: true,
  },
  {
    id: "2",
    title: "Domestic Party Mini Golf Hire",
    text: "Ideal for children's parties, our 6-hole and 9-hole courses can fit any backyard or small event space. Download our invitation and certificate templates to share with your guests!",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: servicesIcon1,
    imageUrl: golfbg,
  },
  {
    id: "3",
    title: "Fundraising Mini Golf Hire",
    text: "Looking to entertain guests and raise money? Our 9-hole fundraising course fits areas up to 10m x 5m, great for festivals, sports nights, or charity events.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: servicesIcon1,
    imageUrl: golfbg,
    light: true,
  },
  {
    id: "4",
    title: "Billiard Mini Golf Hire",
    text: "A fun twist on traditional golf, the billiard-style mini golf setup uses cues and is perfect for small office gatherings or home parties with limited space. Available in 6-hole setups at table height or ground level.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: servicesIcon1,
    imageUrl: golfbg,
  },
  {
    id: "5",
    title: "Postal Mini Golf Hire",
    text: "Need something more flexible? Our portable Postal Mini Golf options include Hole in One and Chip Golf courses, delivered straight to your location with pre-paid return postage.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: servicesIcon1,
    imageUrl: golfbg,
  },
];

export const special_benefits = [
  {
    id: "0",
    title: "Corporate, Fundraising, and Domestic Event Support",
    text: "We cater to a wide variety of events, from corporate functions to fundraising and private parties, ensuring a perfect mini golf experience for any occasion.",
  },
  {
    id: "1",
    title: "Custom-designed Mini Golf Courses for Hire",
    text: "Our mini golf courses are designed with flexibility in mind, tailored to meet the specific needs of your event, whether it's a small gathering or a large festival.",
  },
  {
    id: "2",
    title: "Range of Course Options (1, 2, 4, 6, and 9-hole Courses)",
    text: "We offer various course sizes to fit any space and event type, ensuring fun for both small and large groups.",
  },
  {
    id: "3",
    title: "Fun Variations: Chip Golf, Dual Golf, and Billiard Golf",
    text: "Beyond traditional mini golf, we provide exciting variations like Chip Golf, Dual Golf, and even Billiard Golf, adding unique and creative twists to the game.",
  },
  {
    id: "4",
    title:
      "Available Australia-wide through Our Network of Pre-qualified Agents",
    text: "We provide our services across the country, using a reliable network of agents in all major metro areas to ensure timely delivery and setup for your event.",
  },
];

export const socials = [
  {
    id: "0",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "1",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "2",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "3",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];

export const topbarLinks = [
  {
    route: "/booknow/customer_details",
    label: "Customer Details",
  },
  {
    route: "/booknow/billing_details",
    label: "Billing Details",
  },
  {
    route: "/booknow/event_details",
    label: "Event Details",
  },
];

export const paymentmethods = [
  {
    id: "0",
    name: "visa",
    iconUrl: visa,
  },
  {
    id: "1",
    name: "mastercard",
    iconUrl: mastercard,
  },
  {
    id: "2",
    name: "americanexpress",
    iconUrl: americanexpress,
  },
];
