import { useState } from 'react';
import siteConfig from '@/lib/siteConfig';
import DisplayHeading from '@/components/site/DisplayHeading';
import MicroLabel from '@/components/site/MicroLabel';
import MagneticButton from '@/components/site/MagneticButton';
import HorizonRule from '@/components/site/HorizonRule';
import useScrollReveal from '@/hooks/useScrollReveal';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const ref = useScrollReveal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section
      className="relative py-[var(--section-gap)] px-[var(--content-pad)] bg-[var(--obsidian)]"
      ref={ref as any}
    >
      {/* Background image */}
      <div className="absolute inset-0 opacity-[0.07]">
        <img
          src={siteConfig.images.contactBg}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="mb-16">
          <MicroLabel className="fade-up">GET IN TOUCH</MicroLabel>
          <div className="mt-6">
            <DisplayHeading lines={siteConfig.contactHeadline} />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <div className="fade-up stagger-1">
              <MicroLabel>YOUR NAME</MicroLabel>
              <input
                type="text"
                className="luxury-input"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="fade-up stagger-2 mt-6">
              <MicroLabel>YOUR EMAIL</MicroLabel>
              <input
                type="email"
                className="luxury-input"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div className="fade-up stagger-3 mt-6">
              <MicroLabel>YOUR MESSAGE</MicroLabel>
              <textarea
                className="luxury-input resize-none"
                rows={4}
                placeholder="Tell us about your vision..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>
            <div className="fade-up stagger-4 mt-10">
              {submitted ? (
                <p className="text-[var(--accent)] font-mono text-sm tracking-wider">
                  MESSAGE RECEIVED — WE'LL BE IN TOUCH.
                </p>
              ) : (
                <MagneticButton>SEND MESSAGE</MagneticButton>
              )}
            </div>
          </form>

          {/* Info */}
          <div className="flex flex-col justify-between gap-12">
            <div className="flex flex-col gap-8">
              <div className="fade-up stagger-1">
                <MicroLabel>EMAIL</MicroLabel>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="block text-white font-light mt-2 hover:text-[var(--accent)] transition-colors duration-300"
                >
                  {siteConfig.email}
                </a>
              </div>
              <HorizonRule />
              <div className="fade-up stagger-2">
                <MicroLabel>PHONE</MicroLabel>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                  className="block text-white font-light mt-2 hover:text-[var(--accent)] transition-colors duration-300"
                >
                  {siteConfig.phone}
                </a>
              </div>
              <HorizonRule />
              <div className="fade-up stagger-3">
                <MicroLabel>LOCATION</MicroLabel>
                <p className="text-white font-light mt-2">{siteConfig.address}</p>
              </div>
              <HorizonRule />
              <div className="fade-up stagger-4">
                <MicroLabel>HOURS</MicroLabel>
                <p className="text-white font-light mt-2">{siteConfig.hours}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
