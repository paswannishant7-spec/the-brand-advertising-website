import { slugify } from "@/lib/utils";

export interface ServiceItem {
  name: string;
  slug: string;
}

export interface ServiceCategory {
  id: string;
  slug: string;
  title: string;
  shortLabel: string;
  description: string;
  items: ServiceItem[];
}

const raw: Omit<ServiceCategory, "slug" | "items"> & { items: string[] }[] = [
  {
    id: "vehicle-transit",
    title: "Vehicle & Transit Advertising",
    shortLabel: "Vehicle & Transit",
    description:
      "Turn everyday journeys into daily impressions. We plan and produce branding across the vehicles that move through your audience's routine \u2014 markets, colonies, campuses, and commercial streets.",
    items: [
      "Auto Hood Branding",
      "Auto Rickshaw Advertising",
      "Auto Branding",
      "Cab Branding",
      "Bus Branding",
      "Bike Branding",
      "Truck Branding",
      "Mobile Van Branding",
      "Transit Media",
    ],
  },
  {
    id: "outdoor",
    title: "Outdoor Advertising",
    shortLabel: "Outdoor",
    description:
      "Static presence in high-footfall locations. From painted walls to structured boards, we plan sites and production for visibility that holds.",
    items: ["Hoardings", "Wall Painting", "GSB Boards", "ACP Boards", "Outdoor Campaign Planning"],
  },
  {
    id: "retail-dealer",
    title: "Retail & Dealer Branding",
    shortLabel: "Retail & Dealer",
    description:
      "Branding at the point of purchase \u2014 where attention converts to action. We design and execute in-store, dealer, and shopfront identity.",
    items: ["Retail Branding", "Shop Branding", "Dealer Branding", "In-Store Branding", "In-Shop Branding"],
  },
  {
    id: "brand-activation",
    title: "Brand Activation",
    shortLabel: "Activation",
    description:
      "Live, on-ground engagement that puts a brand directly in front of its audience \u2014 planned as an experience, not just an event.",
    items: [
      "BTL Campaigns",
      "Brand Activation",
      "Experiential Marketing",
      "Product Launches",
      "Roadshows",
      "Promotional Activities",
      "RWA Promotions",
    ],
  },
  {
    id: "corporate-merchandise",
    title: "Corporate Merchandise",
    shortLabel: "Merchandise",
    description:
      "Branded items people keep and use \u2014 extending a campaign beyond the street and into daily life.",
    items: ["Promotional Merchandise", "T-Shirts", "Caps", "Umbrellas", "Pens", "Diaries", "Corporate Gifting"],
  },
  {
    id: "media-services",
    title: "Media Services",
    shortLabel: "Media",
    description: "Additional media inventory and partnerships to extend campaign reach and value.",
    items: ["Barter Media"],
  },
];

export const SERVICE_CATEGORIES: ServiceCategory[] = raw.map((cat) => ({
  ...cat,
  slug: slugify(cat.title),
  items: cat.items.map((name) => ({ name, slug: slugify(name) })),
}));

export const ALL_SERVICES: ServiceItem[] = SERVICE_CATEGORIES.flatMap((c) => c.items);
