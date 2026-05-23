// "use client";

// import { useState } from "react";
// import { ChevronDown, ChevronUp } from "lucide-react";

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

// export default function FaqSection() {
//   const [activeIndex, setActiveIndex] = useState<number | null>(0);

//   const toggleItem = (index: number) => {
//     setActiveIndex((current) => (current === index ? null : index));
//   };

//   return (
//     <section className="bg-[#05010E] text-neutral-900 py-20 max-[900px]:py-15">
//       <div className="max-w-275 w-full mx-auto px-5">
//         <div className="flex flex-col gap-7.5">
//           {faqData.map((faq, index) => {
//             const isActive = activeIndex === index;

//             return (
//               <div
//                 key={faq.question}
//                 role="button"
//                 tabIndex={0}
//                 onClick={() => toggleItem(index)}
//                 onKeyDown={(event) => {
//                   if (event.key === "Enter" || event.key === " ") {
//                     event.preventDefault();
//                     toggleItem(index);
//                   }
//                 }}
//                 className="bg-white border rounded-[10px] py-4.5 px-5 cursor-pointer transition-all duration-200 hover:border-[#eaeaea]"
//                 style={{
//                   borderColor: isActive ? "#eaeaea" : "#f0f0f0",
//                   boxShadow: isActive
//                     ? "0 4px 12px rgba(0,0,0,0.04)"
//                     : "0 2px 8px rgba(0,0,0,0.02)",
//                 }}
//               >
//                 <div className="flex justify-between items-center font-normal text-[0.9rem] text-neutral-900">
//                   <span>{faq.question}</span>
//                   {isActive ? (
//                     <ChevronUp size={20} />
//                   ) : (
//                     <ChevronDown size={20} />
//                   )}
//                 </div>

//                 {isActive ? (
//                   <div className="mt-3 text-[0.9rem] text-[#666] leading-[1.6]">
//                     {faq.answer}
//                   </div>
//                 ) : null}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }
