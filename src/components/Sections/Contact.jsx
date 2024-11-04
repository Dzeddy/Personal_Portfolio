import React, { useState } from 'react';
import Card from '../Common/Card';
import Button from '../Common/Button';

const Contact = () => {
  const initialFormState = { name: '', email: '', message: '' };
  const [form, setForm] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(null);

  // Simple validation
  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = 'Name is required.';
    if (!form.email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!form.message) newErrors.message = 'Message is required.';
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length !== 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      // Integrate with email service or backend API
      // For demonstration, we'll just simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmissionStatus('success');
      setForm(initialFormState);
    } catch (error) {
      setSubmissionStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white">Contact Me</h2>
        <Card className="mt-10">
          {submissionStatus === 'success' ? (
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-green-600">Thank you!</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">Your message has been sent successfully.</p>
            </div>
          ) : submissionStatus === 'error' ? (
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-red-600">Oops!</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">Something went wrong. Please try again later.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={form.name}
                  onChange={handleChange}
                  className={`mt-1 w-full p-2 border ${
                    errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                  } rounded focus:outline-none focus:ring-2 focus:ring-secondary`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={form.email}
                  onChange={handleChange}
                  className={`mt-1 w-full p-2 border ${
                    errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                  } rounded focus:outline-none focus:ring-2 focus:ring-secondary`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  className={`mt-1 w-full p-2 border ${
                    errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                  } rounded focus:outline-none focus:ring-2 focus:ring-secondary`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          )}
        </Card>
        <div className="mt-8 flex justify-center space-x-4">
          <a href="mailto:dylanzhuang1025@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-secondary">
            Email
          </a>
          <a href="https://github.com/Dzeddy" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-secondary">
            GitHub
          </a>
          <a href="https://linkedin.com/in/dylan-zhuang" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-secondary">
            LinkedIn
          </a>
          {/* Add more social links as needed */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
