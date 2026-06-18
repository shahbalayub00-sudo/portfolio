import React, { useState } from "react";
import hero from "./assets/33.jpeg";

import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaBriefcase,
  FaGraduationCap,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaRegCalendarAlt,
  FaRegComment,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Portfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const services = [
    {
      id: "01",
      title: "Web Development",
      desc: "Modern responsive websites using React and Tailwind CSS.",
    },
    {
      id: "02",
      title: "UI/UX Design",
      desc: "Clean and creative interface design for modern products.",
    },
    {
      id: "03",
      title: "Frontend Development",
      desc: "Fast and optimized frontend applications.",
    },
  ];

  return (
    <div className="bg-[#050709] text-white min-h-screen overflow-hidden">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 md:px-20 py-6 border-b border-gray-800 relative z-50">

        {/* Logo */}
        <h1 className="text-3xl font-bold z-50">
          Shahbal<span className="text-purple-500">.</span>
        </h1>

        {/* Menu */}
        <ul className="hidden md:flex gap-10 text-gray-300 font-medium">
          <li className="hover:text-purple-500 cursor-pointer duration-300">
            Home
          </li>

          <li className="hover:text-purple-500 cursor-pointer duration-300">
            Services
          </li>

          <li className="hover:text-purple-500 cursor-pointer duration-300">
            Projects
          </li>

          <li className="hover:text-purple-500 cursor-pointer duration-300">
            Contact
          </li>
        </ul>

        <button className="hidden md:block bg-purple-600 px-5 py-2 rounded-full hover:bg-purple-700 duration-300">
          Hire Me
        </button>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-2xl cursor-pointer z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Mobile Menu */}
        <div
  className={`absolute top-full left-0 w-full bg-[#140c1c] border-t border-gray-800 transition-all duration-500 overflow-hidden md:hidden z-[9999] ${
    menuOpen ? "max-h-[400px] py-6" : "max-h-0"
  }`}
>
          <ul className="flex flex-col items-center gap-6 text-gray-300 font-medium">

            <li className="hover:text-purple-500 cursor-pointer duration-300">
              Home
            </li>

            <li className="hover:text-purple-500 cursor-pointer duration-300">
              Services
            </li>

            <li className="hover:text-purple-500 cursor-pointer duration-300">
              Projects
            </li>

            <li className="hover:text-purple-500 cursor-pointer duration-300">
              Contact
            </li>

            <button className="bg-purple-600 px-6 py-3 rounded-full hover:bg-purple-700 duration-300">
              Hire Me
            </button>

          </ul>
        </div>
      </nav>

      {/* Hero Section */}
<section className="bg-[#140c1c] grid md:grid-cols-2 gap-16 items-center px-6 md:px-20 py-20">

  {/* IMAGE */}
  <div className="flex justify-center order-1 md:order-2">

    <div className="relative">

      <div className="absolute inset-0 bg-purple-600 blur-3xl opacity-30 rounded-full z-0"></div>

<img
  src={hero}
  alt="profile"
  className="relative z-10 w-[280px] sm:w-[320px] md:w-[420px] rounded-[40px] border border-purple-500"
/>

    </div>
  </div>

  {/* Personal detail */}
  <div className="order-2 md:order-1">

    <p className="text-purple-500 text-lg mb-4">
      I am Shahbal Ayub
    </p>

    <h1 className="text-5xl md:text-7xl font-bold leading-tight">
      Web <br />
      Developer +
    </h1>

    <p className="text-gray-400 mt-6 leading-8 text-lg">
      I create beautiful modern websites with React JS and Tailwind CSS focused on performance and user experience.
    </p>

    <div className="flex flex-wrap gap-5 mt-10">

      <button className="border border-purple-500 px-7 py-3 rounded-full hover:bg-purple-600 duration-300">
        Download CV
      </button>

      <div className="flex gap-4">

        <a
          href="#"
          className="border border-gray-700 p-4 rounded-full hover:bg-purple-600 duration-300"
        >
          <FaGithub />
        </a>

        <a
          href="#"
          className="border border-gray-700 p-4 rounded-full hover:bg-purple-600 duration-300"
        >
          <FaLinkedin />
        </a>

      </div>
    </div>
  </div>

