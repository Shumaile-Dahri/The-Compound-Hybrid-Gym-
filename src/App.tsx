/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone, ArrowRight } from "lucide-react";

const swipeIn = {
  initial: { x: 100, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function App() {
  const facilityImages = [
    "https://lh3.googleusercontent.com/gps-cs-s/APNQkAH5HYOoxCD_-zSyoJK_LMA_dUsaTvp_3Aa8gfjgKw3TDXM3zj7h65n1u5WkL9wLJc7AHhco13Qkrqux0dSm40TBy6rE-pI-QMJ7bl2iINbGkwkTF6fA5K3XW-xp59qmcgGVegUhvA=w1200",
    "https://lh3.googleusercontent.com/p/AF1QipNVI3kfKYe21CKX-ClrpfYws00JW67LE7NaRILA=w1200",
    "https://lh3.googleusercontent.com/p/AF1QipMct3aoo6dTeI77DOxSHtGtrhLX_jPI6EF1akQv=w1200"
  ];

  const coaches = [
    {
      name: "Cisco Barry",
      role: "Owner / Head Coach",
      bio: "15+ years of elite coaching. Intense, results-driven, and focused on metabolic conditioning. Cisco has trained professional athletes and high-level executives to reach peak physical states.",
      initials: "CB"
    },
    {
      name: "Rome",
      role: "Performance Coach",
      bio: "Specializes in explosive athleticism and power. Built for athletes who want to move better, jump higher, and dominate their field. Rome's background in collegiate athletics drives his performance-first philosophy.",
      image: "https://instagram.fkhi6-1.fna.fbcdn.net/v/t51.2885-19/329758897_1230545281003468_2584210777670207567_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fkhi6-1.fna.fbcdn.net&_nc_cat=104&_nc_oc=Q6cZ2gFMBQdr6sgJDGPRj_CGEsUmYVegLXDzpFt6Swqrch3X0lukeUiR4Tl7peh1qNgPML8&_nc_ohc=Ahnr7cThOC0Q7kNvwHIlDiT&_nc_gid=7JwNM4fXUaCfy7ttv4DXGQ&edm=APoiHPcBAAAA&ccb=7-5&oh=00_Af1_A-Eq1kyJ2GsBFkEbGpOQDKt8MjC9IpgkCVPBe9kSzQ&oe=69E435A6&_nc_sid=22de04",
      initials: "R"
    }
  ];

  return (
    <div className="min-h-screen bg-bg selection:bg-primary selection:text-white flex flex-col scroll-smooth">
      {/* Navigation */}
      <header className="px-6 md:px-[60px] pt-[40px] pb-[20px] flex justify-between items-center sticky top-0 bg-bg/90 backdrop-blur-md z-50 border-b border-white/5">
        <div className="text-2xl font-display font-black tracking-[2px] text-primary">
          THE COMPOUND
        </div>
        <nav className="hidden lg:flex gap-[30px] text-[11px] uppercase tracking-[2px] text-text-dim font-semibold">
          <a href="#" className="hover:text-primary transition-colors">Home</a>
          <a href="#training" className="hover:text-primary transition-colors">Training</a>
          <a href="#trainers" className="hover:text-primary transition-colors">Coaches</a>
          <a href="#facility" className="hover:text-primary transition-colors">Facility</a>
          <a href="#membership" className="hover:text-primary transition-colors">Contact</a>
        </nav>
        <button className="px-6 py-2 bg-primary text-white rounded-full text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 font-bold">
          Join Now
        </button>
      </header>

      {/* Hero Section */}
      <main className="px-6 md:px-[60px] py-24 min-h-[80vh] flex items-center">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="text-[18px] tracking-[8px] uppercase text-primary mb-[30px] font-light">
              Where Athletes Are Built
            </div>
            <h1 className="text-[70px] md:text-[140px] font-display leading-[0.8] font-black uppercase tracking-[-6px] mb-[40px] text-white">
              THE<br />COMPOUND
            </h1>
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
              <p className="text-[17px] line-height-[1.6] text-text-dim max-w-[520px] border-l-2 border-primary pl-[20px]">
                A hybrid training facility that blends raw strength, functional conditioning, and elite personal coaching into one premium, high-performance experience.
              </p>
              <a href="#training" className="group flex items-center gap-4 text-primary uppercase tracking-widest text-sm font-bold">
                Explore Programs <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Training Section */}
      <section id="training" className="px-6 md:px-[60px] py-32 bg-surface/20">
        <motion.div {...swipeIn}>
          <div className="mb-20">
            <span className="text-[11px] uppercase tracking-[4px] text-primary mb-4 block font-bold">Our Methodology</span>
            <h2 className="text-6xl font-display font-black uppercase tracking-tight text-white mb-6">Hybrid Training Programs</h2>
            <p className="text-text-dim max-w-2xl text-lg">We've engineered four distinct pillars of performance to ensure every athlete at The Compound reaches their absolute peak.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                title: "Personal Training", 
                desc: "1-on-1 bespoke coaching protocols designed for your specific goals. We analyze your biomechanics, metabolic rate, and lifestyle to build a program that guarantees results.",
                icon: "01"
              },
              { 
                title: "Group Classes", 
                desc: "High-intensity community atmosphere with expert-led programming. Experience the energy of a team environment while receiving individual technical feedback.",
                icon: "02"
              },
              { 
                title: "Hybrid Strength", 
                desc: "Modern conditioning & powerlifting for the ultimate athlete profile. Blend heavy compound movements with explosive functional work for a physique that performs.",
                icon: "03"
              },
              { 
                title: "Nutrition", 
                desc: "Performance fueling & macro management to optimize your recovery. Our specialists provide data-driven plans to ensure your hard work in the gym is reflected in your results.",
                icon: "04"
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-surface p-12 rounded-[4px] border border-white/5 group hover:border-primary/30 transition-all duration-500"
              >
                <div className="text-4xl font-display font-black text-primary/20 mb-8 group-hover:text-primary transition-colors">{service.icon}</div>
                <h4 className="text-2xl uppercase mb-4 text-white font-bold tracking-tight">{service.title}</h4>
                <p className="text-text-dim leading-relaxed text-base">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Coaches Section */}
      <section id="trainers" className="px-6 md:px-[60px] py-32 bg-bg">
        <motion.div {...swipeIn}>
          <div className="mb-16">
            <span className="text-[11px] uppercase tracking-[4px] text-primary mb-4 block font-bold">The Elite Staff</span>
            <h2 className="text-6xl font-display font-black uppercase tracking-tight text-white">World-Class Coaching</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl">
            {coaches.map((coach, idx) => (
              <motion.div 
                key={idx}
                className="bg-surface rounded-[4px] overflow-hidden group border border-white/5 shadow-sm"
              >
                <div className="aspect-[4/5] relative overflow-hidden bg-bg/50 flex items-center justify-center">
                  {coach.image ? (
                    <img 
                      src={coach.image} 
                      alt={coach.name} 
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                      style={{ objectPosition: (coach as any).position || "center" }}
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="text-[120px] font-display font-black text-primary/10 select-none">
                      {coach.initials}
                    </div>
                  )}
                  <div className="absolute top-6 left-6 w-16 h-16 border border-primary rounded-full flex items-center justify-center font-display font-bold text-2xl text-primary bg-bg/80 backdrop-blur-sm">
                    {coach.initials}
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="text-3xl font-display font-bold mb-2 text-white">{coach.name}</h3>
                  <h4 className="text-xs text-primary uppercase tracking-widest mb-6 font-bold">{coach.role}</h4>
                  <p className="text-text-dim leading-relaxed text-base">
                    {coach.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Facility Gallery */}
      <section id="facility" className="px-6 md:px-[60px] py-32 bg-surface/10">
        <motion.div {...swipeIn}>
          <div className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div>
              <span className="text-[11px] uppercase tracking-[4px] text-primary mb-4 block font-bold">The Facility</span>
              <h2 className="text-6xl font-display font-black uppercase tracking-tight text-white">The Compound</h2>
            </div>
            <div className="text-text-dim text-lg max-w-md">
              Equipped with competition-grade gear and designed for high-performance training. Every square inch is optimized for results.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilityImages.map((img, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 0.98 }}
                className="aspect-[4/3] rounded-[4px] overflow-hidden group relative border border-white/5"
              >
                <img 
                  src={img} 
                  alt={`Facility ${idx + 1}`} 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-white uppercase tracking-widest text-xs font-bold border border-white/40 px-4 py-2 backdrop-blur-sm">View Space</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="px-6 md:px-[60px] py-32 bg-surface/20">
        <motion.div {...swipeIn}>
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[11px] uppercase tracking-[4px] text-primary mb-8 block font-bold">Results</span>
            <div className="relative">
              <div className="text-[120px] font-display text-primary/5 absolute -top-20 left-1/2 -translate-x-1/2 select-none">"</div>
              <p className="text-2xl md:text-4xl font-light italic leading-relaxed text-white/90 relative z-10">
                "The Compound isn't just a gym; it's a culture. I've never been pushed harder or seen better results in my 10 years of training. The coaching is unmatched."
              </p>
              <div className="mt-12 flex items-center justify-center gap-4">
                <div className="w-16 h-[1px] bg-primary" />
                <span className="text-primary uppercase tracking-widest text-sm font-bold">Marcus Sterling, Member</span>
                <div className="w-16 h-[1px] bg-primary" />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Membership Footer */}
      <section id="membership" className="px-6 md:px-[60px] py-24">
        <motion.div 
          {...swipeIn}
          className="bg-primary p-12 md:p-[80px] rounded-[4px] flex flex-col lg:flex-row justify-between items-center text-white gap-12 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="text-center lg:text-left relative z-10">
            <h2 className="font-display text-5xl md:text-7xl uppercase leading-none font-black mb-6">Ready to train at the compound?</h2>
            <p className="text-xl font-medium opacity-90 max-w-xl">Limited elite memberships available. Apply today to secure your spot in the next intake.</p>
          </div>
          <button className="bg-white text-primary px-12 py-6 uppercase font-bold tracking-[2px] text-base hover:bg-black hover:text-white transition-all duration-300 shrink-0 shadow-2xl relative z-10">
            Book Free Session
          </button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-[60px] pb-[60px] pt-12 border-t border-white/5">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="text-xl font-display font-black tracking-[2px] text-primary mb-6">THE COMPOUND</div>
            <p className="text-text-dim text-sm leading-relaxed max-w-xs">
              A high-performance training facility dedicated to building athletes through science-backed coaching and elite equipment.
            </p>
          </div>
          <div>
            <h4 className="text-primary uppercase tracking-widest text-xs font-bold mb-6">Location</h4>
            <a 
              href="https://maps.app.goo.gl/XmFcyMc7Z3N2ejca9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block"
            >
              <p className="text-text-dim text-sm mb-2 group-hover:text-white transition-colors">901 W Brandon Blvd suite d</p>
              <p className="text-text-dim text-sm group-hover:text-white transition-colors">Brandon, FL 33511, United States</p>
              <div className="mt-4 flex items-center gap-2 text-primary text-[10px] font-bold uppercase tracking-widest">
                <MapPin size={12} /> View on Google Maps
              </div>
            </a>
            <div className="mt-6">
              <h4 className="text-primary uppercase tracking-widest text-xs font-bold mb-4">Call Us</h4>
              <a href="tel:+18137283788" className="text-text-dim text-sm hover:text-white transition-colors flex items-center gap-2">
                <Phone size={14} /> +1 (813) 728-3788
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-primary uppercase tracking-widest text-xs font-bold mb-6">Connect</h4>
            <div className="flex gap-6">
              <a href="https://www.instagram.com/the_hybridcompound/" target="_blank" rel="noopener noreferrer" className="text-text-dim hover:text-primary transition-colors flex items-center gap-2">
                <Instagram size={20} /> <span className="text-xs uppercase tracking-widest font-bold">Instagram</span>
              </a>
              <a href="mailto:info@thecompoundgym.com" className="text-text-dim hover:text-primary transition-colors"><Mail size={20} /></a>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between text-[10px] uppercase tracking-[1px] text-text-dim/50 gap-4">
          <div>© 2024 The Compound Hybrid Gym. All Rights Reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
