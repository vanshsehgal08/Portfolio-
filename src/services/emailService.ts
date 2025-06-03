import emailjs from '@emailjs/browser';

interface EmailParams {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Validates if EmailJS configuration is properly set
 */
export const isEmailConfigValid = (): boolean => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    console.error('Missing EmailJS configuration:', {
      hasServiceId: !!serviceId,
      hasTemplateId: !!templateId,
      hasPublicKey: !!publicKey
    });
    return false;
  }

  return true;
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
      import.meta.env.VITE_EMAILJS_SERVICE_ID!,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email. Please try again later.');
  }
};