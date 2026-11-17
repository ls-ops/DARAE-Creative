import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2, Lock } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsapp: '',
    service: 'Website Development',
    description: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Nama lengkap wajib diisi';
    } else if (formData.fullName.trim().length < 3) {
      errs.fullName = 'Nama minimal 3 karakter';
    }

    if (!formData.email.trim()) {
      errs.email = 'Alamat email wajib diisi';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Format email tidak valid';
    }

    if (!formData.whatsapp.trim()) {
      errs.whatsapp = 'Nomor WhatsApp wajib diisi';
    } else if (!/^[0-9+-\s]{9,16}$/.test(formData.whatsapp.trim())) {
      errs.whatsapp = 'Nomor WhatsApp tidak valid (minimal 9 digit)';
    }

    if (!formData.description.trim()) {
      errs.description = 'Deskripsi proyek wajib diisi';
    } else if (formData.description.trim().length < 10) {
      errs.description = 'Jelaskan kebutuhan Anda minimal 10 karakter';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Prepare WhatsApp Message
    const textMsg = `Halo DARAE Creative,\nSaya ingin konsultasi proyek:\n\n*Nama:* ${formData.fullName.trim()}\n*Email:* ${formData.email.trim()}\n*WhatsApp:* ${formData.whatsapp.trim()}\n*Layanan:* ${formData.service}\n*Deskripsi Proyek:* ${formData.description.trim()}`;

    const encodedMsg = encodeURIComponent(textMsg);
    const waUrl = `https://wa.me/6282117088846?text=${encodedMsg}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Open WhatsApp window
      window.open(waUrl, '_blank', 'noopener,noreferrer');

      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({
          fullName: '',
          email: '',
          whatsapp: '',
          service: 'Website Development',
          description: '',
        });
      }, 2000);
    }, 700);
  };

  return (
    <section className="relative w-full bg-surface-container-lowest py-space-xxl" id="contact">
      <div className="mx-auto max-w-[1440px] px-margin-mobile md:px-margin-tablet lg:px-margin">
        <div className="grid grid-cols-1 gap-space-xl lg:grid-cols-12 lg:gap-gutter">
          {/* Left: Contact Narrative & Quick Coordinates */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <div className="inline-flex items-center gap-space-xs rounded-full bg-surface-container px-space-md py-space-xs border border-surface-container-high">
                <span className="text-xs uppercase font-semibold tracking-wider text-primary">Let's Talk</span>
              </div>
              <h2 className="mt-space-xs text-3xl sm:text-headline-lg font-bold text-on-surface">
                Tell Us About Your Project.
              </h2>
              <p className="mt-space-sm text-base text-on-surface-variant leading-relaxed">
                Ceritakan visi atau kendala teknis Anda. Tim kami akan merespons dalam kurun waktu kurang dari 24 jam dengan analisa awal dan rekomendasi solusi.
              </p>

              {/* Coordinates List */}
              <div className="mt-space-xl space-y-space-md">
                <div className="flex items-center gap-space-md rounded-xl bg-surface-container p-space-md shadow-sm border border-surface-container-high">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-surface-container-high text-primary border border-primary/20">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-medium text-outline">Email Inquiries</span>
                    <p className="text-base font-semibold text-on-surface">daraectc@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-space-md rounded-xl bg-surface-container p-space-md shadow-sm border border-surface-container-high">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-surface-container-high text-secondary border border-secondary/20">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-medium text-outline">Direct Phone / WhatsApp</span>
                    <p className="text-base font-semibold text-on-surface">+62 821 1708 8846</p>
                  </div>
                </div>

                <div className="flex items-center gap-space-md rounded-xl bg-surface-container p-space-md shadow-sm border border-surface-container-high">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-surface-container-high text-tertiary border border-tertiary/20">
                    <MapPin className="w-5 h-5 text-tertiary" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-medium text-outline">Creative &amp; Dev Studio</span>
                    <p className="text-base font-semibold text-on-surface">Bandung, West Java, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Studio Location Mini Card */}
            <div className="mt-space-lg overflow-hidden rounded-xl bg-surface-container shadow-md border border-surface-container-high">
              <div
                className="h-36 w-full bg-cover bg-center"
                style={{ backgroundImage: `url('/images/bandung-hq.jpg')` }}
                aria-label="DARAE Bandung Headquarters"
              />
              <div className="p-space-sm text-center border-t border-surface-container-high">
                <span className="text-xs uppercase tracking-wide text-primary font-semibold">
                  Bandung Tech Ecosystem HQ
                </span>
              </div>
            </div>
          </div>

          {/* Right: Inquiry Submission Form */}
          <div className="rounded-2xl bg-surface-container p-space-lg shadow-xl backdrop-blur-md lg:col-span-7 lg:p-space-xl border border-surface-container-high">
            <form className="space-y-space-md" onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 gap-space-md md:grid-cols-2">
                {/* Full Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-on-surface" htmlFor="fullName">
                    Nama Lengkap <span className="text-primary">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full rounded-xl bg-surface-container-high px-space-md py-3 text-sm text-on-surface placeholder:text-outline outline-none transition-all border ${
                      errors.fullName
                        ? 'border-error ring-1 ring-error'
                        : 'border-surface-container-highest focus:border-primary focus:ring-2 focus:ring-primary/20'
                    }`}
                  />
                  {errors.fullName && (
                    <span className="flex items-center gap-1 text-xs text-error mt-0.5">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.fullName}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-on-surface" htmlFor="email">
                    Alamat Email <span className="text-primary">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className={`w-full rounded-xl bg-surface-container-high px-space-md py-3 text-sm text-on-surface placeholder:text-outline outline-none transition-all border ${
                      errors.email
                        ? 'border-error ring-1 ring-error'
                        : 'border-surface-container-highest focus:border-primary focus:ring-2 focus:ring-primary/20'
                    }`}
                  />
                  {errors.email && (
                    <span className="flex items-center gap-1 text-xs text-error mt-0.5">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-space-md md:grid-cols-2">
                {/* WhatsApp Number */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-on-surface" htmlFor="whatsapp">
                    Nomor WhatsApp <span className="text-primary">*</span>
                  </label>
                  <input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="0821xxxxxxxx"
                    className={`w-full rounded-xl bg-surface-container-high px-space-md py-3 text-sm text-on-surface placeholder:text-outline outline-none transition-all border ${
                      errors.whatsapp
                        ? 'border-error ring-1 ring-error'
                        : 'border-surface-container-highest focus:border-primary focus:ring-2 focus:ring-primary/20'
                    }`}
                  />
                  {errors.whatsapp && (
                    <span className="flex items-center gap-1 text-xs text-error mt-0.5">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.whatsapp}
                    </span>
                  )}
                </div>

                {/* Service Type */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-on-surface" htmlFor="service">
                    Kategori Layanan <span className="text-primary">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-xl bg-surface-container-high px-space-md py-3 text-sm text-on-surface outline-none transition-all border border-surface-container-highest focus:border-primary focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="Website Development">Website Development</option>
                    <option value="Application & IT Solutions">Application &amp; IT Solutions</option>
                    <option value="Digital Creative">Digital Creative</option>
                    <option value="Other Inquiries">Konsultasi Umum / Lainnya</option>
                  </select>
                </div>
              </div>

              {/* Project Description */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-on-surface" htmlFor="description">
                  Deskripsi atau Kebutuhan Proyek <span className="text-primary">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  required
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Jelaskan kebutuhan, sasaran target pengguna, atau fitur utama yang Anda bayangkan..."
                  className={`w-full rounded-xl bg-surface-container-high px-space-md py-3 text-sm text-on-surface placeholder:text-outline outline-none transition-all border ${
                    errors.description
                      ? 'border-error ring-1 ring-error'
                      : 'border-surface-container-highest focus:border-primary focus:ring-2 focus:ring-primary/20'
                  }`}
                />
                {errors.description && (
                  <span className="flex items-center gap-1 text-xs text-error mt-0.5">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.description}
                  </span>
                )}
              </div>

              {/* Submission Notice / Success Container */}
              {isSuccess && (
                <div className="rounded-xl bg-primary-container/20 border border-primary p-space-md text-on-surface animate-in fade-in duration-300">
                  <div className="flex items-center gap-space-sm text-primary">
                    <CheckCircle2 className="w-6 h-6 shrink-0 text-primary" />
                    <span className="text-sm font-bold">
                      Terima kasih! Pesan Anda telah kami format. Mengarahkan ke WhatsApp (+62 821 1708 8846) untuk respons langsung...
                    </span>
                  </div>
                </div>
              )}

              {/* CTA Actions */}
              <div className="flex flex-wrap items-center justify-between gap-space-md pt-space-xs">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-space-xs rounded-full bg-primary-container px-space-xl py-space-md text-sm font-bold text-on-primary-container shadow-[0_0_24px_rgba(117,222,217,0.3)] transition-all duration-300 hover:bg-primary hover:text-on-primary hover:shadow-[0_0_32px_rgba(117,222,217,0.5)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span>Mengirim...</span>
                      <Loader2 className="w-4 h-4 animate-spin" />
                    </>
                  ) : isSuccess ? (
                    <>
                      <span>Terkirim</span>
                      <CheckCircle2 className="w-4 h-4 text-on-primary-container" />
                    </>
                  ) : (
                    <>
                      <span>Kirim Pesan</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="flex items-center gap-1.5 text-xs text-outline">
                  <Lock className="w-3.5 h-3.5 text-outline" />
                  <span>Enkripsi SSL • Data Rahasia Dijamin Aman</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
