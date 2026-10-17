
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";

import FashionGallery from "../components/FashionGallery";
import ComingSoonProgress from "../components/ComingSoonProgress";

const galleryImages = [
  {
    src: "https://res.cloudinary.com/dcoojr90p/image/upload/v1792260206/ssjhxc_zxt8fm.jpg",
    alt: "Maya's Fashion House editorial look",
  },
  {
    src: "https://res.cloudinary.com/dcoojr90p/image/upload/v1792260193/jj_g6n8nb.jpg",
    alt: "Maya's Fashion House fashion detail",
  },
  {
    src: "https://res.cloudinary.com/dcoojr90p/image/upload/v1792260191/dfuhsdj_casga4.jpg",
    alt: "Maya's Fashion House studio look",
  },
  {
    src: "https://res.cloudinary.com/dcoojr90p/image/upload/v1792260188/jhh_ctlkj8.jpg",
    alt: "Maya's Fashion House collection",
  },
  {
    src: "https://res.cloudinary.com/dcoojr90p/image/upload/v1792260163/asjkfjhd_boa1h9.jpg",
    alt: "Maya's Fashion House editorial portrait",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (status.message) {
      setStatus({
        type: "",
        message: "",
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, subject, message } = formData;

    if (
      !name.trim() ||
      !email.trim() ||
      !subject.trim() ||
      !message.trim()
    ) {
      setStatus({
        type: "error",
        message: "Please complete all fields before submitting.",
      });
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    setStatus({
      type: "success",
      message:
        "Thank you. Your message has been received as a frontend demonstration. Email sending will be connected later.",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="overflow-hidden bg-white text-black dark:bg-black dark:text-white">
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-end px-6 pb-16 pt-40 lg:px-10 lg:pb-24">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
          <span className="whitespace-nowrap text-[18vw] font-black uppercase leading-none tracking-[-0.08em] text-black/[0.035] dark:text-white/[0.035]">
            THE STUDIO
          </span>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-black/50 dark:text-white/50">
            CONNECT WITH OUR STUDIO
          </p>

          <h1 className="max-w-5xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] sm:text-7xl lg:text-[9rem]">
            Let&apos;s
            <br />
            Connect.
          </h1>
        </div>
      </section>

      {/* Fashion Gallery */}
      <section className="px-6 pb-24 lg:px-10 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <FashionGallery images={galleryImages} />
        </div>
      </section>

      {/* Studio Information and Contact Form */}
      <section className="border-t border-black/10 dark:border-white/10">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:px-10 lg:py-32">
          {/* Contact Details */}
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-black/40 dark:text-white/40">
              The Studio
            </p>

            <h2 className="max-w-xl text-4xl font-black uppercase leading-none tracking-[-0.04em] sm:text-6xl">
              Start a conversation.
            </h2>

            <p className="mt-8 max-w-lg text-base leading-8 text-black/60 dark:text-white/60">
              For collaborations, styling enquiries, custom fashion requests,
              partnerships, or general enquiries, connect with Maya&apos;s
              Fashion House.
            </p>

            <div className="mt-12 space-y-7">
              <a
                href="mailto:hello@mayasfashionhouse.com"
                className="group flex items-start gap-4"
              >
                <Mail
                  size={20}
                  strokeWidth={1.5}
                  className="mt-1 shrink-0"
                />

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-black/40 dark:text-white/40">
                    Email
                  </p>

                  <p className="mt-2 text-sm transition-opacity group-hover:opacity-50">
                    hello@mayasfashionhouse.com
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <MessageCircle
                  size={20}
                  strokeWidth={1.5}
                  className="mt-1 shrink-0"
                />

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-black/40 dark:text-white/40">
                    WhatsApp
                  </p>

                  <p className="mt-2 text-sm text-black/50 dark:text-white/50">
                    Official studio number coming soon.
                  </p>
                </div>
              </div>

              <a href="#" className="group flex items-start gap-4">
                <span className="mt-1 flex h-5 w-5 items-center justify-center text-sm font-semibold">
                  ◎
                </span>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-black/40 dark:text-white/40">
                    Instagram
                  </p>

                  <p className="mt-2 inline-flex items-center gap-2 text-sm transition-opacity group-hover:opacity-50">
                    Follow the studio
                    <ArrowUpRight size={14} strokeWidth={1.5} />
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-black/40 dark:text-white/40">
              Send an enquiry
            </p>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-3 block text-xs font-semibold uppercase tracking-[0.15em]"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-b border-black/20 bg-transparent py-3 text-sm outline-none transition-colors focus:border-black dark:border-white/20 dark:focus:border-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-3 block text-xs font-semibold uppercase tracking-[0.15em]"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-b border-black/20 bg-transparent py-3 text-sm outline-none transition-colors focus:border-black dark:border-white/20 dark:focus:border-white"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-3 block text-xs font-semibold uppercase tracking-[0.15em]"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full border-b border-black/20 bg-transparent py-3 text-sm outline-none transition-colors focus:border-black dark:border-white/20 dark:focus:border-white"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-3 block text-xs font-semibold uppercase tracking-[0.15em]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none border-b border-black/20 bg-transparent py-3 text-sm outline-none transition-colors focus:border-black dark:border-white/20 dark:focus:border-white"
                />
              </div>

              {status.message && (
                <div
                  role="status"
                  className={`border p-4 text-sm ${
                    status.type === "success"
                      ? "border-black/20 dark:border-white/20"
                      : "border-red-500/40 text-red-600 dark:text-red-400"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                className="inline-flex items-center gap-3 border border-black bg-black px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all hover:bg-white hover:text-black dark:border-white dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white"
              >
                Send Message
                <ArrowUpRight size={16} strokeWidth={1.5} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Collection Progress */}
      <section className="border-t border-black/10 px-6 py-24 dark:border-white/10 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <ComingSoonProgress />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-black/10 px-6 py-24 dark:border-white/10 lg:px-10 lg:py-32">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-black/40 dark:text-white/40">
              Explore More
            </p>

            <h2 className="max-w-3xl text-4xl font-black uppercase leading-none tracking-[-0.04em] sm:text-6xl">
              Something new
              <br />
              is taking shape.
            </h2>
          </div>

          <Link
            to="/collection"
            className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.15em] transition-opacity hover:opacity-50"
          >
            View Collection
            <ArrowUpRight size={18} strokeWidth={1.5} />
          </Link>
        </div>
      </section>
    </main>
  );
}
