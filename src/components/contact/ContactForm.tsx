import React, { useRef, useState, useEffect } from 'react';
import { Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Test environment variables on component mount
  useEffect(() => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    console.log('=== EmailJS Environment Check ===');
    console.log('Service ID exists:', !!serviceId);
    console.log('Template ID exists:', !!templateId);
    console.log('Public Key exists:', !!publicKey);
    console.log('==============================');
  }, []);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submission started');
    setIsSubmitting(true);
    setError(null);

    if (!form.current) {
      console.error('Form reference is null');
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Log the actual values (first few characters) to verify they're correct
    console.log('EmailJS Values:', {
      serviceId: serviceId?.substring(0, 10) + '...',
      templateId: templateId?.substring(0, 10) + '...',
      publicKey: publicKey?.substring(0, 10) + '...'
    });

    // Log form data
    const formData = new FormData(form.current);
    const formDataObj = {
      user_name: formData.get('user_name'),
      user_email: formData.get('user_email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };
    console.log('Form Data being sent:', formDataObj);

    console.log('Attempting to send email...');
    emailjs
      .sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      )
      .then(
        (result) => {
          console.log('EmailJS Response:', result);
          console.log('SUCCESS! Status:', result.status);
          console.log('SUCCESS! Text:', result.text);
          setSubmitted(true);
          form.current?.reset();
          setTimeout(() => setSubmitted(false), 3000);
        },
        (error) => {
          console.error('EmailJS Error Details:', error);
          console.error('Error Status:', error.status);
          console.error('Error Text:', error.text);
          setError(`Failed to send message: ${error.text || 'Unknown error'}`);
        }
      )
      .finally(() => {
        console.log('EmailJS request completed');
        setIsSubmitting(false);
      });
  };

  return (
    <div className="bg-white dark:bg-dark-700 p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-dark-800 dark:text-white mb-6">
        Send Me a Message
      </h3>
      {submitted ? (
        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-green-600 dark:text-green-500">
          <p className="font-medium">Thank you for your message!</p>
          <p className="text-sm mt-1">I'll get back to you as soon as possible.</p>
        </div>
      ) : (
        <form ref={form} onSubmit={sendEmail} className="space-y-5">
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-red-600 dark:text-red-500">
              <p className="font-medium">{error}</p>
            </div>
          )}
          <div>
            <label htmlFor="user_name" className="block text-sm font-medium text-dark-700 dark:text-gray-300 mb-1">Your Name</label>
            <input
              id="user_name"
              name="user_name"
              required
              className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-800 text-dark-800 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400 outline-none transition"
            />
          </div>
          <div>
            <label htmlFor="user_email" className="block text-sm font-medium text-dark-700 dark:text-gray-300 mb-1">Email Address</label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              required
              className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-800 text-dark-800 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400 outline-none transition"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-dark-700 dark:text-gray-300 mb-1">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-800 text-dark-800 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400 outline-none transition"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-dark-700 dark:text-gray-300 mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              required
              className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-800 text-dark-800 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400 outline-none transition resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white py-3 px-6 rounded-md font-medium transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={18} className="mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send size={18} className="mr-2" />
                Send Message
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm; 