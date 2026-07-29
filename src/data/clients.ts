// PLACEHOLDER DATA \u2014 client names/logos and testimonials are not yet confirmed.
// Replace with verified client list and real testimonials before launch.

export interface ClientPlaceholder {
  id: string;
  label: string;
}

export const CLIENT_PLACEHOLDERS: ClientPlaceholder[] = Array.from({ length: 10 }, (_, i) => ({
  id: `client-${i + 1}`,
  label: "Client Logo",
}));

export interface TestimonialPlaceholder {
  id: string;
  quote: string;
  name: string;
  role: string;
  isPlaceholder: true;
}

export const TESTIMONIAL_PLACEHOLDERS: TestimonialPlaceholder[] = [
  {
    id: "t1",
    quote: "Placeholder testimonial \u2014 to be replaced with a verified client quote.",
    name: "Client Name",
    role: "Designation, Company",
    isPlaceholder: true,
  },
  {
    id: "t2",
    quote: "Placeholder testimonial \u2014 to be replaced with a verified client quote.",
    name: "Client Name",
    role: "Designation, Company",
    isPlaceholder: true,
  },
  {
    id: "t3",
    quote: "Placeholder testimonial \u2014 to be replaced with a verified client quote.",
    name: "Client Name",
    role: "Designation, Company",
    isPlaceholder: true,
  },
];
