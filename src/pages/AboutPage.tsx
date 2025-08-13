import React from 'react';
import { motion } from 'framer-motion';
import { 
  AcademicCapIcon, 
  BriefcaseIcon, 
  DocumentTextIcon,
  TrophyIcon,
  UserGroupIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: "Sagar Parmar",
      role: "CEO & Co-founder",
      image: "/logo.svg", // AgentTalk logo
      bio: [
        "SDE2 at Amazon FireTV",
        "Previously: IBM AI, Samsung R&D", 
        "Built JIRA Brain (5 days → 15 min)",
        "IEEE published researcher",
        "Patent holder in AI systems"
      ],
      highlights: [
        { icon: BriefcaseIcon, text: "Amazon FireTV SDE2" },
        { icon: AcademicCapIcon, text: "IEEE Published Researcher" },
        { icon: DocumentTextIcon, text: "Patent Holder in AI Systems" }
      ]
    },
    {
      name: "Smeet Dhakecha", 
      role: "CTO & Co-founder",
      image: "/logo.svg", // AgentTalk logo
      bio: [
        "Research Engineer at AWS Agentic AI",
        "MS from USC in ECE",
        "Ranked 2/1950 NeurIPS 2024",
        "3 published papers on AI/ML",
        "Built 134 enterprise AI use-cases"
      ],
      highlights: [
        { icon: BriefcaseIcon, text: "AWS Agentic AI Research Engineer" },
        { icon: AcademicCapIcon, text: "MS from USC in ECE" },
        { icon: TrophyIcon, text: "Ranked 2/1950 NeurIPS 2024" }
      ]
    }
  ];

  const whyWeWin = [
    {
      icon: HeartIcon,
      title: "Deep Trust",
      description: "8-year friendship from engineering school"
    },
    {
      icon: BriefcaseIcon, 
      title: "AI/ML Expertise",
      description: "Combined 5+ years in AI/ML at top tech companies"
    },
    {
      icon: UserGroupIcon,
      title: "Firsthand Experience",
      description: "Experienced the problem firsthand at AWS & Amazon"
    },
    {
      icon: AcademicCapIcon,
      title: "Technical Excellence",
      description: "Deep expertise in distributed systems & protocols"
    }
  ];

  const companyStats = [
    { number: "100+", label: "Companies Interviewed" },
    { number: "15+", label: "Interested in Pilot" },
    { number: "8 weeks", label: "To MVP Launch" },
    { number: "2", label: "Co-founders" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-teal-600 text-white">
        <div className="container-max section-padding">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              About AgentTalk
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-indigo-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We're building the economic layer for the AI agent economy. 
              Two engineers who experienced the problem firsthand at AWS & Amazon.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Team: Built for This
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Two engineers with deep expertise in AI/ML and distributed systems, 
              experienced the problem firsthand at top tech companies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.name}
                className="bg-white rounded-2xl shadow-lg p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start space-x-6">
                  <div className="w-24 h-24 bg-gradient-to-r from-indigo-100 to-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-indigo-600 font-semibold mb-4">
                      {member.role}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      {member.bio.map((item, i) => (
                        <div key={i} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
                          {item}
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                      {member.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                          <highlight.icon className="h-5 w-5 text-indigo-600" />
                          <span className="text-sm font-medium text-gray-700">
                            {highlight.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We'll Win */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why We'll Win
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our unique combination of experience, expertise, and deep understanding 
              of the problem gives us a significant advantage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyWeWin.map((item, index) => (
              <motion.div 
                key={item.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-gradient-to-r from-indigo-600 to-teal-600 text-white">
        <div className="container-max text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Mission
          </motion.h2>
          <motion.p 
            className="text-xl text-indigo-100 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We're building the TCP/IP for AI agents. Just as the internet needed HTTP to connect 
            computers, the AI economy needs AgentTalk to connect agents. We're creating the 
            standard protocol that will enable 1 billion AI agents to transact with each other by 2030.
          </motion.p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join Us in Building the Future
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We're looking for partners, investors, and early adopters who share our vision 
            of a connected AI economy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:codesageml@gmail.com" 
              className="btn-primary inline-flex items-center"
            >
              Get in Touch
            </a>
            <a 
              href="/pitch-deck.html" 
              className="btn-secondary inline-flex items-center"
            >
              View Pitch Deck
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 