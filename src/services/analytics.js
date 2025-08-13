const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://agenttalk.dev';

class AnalyticsService {
  static async trackPageView(page) {
    try {
      // Create form data for CGI compatibility
      const formData = new FormData();
      formData.append('page', page);
      formData.append('userAgent', navigator.userAgent);
      formData.append('referrer', document.referrer);
      
      const response = await fetch(`${API_BASE_URL}/contact.php/pageview`, {
        method: 'POST',
        body: formData,
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
      // Convert JSON data to FormData for CGI compatibility
      const form = new FormData();
      Object.keys(formData).forEach(key => {
        form.append(key, formData[key]);
      });
      
      const response = await fetch(`${API_BASE_URL}/contact.php/contact`, {
        method: 'POST',
        body: form,
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
