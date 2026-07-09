import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Github, Send, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { personalInfo } from "@/data/personalInfo";
import SectionHeading from "@/components/ui-custom/SectionHeading";
import Reveal from "@/components/ui-custom/Reveal";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactSection() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<Status>("idle");

  const contactLinks = [
    { icon: Mail, label: t.contact.linkEmail, value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: t.contact.linkPhone, value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g, "")}` },
    { icon: MapPin, label: t.contact.linkLocation, value: personalInfo.location, href: undefined },
    { icon: Github, label: t.contact.linkGithub, value: "GitHub", href: personalInfo.github },
  ];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(personalInfo.formspreeEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-6 sm:px-10 bg-cream-dark">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left */}
        <div>
          <SectionHeading label={t.contact.label} title={t.contact.title} accent={t.contact.titleAccent} />
          <Reveal>
            <p className="text-[0.9rem] leading-[1.75] text-ink/65 max-w-md">{t.contact.description}</p>
          </Reveal>

          <div className="mt-8 flex flex-col gap-3">
            {contactLinks.map((link, i) => {
              const Tag = link.href ? "a" : "div";
              return (
                <Reveal key={link.label} delay={(Math.min(i + 1, 5) as 1 | 2 | 3 | 4 | 5)}>
                  <Tag
                    {...(link.href
                      ? { href: link.href, target: link.href.startsWith("http") ? "_blank" : undefined, rel: "noopener noreferrer" }
                      : {})}
                    className={`group flex items-center gap-4 px-5 py-4 bg-paper border border-copper/[.18] transition-all duration-300 ${
                      link.href ? "hover:bg-copper hover:text-paper hover:translate-x-1 cursor-pointer" : ""
                    }`}
                  >
                    <span className="w-9 h-9 flex-shrink-0 flex items-center justify-center bg-cream-dark group-hover:bg-paper/20 rounded-[4px] transition-colors">
                      <link.icon className="w-4 h-4 text-copper group-hover:text-paper" />
                    </span>
                    <span className="flex flex-col min-w-0 flex-1">
                      <span className="text-[0.62rem] uppercase tracking-[0.12em] text-ink/50 group-hover:text-paper/70">
                        {link.label}
                      </span>
                      <span className="text-[0.83rem] text-ink group-hover:text-paper break-words">{link.value}</span>
                    </span>
                  </Tag>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Right: form */}
        <Reveal delay={2}>
          <div className="bg-paper border border-copper/[.18] rounded-[6px] p-8 sm:p-10">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center text-center py-12 gap-3">
                <CheckCircle2 className="w-10 h-10 text-copper" />
                <p className="font-serif font-bold text-xl text-ink">{t.contact.formSuccessTitle}</p>
                <p className="text-sm text-ink/60 max-w-xs">{t.contact.formSuccessText}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-[0.65rem] uppercase tracking-[0.12em] text-copper">
                    {t.contact.formName}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="bg-cream border border-copper/[.25] rounded-[4px] px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-copper transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-[0.65rem] uppercase tracking-[0.12em] text-copper">
                    {t.contact.formEmail}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="bg-cream border border-copper/[.25] rounded-[4px] px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-copper transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-[0.65rem] uppercase tracking-[0.12em] text-copper">
                    {t.contact.formSubject}
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    className="bg-cream border border-copper/[.25] rounded-[4px] px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-copper transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-[0.65rem] uppercase tracking-[0.12em] text-copper">
                    {t.contact.formMessage}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="bg-cream border border-copper/[.25] rounded-[4px] px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-copper transition-colors resize-y min-h-[120px]"
                  />
                </div>

                {status === "error" && (
                  <p className="text-xs text-red-600">{t.contact.formErrorText}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-2 inline-flex items-center justify-center gap-2 px-7 py-3 bg-copper text-paper text-[0.75rem] uppercase tracking-[0.15em] hover:bg-ink transition-colors duration-300 disabled:opacity-60"
                >
                  <Send className="w-3.5 h-3.5" />
                  {status === "sending" ? t.contact.formSending : t.contact.formSubmit}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
