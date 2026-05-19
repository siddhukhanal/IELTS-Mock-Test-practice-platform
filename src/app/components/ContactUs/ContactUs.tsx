"use client";
import React, { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting message data:', formData);
  };

  return (
    <div className="max-w-4xl mx-auto my-6 bg-white rounded-xl p-6 shadow-sm items-center justify-center flex">
  <div className="form-section grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center flex">

    {/* FORM */}
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 w-full"
    >
          <div className="flex flex-col gap-1 items-end">
            <label className="text-sm font-semibold text-slate-600 tracking-wide">
              First Name
            </label>
            <input
              type="text"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className=" bg-slate-50 border border-slate-100 rounded-lg mt-1 mb-1 px-6 py-2 text-sm text-slate-700 outline-none placeholder:text-slate-300 focus:bg-white focus:border-indigo-500/30 focus:ring-4 focus:ring-indigo-500/5 transition-all"
              required
            />
          </div>

          <div className="flex flex-col gap-1 items-end ">
            <label className="text-sm font-semibold text-slate-600 tracking-wide">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              className=" bg-slate-50 border border-slate-100 mt-1 mb-1 rounded-lg px-6 py-2 text-sm text-slate-700 outline-none placeholder:text-slate-300 focus:bg-white focus:border-indigo-500/30 focus:ring-4 focus:ring-indigo-500/5 transition-all"
              required
            />
          </div>

          <div className="flex flex-col gap-1 items-end">
            <label className="text-sm font-semibold text-slate-600 tracking-wide">
              Your email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className=" bg-slate-50 border border-slate-100 rounded-lg mt-1 mb-1 px-6 py-2 text-sm text-slate-700 outline-none placeholder:text-slate-300 focus:bg-white focus:border-indigo-500/30 focus:ring-4 focus:ring-indigo-500/5 transition-all"
              required
            />
          </div>

          <div className="flex flex-col gap-1 items-end">
            <label className="text-sm font-semibold text-slate-600 tracking-wide">
              Message
            </label>
            <textarea
              rows={3}
              placeholder="Enter your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className=" bg-slate-50 border border-slate-100 rounded-lg mt-1 mb-1 px-6 py-2 text-sm text-slate-700 outline-none placeholder:text-slate-300 focus:bg-white focus:border-indigo-500/30 focus:ring-4 focus:ring-indigo-500/5 transition-all resize-none"
              required
            />
          </div>

          <button className="self-center bg-[#f0f4ff] text-primary px-6 py-2 rounded-[8px] text-[14px] font-bold mt-auto transition-all duration-200 ease-in-out hover:bg-white hover:shadow-sm hover:scale-[1.02] active:scale-95">
            Send
          </button>
        </form>

    <div className="metadata-sectionflex flex-col gap-4 w-full">

          <div className="flex flex-col gap-3 text-left">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden bg-slate-100 border-slate-100">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400" // Replace this placeholder URL with your actual image path
              alt="Contact Person" 
              className="w-[250px] h-[250px] object-cover"
            />
          </div>

            <div className="flex flex-col gap-0.5 items-start">
              <span className="text-xs font-semibold text-slate-400">Email</span>
              <a href="mailto:example@email.com" className="text-sm font-semibold text-slate-700 hover:text-[#5B7FFF] transition-colors mb-1">
                example@email.com
              </a>
            </div>

            <div className="flex flex-col gap-0.5">
              <span className="text-xs font-semibold text-slate-400">Phone</span>
              <a href="tel:+911234567890" className="text-sm font-semibold text-slate-700 hover:text-[#5B7FFF] transition-colors mb-1">
                +977 1234567890
              </a>
            </div>

            <div className="flex flex-col gap-0.5">
              <span className="text-xs font-semibold text-slate-400">Location</span>
              <p className="text-sm font-semibold text-slate-700 leading-relaxed mb-1">
                Your address here
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}