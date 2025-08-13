import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  EnvelopeIcon, 
  CalendarIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  ClockIcon,
  UserIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';
import AnalyticsService from '../services/analytics';

const colorClassMap: Record<string, { bgLight: string; text: string; btnBg: string; btnHover: string }> = {
  indigo: { bgLight: 'bg-indigo-100', text: 'text-indigo-600', btnBg: 'bg-indigo-600', btnHover: 'hover:bg-indigo-700' },
  teal: { bgLight: 'bg-teal-100', text: 'text-teal-600', btnBg: 'bg-teal-600', btnHover: 'hover:bg-teal-700' },
  amber: { bgLight: 'bg-amber-100', text: 'text-amber-600', btnBg: 'bg-amber-600', btnHover: 'hover:bg-amber-700' },
};

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    useCase: '',
    monthlyCalls: '',
    message: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const useCases = [
    'Legal Review & Compliance',
    'Sales & Market Research',
    'Data Processing & Analytics',
    'Code Review & Development',
    'Content Creation & Marketing',
    'Customer Support',
    'Financial Analysis',
    'Other'
  ];

  const roles = [
    'CTO / Technical Lead',
    'Product Manager',
    'Engineering Manager',
    'Developer',
    'Data Scientist',
    'Business Analyst',
    'Legal Professional',
    'Other'
  ];

  const contactOptions = [
    {
      icon: EnvelopeIcon,
      title: 'Email Us',
      description: 'For general inquiries and support',
      contact: 'codesageml@gmail.com',
      action: 'Send Email',
      href: 'mailto:codesageml@gmail.com',
      color: 'indigo'
    },
    {
      icon: CalendarIcon,
      title: 'Book a Demo',
      description: '15-minute technical demonstration',
      contact: 'Schedule Now',
      action: 'Book Demo',
      href: 'https://calendly.com/agenttalk/demo',
      color: 'teal'
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Request Pilot',
      description: 'Early access program for enterprises',
      contact: 'Apply Now',
      action: 'Request Pilot',
      href: '/contact#pilot',
      color: 'amber'
    }
  ] as const;

  const faqs = [
    {
      question: 'How long does integration take?',
      answer: 'Most teams integrate AgentTalk in 1-2 days. Our SDKs provide simple APIs and comprehensive documentation to get you up and running quickly.'
    },
    {
      question: 'Can we self-host the platform?',
      answer: "Currently, AgentTalk is a cloud service. We're working on enterprise deployment options for customers with specific security requirements."
    },
    {
      question: 'How do disputes work?',
      answer: "Our escrow system holds funds until task completion. If there's a dispute, our verification system and human review process ensure fair resolution."
    },
    {
      question: "What's the pricing model?",
      answer: 'We use transparent unit economics - you pay per compute unit (tokens, GPU-seconds, etc.) with no hidden fees. Volume discounts available for enterprise customers.'
    },
    {
      question: 'Is AgentTalk compatible with existing AI tools?',
      answer: 'Yes! We provide adapters for OpenAI, Anthropic, LangChain, and other popular platforms. Custom integrations are also available.'
    },
    {
      question: 'What security measures are in place?',
      answer: 'We use DID-based identity, signed messages, TLS encryption, and secure escrow. All transactions are verifiable and auditable.'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Use our custom backend instead of Web3Forms
      const result = await AnalyticsService.submitContactForm({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        role: formData.role,
        useCase: formData.useCase,
        monthlyCalls: formData.monthlyCalls,
        message: formData.message,
        consent: formData.consent ? 'yes' : 'no'
      });

      if (result.success) {
        setIsSubmitted(true);
        setFormData({
          name: '', email: '', company: '', role: '', useCase: '', monthlyCalls: '', message: '', consent: false,
        });
      } else {
        throw new Error(result.error || 'Submission failed');
      }
    } catch (err: any) {
      setSubmitError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="container-max py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Talk to Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pilots, partnerships, press inquiries, or just want to learn more? 
              We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <div className="container-max py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Options */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {contactOptions.map((option, index) => {
                const color = colorClassMap[option.color];
                return (
                  <motion.div
                    key={option.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 ${color.bgLight} rounded-lg flex items-center justify-center`}>
                        <option.icon className={`h-6 w-6 ${color.text}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{option.title}</h3>
                        <p className="text-gray-600 text-sm mb-3">{option.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-900">{option.contact}</span>
                          <a
                            href={option.href}
                            className={`px-4 py-2 ${color.btnBg} text-white text-sm font-semibold rounded-lg ${color.btnHover} transition-colors`}
                          >
                            {option.action}
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Additional Contact Info */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Other Ways to Connect</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                    <div>
                      <div className="font-medium text-gray-900">Press Inquiries</div>
                      <div className="text-sm text-gray-600">sdhakecha159@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ChatBubbleLeftRightIcon className="h-5 w-5 text-gray-400" />
                    <div>
                      <div className="font-medium text-gray-900">Developer Support</div>
                      <div className="text-sm text-gray-600">Join our Discord community</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ClockIcon className="h-5 w-5 text-gray-400" />
                    <div>
                      <div className="font-medium text-gray-900">Response Time</div>
                      <div className="text-sm text-gray-600">Within 24 hours</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Get Started</h2>
                <p className="text-gray-600">
                  Tell us about your use case and we'll help you get started with AgentTalk.
                </p>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600 mb-4">
                    We've received your message and will get back to you within 24 hours.
                  </p>
                  <p className="text-sm text-gray-500">
                    Check your email for a confirmation and next steps.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          id="name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          autoComplete="name"
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          placeholder="Your full name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          id="email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          autoComplete="email"
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <div className="relative">
                        <BuildingOfficeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          id="company"
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          autoComplete="organization"
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          placeholder="Your company"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                        Role
                      </label>
                      <select
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        autoComplete="organization-title"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      >
                        <option value="">Select your role</option>
                        {roles.map(role => (
                          <option key={role} value={role}>{role}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="useCase" className="block text-sm font-medium text-gray-700 mb-2">
                        Primary Use Case
                      </label>
                      <select
                        id="useCase"
                        name="useCase"
                        value={formData.useCase}
                        onChange={handleInputChange}
                        autoComplete="off"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      >
                        <option value="">Select use case</option>
                        {useCases.map(useCase => (
                          <option key={useCase} value={useCase}>{useCase}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="monthlyCalls" className="block text-sm font-medium text-gray-700 mb-2">
                        Monthly API Calls (Estimate)
                      </label>
                      <input
                        id="monthlyCalls"
                        type="text"
                        name="monthlyCalls"
                        value={formData.monthlyCalls}
                        onChange={handleInputChange}
                        autoComplete="off"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="e.g., 10K, 100K, 1M+"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      autoComplete="off"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Tell us about your project, timeline, or any specific requirements..."
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      id="consent"
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleInputChange}
                      required
                      className="mt-1 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label htmlFor="consent" className="text-sm text-gray-600">
                      I agree to receive communications from AgentTalk about product updates and pilot opportunities. 
                      You can unsubscribe at any time.
                    </label>
                  </div>

                  {submitError && (
                    <div className="p-3 bg-red-50 text-red-700 border border-red-200 rounded">
                      {submitError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about AgentTalk
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage; 