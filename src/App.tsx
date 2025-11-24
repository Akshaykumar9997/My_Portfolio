import { useState, useEffect } from 'react';
import { Mail, Download, Code, Briefcase, Award, Github, Linkedin, ExternalLink, User, MapPin, Phone, BookOpen, Languages } from 'lucide-react';
import profilepic from "/Profile Photo.jpg";
import libpic from "./assets/E--Library-Management-System.webp";
import jpnetspic from "./assets/Jpnets.png";
import css from "./assets/CSS3.png";
import express from "./assets/Express.png";
import figma from "./assets/Figma.png";
import html from "./assets/HTML5.png"
import java from "./assets/Java.png";
import javascript from "./assets/JavaScript.png";
import mongodb from "./assets/MongoDB.png";
import mysql from "./assets/MySQL.png";
import nodejs from "./assets/Node.js.png";
import react from "./assets/React.png"
import tailwind from "./assets/Tailwind CSS.png";
import vite from "./assets/Vite.js.png"
import next from "./assets/Next.js.png";
import git from "./assets/Git.png";

interface ScrollAnimationState {
  [key: string]: boolean;
}

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollAnimation, setScrollAnimation] = useState<ScrollAnimationState>({});

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);

      document.querySelectorAll('[data-scroll-animate]').forEach((element) => {
        const rect = element.getBoundingClientRect();
        const id = element.getAttribute('data-scroll-animate');
        if (id && rect.top < window.innerHeight * 0.75) {
          setScrollAnimation(prev => ({ ...prev, [id]: true }));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-emerald-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
              PORTFOLIO
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-300 ${activeSection === section
                    ? 'text-emerald-400'
                    : 'text-gray-400 hover:text-emerald-400'
                    }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-black to-pink-900/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-8 animate-fade-in">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-emerald-400/50 shadow-2xl shadow-emerald-500/20 hover:scale-105 transition-transform duration-500 relative">
              <img
                src={profilepic}
                alt="Profile"
                className="w-full h-full object-cover object-[50%_-40%] scale-[2.0]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 via-transparent to-pink-900/30 mix-blend-screen"></div>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 animate-slide-up">
            <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-pink-400 bg-clip-text text-transparent">
              AkshayKumar
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 mb-8 animate-slide-up delay-200">
            Full Stack Developer & Software Engineer
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up delay-300">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=akshaykumar07.m@gmail.com&su=Professional%20Engagement%20Inquiry&body=Dear%20Akshay%2C%0A%0AI%20hope%20this%20message%20finds%20you%20well.%20I%20am%20reaching%20out%20to%20explore%20the%20possibility%20of%20a%20professional%20engagement%20or%20collaboration%20with%20you.%20Please%20let%20me%20know%20a%20convenient%20time%20to%20discuss%20this%20further.%0A%0AKind%20regards%2C%0A"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Hire Me
            </a>


            <a
              href="/Akshaykumar_Resume.pdf"
              download
              className="group px-8 py-4 bg-black border-2 border-emerald-400 rounded-lg font-semibold hover:bg-emerald-500/10 transition-all duration-300 flex items-center gap-2 hover:scale-105"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl w-full">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6">
            <span className="text-white">About </span>
            <span className="text-emerald-400">Me</span>
          </h2>

          <p className="text-center text-gray-400 mb-16 text-lg leading-relaxed">
            I'm an enthusiastic web designer & MERN – Stack developer focused on crafting clean, user-friendly experiences. I'm passionate about building excellent software that improves the lives of those around me.
          </p>

          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12 text-white">
              Personal Info
            </h3>

            {/* Two-column centered layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl mx-auto">

              {[
                { icon: User, label: 'First Name', value: 'Akshaykumar', id: 'personal-1' },
                { icon: User, label: 'Last Name', value: 'Mohanasundram', id: 'personal-2' },
                { icon: Award, label: 'Age', value: '21 Years', id: 'personal-3' },
                { icon: Code, label: 'Nationality', value: 'Indian', id: 'personal-4' },
                { icon: MapPin, label: 'Address', value: 'Coimbatore, Tamilnadu', id: 'personal-5' },
                { icon: Phone, label: 'Phone', value: '+91 6383629997', id: 'personal-6' },
                { icon: Mail, label: 'Email', value: 'akshaykumar07.m@gmail.com', id: 'personal-7' },
                { icon: Languages, label: 'Languages', value: 'English, Tamil', id: 'personal-8' }
              ].map((item, idx) => {
                const IconComponent = item.icon;
                const isVisible = scrollAnimation[item.id];

                return (
                  <div
                    key={item.id}
                    data-scroll-animate={item.id}
                    className={`w-full flex items-center gap-4 group transition-all duration-500 transform
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          ${idx % 2 === 1 ? 'md:pl-44' : ''}   /* SHIFT COLUMN 2 TO THE RIGHT */
        `}
                    style={{ transitionDelay: isVisible ? `${idx * 50}ms` : '0ms' }}
                  >
                    <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center 
            group-hover:bg-emerald-500/30 transition-colors duration-300 flex-shrink-0">
                      <IconComponent className="w-5 h-5 text-emerald-400" />
                    </div>

                    <div className="flex-1">
                      <p className="text-gray-400 text-sm">{item.label}</p>
                      <p className="text-white font-semibold">{item.value}</p>
                    </div>
                  </div>
                );
              })}

            </div>

          </div>


          <div>
            <h3 className="text-3xl font-bold text-center mb-12 text-white">Education</h3>
            <div className="space-y-6 max-w-2xl mx-auto">
              {[
                {
                  title: 'BE CSE - SNS College of Engineering',
                  desc: 'Where innovation meets excellence, SNS paves the path for future technocrats.',
                  id: 'edu-1'
                },
                {
                  title: 'HSC/SSLC - Vidyaa Vikas Matrix Hr Sec School',
                  desc: 'Where childhood meets enjoyment, school paves the path for future talents.',
                  id: 'edu-2'
                }
              ].map((edu, idx) => {
                const isVisible = scrollAnimation[edu.id];
                return (
                  <div
                    key={edu.id}
                    data-scroll-animate={edu.id}
                    className={`group bg-gradient-to-r from-emerald-900/20 to-black border border-emerald-500/20 rounded-xl p-8 hover:border-emerald-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-emerald-500/10 flex items-start gap-6 transform ${isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4'
                      }`}
                    style={{ transitionDelay: isVisible ? `${idx * 100}ms` : '0ms' }}
                  >
                    <div className="w-16 h-16 bg-emerald-500/20 rounded-lg flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors duration-300 flex-shrink-0">
                      <BookOpen className="w-8 h-8 text-emerald-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2 text-white">{edu.title}</h4>
                      <p className="text-gray-400">{edu.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-emerald-950/20">
        <div className="max-w-3xl w-full">
          <div className="mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6">
              <span className="text-white">What I Do</span>
            </h2>
            <p className="text-center text-gray-400 mb-12 text-lg leading-relaxed">
              I'm a dedicated and skilled programmer proficient in Java and full-stack development. Passionate about continuous learning, exploring new technologies, and building efficient, scalable solutions.
            </p>

            <div className="space-y-4">
              {[
                {
                  title: 'Java',
                  desc: 'Proficient in developing scalable, object-oriented applications using Java.',
                  id: 'skill-1'
                },
                {
                  title: 'SQL',
                  desc: 'Strong understanding of relational databases and writing efficient SQL queries.',
                  id: 'skill-2'
                },
                {
                  title: 'Node.js',
                  desc: 'Skilled in building server-side applications, REST APIs, and backend logic using Node.js and Express.',
                  id: 'skill-3'
                },
                {
                  title: 'MongoDB',
                  desc: 'Experienced in designing NoSQL database structures and working with Mongoose for data modeling.',
                  id: 'skill-4'
                },
                {
                  title: 'MERN Stack',
                  desc: 'Experienced in building complete full-stack applications using MongoDB, Express, React, and Node.js.',
                  id: 'skill-5'
                }
              ].map((skill, index) => {
                const isVisible = scrollAnimation[skill.id];
                return (
                  <div
                    key={skill.id}
                    data-scroll-animate={skill.id}
                    className={`group bg-gradient-to-r from-emerald-900/20 to-black border border-emerald-500/20 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-emerald-500/10 flex items-start gap-4 transform ${isVisible
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 -translate-x-4'
                      }`}
                    style={{ transitionDelay: isVisible ? `${index * 75}ms` : '0ms' }}
                  >
                    <div className="w-12 h-12 min-w-12 bg-emerald-500/20 rounded-lg flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors duration-300 mt-1">
                      <Code className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-emerald-400">{skill.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{skill.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <h3 className="text-2xl font-bold text-center mt-16 mb-8 text-emerald-400">Tech Stack</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {[
                { name: 'Tailwind CSS', img: tailwind, id: 'tech-1' },
                { name: 'Figma', img: figma, id: 'tech-2' },
                { name: 'Java', img: java, id: 'tech-3' },
                { name: 'JavaScript', img: javascript, id: 'tech-4' },
                { name: 'HTML', img: html, id: 'tech-5' },
                { name: 'CSS', img: css, id: 'tech-6' },
                { name: 'Express', img: express, id: 'tech-7' },
                { name: 'Node.js', img: nodejs, id: 'tech-8' },
                { name: 'MongoDB', img: mongodb, id: 'tech-9' },
                { name: 'Vite', img: vite, id: 'tech-10' },
                { name: 'React', img: react, id: 'tech-11' },
                { name: 'MySQL', img: mysql, id: 'tech-12' },
                { name: 'Next', img: next, id: 'tech-13' },
                { name: 'Git', img: git, id: 'tech-14' },
              ].map((tech, idx) => {
                const isVisible = scrollAnimation[tech.id];

                return (
                  <div
                    key={tech.id}
                    data-scroll-animate={tech.id}
                    className={`group relative flex flex-col items-center justify-center p-4 
        bg-gradient-to-br from-emerald-900/10 to-black 
        border border-emerald-500/20 rounded-lg 
        hover:border-emerald-500/50 transition-all duration-500 
        cursor-pointer transform hover:scale-110 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                      }`}
                    style={{ transitionDelay: isVisible ? `${idx * 40}ms` : '0ms' }}
                  >

                    {/* Icon wrapper */}
                    <div className="w-12 h-12 mb-2 rounded-lg bg-emerald-500/10 flex items-center justify-center 
        group-hover:bg-emerald-500/20 transition-colors duration-300 overflow-hidden">

                      {/* Actual Tech Logo */}
                      <img
                        src={tech.img}
                        alt={tech.name}
                        className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    {/* Name */}
                    <p className="text-xs text-center text-gray-300 group-hover:text-emerald-400 transition-colors">
                      {tech.name}
                    </p>

                  </div>
                );
              })}
            </div>

          </div>

          <div className="w-full">
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
              <span className="text-white">Internships</span>
            </h2>

            <div className="space-y-6 max-w-2xl mx-auto">
              {[
                {
                  icon: Briefcase,
                  title: 'Software Developer at Hynox',
                  period: '(Oct 2025 – Present)',
                  desc: 'Currently working as a Software Developer at Hynox, contributing to web applications, mobile apps, and custom software solutions with modern technologies.',
                  id: 'intern-1'
                },
                {
                  icon: Award,
                  title: 'MERN Stack Development Intern at Hitshoppers',
                  period: '(July 2024 – Jan 2025)',
                  desc: 'Actively contributed to the development of dynamic web applications using MongoDB, Express, React, and Node.js.',
                  id: 'intern-2'
                }
              ].map((intern, idx) => {
                const IconComponent = intern.icon;
                const isVisible = scrollAnimation[intern.id];
                return (
                  <div
                    key={intern.id}
                    data-scroll-animate={intern.id}
                    className={`group bg-gradient-to-br from-emerald-900/20 to-black border border-emerald-500/20 rounded-xl p-8 hover:border-emerald-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-emerald-500/10 flex flex-col items-center text-center transform ${isVisible
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-95'
                      }`}
                    style={{ transitionDelay: isVisible ? `${idx * 100}ms` : '0ms' }}
                  >
                    <div className="w-16 h-16 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-500/30 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{intern.title}</h3>
                    <p className="text-emerald-400 text-sm mb-4 font-medium">{intern.period}</p>
                    <p className="text-gray-400 leading-relaxed">{intern.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl w-full">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <div className="space-y-6">
            {[
              {
                title: 'E-LIBRARY MANAGEMENT SYSTEM',
                desc: 'Description here...',
                id: 'proj-1',
                github: 'https://github.com/Akshaykumar9997/LibraryManagement.git',
                live: 'https://your-live-site.com',
                image: libpic // ADD YOUR IMAGE HERE
              },

              {
                title: 'JPNETS INTERIOR DESIGNERS',
                desc: 'Description here...',
                id: 'proj-1',
                github: 'https://github.com/Akshaykumar9997/',
                live: 'https://jpnetsweb.onrender.com/',
                image: jpnetspic // ADD YOUR IMAGE HERE
              },

            ].map((project, idx) => {
              const isVisible = scrollAnimation[project.id];
              return (
                <div
                  key={project.id}
                  data-scroll-animate={project.id}
                  className={`group bg-gradient-to-br from-emerald-900/20 to-black border border-emerald-500/20 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/20 hover:scale-105 transform ${isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                    }`}
                  style={{ transitionDelay: isVisible ? `${idx * 100}ms` : '0ms' }}
                >
                  {/* Project Image */}
                  <div className="h-48 w-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-emerald-400">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {project.desc}
                    </p>

                    <div className="flex gap-4">
                      {/* GitHub Link */}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-sm">Code</span>
                      </a>

                      {/* Live Link */}
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm">Live</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="border-t border-emerald-500/20 py-8 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center gap-6 mb-4">
            <a
              href="https://github.com/Akshaykumar9997"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/aksh4ykum4r/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-400">© 2025 AkshayKumar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
