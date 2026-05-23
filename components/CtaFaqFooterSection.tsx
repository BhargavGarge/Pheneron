"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

// const faqData = [
//   {
//     question: "What is the maximum amount I can send?",
//     answer:
//       "Transfer limits depend on your verification level and country. You can check your limits inside your account settings.",
//   },
//   {
//     question: "Does my recipient need an account?",
//     answer:
//       "No, your recipient doesn't need an account. Funds can be sent directly to their bank account or mobile wallet.",
//   },
//   {
//     question: "Is there a mobile app available?",
//     answer:
//       "Yes, our mobile app is available on both iOS and Android for easy transfers on the go.",
//   },
//   {
//     question: "Can I cancel a transfer?",
//     answer:
//       "Transfers can be cancelled if they have not yet been processed by the receiving bank. Check your transfer status for options.",
//   },
//   {
//     question: "What currencies are supported?",
//     answer:
//       "We support over 50 currencies worldwide. You can view the full list of supported currencies in our app or website.",
//   },
// ];

const footerNav = ["Features", "Benefits", "Testimonials", "Pricing"];
const footerPages = ["Home", "Contact", "404"];
const HERO_VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_065045_c44942da-53c6-4804-b734-f9e07fc22e08.mp4";

export default function CtaFaqFooterSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      className="bg-#05010E text-neutral-900"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <main className="py-20 max-[900px]:py-15">
        <div className="max-w-275 w-full mx-auto px-5">
          <div className="grid grid-cols-[1.6fr_1fr] gap-7.5 items-stretch max-[900px]:grid-cols-1 max-[900px]:gap-15">
            <div
              className="relative overflow-hidden rounded-3xl py-20 px-10 text-white flex flex-col justify-center items-center text-center border border-white/10"
              style={{
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
                backgroundColor: "hsl(260 87% 3%)",
              }}
            >
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src={HERO_VIDEO_SRC}
                autoPlay
                muted
                loop
                playsInline
              />

              <div className="pointer-events-none absolute inset-0 bg-black/55" />

              <div className="relative z-10 flex flex-col items-center text-center">
                <h2
                  className="font-normal leading-[1.1] mb-3.75"
                  style={{ fontSize: "3.5rem", letterSpacing: "-0.03em" }}
                >
                  Ready to Transfer
                  <br />
                  Without Borders?
                </h2>

                <p className="text-[0.9rem] mb-7.5 font-normal opacity-85">
                  Send Money Worldwide at the Best Rates
                </p>

                <button
                  type="button"
                  className="bg-neutral-900 text-white font-semibold cursor-pointer border-none text-[0.95rem] transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    padding: "14px 32px",
                    borderRadius: "12px",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
                  }}
                  onMouseEnter={(event) => {
                    event.currentTarget.style.boxShadow =
                      "0 14px 30px rgba(0,0,0,0.4)";
                  }}
                  onMouseLeave={(event) => {
                    event.currentTarget.style.boxShadow =
                      "0 10px 20px rgba(0,0,0,0.3)";
                  }}
                >
                  Get Started Today
                </button>
              </div>
            </div>

            {/* <div className="flex flex-col justify-center gap-3">
              {faqData.map((faq, index) => {
                const isActive = activeIndex === index;

                return (
                  <div
                    key={faq.question}
                    role="button"
                    tabIndex={0}
                    onClick={() => toggleItem(index)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        toggleItem(index);
                      }
                    }}
                    className="bg-white border rounded-[10px] py-4.5 px-5 cursor-pointer transition-all duration-200 hover:border-[#eaeaea]"
                    style={{
                      borderColor: isActive ? "#eaeaea" : "#f0f0f0",
                      boxShadow: isActive
                        ? "0 4px 12px rgba(0,0,0,0.04)"
                        : "0 2px 8px rgba(0,0,0,0.02)",
                    }}
                  >
                    <div className="flex justify-between items-center font-normal text-[0.9rem] text-neutral-900">
                      <span>{faq.question}</span>
                      {isActive ? (
                        <ChevronUp size={20} />
                      ) : (
                        <ChevronDown size={20} />
                      )}
                    </div>

                    {isActive ? (
                      <div className="mt-3 text-[0.9rem] text-[#666] leading-[1.6]">
                        {faq.answer}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div> */}
          </div>
        </div>
      </main>

      <footer className="bg-[#05010E] pt-20 pb-5 max-[900px]:pt-15">
        <div className="max-w-275 w-full mx-auto px-5">
          <div className="grid grid-cols-[2fr_1fr_1fr_2fr] gap-10 mb-12.5 max-[900px]:grid-cols-2 max-[480px]:grid-cols-1">
            <div>
              <img
                src="https://pub-f170a2592d2c4a1485466404c36807be.r2.dev/Tests/logoipsum-415.svg"
                alt="Logo"
                className="h-6 mb-3.75"
                style={{ filter: "brightness(0)" }}
              />
              <p className="text-[0.85rem] text-[#888] leading-[1.6] max-w-55">
                Reliable transfers that always reach their destination on time.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-5 text-[0.95rem] text-neutral-200">
                Navigation
              </h4>
              <ul>
                {footerNav.map((item) => (
                  <li key={item} className="mb-3">
                    <a
                      href="#"
                      className="text-[#888] no-underline text-[0.85rem] transition-colors duration-200 hover:text-neutral-900"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-5 text-[0.95rem] text-neutral-200">
                Pages
              </h4>
              <ul>
                {footerPages.map((item) => (
                  <li key={item} className="mb-3">
                    <a
                      href="#"
                      className="text-[#888] no-underline text-[0.85rem] transition-colors duration-200 hover:text-neutral-900"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-5 text-[0.95rem] text-neutral-200">
                Newsletter
              </h4>
              <p className="text-[0.85rem] text-[#888] mb-3.75">
                Join our newsletter and get notified.
              </p>

              <div className="flex gap-2.5">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="grow border border-[#f0f0f0] bg-white outline-none transition-colors duration-200 focus:border-[#ccc] text-[0.9rem]"
                  style={{
                    padding: "12px 16px",
                    borderRadius: "10px",
                    boxShadow: "inset 0 1px 3px rgba(0,0,0,0.02)",
                  }}
                />
                <button
                  type="button"
                  className="bg-neutral-900 text-white border-none font-semibold cursor-pointer transition-all duration-200 hover:-translate-y-0.5 text-[0.9rem]"
                  style={{
                    padding: "12px 28px",
                    borderRadius: "10px",
                    boxShadow: "0 12px 24px rgba(0,0,0,0.4)",
                  }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-[#f0f0f0] pt-6.25 pb-2.5 flex justify-between text-[0.85rem] text-[#888] max-[480px]:flex-col max-[480px]:gap-3.75 max-[480px]:items-center">
            <p>All rights reserved. © 2026</p>
            <p>Designed byPHENERONTEAM</p>
          </div>
        </div>
      </footer>
    </section>
  );
}
