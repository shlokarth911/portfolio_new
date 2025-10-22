import React, { useState } from "react";
import AnimatedButton from "../components/ui/AnimatedButton";
import {
  Github,
  Linkedin,
  Instagram,
  X,
  Phone,
  Mail,
  Copy,
  Check,
} from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "shlokarth911@gmail.com";
  const phone = "+91 99391 35022";

  const socialLinks = [
    {
      title: "GitHub",
      link: "https://github.com/shlokarth911",
      Icon: Github,
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/shlok-arth-08494a2b9/",
      Icon: Linkedin,
    },
    {
      title: "Instagram",
      link: "https://www.instagram.com/shlokarth911/",
      Icon: Instagram,
    },
    {
      title: "X",
      link: "https://www.x.com/shlokarth911/",
      Icon: X,
    },
    {
      title: "WhatsApp",
      link: "https://wa.me/+919939135022",
      Icon: Phone,
    },
  ];

  async function copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {
      // Fallback behaviour: open mail client for email
      console.error("Copy failed", e);
    }
  }

  return (
    <section className="pt-22 p-5 font-display max-w-6xl mx-auto flex min-h-screen justify-center items-center">
      <div className="grid gap-8 md:grid-cols-2 items-start">
        {/* Left: Heading + Intro + Actions */}
        <div className="space-y-6">
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
            Get in touch
          </h1>
          <p className="text-neutral-300 max-w-prose">
            I&apos;m open to freelance work, collaborations, and interesting
            projects. Drop a message — I usually reply within a day.
          </p>

          <div className="flex flex-col flex-wrap gap-3">
            <div className="flex gap-2">
              <AnimatedButton
                text={`Mail — ${email}`}
                link={`mailto:${email}`}
              />
              <button
                onClick={() => copyToClipboard(email)}
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-neutral-700 bg-transparent hover:scale-[1.02] transition-transform duration-200"
                aria-label="Copy email address"
              >
                <Copy className="w-4 h-4 opacity-90 group-hover:animate-bounce" />
                <span className="text-sm">
                  {copied ? "Copied!" : "Copy email"}
                </span>
              </button>
            </div>

            <AnimatedButton
              text="Find me on LinkedIn"
              link="https://www.linkedin.com/in/shlokarth911/"
            />
          </div>

          <div className="mt-4 text-sm text-neutral-400">
            <strong>Pro tip:</strong> You can copy the email or open your mail
            client.
          </div>
        </div>

        {/* Right: Contact Card + Socials */}
        <div className="relative">
          <div className="p-6  bg-gradient-to-br  border-l border-neutral-700 backdrop-blur-md shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold">Quick contact</h3>
                <p className="text-neutral-400 mt-1">
                  Prefer instant replies? Use WhatsApp or X.
                </p>

                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between rounded-lg p-3 border border-neutral-700">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5" />
                      <div>
                        <div className="text-sm text-neutral-300">Email</div>
                        <div className="text-sm font-medium">{email}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => (window.location = `mailto:${email}`)}
                        className="px-3 py-1 rounded-md bg-neutral-700/30 hover:bg-neutral-700/50 transition"
                        aria-label="Open mail client"
                      >
                        Mail
                      </button>
                      <button
                        onClick={() => copyToClipboard(email)}
                        className="p-2 rounded-md border border-neutral-700"
                        aria-label="Copy email"
                      >
                        {copied ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between rounded-lg p-3 border border-neutral-700">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5" />
                      <div>
                        <div className="text-sm text-neutral-300">
                          Phone / WhatsApp
                        </div>
                        <div className="text-sm font-medium">{phone}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={`https://wa.me/${phone.replace(/\s|\+/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 rounded-md bg-green-600/20 border border-green-700"
                        aria-label="Open WhatsApp"
                      >
                        Chat
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-sm text-neutral-400 mb-3">Socials</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map(({ title, link, Icon }, i) => (
                  <a
                    key={i}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 px-4 py-2 rounded-full border border-neutral-700 bg-transparent hover:scale-105 transform transition-all"
                    aria-label={`Open ${title}`}
                  >
                    <span className="p-1 rounded-full bg-neutral-800/40 group-hover:bg-neutral-700/40">
                      <Icon className="w-4 h-4" />
                    </span>
                    <span className="text-sm font-medium">{title}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* subtle decorative stripe */}
          <div className="pointer-events-none absolute -left-6 -top-6 h-[120px] w-[2px] bg-gradient-to-b from-transparent via-neutral-600/20 to-transparent rounded" />
        </div>
      </div>
    </section>
  );
}