</section>

      {/* Stats Section */}
      <section className="bg-[#140c1c] px-6 md:px-20 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center border border-gray-800 rounded-3xl py-10 bg-[#0b0a0f]">

          <div>
            <h3 className="text-4xl md:text-5xl font-bold">5+</h3>
            <p className="text-gray-400 mt-2">Years of Experience</p>
          </div>

          <div>
            <h3 className="text-4xl md:text-5xl font-bold">10+</h3>
            <p className="text-gray-400 mt-2">Project Completed</p>
          </div>

          <div>
            <h3 className="text-4xl md:text-5xl font-bold">500</h3>
            <p className="text-gray-400 mt-2">Happy Clients</p>
          </div>

          <div>
            <h3 className="text-4xl md:text-5xl font-bold">14+</h3>
            <p className="text-gray-400 mt-2">Years of Experience</p>
          </div>

        </div>
      </section>

      {/* Services */}
      <section className="px-6 md:px-20 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
          My Services
        </h2>

        <p className="text-2xl text-center mb-16">
          We put your ideas and thus your wishes in the form of a unique web project that
          <br />
          inspires you and you customers.
        </p>

        <div className="space-y-6">
          {services.map((item) => (
            <div
              key={item.id}
              className="group border border-gray-800 rounded-3xl p-8 flex flex-col md:flex-row justify-between md:items-center hover:bg-purple-600 duration-300"
            >
              <div className="flex gap-6">
                <span className="text-3xl font-bold text-purple-500 group-hover:text-white">
                  {item.id}
                </span>

                <div>
                  <h3 className="text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 group-hover:text-gray-200 mt-3">
                    {item.desc}
                  </p>
                </div>
              </div>

              <FaArrowRight className="text-2xl mt-5 md:mt-0" />
            </div>
          ))}
        </div>
      </section>

      {/* WORK SECTION */}
<section className="bg-[#140c1c] py-24 px-4">
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="text-center">
      <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#8750f7] to-white text-transparent bg-clip-text">
        My Recent Works
      </h2>

      <p className="text-gray-400 mt-5 max-w-2xl mx-auto leading-7">
        We put your ideas and thus your wishes in the form of a unique
        web project that inspires you and your customers.
      </p>
    </div>

    {/* Filter Buttons */}
<div className="flex justify-center mt-10">
      <div className="bg-black border border-white/10 rounded-full p-2 flex gap-2">

        <button className="px-7 py-3 rounded-full  text-white hover:bg-[#8750f7] transition">
          All
        </button>

        <button className="px-7 py-3 rounded-full text-white hover:bg-[#8750f7] transition">
          UX/UI
        </button>

        <button className="px-7 py-3 rounded-full text-white hover:bg-[#8750f7] transition">
          Branding
        </button>

        <button className="px-7 py-3 rounded-full text-white hover:bg-[#8750f7] transition">
          Apps
        </button>

      </div>
    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-2 gap-8 mt-20">

      {[
        {
          title: "Deloitte Case Study",
          category: "Branding",
          button: "View Case Study ↗",
          image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        },

        {
          title: "Sebastian Camargo",
          category: "UX/UI",
          button: "View Project ↗",
          image:
            "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
        },
      ].map((card, index) => (
        <div
          key={index}
          className="bg-[#140c1c] p-6 rounded-3xl border border-white/5 hover:-translate-y-2 transition duration-500"
        >

          {/* Image */}
          <div className="overflow-hidden rounded-2xl bg-black">
            <img
              src={card.image}
              alt=""
              className="w-full h-[400px] object-cover hover:scale-110 transition duration-700"
            />
          </div>

          {/* Content */}
          <div className="flex justify-between items-end mt-6">

            <div>
              <h3 className="text-3xl font-bold">
                {card.title}
              </h3>

              <p className="text-[#8750f7] mt-2 text-lg">
                {card.category}
              </p>
            </div>

            <button className="text-[#8750f7] text-lg">
              {card.button}
            </button>

          </div>
        </div>
      ))}

    </div>
  </div>
</section>


