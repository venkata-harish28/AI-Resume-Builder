import React from "react";
import { useNavigate } from "react-router-dom";
import UpToSkillsImg from "../assets/UptoSkills.webp";
import { useEffect, useState } from "react";

export default function PrivacyPolicy() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  const policys = [
    {
      icon: "fa-file-lines",
      title: "What Information Do We Collect?",
      content:
        "When you use UpToSkills - AI Resume Builder, we collect information such as your name, email address, resume content, skills, education, and work experience that you voluntarily provide to create and improve your resume.",
    },
    {
      icon: "fa-brain",
      title: "How Do We Use Your Information?",
      content:
        "Your information is used to generate AI-powered resumes, analyze skill gaps, provide personalized suggestions, and enhance your overall job-readiness experience.",
    },
    {
      icon: "fa-lock",
      title: "How Do We Protect Your Data?",
      content:
        "We apply appropriate technical and organizational security measures to protect your personal data from unauthorized access, loss, or misuse.",
    },
    {
      icon: "fa-user-gear",
      title: "Your Rights & Control",
      content:
        "You have full control over your data. You can access, update, download, or delete your resume information at any time through your account settings.",
    },
    {
      icon: "fa-rotate",
      title: "Policy Updates",
      content:
        "This Privacy Policy may be updated periodically. Continued use of the UpToSkills platform indicates acceptance of the updated policy.",
    },
  ];
  return (
    <div className="min-h-screen text-gray-900 bg-white select-none">
      <nav className="sticky top-0 z-50 py-4 border-b border-gray-100 bg-white/95 backdrop-blur-md">
        <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-between">
          <div onClick={() => navigate("/")} className="cursor-pointer">
            <img
              src={UpToSkillsImg}
              alt="UpToSkills Logo"
              className="w-[150px]"
            />
          </div>

          <div className="items-center hidden gap-6 md:flex">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-3 px-6 py-2.5 bg-[#e65100] text-white rounded-xl font-bold transition-all duration-300 border-2 border-transparent hover:bg-[#ff6d00] hover:shadow-xl hover:shadow-orange-200 active:scale-95"
            >
              <i className="fas fa-home"></i>
              <span>Home</span>
            </button>
          </div>
        </div>
      </nav>
      <section className="text-center bg-gradient-to-b from-blue-50 via-white to-white py-28">
        <div className="max-w-4xl px-6 mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm text-blue-700 bg-blue-100 rounded-full">
            <i className="fa-solid fa-shield-halved"></i>
            <span>Data Protection</span>
          </div>

          <h1 className="mb-6 text-5xl font-extrabold md:text-6xl">
            Privacy Policy
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Learn how UpToSkills - AI Resume Builder protects your personal
            information and respects your privacy.
          </p>
        </div>
      </section>

      <section className="max-w-5xl px-6 py-20 mx-auto space-y-10">
        {policys.map((policy, index) => (
          <div
            key={index}
            className="p-8 transition bg-white border border-gray-200 shadow-sm rounded-2xl hover:shadow-md"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center justify-center w-10 h-10 font-bold text-blue-700 bg-blue-100 rounded-lg">
                {index + 1}
              </div>
              <i
                className={`fa-solid ${policy.icon} text-blue-600 text-xl`}
              ></i>
              <h2 className="text-2xl font-semibold text-gray-900">
                {policy.title}
              </h2>
            </div>

            <p className="leading-relaxed text-gray-600">{policy.content}</p>
          </div>
        ))}
      </section>

      <footer className="px-8 pt-20 pb-10 bg-white border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <img src={UpToSkillsImg} alt="Logo" className="w-40 mb-6" />
            <p className="text-sm leading-relaxed text-gray-500">
              The ultimate AI-powered toolkit for job seekers to build
              professional resumes and land dream roles.
            </p>
          </div>
          <div>
            <h4 className="mb-6 font-bold">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li
                onClick={() => navigate("/templates")}
                className="hover:text-[#0077cc] cursor-pointer"
              >
                Templates
              </li>
              <li
                onClick={() => navigate("/resume-checker")}
                className="hover:text-[#0077cc] cursor-pointer"
              >
                AI Resume Checker
              </li>
              <li
                onClick={() => navigate("/job-tracker")}
                className="hover:text-[#0077cc] cursor-pointer"
              >
                Job Tracker
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-6 font-bold">Company</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li
                onClick={() => navigate("/about")}
                className="hover:text-[#0077cc] cursor-pointer transition-colors"
              >
                About Us
              </li>
              <li className="hover:text-[#0077cc] cursor-pointer">Careers</li>
              <li className="hover:text-[#0077cc] cursor-pointer">Blog</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-6 font-bold">Support</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li
                onClick={() => navigate("/help")}
                className="hover:text-[#0077cc] cursor-pointer"
              >
                Help Center
              </li>
              <li
                onClick={() => navigate("/privacy-policy")}
                className="hover:text-[#0077cc] cursor-pointer"
              >
                Privacy Policy
              </li>
              <li
                onClick={() => navigate("/terms")}
                className="hover:text-[#0077cc] cursor-pointer transition-colors"
              >
                Terms and Conditions
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto pt-8 border-t border-gray-50 text-center text-gray-400 text-xs">
          ©️ {new Date().getFullYear()} UptoSkills. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
