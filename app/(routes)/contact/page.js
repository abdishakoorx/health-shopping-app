'use client';
import { useState } from 'react';
import { TextField, Button, Typography, IconButton } from '@mui/material';
import { Email, Phone, LocationOn, Send } from '@mui/icons-material';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container max-w-4xl py-8 mx-auto">
      <div className="p-6 bg-white dark:bg-black rounded-xl shadow-lg border border-gray-300 dark:border-gray-700">
        <Typography 
          variant="h4" 
          className="font-bold text-center text-black dark:text-white mb-4"
        >
          Contact Us
        </Typography>
        <Typography className="text-center text-gray-600 dark:text-gray-400 mb-8">
          Have any questions? We’d love to hear from you!
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <IconButton className="text-blue-500 dark:text-blue-400">
                <Email />
              </IconButton>
              <span className="text-gray-800 dark:text-gray-300">
                contact@healthplusminus.com
              </span>
            </div>
            <div className="flex items-center gap-4">
              <IconButton className="text-blue-500 dark:text-blue-400">
                <Phone />
              </IconButton>
              <span className="text-gray-800 dark:text-gray-300">
                +254 712 345 678
              </span>
            </div>
            <div className="flex items-center gap-4">
              <IconButton className="text-blue-500 dark:text-blue-400">
                <LocationOn />
              </IconButton>
              <span className="text-gray-800 dark:text-gray-300">
                Nairobi, Kenya
              </span>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <TextField
              fullWidth
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-white dark:bg-gray-900 rounded-lg"
              InputProps={{
                className: "text-black dark:text-white",
              }}
              InputLabelProps={{
                className: "text-gray-600 dark:text-gray-400"
              }}
            />
            <TextField
              fullWidth
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-white dark:bg-gray-900 rounded-lg"
              InputProps={{
                className: "text-black dark:text-white"
              }}
              InputLabelProps={{
                className: "text-gray-600 dark:text-gray-400"
              }}
            />
            <TextField
              fullWidth
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              multiline
              rows={4}
              className="bg-white dark:bg-gray-900 rounded-lg"
              InputProps={{
                className: "text-black dark:text-white"
              }}
              InputLabelProps={{
                className: "text-gray-600 dark:text-gray-400"
              }}
            />
            <Button
              type="submit"
              variant="contained"
              className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white mt-4 py-3 transition-colors"
              endIcon={<Send />}
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}