{/* EXPERIENCE & EDUCATION SECTION */}
<section className="py-24 px-4">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

    {/* EXPERIENCE */}
    <div>

      {/* Heading */}
      <div className="flex items-center gap-4 mb-10">
        <span className="text-4xl text-[#8750f7]">
          <FaBriefcase />
        </span>

        <h2 className="text-5xl font-bold bg-gradient-to-r from-[#8750f7] to-white text-transparent bg-clip-text">
          My Experience
        </h2>
      </div>

      {/* Cards */}
      <div className="space-y-8">

        {[
          {
            year: "2022 - Present",
            title: "PROGRAMMING COURSE",
            company: "Blockdots, London",
          },

          {
            year: "2021 - 2022",
            title: "CMS COURSE",
            company: "Parsons, The New School",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-[#140c1c] p-8 rounded-3xl hover:bg-gradient-to-r hover:from-[#8750f7] hover:to-[#2a1454] transition duration-500"
          >

            <p className="text-[#8750f7] text-2xl font-bold">
              {item.year}
            </p>

            <h3 className="text-4xl font-bold mt-4">
              {item.title}
            </h3>

            <p className="text-gray-400 mt-3 text-lg">
              {item.company}
            </p>

          </div>
        ))}

      </div>
    </div>

    {/* EDUCATION */}
    <div>

      {/* Heading */}
      <div className="flex items-center gap-4 mb-10">
        <span className="text-4xl text-[#8750f7]">
          <FaGraduationCap />
        </span>

        <h2 className="text-5xl font-bold bg-gradient-to-r from-[#8750f7] to-white text-transparent bg-clip-text">
          My Education
        </h2>
      </div>

      {/* Cards */}
      <div className="space-y-8">

        {[
          {
            year: "2020 - 2023",
            title: "BLOCKDOTS",
            company: "Harverd University",
          },

          {
            year: "2016 - 2020",
            title: "PARSONS, THE NEW SCHOOL",
            company: "University of Denmark",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-[#140c1c] p-8 rounded-3xl hover:bg-gradient-to-r hover:from-[#8750f7] hover:to-[#2a1454] transition duration-500"
          >

            <p className="text-[#8750f7] text-2xl font-bold">
              {item.year}
            </p>

            <h3 className="text-4xl font-bold mt-4">
              {item.title}
            </h3>

            <p className="text-gray-400 mt-3 text-lg">
              {item.company}
            </p>

          </div>
        ))}

      </div>
    </div>

  </div>
</section>


{/* SKILLS SECTION */}
<section className="bg-[#140c1c] py-24 px-4">
  <div className="max-w-7xl mx-auto text-center">

    {/* Heading */}
    <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#8750f7] to-white text-transparent bg-clip-text">
      My Skills
    </h2>

    <p className="text-gray-400 mt-5 max-w-3xl mx-auto leading-7">
      We put your ideas and thus your wishes in the form of a unique web
      project that inspires you and your customers.
    </p>

    {/* Skills Cards */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-16">

      {[
        {
          name: "Figma",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
          percent: "92%",
        },

        {
          name: "Sketch",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg",
          percent: "80%",
        },

        {
          name: "XD",
          icon: "https://cdn-icons-png.flaticon.com/512/5968/5968520.png",
          percent: "85%",
        },

        {
          name: "WordPress",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
          percent: "99%",
        },

        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          percent: "89%",
        },

        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          percent: "93%",
        },
      ].map((skill, index) => (
        <div key={index} className="group">

          <div className="bg-[#140c1c] border border-white/5 rounded-3xl py-10 px-6 hover:bg-[#1d1028] transition duration-500">

            <img
              src={skill.icon}
              alt={skill.name}
              className="w-16 h-16 mx-auto object-contain grayscale group-hover:grayscale-0 transition duration-500"
            />

            <h3 className="text-3xl font-bold text-gray-300 mt-6">
              {skill.percent}
            </h3>

          </div>

          <p className="text-[#8750f7] mt-5 text-lg font-medium">
            {skill.name}
          </p>

        </div>
      ))}

    </div>
  </div>
</section>


{/* Testimonials Section */}
<section class="bg-black py-24 px-6 md:px-16 overflow-hidden">
  <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

    {/* Left Content */}
    <div>
      <h2 class="text-5xl md:text-6xl font-bold leading-tight mb-6">
        <span class="text-violet-500">My Client's</span>
        <span class="text-white"> Stories</span>
      </h2>

      <p class="text-gray-400 text-lg max-w-md leading-relaxed">
        Empowering people in new a digital journey with my super services
      </p>
    </div>

    {/* Right Cards */}
    <div class="relative">
      
      <div class="flex gap-6 overflow-x-auto scrollbar-hide">

        {/* Card 1 */}
        <div class="min-w-[320px] bg-[#12071d] rounded-3xl p-8 relative border border-violet-500/10">

          {/* Top */}
          <div class="flex items-start justify-between mb-10">
            <img
              src="https://dummyimage.com/120x40/ffffff/000000&text=COSMIC"
              alt="logo"
              class="h-8 object-contain"
            />

            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="client"
              class="w-20 h-20 rounded-tr-3xl rounded-bl-3xl object-cover"
            />
          </div>

          {/*  Icon */}
          <div class="mb-8">
            <div class="flex gap-1">
              <span class="w-3 h-6 bg-violet-500 rounded-full"></span>
              <span class="w-3 h-6 bg-violet-500 rounded-full"></span>
            </div>
          </div>

          {/* Text */}
          <p class="text-white text-lg leading-relaxed mb-10">
            “Taylor is a professional Designer he really helps my business
            by providing value to my business.”
          </p>

          {/* User */}
          <div>
            <h4 class="text-white font-bold text-xl mb-2">
              Tim Bailey
            </h4>

            <p class="text-gray-400 text-sm">
              SEO Specialist, Theme Junction
            </p>
          </div>
        </div>

        {/*  Card 2 */}
        <div class=" bg-[#12071d] rounded-3xl p-8 relative border border-violet-500/10">

          {/*  Top */}
          <div class="flex items-start justify-between mb-10">
            <img
              src="https://dummyimage.com/120x40/ffffff/000000&text=COMPANY"
              alt="logo"
              class="h-8 object-contain"
            />

            <img
              src="https://randomuser.me/api/portraits/men/44.jpg"
              alt="client"
              class="w-20 h-20 rounded-tr-3xl rounded-bl-3xl object-cover"
            />
          </div>

          {/* Quote Icon */}
          <div class="mb-8">
            <div class="flex gap-1">
              <span class="w-3 h-6 bg-violet-500 rounded-full"></span>
              <span class="w-3 h-6 bg-violet-500 rounded-full"></span>
            </div>
          </div>

          {/*  Text */}
          <p class="text-white text-lg leading-relaxed mb-10">
            “Taylor is a professional Designer he really helps my business
            by providing value to my business.”
          </p>

          {/* User */}
          <div>
            <h4 class="text-white font-bold text-xl mb-2">
              Brandon Fraser
            </h4>

            <p class="text-gray-400 text-sm">
              Senior Software Dev, Cosmic Sport
            </p>
          </div>
        </div>

      </div>

      {/*  Dots */}
      <div class="flex items-center justify-center gap-3 mt-10">
        <span class="w-2 h-2 rounded-full bg-gray-600"></span>
        <span class="w-2 h-2 rounded-full bg-violet-500"></span>
        <span class="w-2 h-2 rounded-full bg-gray-600"></span>
      </div>
    </div>
  </div>
</section>


{/* BLOG SECTION */}
<section className="bg-[#140c1c] py-24 px-4">
  <div className="max-w-7xl mx-auto">

    {/* HEADING */}
    <div className="text-center">

      <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#8750f7] to-white text-transparent bg-clip-text">
        Recent Blogs
      </h2>

      <p className="text-gray-400 mt-5 max-w-3xl mx-auto leading-7">
        We put your ideas and thus your wishes in the form of a unique web
        project that inspires you and your customers.
      </p>

    </div>

    {/* BLOG CARDS */}
    <div className="grid md:grid-cols-3 gap-8 mt-20">

      {[
        {
          category: "BUSINESS",
          date: "Oct 01, 2025",
          title: "The Role Of Technology In Modern...",
          image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        },

        {
          category: "DEVELOPMENT",
          date: "Nov 01, 2025",
          title: "The Role Of Technology In Modern...",
          image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
        },

        {
          category: "PORTFOLIO",
          date: "Dec 01, 2025",
          title: "Digital Marketo To Their New Off...",
          image:
            "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
        },
      ].map((blog, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-3xl group bg-[#140c1c]"
        >

          {/* IMAGE */}
          <img
            src={blog.image}
            alt=""
            className="w-full h-[450px] object-cover group-hover:scale-110 transition duration-700"
          />

          {/* CATEGORY */}
          <div className="absolute top-5 left-5 bg-[#8750f7] text-white text-sm font-semibold px-4 py-2 rounded-full">
            {blog.category}
          </div>

          {/* CONTENT BOX */}
          <div className="absolute bottom-5 left-5 right-5 bg-[#2a1454] rounded-3xl p-6">

            {/* DATE & COMMENT */}
            <div className="flex items-center gap-6 text-[#8750f7] text-sm">

              <div className="flex items-center gap-2">
                <FaRegCalendarAlt />
                <span>{blog.date}</span>
              </div>

              <div className="flex items-center gap-2">
                <FaRegComment />
                <span>Comment</span>
              </div>

            </div>

            {/* TITLE */}
            <h3 className="text-3xl font-bold mt-5 leading-snug">
              {blog.title}
            </h3>

          </div>
        </div>
      ))}

    </div>
  </div>
</section>


{/* CONTACT SECTION */}
<section className="py-24 px-4">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT SIDE */}
    <div className="bg-[#140c1c] rounded-[35px] p-8 md:p-12 border border-white/5">

      <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#8750f7] to-white text-transparent bg-clip-text leading-tight">
        Let’s work together!
      </h2>

      <p className="text-gray-400 mt-6 leading-7 max-w-lg">
        I design and code beautifully simple things and i love what i do.
        Just simple like that!
      </p>

      {/* FORM */}
      <div className="mt-10 space-y-5">

        <div className="grid md:grid-cols-2 gap-5">

          <input
            type="text"
            placeholder="First name"
            className="bg-[#0b0f19] border border-[#2a1454] rounded-xl px-5 py-4 outline-none focus:border-[#8750f7] transition"
          />

          <input
            type="text"
            placeholder="Last name"
            className="bg-[#0b0f19] border border-[#2a1454] rounded-xl px-5 py-4 outline-none focus:border-[#8750f7] transition"
          />

        </div>

        <div className="grid md:grid-cols-2 gap-5">

          <input
            type="email"
            placeholder="Email address"
            className="bg-[#0b0f19] border border-[#2a1454] rounded-xl px-5 py-4 outline-none focus:border-[#8750f7] transition"
          />

          <input
            type="text"
            placeholder="Phone number"
            className="bg-[#0b0f19] border border-[#2a1454] rounded-xl px-5 py-4 outline-none focus:border-[#8750f7] transition"
          />

        </div>

        <select className="w-full bg-[#0b0f19] border border-[#2a1454] rounded-xl px-5 py-4 outline-none focus:border-[#8750f7] transition text-white">
          <option>Select an option</option>
          <option>Web Development</option>
          <option>UI/UX Design</option>
          <option>Frontend Development</option>
        </select>

        <textarea
          rows="6"
          placeholder="Message"
          className="w-full bg-[#0b0f19] border border-[#2a1454] rounded-xl px-5 py-4 outline-none focus:border-[#8750f7] transition"
        ></textarea>

        <button className="bg-gradient-to-r from-[#8750f7] to-[#2a1454] px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300">
          Send Message
        </button>

      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="space-y-10">

      {/* PHONE */}
      <div className="flex items-center gap-6">

        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#8750f7] to-[#2a1454] flex items-center justify-center text-xl">
          <FaPhoneAlt />
        </div>

        <div>
          <p className="text-gray-400 text-lg">Phone</p>
          <h3 className="text-3xl font-bold mt-1">
            +92 300 1555283
          </h3>
        </div>

      </div>

      {/* EMAIL */}
      <div className="flex items-center gap-6">

         <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#8750f7] to-[#2a1454] flex items-center justify-center text-xl">
          <FaEnvelope />
        </div>

        <div>
          <p className="text-gray-400 text-lg">Email</p>
          <h3 className="text-3xl font-bold mt-1 break-all">
            shahbalayub00@gmail.com
          </h3>
        </div>

      </div>

      {/* ADDRESS */}
      <div className="flex items-center gap-6">

        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#8750f7] to-[#2a1454] flex items-center justify-center text-xl">
          <FaMapMarkerAlt />
        </div>

        <div>
          <p className="text-gray-400 text-lg">Address</p>

          <h3 className="text-2xl font-bold mt-1 leading-10">
            Warne Park Street Pine, <br />
            FL 33157, New York
          </h3>
        </div>

      </div>

    </div>

  </div>
</section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500">
        © 2026 Shahbal Ayub. All Rights Reserved.
      </footer>

    </div>
  );
};

export default Portfolio;