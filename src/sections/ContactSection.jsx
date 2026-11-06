
import { ArrowUpRight, Send, Mail, Sparkles } from "lucide-react";
import "./ContactSection.css";

export default function ContactSection({ t }) {
  const isArabic = t.contactTitle === "لنجد معًا الحماية المناسبة";

  const copy = isArabic
    ? {
        eyebrow: "لنتواصل معًا",
        heading: "كل بداية جيدة تبدأ بمحادثة.",
        description:
          "سواء كنت تبحث عن حماية تناسبك أو تحتاج إلى مساعدة، فريق سليم هنا لمساعدتك.",
        formTitle: "كيف يمكننا مساعدتك؟",
        formSub: "أخبرنا بما تحتاج إليه وسنتواصل معك.",
        name: "الاسم بالكامل",
        email: "البريد الإلكتروني",
        type: "نوع الاستفسار",
        message: "رسالتك",
        placeholderName: "اكتب اسمك",
        placeholderEmail: "name@example.com",
        placeholderMessage: "أخبرنا كيف يمكننا مساعدتك...",
        options: [
          "استفسار عام",
          "تأمين المركبات",
          "حلول تأمين الشركات",
          "استفسار آخر",
        ],
        send: "إرسال الرسالة",
        note: "يسعدنا التواصل معك والإجابة عن استفساراتك.",
        emailLabel: "راسلنا مباشرة",
      }
    : {
        eyebrow: "LET'S CONNECT",
        heading: "Every good journey starts with a conversation.",
        description:
          "Whether you're looking for the right protection or need a little guidance, our team is here to help.",
        formTitle: "How can we help you?",
        formSub: "Tell us what you need and we'll take it from there.",
        name: "Full name",
        email: "Email address",
        type: "Inquiry type",
        message: "Your message",
        placeholderName: "Enter your name",
        placeholderEmail: "name@example.com",
        placeholderMessage: "Tell us how we can help...",
        options: [
          "General inquiry",
          "Motor insurance",
          "Business solutions",
          "Other inquiry",
        ],
        send: "Send your message",
        note: "We're always happy to hear from you.",
        emailLabel: "EMAIL US DIRECTLY",
      };

  return (
    <section
      className="contact-section"
      id="contact"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="contact-glow contact-glow-one" />
      <div className="contact-glow contact-glow-two" />

      <div className="wrap contact-layout">
        <div className="contact-copy">
          <span className="contact-eyebrow">
            <span className="contact-eyebrow-line" />
            {copy.eyebrow}
          </span>

          <h2>{copy.heading}</h2>

          <p className="contact-description">
            {copy.description}
          </p>

          <div className="contact-decoration">
            <div className="contact-decoration-orbit orbit-a" />
            <div className="contact-decoration-orbit orbit-b" />
            <div className="contact-decoration-orbit orbit-c" />

            <div className="contact-decoration-core">
              <div className="contact-core-inner">
                <Sparkles size={31} strokeWidth={1.3} />
              </div>
            </div>

            <span className="contact-decoration-dot dot-a" />
            <span className="contact-decoration-dot dot-b" />
            <span className="contact-decoration-dot dot-c" />
          </div>

          <a
            className="contact-email"
            href="mailto:hello@saleem.sa"
          >
            <span className="contact-email-icon">
              <Mail size={19} />
            </span>

            <span>
              <small>{copy.emailLabel}</small>
              <strong>hello@saleem.sa</strong>
            </span>

            <ArrowUpRight size={19} />
          </a>
        </div>

        <div className="contact-form-card">
          <div className="contact-form-heading">
            <span className="contact-form-icon">
              <Send size={20} />
            </span>

            <div>
              <h3>{copy.formTitle}</h3>
              <p>{copy.formSub}</p>
            </div>
          </div>

          <form
            className="saleem-contact-form"
            action="mailto:hello@saleem.sa"
            method="post"
            encType="text/plain"
          >
            <div className="contact-field">
              <label htmlFor="contact-name">{copy.name}</label>
              <input
                id="contact-name"
                name="Name"
                type="text"
                placeholder={copy.placeholderName}
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-email">{copy.email}</label>
              <input
                id="contact-email"
                name="Email"
                type="email"
                placeholder={copy.placeholderEmail}
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-type">{copy.type}</label>
              <select id="contact-type" name="Inquiry type" required defaultValue="">
                <option value="" disabled>
                  {copy.type}
                </option>

                {copy.options.map((option) => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="contact-field">
              <label htmlFor="contact-message">{copy.message}</label>
              <textarea
                id="contact-message"
                name="Message"
                rows="4"
                placeholder={copy.placeholderMessage}
                required
              />
            </div>

            <button className="contact-submit" type="submit">
              <span>{copy.send}</span>
              <ArrowUpRight size={19} />
            </button>

            <p className="contact-form-note">{copy.note}</p>
          </form>
        </div>
      </div>
    </section>
  );
}
