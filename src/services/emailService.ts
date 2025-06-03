import emailjs from '@emailjs/browser';

interface EmailParams {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface EmailConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

const EMAIL_CONFIG: EmailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''
};

/**
 * Validates if EmailJS configuration is properly set
 */
export const isEmailConfigValid = (): boolean => {
  return Boolean(
    EMAIL_CONFIG.serviceId && 
    EMAIL_CONFIG.templateId && 
    EMAIL_CONFIG.publicKey
  );
};

/**
 * Sends an email using EmailJS
 */
export const sendEmail = async (params: EmailParams): Promise<void> => {
  if (!isEmailConfigValid()) {
    throw new Error('EmailJS configuration is missing. Please check your environment variables.');
  }

  const templateParams = {
    from_name: params.name,
    from_email: params.email,
    subject: params.subject,
    message: params.message
  };

  try {
    await emailjs.send(
      EMAIL_CONFIG.serviceId,
      EMAIL_CONFIG.templateId,
      templateParams,
      EMAIL_CONFIG.publicKey
    );
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};