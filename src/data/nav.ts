export interface NavItem {
  label: string;
  path: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Gallery", path: "/gallery" },
  { label: "Process", path: "/campaign-process" },
  { label: "Why Us", path: "/why-choose-us" },
  { label: "Clients", path: "/clients" },
  { label: "Contact", path: "/contact" },
];

export const FOOTER_ITEMS: NavItem[] = [
  ...NAV_ITEMS,
  { label: "Testimonials", path: "/testimonials" },
  { label: "FAQ", path: "/faq" },
];
