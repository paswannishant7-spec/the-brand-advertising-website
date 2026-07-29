const socials = [
  {
    name: "YouTube",
    href: "https://www.youtube.com/@yorkmediasolutions",
    color: "bg-[#FF0000]",
    icon: <path d="M22.6 7.3c-.2-.9-.9-1.6-1.8-1.8C19.2 5 12 5 12 5s-7.2 0-8.8.5c-.9.2-1.6.9-1.8 1.8C1 8.9 1 12 1 12s0 3.1.4 4.7c.2.9.9 1.6 1.8 1.8C4.8 19 12 19 12 19s7.2 0 8.8-.5c.9-.2 1.6-.9 1.8-1.8.4-1.6.4-4.7.4-4.7s0-3.1-.4-4.7ZM9.8 15V9l5.7 3-5.7 3Z" />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/yorkmediasolutions/",
    color: "bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#FCAF45]",
    icon: <><rect x="4" y="4" width="16" height="16" rx="5" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="3.5" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.8" r="1" /></>,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/york-media-solutions/posts/?feedView=all",
    color: "bg-[#0A66C2]",
    icon: <><path d="M5.5 8.5H2V20h3.5V8.5ZM3.8 3A2 2 0 1 0 3.8 7a2 2 0 0 0 0-4ZM9 8.5h3.4v1.6h.1c.5-.9 1.7-2 3.8-2 4 0 4.7 2.6 4.7 6V20h-3.5v-5.2c0-1.2 0-2.8-1.8-2.8s-2 1.3-2 2.7V20H9V8.5Z" /></>,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/919999878786",
    color: "bg-[#25D366]",
    icon: <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.8 14.1c-.2.7-1.2 1.3-1.8 1.4-.5.1-1.2.2-3.8-.8-3.2-1.3-5.2-4.5-5.4-4.7-.2-.2-1.3-1.7-1.3-3.3s.8-2.3 1.1-2.6c.3-.3.7-.4.9-.4h.7c.2 0 .5-.1.7.5l.9 2.2c.1.3.1.5 0 .7l-.4.6-.6.6c-.2.2-.4.4-.2.8.2.4.8 1.4 1.8 2.3 1.2 1.1 2.3 1.5 2.6 1.7.3.2.5.2.7-.1l1-1.2c.2-.3.4-.3.7-.2l2.1 1c.3.2.6.2.7.4.1.2.1.7-.1 1.3Z" />,
  },
];

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open The Brand Advertising on ${social.name}`}
          title={social.name}
          className={`w-12 h-12 rounded-full ${social.color} text-white flex items-center justify-center shadow-soft hover:scale-110 transition-transform duration-300`}
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">{social.icon}</svg>
        </a>
      ))}
    </div>
  );
}

