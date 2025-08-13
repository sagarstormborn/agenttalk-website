const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

class AnalyticsService {
  static async trackPageView(page) {
    try {
      const response = await fetch(`${API_BASE_URL}/analytics/pageview`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          page,
          userAgent: navigator.userAgent,
          referrer: document.referrer,
        }),
      });
      
      if (!response.ok) {
        console.error('Failed to track page view');
      }
    } catch (error) {
      console.error('Error tracking page view:', error);
    }
  }

  static async submitContactForm(formData) {
    try {
      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }
      
      return data;
    } catch (error) {
      console.error('Error submitting contact form:', error);
      throw error;
    }
  }
}

export default AnalyticsService;
