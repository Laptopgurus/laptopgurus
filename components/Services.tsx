import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Share2, Search, Zap } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { ServiceItem } from '../types';

const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      title: "Copywriting for Tech",
      description: "Landing pages and ad copy focused on clear benefits and conversions.",
      features: ["Benefit-focused website copy", "Service page optimization", "High-converting CTAs"],
      icon: <PenTool className="h-6 w-6" />
    },
    {
      title: "Social Strategy",
      description: "Content plans to showcase repairs, tips, and customer success.",
      features: ["Content calendar (FB, Insta, YT)", "Post templates", "Analytics review"],
      icon: <Share2 className="h-6 w-6" />
    },
    {
      title: "SEO Optimization",
      description: "Local SEO for laptop service websites to drive calls and walk-ins.",
      features: ["Keyword-rich service pages", "Meta titles & descriptions", "Google Business Profile setup"],
      icon: <Search className="h-6 w-6" />
    },
    {
      title: "Workflow Automation",
      description: "Simple AI and automation flows for leads, reminders, and follow-ups.",
      features: ["Auto enquiry-to-WhatsApp", "Appointment reminders", "CRM pipeline setup"],
      icon: <Zap className="h-6 w-6" />
    }
  ];

  return (
    <section id="services" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="Growth & Automation Services" 
          subtitle="Beyond repairs, Laptop Gurus helps your laptop business or tech brand grow with smart content, strategy, and automation."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface/60 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:bg-surface hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="bg-gradient-to-br from-primary to-cyan-600 p-3 rounded-xl text-white shadow-lg">
                  {service.icon}
                </div>
                {/* Decorative Number */}
                <span className="text-4xl font-bold text-white/5 font-mono">0{index + 1}</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-textMuted mb-6">{service.description}</p>

              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-textMain/80">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;