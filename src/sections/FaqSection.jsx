import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Layanan apa saja yang tersedia di DARAE?',
      answer: (
        <span>
          DARAE berfokus pada 3 pilar utama: <strong>Website Development</strong> (Company Profile, E-Commerce, Landing Page, Custom Portal), <strong>Application &amp; IT Solutions</strong> (Aplikasi Mobile Android &amp; iOS, Sistem ERP, Integrasi API), dan <strong>Digital Creative</strong> (Brand Identity, UI/UX Design System, Social Media Visual Kits).
        </span>
      ),
    },
    {
      question: 'Apakah DARAE menerima proyek dari UMKM?',
      answer: (
        <span>
          Tentu saja! Kami sangat mendukung digitalisasi bisnis lokal dan UMKM. Kami memiliki skema paket fleksibel yang dirancang khusus agar UMKM dapat memiliki website profesional andal dengan alokasi budget yang terukur dan terjangkau.
        </span>
      ),
    },
    {
      question: 'Bagaimana proses memulai proyek di DARAE?',
      answer: (
        <div className="space-y-1.5">
          <p>Proses kolaborasi terbagi ke dalam 4 fase ringkas:</p>
          <ul className="list-disc list-inside space-y-1 pl-1">
            <li><strong>1. Discovery &amp; Konsultasi:</strong> Pembahasan kebutuhan bisnis dan tujuan fungsional sistem.</li>
            <li><strong>2. Proposal &amp; Timeline:</strong> Penawaran estimasi biaya transparan dan roadmap pengerjaan.</li>
            <li><strong>3. Development &amp; Feedback:</strong> Sesi review prototipe berkala untuk memastikan presisi hasil.</li>
            <li><strong>4. Peluncuran &amp; Support:</strong> Deployment ke server produksi, hand-off akun, dan garansi pasca rilis.</li>
          </ul>
        </div>
      ),
    },
    {
      question: 'Apakah biaya layanan dapat disesuaikan dengan kebutuhan?',
      answer: (
        <span>
          Ya, skema pricing bersifat modular. Kami menyusun estimasi berdasarkan kompleksitas fitur yang Anda butuhkan tanpa mewajibkan fitur tambahan yang belum relevan untuk fase bisnis Anda saat ini.
        </span>
      ),
    },
    {
      question: 'Bagaimana cara berkonsultasi langsung dengan tim DARAE?',
      answer: (
        <span>
          Anda dapat mengisi formulir proyek di bawah halaman ini atau langsung terhubung dengan Technical Lead kami via WhatsApp di <strong className="text-primary">+62 821 1708 8846</strong> untuk konsultasi kilat tanpa komitmen awal.
        </span>
      ),
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-surface-container-low py-space-xxl" id="faq">
      <div className="mx-auto max-w-[960px] px-margin-mobile md:px-margin-tablet">
        <div className="text-center">
          <span className="text-xs uppercase font-semibold tracking-wider text-primary">Questions &amp; Answers</span>
          <h2 className="mt-space-xs text-3xl sm:text-headline-lg font-bold text-on-surface">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-space-xs max-w-lg text-base text-on-surface-variant leading-relaxed">
            Segala hal yang perlu Anda ketahui mengenai skema kerja, lingkup layanan, serta kolaborasi bersama DARAE Creative.
          </p>
        </div>

        {/* Accordion Stack */}
        <div className="mt-space-xl space-y-space-sm" id="faq-accordion">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-content-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-xl bg-surface-container border border-surface-container-high transition-all duration-300 hover:border-primary/30"
              >
                <button
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between p-space-lg text-left transition-colors hover:bg-surface-container-high/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <span className="text-base sm:text-headline-sm font-semibold text-on-surface pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-primary-container' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-space-lg pb-space-lg pt-1 border-t border-surface-container-high/40"
                  >
                    <div className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
