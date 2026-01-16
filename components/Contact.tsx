
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to info@orbisaccounting.ca via a backend service
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900/50" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <h2 className="text-4xl font-display font-bold">Get a Professional <br/><span className="text-primary">Financial Health Check</span></h2>
            <p className="text-gray-400 text-lg">Leave your details and a brief description of your current needs. One of our senior partners will reach out within 24 hours.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-icons-outlined text-xl">email</span>
                </div>
                <a href="mailto:info@orbisaccounting.ca" className="text-sm font-medium hover:text-primary transition-colors">info@orbisaccounting.ca</a>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-icons-outlined text-xl">call</span>
                </div>
                <a href="tel:6042037799" className="text-sm font-medium hover:text-primary transition-colors">604-203-7799</a>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
            {isSubmitted ? (
              <div className="h-96 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-icons-outlined text-4xl">check_circle</span>
                </div>
                <h3 className="text-2xl font-bold">Message Sent!</h3>
                <p className="text-gray-400">Thank you for reaching out. Your request has been directed to <span className="text-primary font-medium">info@orbisaccounting.ca</span>. We'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold mb-2 uppercase tracking-wide opacity-60">Full Name</label>
                  <input 
                    required
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={e => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 uppercase tracking-wide opacity-60">Work Email</label>
                  <input 
                    required
                    type="email" 
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="john@company.com"
                    value={formState.email}
                    onChange={e => setFormState({...formState, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 uppercase tracking-wide opacity-60">How can we help?</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="Tell us about your payroll or AR/AP challenges..."
                    value={formState.message}
                    onChange={e => setFormState({...formState, message: e.target.value})}
                  />
                </div>
                <button type="submit" className="w-full py-4 bg-primary text-gray-900 font-extrabold rounded-xl hover:brightness-110 transition-all shadow-lg shadow-primary/20">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
