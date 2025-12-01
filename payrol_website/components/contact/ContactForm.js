"use client";

import { useState } from "react";
import { Clock, Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Enter a valid email";

    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^[0-9]{10}$/.test(form.phone))
      newErrors.phone = "Enter a valid 10-digit number";

    if (!form.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <section className="py-20 px-6 md:px-16 bg-[#ecf0f4]">
      <div className="grid md:grid-cols-2 gap-12">


        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Send Us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* NAME */}
            <div>
              <label className="font-semibold text-gray-700">Name</label>
              <input
                type="text"
                className="w-full mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <label className="font-semibold text-gray-700">Email</label>
              <input
                type="email"
                className="w-full mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* PHONE */}
            <div>
              <label className="font-semibold text-gray-700">Phone</label>
              <input
  type="text"
  inputMode="numeric"
  pattern="[0-9]*"
  maxLength={10}
  className="w-full mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"
  value={form.phone}
  onChange={(e) => {
    const onlyNums = e.target.value.replace(/[^0-9]/g, ""); // removes alphabets and symbols
    setForm({ ...form, phone: onlyNums });
  }}
/>

            </div>

            {/* MESSAGE */}
            <div>
              <label className="font-semibold text-gray-700">Message</label>
              <textarea
                className="w-full mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-[#fa9404] hover:bg-orange-600 transition text-white font-semibold py-3 rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>

        {/* ================= RIGHT CARDS ================= */}
        <div className="flex flex-col gap-6">

          {/* Card 1 – Office Hours */}
          <div className="bg-white p-6 rounded-xl shadow-lg flex items-start gap-4">
            <Clock className="text-[#fa9404]" size={36} />
            <div>
              <h3 className="text-xl font-semibold">Office Hours</h3>
              <p className="text-gray-600 mt-1">Mon – Fri: 9:00 AM – 7:00 PM</p>
              <p className="text-gray-600">Saturday: 10:00 AM – 4:00 PM</p>
            </div>
          </div>

          {/* Card 2 – Phone & Email */}
          <div className="bg-white p-6 rounded-xl shadow-lg flex items-start gap-4">
            <Phone className="text-[#fa9404]" size={36} />
            <div>
              <h3 className="text-xl font-semibold">Contact Info</h3>
              <p className="text-gray-600 mt-1">+91 9876543210</p>
              <p className="text-gray-600">support@example.com</p>
            </div>
          </div>

          {/* Card 3 – Location */}
          <div className="bg-white p-6 rounded-xl shadow-lg flex items-start gap-4">
            <MapPin className="text-[#fa9404]" size={36} />
            <div>
              <h3 className="text-xl font-semibold">Our Location</h3>
              <p className="text-gray-600 mt-1">
                123 Business Street, Jaipur, Rajasthan
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
