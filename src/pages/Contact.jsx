import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Send, CheckCircle2, Route, Sparkles } from "lucide-react";
import RelaxingHero from "../components/RelaxingHero";
import campaignOne from "../assets/tba/auto-hood-route.png";
import campaignTwo from "../assets/tba/auto-hood-benefits.png";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Campaign enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\n${form.message}`
    );
    window.location.href = `mailto:admin@thebrandadvertising.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div>
      <RelaxingHero
        eyebrow="Contact TBA"
        title="Let’s get your brand moving."
        video="https://www.pexels.com/download/video/32521689/"
      />

      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 bg-white rounded-3xl shadow-soft p-8 md:p-12"
          >
            {sent ? (
              <div className="text-center py-16">
                <CheckCircle2 className="mx-auto text-brand-red mb-5" size={48} />
                <h3 className="font-display font-semibold text-2xl mb-2">
                  Your campaign brief is ready.
                </h3>
                <p className="text-charcoal-soft/70 max-w-md mx-auto">
                  Thank you for telling us about your project. Add TBA&rsquo;s
                  Your enquiry is ready to send to admin@thebrandadvertising.com.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-brand-red text-sm font-medium"
                >
                  Create another brief
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-charcoal-soft/60 mb-2 block">
                      Your Name
                    </label>
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full border-b border-charcoal/15 focus:border-brand-red outline-none py-2.5 bg-transparent transition-colors"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wider text-charcoal-soft/60 mb-2 block">
                      Phone
                    </label>
                    <input
                      required
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full border-b border-charcoal/15 focus:border-brand-red outline-none py-2.5 bg-transparent transition-colors"
                      placeholder="+91"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-charcoal-soft/60 mb-2 block">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border-b border-charcoal/15 focus:border-brand-red outline-none py-2.5 bg-transparent transition-colors"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-charcoal-soft/60 mb-2 block">
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full border-b border-charcoal/15 focus:border-brand-red outline-none py-2.5 bg-transparent transition-colors"
                  >
                    <option value="">Select a service</option>
                    {[
                      "Auto Hood Branding",
                      "Cab & Fleet Branding",
                      "Bus Branding",
                      "Retail Branding",
                      "Wall Painting",
                      "BTL Activation",
                      "Other",
                    ].map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-charcoal-soft/60 mb-2 block">
                    Message
                  </label>
                  <textarea
                    required
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full border-b border-charcoal/15 focus:border-brand-red outline-none py-2.5 bg-transparent transition-colors resize-none"
                    placeholder="Tell us about your campaign..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-brand-rose to-brand-red text-white font-medium shadow-card hover:brightness-110 transition-all"
                >
                  Prepare Enquiry <Send size={16} />
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-ink rounded-3xl p-8 text-white">
              <p className="text-brand-rose text-xs uppercase tracking-[0.2em] mb-3">
                The Brand Advertising
              </p>
              <h3 className="font-display font-semibold text-2xl mb-6">
                One brief. Every stage.
              </h3>
              <ul className="space-y-5 text-sm text-white/75">
                <li className="flex gap-4">
                  <MapPin size={18} className="text-brand-rose shrink-0" />
                  Campaign planning and execution across India
                </li>
                <li className="flex gap-4">
                  <Route size={18} className="text-brand-rose shrink-0" />
                  Route research, creative, production and deployment
                </li>
                <li className="flex gap-4">
                  <Sparkles size={18} className="text-brand-rose shrink-0" />
                  Transit, retail, outdoor and BTL solutions
                </li>
                <li className="flex gap-4">
                  <Mail size={18} className="text-brand-rose shrink-0" />
                  <a href="mailto:admin@thebrandadvertising.com" className="hover:text-white break-all">
                    admin@thebrandadvertising.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img src={campaignOne} alt="TBA auto hood branding campaign" className="rounded-2xl aspect-square object-cover" />
              <img src={campaignTwo} alt="TBA auto branding benefits" className="rounded-2xl aspect-square object-cover" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
