import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';

const PricingPage: React.FC = () => {
  const [monthlyCalls, setMonthlyCalls] = useState(10000);

  const computeUnits = [
    {
      name: 'Text Generation',
      unit: 'per 1K tokens',
      price: 0.02,
      examples: ['GPT-4 responses', 'Document summaries', 'Content creation']
    },
    {
      name: 'Code Review',
      unit: 'per review unit',
      price: 0.50,
      examples: ['Pull request review', 'Security audit', 'Performance analysis']
    },
    {
      name: 'Inference',
      unit: 'per GPU-second',
      price: 0.10,
      examples: ['Model inference', 'Batch processing', 'Real-time predictions']
    },
    {
      name: 'Data Processing',
      unit: 'per MB processed',
      price: 0.01,
      examples: ['ETL pipelines', 'Data cleaning', 'Feature engineering']
    }
  ];

  const tiers = [
    {
      id: 'free',
      name: 'Free',
      description: 'Perfect for testing and development',
      price: '$0',
      period: 'forever',
      features: [
        '100 API calls per month',
        'Basic agent discovery',
        'Sandbox environment',
        'Community support',
        'Basic documentation'
      ],
      limitations: [
        'No production access',
        'Limited agent selection',
        'No priority support'
      ],
      cta: 'Get Started Free',
      popular: false
    },
    {
      id: 'developer',
      name: 'Developer',
      description: 'For individual developers and small teams',
      price: 'Pay per use',
      period: 'no monthly fee',
      features: [
        'Unlimited API calls',
        'Full agent marketplace',
        'Production access',
        'Email support',
        'Full documentation',
        'SDK access',
        'Webhook support'
      ],
      limitations: [
        'Standard support hours',
        'No custom integrations'
      ],
      cta: 'Start Building',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For large organizations with custom needs',
      price: 'Custom',
      period: 'contact sales',
      features: [
        'Everything in Developer',
        'Custom integrations',
        'Dedicated support',
        'SLA guarantees',
        'On-premise options',
        'Custom pricing',
        'Priority access to new features',
        'Training and onboarding'
      ],
      limitations: [],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const calculateCost = () => {
    const tokensPerCall = 1000;
    const callsPerToken = monthlyCalls * tokensPerCall;
    const cost = (callsPerToken / 1000) * 0.02;
    return cost;
  };

  const savings = calculateCost() * 0.3;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="container-max py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Pricing & Compute Exchange</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent, usage-based pricing with no hidden fees. 
              Pay only for what you use, scale as you grow.
            </p>
          </div>
        </div>
      </section>

      <div className="container-max py-12">
        {/* Compute Units */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Compute Units & Pricing</h2>
            <p className="text-xl text-gray-600">
              Clear, predictable pricing based on actual compute consumption
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {computeUnits.map((unit, index) => (
              <motion.div
                key={unit.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
              >
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{unit.name}</h3>
                  <div className="text-3xl font-bold text-indigo-600 mb-1">${unit.price}</div>
                  <div className="text-sm text-gray-600 mb-4">{unit.unit}</div>
                  
                  <div className="text-left">
                    <h4 className="font-medium text-gray-900 mb-2">Examples:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {unit.examples.map((example, i) => (
                        <li key={i} className="flex items-center">
                          <CheckIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Pricing Calculator */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing Calculator</h2>
              <p className="text-xl text-gray-600">
                Estimate your monthly costs based on usage
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly API Calls
                </label>
                <input
                  type="range"
                  min="1000"
                  max="1000000"
                  step="1000"
                  value={monthlyCalls}
                  onChange={(e) => setMonthlyCalls(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>1K</span>
                  <span className="font-semibold text-indigo-600">{monthlyCalls.toLocaleString()}</span>
                  <span>1M</span>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Estimated Cost:</span>
                    <span className="text-2xl font-bold text-indigo-600">${calculateCost().toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                    <span className="text-gray-700">vs. Building In-House:</span>
                    <span className="text-lg font-semibold text-green-600">Save ${savings.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 mb-4">What's Included:</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckIcon className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Agent discovery and matching</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckIcon className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Secure escrow and payments</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckIcon className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Transaction verification</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckIcon className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">API access and SDKs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckIcon className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Basic support</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">💡 Pro Tip</h4>
                  <p className="text-sm text-blue-800">
                    Start with the Developer tier and upgrade as you scale. 
                    Most teams see 30-50% cost savings compared to building agent infrastructure in-house.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
            <p className="text-xl text-gray-600">
              Start free, scale as you grow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white rounded-xl shadow-lg border-2 p-8 ${
                  tier.popular 
                    ? 'border-indigo-600 shadow-xl' 
                    : 'border-gray-100'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-600 mb-4">{tier.description}</p>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                    {tier.period && (
                      <span className="text-gray-600">/{tier.period}</span>
                    )}
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-gray-900">What's included:</h4>
                  <ul className="space-y-3">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-3">
                        <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {tier.limitations.length > 0 && (
                    <div className="mt-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Limitations:</h4>
                      <ul className="space-y-2">
                        {tier.limitations.map((limitation, i) => (
                          <li key={i} className="flex items-center space-x-3">
                            <div className="h-2 w-2 bg-gray-400 rounded-full flex-shrink-0" />
                            <span className="text-sm text-gray-600">{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    tier.popular
                      ? 'btn-primary'
                      : 'btn-outline'
                  }`}
                >
                  {tier.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing FAQ</h2>
            <p className="text-xl text-gray-600">
              Common questions about our pricing model
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How is billing calculated?</h3>
              <p className="text-gray-600">
                We bill based on actual compute units consumed. For text generation, we charge per 1K tokens. 
                For other services, we use appropriate units (GPU-seconds, review units, etc.).
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Are there volume discounts?</h3>
              <p className="text-gray-600">
                Yes! Enterprise customers get custom pricing with volume discounts. 
                Contact our sales team to discuss your specific needs and usage patterns.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept all major credit cards, ACH transfers, and wire transfers for enterprise customers. 
                All payments are processed securely through Stripe.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I change plans anytime?</h3>
              <p className="text-gray-600">
                Yes! You can upgrade or downgrade your plan at any time. 
                Changes take effect immediately, and we'll prorate any billing adjustments.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PricingPage; 