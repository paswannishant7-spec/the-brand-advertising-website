import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
}

const SITE_NAME = "The Brand Advertising";
const SITE_URL = "https://www.thebrandadvertising.com";
const DEFAULT_IMAGE = "/og-image.jpg";

export function SEO({ title, description, path = "/", image = DEFAULT_IMAGE, type = "website" }: SEOProps) {
  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;
  const url = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${SITE_URL}${image}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE_URL}${image}`} />
    </Helmet>
  );
}

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AdvertisingAgency",
    name: SITE_NAME,
    alternateName: "TBA",
    url: SITE_URL,
    email: "admin@thebrandadvertising.in",
    slogan: "Ideas That Move Brands",
    description:
      "Outdoor advertising, transit media, vehicle branding, retail branding, and brand activation agency.",
    founder: {
      "@type": "Person",
      name: "Dimcy Aggarwal",
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
