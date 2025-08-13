import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DemoPage from './pages/DemoPage';
import ProtocolPage from './pages/ProtocolPage';
import PricingPage from './pages/PricingPage';
import IntegrationsPage from './pages/IntegrationsPage';
import SecurityPage from './pages/SecurityPage';
import CustomersPage from './pages/CustomersPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import DocsPage from './pages/DocsPage';
import AnalyticsDashboard from './pages/AnalyticsDashboard';
import AnalyticsService from './services/analytics';

// Component to track page views
function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    // Track page view when location changes
    AnalyticsService.trackPageView(location.pathname);
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <PageTracker />
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/demo" element={<DemoPage />} />
            <Route path="/protocol" element={<ProtocolPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/integrations" element={<IntegrationsPage />} />
            <Route path="/security" element={<SecurityPage />} />
            <Route path="/customers" element={<CustomersPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/docs" element={<DocsPage />} />
            <Route path="/analytics" element={<AnalyticsDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
