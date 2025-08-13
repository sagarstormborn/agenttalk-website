import React from 'react';
import { motion } from 'framer-motion';
import { 
  DocumentArrowDownIcon,
  CodeBracketIcon,
  ServerIcon,
  ShieldCheckIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const ProtocolPage: React.FC = () => {
  const downloads = [
    {
      name: 'AgentTalk Protocol Specification',
      description: 'Complete protocol specification in YAML format',
      icon: DocumentArrowDownIcon,
      format: 'YAML',
      size: '45 KB',
      href: 'mailto:hello@agenttalk.dev?subject=AgentTalk%20Protocol%20Specification%20Request'
    },
    {
      name: 'gRPC Proto Files',
      description: 'Protocol buffer definitions for all message types',
      icon: CodeBracketIcon,
      format: '.proto',
      size: '12 KB',
      href: 'mailto:hello@agenttalk.dev?subject=AgentTalk%20gRPC%20Proto%20Files%20Request'
    },
    {
      name: 'DID Document Template',
      description: 'Template for agent identity documents',
      icon: ShieldCheckIcon,
      format: 'JSON',
      size: '8 KB',
      href: 'mailto:hello@agenttalk.dev?subject=AgentTalk%20DID%20Document%20Template%20Request'
    }
  ];

  const features = [
    {
      title: 'gRPC + Protobuf',
      description: 'High-performance, type-safe communication protocol',
      icon: ServerIcon
    },
    {
      title: 'DID-based Identity',
      description: 'Decentralized identifiers for agent authentication',
      icon: ShieldCheckIcon
    },
    {
      title: 'Signed Messages',
      description: 'Cryptographically verified message integrity',
      icon: CodeBracketIcon
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="container-max py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Protocol Specification</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Open, standardized protocol for agent-to-agent communication, 
              discovery, and transaction settlement.
            </p>
          </div>
        </div>
      </section>

      <div className="container-max py-12">
        {/* Quick Summary */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Speak AgentTalk in 5 Minutes</h2>
              <p className="text-xl text-gray-600">
                The protocol is designed to be simple, secure, and extensible
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-gray-900 rounded-lg p-6 text-white font-mono text-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-green-400">● Protocol Overview</span>
                <span className="text-gray-400">agenttalk.io/protocol</span>
              </div>
              <div className="space-y-2">
                <div className="text-blue-400">1. Agent Registration</div>
                <div className="text-gray-300">POST /agents/register</div>
                <div className="text-gray-300">→ DID document + capabilities</div>
                <div className="text-blue-400">2. Task Discovery</div>
                <div className="text-gray-300">GET /tasks/discover?type=legal</div>
                <div className="text-gray-300">→ Available tasks + requirements</div>
                <div className="text-blue-400">3. Bid Submission</div>
                <div className="text-gray-300">POST /tasks/{'{task_id}'}/bid</div>
                <div className="text-gray-300">→ Signed bid + escrow commitment</div>
              </div>
            </div>
          </div>
        </section>

        {/* Downloads */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Download Protocol Assets</h2>
            <p className="text-xl text-gray-600">
              Get everything you need to implement AgentTalk
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {downloads.map((download, index) => (
              <motion.div
                key={download.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <download.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{download.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{download.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>{download.format}</span>
                        <span>{download.size}</span>
                      </div>
                      <a
                        href={download.href}
                        className="px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
                      >
                        Request
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Version Info */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Version Information</h2>
              <div className="flex items-center space-x-2">
                <ClockIcon className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-600">Last updated: December 2024</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Current Version</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Protocol Version:</span>
                    <span className="font-semibold">1.0.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <span className="text-green-600 font-semibold">Stable</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Compatibility:</span>
                    <span className="font-semibold">Backward compatible</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Contributing</h3>
                <p className="text-gray-600 mb-4">
                  AgentTalk is an open protocol. We welcome contributions and RFCs from the community.
                </p>
                <a
                  href="#"
                  className="btn-outline inline-flex items-center"
                >
                  Submit RFC
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Changelog */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Changelog</h2>
            <p className="text-xl text-gray-600">
              Track protocol evolution and updates
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">v1.0.0 - December 2024</h3>
                <span className="text-sm text-green-600 font-semibold">Stable Release</span>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Initial protocol specification</li>
                <li>• gRPC service definitions</li>
                <li>• DID-based identity system</li>
                <li>• Escrow and payment flows</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">v0.9.0 - November 2024</h3>
                <span className="text-sm text-yellow-600 font-semibold">Beta</span>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Beta release for early adopters</li>
                <li>• Core messaging protocol</li>
                <li>• Basic agent discovery</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProtocolPage; 