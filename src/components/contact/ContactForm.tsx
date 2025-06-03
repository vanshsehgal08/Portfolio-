import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Send, Loader2, AlertCircle } from "lucide-react";
import emailjs from '@emailjs/browser';

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface ContactFormProps {
    onSuccess?: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSuccess }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        // Initialize EmailJS with your public key
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
        if (publicKey) {
            emailjs.init(publicKey);
        }
    }, []);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        setFormStatus("idle");
        setErrorMessage("");

        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

            if (!serviceId || !templateId) {
                throw new Error("Email service configuration is missing");
            }

            await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: data.name,
                    from_email: data.email,
                    subject: data.subject,
                    message: data.message,
                }
            );

            setFormStatus("success");
            reset();

            if (onSuccess) {
                onSuccess();
            }

            setTimeout(() => {
                setFormStatus("idle");
            }, 5000);
        } catch (error) {
            console.error("Form submission error:", error);
            setFormStatus("error");
            setErrorMessage(
                error instanceof Error
                    ? error.message
                    : "Failed to send email. Please try again later."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white dark:bg-dark-700 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-dark-800 dark:text-white mb-6">
                Send Me a Message
            </h3>

            {formStatus === "success" ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-green-600 dark:text-green-500"
                >
                    <p className="font-medium">Thank you for your message!</p>
                    <p className="text-sm mt-1">
                        I'll get back to you as soon as possible.
                    </p>
                </motion.div>
            ) : formStatus === "error" ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-red-600 dark:text-red-500"
                >
                    <div className="flex items-start">
                        <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                        <div>
                            <p className="font-medium">
                                Error sending your message
                            </p>
                            <p className="text-sm mt-1">
                                {errorMessage ||
                                    "Please try again later or contact me directly via email."}
                            </p>
                        </div>
                    </div>
                </motion.div>
            ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-dark-700 dark:text-gray-300 mb-1"
                        >
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className={`w-full p-3 rounded-md border ${
                                errors.name
                                    ? "border-red-500 dark:border-red-500"
                                    : "border-gray-300 dark:border-gray-600"
                            } bg-white dark:bg-dark-800 text-dark-800 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400 outline-none transition`}
                            {...register("name", {
                                required: "Name is required",
                            })}
                        />
                        {errors.name && (
                            <p className="mt-1 text-sm text-red-600 dark:text-red-500">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-dark-700 dark:text-gray-300 mb-1"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            className={`w-full p-3 rounded-md border ${
                                errors.email
                                    ? "border-red-500 dark:border-red-500"
                                    : "border-gray-300 dark:border-gray-600"
                            } bg-white dark:bg-dark-800 text-dark-800 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400 outline-none transition`}
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address",
                                },
                            })}
                        />
                        {errors.email && (
                            <p className="mt-1 text-sm text-red-600 dark:text-red-500">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor="subject"
                            className="block text-sm font-medium text-dark-700 dark:text-gray-300 mb-1"
                        >
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            className={`w-full p-3 rounded-md border ${
                                errors.subject
                                    ? "border-red-500 dark:border-red-500"
                                    : "border-gray-300 dark:border-gray-600"
                            } bg-white dark:bg-dark-800 text-dark-800 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400 outline-none transition`}
                            {...register("subject", {
                                required: "Subject is required",
                            })}
                        />
                        {errors.subject && (
                            <p className="mt-1 text-sm text-red-600 dark:text-red-500">
                                {errors.subject.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium text-dark-700 dark:text-gray-300 mb-1"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows={4}
                            className={`w-full p-3 rounded-md border ${
                                errors.message
                                    ? "border-red-500 dark:border-red-500"
                                    : "border-gray-300 dark:border-gray-600"
                            } bg-white dark:bg-dark-800 text-dark-800 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400 outline-none transition resize-none`}
                            {...register("message", {
                                required: "Message is required",
                            })}
                        ></textarea>
                        {errors.message && (
                            <p className="mt-1 text-sm text-red-600 dark:text-red-500">
                                {errors.message.message}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white py-3 px-6 rounded-md font-medium transition-colors flex items-center justify-center"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2
                                    size={18}
                                    className="mr-2 animate-spin"
                                />
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