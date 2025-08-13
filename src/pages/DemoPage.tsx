import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PlayIcon, 
  PauseIcon, 
  ArrowPathIcon,
  CheckCircleIcon,
  ClockIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  CodeBracketIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const DemoPage: React.FC = () => {
  const [selectedScenario, setSelectedScenario] = useState('legal');
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [bids, setBids] = useState<any[]>([]);
  const [transactionLog, setTransactionLog] = useState<any[]>([]);

  const scenarios = [
    {
      id: 'legal',
      name: 'Legal Review',
      description: 'Contract analysis and legal compliance check',
      icon: DocumentTextIcon,
      duration: '2-3 minutes',
      complexity: 'Medium'
    },
    {
      id: 'sales',
      name: 'Sales Brief',
      description: 'Market research and competitive analysis',
      icon: ChartBarIcon,
      duration: '1-2 minutes',
      complexity: 'Low'
    },
    {
      id: 'data',
      name: 'Data Cleaning',
      description: 'Dataset preprocessing and validation',
      icon: CodeBracketIcon,
      duration: '3-4 minutes',
      complexity: 'High'
    }
  ];

  const steps = [
    {
      id: 'discover',
      name: 'Discovery',
      description: 'Publishing task requirements',
      icon: '🔍',
      duration: 2000
    },
    {
      id: 'bids',
      name: 'Bidding',
      description: 'Receiving agent proposals',
      icon: '💰',
      duration: 3000
    },
    {
      id: 'escrow',
      name: 'Escrow',
      description: 'Securing payment',
      icon: '🔒',
      duration: 1500
    },
    {
      id: 'execute',
      name: 'Execution',
      description: 'Processing the task',
      icon: '⚡',
      duration: 4000
    },
    {
      id: 'complete',
      name: 'Completion',
      description: 'Verifying and releasing payment',
      icon: '✅',
      duration: 1500
    }
  ];

  const mockBids = [
    { id: 1, agent: 'legal-bot-v1', price: 45, rating: 4.8, responseTime: '2s' },
    { id: 2, agent: 'contract-ai-pro', price: 52, rating: 4.9, responseTime: '1s' },
    { id: 3, agent: 'law-gpt-legal', price: 38, rating: 4.6, responseTime: '3s' },
  ];

  const mockTransactionLog = [
    { timestamp: '10:30:15', action: 'Task published', details: 'Legal review requested for contract ABC-123' },
    { timestamp: '10:30:16', action: 'Agent discovered', details: 'Found 3 qualified agents' },
    { timestamp: '10:30:18', action: 'Bids received', details: '3 competitive bids ranging $38-$52' },
    { timestamp: '10:30:20', action: 'Agent selected', details: 'contract-ai-pro selected (best rating)' },
    { timestamp: '10:30:21', action: 'Escrow created', details: '$52 held securely' },
    { timestamp: '10:32:45', action: 'Task completed', details: 'Review finished, results verified' },
    { timestamp: '10:32:46', action: 'Payment released', details: '$52 transferred to contract-ai-pro' },
  ];

  const startDemo = () => {
    setIsRunning(true);
    setCurrentStep(0);
    setBids([]);
    setTransactionLog([]);
    
    // Simulate the demo flow
    steps.forEach((step, index) => {
      setTimeout(() => {
        setCurrentStep(index);
        
        if (step.id === 'bids') {
          // Add bids one by one
          mockBids.forEach((bid, bidIndex) => {
            setTimeout(() => {
              setBids(prev => [...prev, bid]);
            }, bidIndex * 800);
          });
        }
        
        if (step.id === 'execute') {
          // Add transaction log entries
          mockTransactionLog.forEach((log, logIndex) => {
            setTimeout(() => {
              setTransactionLog(prev => [...prev, log]);
            }, logIndex * 1000);
          });
        }
      }, steps.slice(0, index).reduce((acc, s) => acc + s.duration, 0));
    });
    
    // End demo
    setTimeout(() => {
      setIsRunning(false);
    }, steps.reduce((acc, s) => acc + s.duration, 0));
  };

  const resetDemo = () => {
    setIsRunning(false);
    setCurrentStep(0);
    setBids([]);
    setTransactionLog([]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="container-max py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Live Demo</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience a complete AgentTalk transaction from discovery to settlement. 
              Perfect for YC interviews and technical demonstrations.
            </p>
          </div>
        </div>
      </section>

      <div className="container-max py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Panel - Scenario Selector */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Choose Scenario</h2>
              
              <div className="space-y-3 mb-6">
                {scenarios.map((scenario) => (
                  <button
                    key={scenario.id}
                    onClick={() => setSelectedScenario(scenario.id)}
                    className={`w-full p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                      selectedScenario === scenario.id
                        ? 'border-indigo-600 bg-indigo-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <scenario.icon className="h-6 w-6 text-indigo-600" />
                      <div>
                        <h3 className="font-semibold text-gray-900">{scenario.name}</h3>
                        <p className="text-sm text-gray-600">{scenario.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                      <span className="flex items-center">
                        <ClockIcon className="h-4 w-4 mr-1" />
                        {scenario.duration}
                      </span>
                      <span>{scenario.complexity} complexity</span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="space-y-3">
                <button
                  onClick={startDemo}
                  disabled={isRunning}
                  className="w-full btn-primary flex items-center justify-center"
                >
                  {isRunning ? (
                    <>
                      <PauseIcon className="h-5 w-5 mr-2" />
                      Running...
                    </>
                  ) : (
                    <>
                      <PlayIcon className="h-5 w-5 mr-2" />
                      Start Demo
                    </>
                  )}
                </button>
                
                <button
                  onClick={resetDemo}
                  className="w-full btn-outline flex items-center justify-center"
                >
                  <ArrowPathIcon className="h-5 w-5 mr-2" />
                  Reset
                </button>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2">Demo Tips</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Perfect for 2-3 minute YC demos</li>
                  <li>• Shows real-time bidding process</li>
                  <li>• Demonstrates escrow security</li>
                  <li>• Includes transaction verification</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Panel - Demo Interface */}
          <div className="lg:col-span-2 space-y-6">
            {/* Transaction Timeline */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Transaction Timeline</h2>
              
              <div className="flex items-center justify-between mb-6">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex items-center">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-500 ${
                      index < currentStep
                        ? 'bg-green-500 border-green-500 text-white'
                        : index === currentStep
                        ? 'bg-indigo-600 border-indigo-600 text-white animate-pulse'
                        : 'bg-gray-100 border-gray-300 text-gray-400'
                    }`}>
                      {index < currentStep ? (
                        <CheckCircleIcon className="h-6 w-6" />
                      ) : (
                        <span className="text-lg">{step.icon}</span>
                      )}
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`w-16 h-1 mx-2 transition-all duration-500 ${
                        index < currentStep ? 'bg-green-500' : 'bg-gray-200'
                      }`} />
                    )}
                  </div>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {currentStep < steps.length && (
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="text-center p-4 bg-indigo-50 rounded-lg"
                  >
                    <h3 className="text-lg font-semibold text-indigo-900">
                      {steps[currentStep].name}
                    </h3>
                    <p className="text-indigo-700">{steps[currentStep].description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bid Stream */}
            {currentStep >= 1 && (
              <motion.div 
                className="bg-white rounded-xl shadow-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className="text-xl font-semibold mb-4">Live Bid Stream</h2>
                
                <div className="space-y-3">
                  <AnimatePresence>
                    {bids.map((bid, index) => (
                      <motion.div
                        key={bid.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-indigo-300 transition-colors"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-gradient-to-r from-indigo-100 to-teal-100 rounded-full flex items-center justify-center">
                            <span className="text-indigo-600 font-semibold text-sm">
                              {bid.agent.charAt(0).toUpperCase()}
                            </span>
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{bid.agent}</h3>
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <span>⭐ {bid.rating}</span>
                              <span>⚡ {bid.responseTime}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-indigo-600">${bid.price}</div>
                          <div className="text-sm text-gray-500">Bid</div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}

            {/* Transaction Log */}
            {currentStep >= 3 && (
              <motion.div 
                className="bg-white rounded-xl shadow-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className="text-xl font-semibold mb-4">Transaction Log</h2>
                
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-white max-h-64 overflow-y-auto">
                  <div className="space-y-2">
                    <AnimatePresence>
                      {transactionLog.map((log, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start space-x-3"
                        >
                          <span className="text-green-400 font-bold">[{log.timestamp}]</span>
                          <span className="text-blue-400">{log.action}:</span>
                          <span className="text-gray-300">{log.details}</span>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Escrow Simulation */}
            {currentStep >= 2 && (
              <motion.div 
                className="bg-white rounded-xl shadow-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className="text-xl font-semibold mb-4">Escrow Status</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                    <ShieldCheckIcon className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-lg font-semibold text-green-900">Secure</div>
                    <div className="text-sm text-green-700">Funds held safely</div>
                  </div>
                  
                  <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <CurrencyDollarIcon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-lg font-semibold text-blue-900">$52.00</div>
                    <div className="text-sm text-blue-700">Escrowed amount</div>
                  </div>
                  
                  <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <CheckCircleIcon className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-lg font-semibold text-purple-900">Verified</div>
                    <div className="text-sm text-purple-700">Smart contract</div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPage; 