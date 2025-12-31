import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom"; // 1. Navigate import kiya
import HeroImg from "../assets/hero-ai.jpeg";
import VisionImg from "../assets/vision-map.jpeg";
import ValuesImg from "../assets/vision-globe.jpeg";
import JourneyImg from "../assets/journey-path.jpeg";
import UpToSkillsImg from "../assets/UptoSkills.webp";

const AboutUs = () => {
  const navigate = useNavigate(); // 2. Navigate function banaya

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f4f7fa] min-h-screen font-sans text-slate-800 pb-20">
      {/* 1. HERO SECTION */}
      <section className="flex flex-col items-center justify-between max-w-6xl px-6 py-16 mx-auto md:flex-row">
        <div className="space-y-6 text-left md:w-1/2">
          <h1 className="text-4xl font-extrabold leading-tight text-slate-900">
            Build Your Dream Resume <br />{" "}
            <span className="text-blue-600">with AI Power</span>
          </h1>
          <p className="text-lg text-slate-600">
            Leverage artificial intelligence to craft professional ATS-friendly
            resumes that stand out.
          </p>
          <div className="flex gap-4">
            {/* 3. Generate Talent button ab Signup par le jayega */}
            <button
              onClick={() => navigate("/login")}
              className="px-6 py-2 font-medium text-white transition bg-orange-500 rounded-full shadow-md hover:bg-orange-600"
            >
              Generate Talent
            </button>

            {/* 4. AI Score button ab Login par le jayega */}
            <button
              onClick={() => navigate("/login")}
              className="px-6 py-2 font-medium text-white transition bg-blue-600 rounded-full shadow-md hover:bg-blue-700"
            >
              AI Score
            </button>
          </div>
        </div>
        <div className="flex justify-end md:w-1/2">
          <img
            src={HeroImg}
            alt="Hero"
            className="max-w-[400px] w-full h-auto drop-shadow-xl"
          />
        </div>
      </section>

      {/* ... baaki ka saara code waisa hi rahega ... */}

      {/* 2. ABOUT SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-12 bg-white rounded-[2rem] shadow-sm border border-slate-100 mb-12">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            About AI Resume Builder
          </h2>
          <p className="mt-4 text-slate-500">
            Empowering job seekers through smart automation.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="p-6 bg-slate-50 rounded-2xl">
            <h3 className="mb-2 text-xl font-bold text-blue-600">
              Our Mission
            </h3>
            <p className="text-slate-600">
              Our mission is to democratize career success by providing job
              seekers with high-end, AI-driven tools that were once only
              available to professionals.
            </p>
          </div>
          <div className="p-6 bg-slate-50 rounded-2xl">
            <h3 className="mb-2 text-xl font-bold text-blue-600">
              Our Approach
            </h3>
            <p className="text-slate-600">
              Our approach focuses on data-driven resume optimization, real-time
              feedback, and ATS-friendly formatting to ensure your profile
              doesn't just look good but actually performs in the hiring
              market."
            </p>
          </div>
        </div>
      </section>

      {/* 3. OUR VISION */}
      <section className="max-w-5xl px-6 mx-auto mb-12 group">
        <div className="bg-white rounded-[2rem] p-10 shadow-sm border border-slate-100 flex flex-col items-center text-center">
          <h2 className="mb-4 text-3xl font-bold">Our Vision</h2>
          <p className="max-w-xl mb-8 italic text-slate-500">
            We envision a future where technology removes the barriers to
            professional growth. By fostering a world where tech-enabled career
            guidance is universally accessible, we empower individuals to shape
            the future of technology and innovation across the globe."
          </p>
          <div className="w-full max-w-[500px] overflow-hidden rounded-xl">
            <img
              src={VisionImg}
              alt="Vision"
              className="w-full h-auto transition duration-500 "
            />
          </div>
        </div>
      </section>

      {/* 4. OUR VALUES */}
      <section className="max-w-5xl px-6 mx-auto mb-12 group">
        <div className="bg-white rounded-[2rem] p-10 shadow-sm border border-slate-100 flex flex-col items-center text-center">
          <h2 className="mb-8 text-3xl font-bold">Our Values</h2>
          <p className="max-w-xl mb-8 italic text-slate-500 ">
            At UptoSkills, we are guided by Innovation, Accuracy, and
            Inclusivity. We believe in building transparent AI systems that
            offer precise career insights while maintaining an inclusive
            environment where every learner, regardless of their background, can
            thrive and succeed."
          </p>
          <div className="grid grid-cols-3 gap-4 mb-10">
            <div className="p-4 text-sm italic font-bold text-blue-700 bg-blue-50 rounded-xl">
              Collaboration
            </div>
            <div className="p-4 text-sm italic font-bold text-orange-700 bg-orange-50 rounded-xl">
              Innovation
            </div>
            <div className="p-4 text-sm italic font-bold text-green-700 bg-green-50 rounded-xl">
              Inclusivity
            </div>
          </div>
          <div className="flex justify-center overflow-hidden rounded-xl">
            <img
              src={ValuesImg}
              alt="Values"
              className="max-h-[250px] w-auto transition duration-500 "
            />
          </div>
        </div>
      </section>

      {/* 5. OUR JOURNEY */}
      <section className="max-w-5xl px-6 mx-auto mb-12 group">
        <div className="bg-white rounded-[2rem] p-10 shadow-sm border border-slate-100 flex flex-col items-center text-center">
          <h2 className="mb-4 text-3xl font-bold">Our Journey</h2>
          <p className="max-w-xl mb-8 italic text-slate-500">
            From a passion project to a platform trusted by thousands of job
            seekers worldwide.our journey is defined by a constant commitment to
            evolving alongside the rapidly changing job market."
          </p>
          <div className="w-full max-w-[500px] overflow-hidden rounded-xl">
            <img
              src={JourneyImg}
              alt="Journey"
              className="w-full h-auto transition duration-500 "
            />
          </div>
        </div>
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
          © {new Date().getFullYear()} UptoSkills. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
