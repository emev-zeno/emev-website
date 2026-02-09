
import React, { useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call to send email to hello@emev.com.au
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <div 
        className="absolute inset-0 bg-white/20 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />
      
      <div className="relative bg-[#1A1A1A] w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-500 border border-white/10">
        <div className="p-10 md:p-14">
          <div className="flex justify-between items-start mb-12">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight text-white mb-3">Get in touch</h2>
              <p className="text-gray-400 text-sm font-medium">Professional inquiry response within 24h.</p>
            </div>
            <button 
              onClick={onClose}
              className="p-3 hover:bg-white/10 rounded-full transition-all group"
              aria-label="Close"
            >
              <svg className="w-6 h-6 text-gray-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {status === 'success' ? (
            <div className="py-16 text-center animate-in fade-in slide-in-from-bottom-4">
              <div className="w-20 h-20 bg-white/5 text-white rounded-full flex items-center justify-center mx-auto mb-8 border border-white/10">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-3xl font-semibold text-white mb-3 tracking-tight">Message sent</h3>
              <p className="text-gray-400 max-w-[240px] mx-auto leading-relaxed">Our partners will review your inquiry and contact you shortly.</p>
              <button 
                onClick={onClose}
                className="mt-12 w-full py-4 bg-white text-black rounded-2xl font-bold hover:bg-gray-100 transition-all shadow-lg"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label className="block text-[10px] font-bold uppercase tracking-[0.25em] text-gray-500 ml-1">Full Name</label>
                <input 
                  required
                  type="text"
                  placeholder="Jane Doe"
                  className="w-full px-6 py-4 bg-white/[0.03] border border-white/10 rounded-2xl focus:outline-none focus:ring-1 focus:ring-white/30 focus:border-white/30 transition-all text-white placeholder:text-gray-700"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-[10px] font-bold uppercase tracking-[0.25em] text-gray-500 ml-1">Email Address</label>
                <input 
                  required
                  type="email"
                  placeholder="jane@organization.com"
                  className="w-full px-6 py-4 bg-white/[0.03] border border-white/10 rounded-2xl focus:outline-none focus:ring-1 focus:ring-white/30 focus:border-white/30 transition-all text-white placeholder:text-gray-700"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-[10px] font-bold uppercase tracking-[0.25em] text-gray-500 ml-1">Message</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="How can we help your organization?"
                  className="w-full px-6 py-4 bg-white/[0.03] border border-white/10 rounded-2xl focus:outline-none focus:ring-1 focus:ring-white/30 focus:border-white/30 transition-all text-white placeholder:text-gray-700 resize-none"
                />
              </div>
              <button 
                disabled={status === 'submitting'}
                className="w-full bg-white text-black py-5 rounded-2xl font-bold hover:bg-gray-100 transition-all disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-xl"
              >
                {status === 'submitting' ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing
                  </>
                ) : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
