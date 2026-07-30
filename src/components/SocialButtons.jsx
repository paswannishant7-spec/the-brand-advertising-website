function InstagramIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.4" cy="6.7" r="1.1" fill="currentColor" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M5.3 7.9H2.1V21h3.2V7.9ZM3.7 2.3A1.86 1.86 0 1 0 3.7 6a1.86 1.86 0 0 0 0-3.7ZM21.9 13.5c0-3.9-2.1-5.8-4.9-5.8-2.3 0-3.3 1.2-3.8 2.1V7.9H10V21h3.2v-6.5c0-1.7.3-3.4 2.5-3.4 2.2 0 2.2 2 2.2 3.5V21h3.2l.8-7.5Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.7 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5H17V3.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1V10H8v3h2.6v8h3.1Z" />
    </svg>
  );
}

const socialLinks = [
  {
    label: "Follow TBA on Instagram",
    href: "https://www.instagram.com/the.brandadvertising?igsh=aWM5eXE4bnl6YzRu",
    className: "social-instagram",
    name: "Instagram",
    Icon: InstagramIcon,
  },
  {
    label: "Connect with Dimcy Aggarwal on LinkedIn",
    href: "https://www.linkedin.com/in/dimcy-aggarwal-aa1a621b7/",
    className: "social-linkedin",
    name: "LinkedIn",
    Icon: LinkedInIcon,
  },
  {
    label: "Follow TBA on Facebook",
    href: "https://www.facebook.com/profile.php?id=61584311907761",
    className: "social-facebook",
    name: "Facebook",
    Icon: FacebookIcon,
  },
];

export default function SocialButtons() {
  return (
    <aside className="floating-socials" aria-label="TBA social media">
      {socialLinks.map(({ label, href, className, name, Icon }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          className={className}
        >
          <Icon size={22} strokeWidth={2.2} />
          <span>{name}</span>
        </a>
      ))}
    </aside>
  );
}
