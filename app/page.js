"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

function useTilt(options) {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      VanillaTilt.init(ref.current, options);
    }
    return () => {
      if (ref.current && ref.current.vanillaTilt) {
        ref.current.vanillaTilt.destroy();
      }
    };
  }, [options]);
  return ref;
}

function TiltLogo() {
  const tiltRef = useTilt({ max: 25, speed: 400, glare: true, "max-glare": 0.2 });
  return (
    <div ref={tiltRef} className="group relative flex items-center justify-center">
      <Image
        src="/logo.png"
        alt="Pathibhara World Institute Logo"
        width={48}
        height={48}
        className="transition-transform duration-300 group-hover:skew-y-6 group-hover:scale-110 group-hover:rotate-3 drop-shadow-lg cursor-pointer"
        style={{ willChange: 'transform' }}
        priority
      />
      <span className="absolute inset-0 rounded-full bg-blue-900 opacity-10 blur-lg group-hover:opacity-30 transition" />
    </div>
  );
}

function TiltStudent() {
  const tiltRef = useTilt({ max: 25, speed: 400, glare: true, "max-glare": 0.2 });
  return (
    <div
      ref={tiltRef}
      className="w-32 h-44 bg-gray-200 rounded-lg flex flex-col items-center justify-center"
    >
      <img
        src="https://source.unsplash.com/featured/80x80/?student,portrait"
        alt="Student"
        className="rounded-full w-20 h-20 object-cover mb-2 shadow-lg"
        width={80}
        height={80}
        loading="lazy"
      />
      <span className="text-gray-400">Student</span>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-white to-blue-100 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-30 flex flex-col md:flex-row items-center justify-between px-6 py-6 bg-white/90 shadow-md backdrop-blur">
        <div className="flex items-center gap-4">
          <TiltLogo />
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-blue-900 leading-tight">PATHIBHARA WORLD INSTITUTE</h1>
            <p className="text-xs md:text-sm text-gray-700">Narayanatar, Lama Petrol Pump, Jorpati</p>
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          <span className="bg-red-600 text-white px-4 py-1 rounded-full font-bold text-lg">60% Off</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col md:flex-row gap-8 px-4 md:px-12 py-8 max-w-7xl mx-auto">
        {/* Left Section */}
        <section className="flex-1 bg-white rounded-lg shadow-lg p-6 flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <TiltStudent />
            <div className="flex-1">
              <h2 className="text-xl font-bold text-blue-900 mb-2">AFTER SEE COMPUTER TRAINING</h2>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Fundamental of Computer</li>
                <li>Introduction of Operating System</li>
                <li>English Nepali Typing</li>
                <li>MS-Word</li>
                <li>MS-Excel</li>
                <li>MS-PowerPoint</li>
                <li>Adobe Photoshop</li>
                <li>Macromedia Freehand</li>
                <li>Basic Hardware</li>
                <li>Software Install/Uninstall</li>
                <li>E-mail & Documents Scan</li>
                <li>Internet</li>
                <li>Computer Network</li>
              </ul>
            </div>
          </div>
          <section className="flex-1 flex flex-col gap-6">
            {/* Tuition Section */}
            <div className="bg-blue-900 text-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-2">TUITION <span className="text-base">(ALL LEVEL, ALL SUBJECTS)</span></h2>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="bg-pink-500 px-2 py-1 rounded text-xs font-bold">+2</span>
                <span className="bg-blue-700 px-2 py-1 rounded text-xs font-bold">SCIENCE</span>
                <span className="bg-blue-700 px-2 py-1 rounded text-xs font-bold">MANAGEMENT</span>
                <span className="bg-blue-700 px-2 py-1 rounded text-xs font-bold">HUMANITIES</span>
              </div>
              <div className="grid grid-cols-2 gap-x-4 text-sm">
                <ul className="list-disc list-inside space-y-1">
                  <li>ACCOUNT</li>
                  <li>ENGLISH</li>
                  <li>PHYSICS</li>
                  <li>B.MATH</li>
                  <li>ECONOMICS</li>
                  <li>CHEMISTRY</li>
                  <li>BASIC MATH</li>
                </ul>
                <div className="flex flex-col gap-1">
                  <span>SEE/BBS/BBA/BA</span>
                </div>
              </div>
            </div>

            {/* Computer Training Section */}
            <div className="bg-yellow-100 rounded-lg shadow-lg p-6">
              <h2 className="text-lg font-bold text-blue-900 mb-2">COMPUTER TRAINING PACKAGE</h2>
              <ul className="list-disc list-inside text-sm text-gray-800 grid grid-cols-2 gap-x-4">
                <li>Office Handling</li>
                <li>Diploma (DCA)</li>
                <li>Graphic Design</li>
                <li>Accounting</li>
                <li>S.E.E Package</li>
                <li>Individual Courses</li>
                <li>Web Page Designing</li>
              </ul>
            </div>

            {/* Language Preparation Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-yellow-300 rounded-lg shadow-lg p-4">
                <h2 className="text-lg font-bold text-red-700 mb-2">LANGUAGE PREPARATION</h2>
                <ul className="list-disc list-inside text-sm text-red-800">
                  <li>JAPANESE</li>
                  <li>KOREAN</li>
                  <li>GERMAN</li>
                </ul>
              </div>
              <div className="bg-blue-800 text-white rounded-lg shadow-lg p-4">
                <h2 className="text-lg font-bold mb-2">IELTS/PTE PREPARATION</h2>
                <ul className="list-disc list-inside text-sm">
                  <li>Listening</li>
                  <li>Speaking</li>
                  <li>Reading</li>
                  <li>Writing</li>
                </ul>
              </div>
            </div>

            {/* English Language Section */}
            <div className="bg-blue-200 rounded-lg shadow-lg p-4">
              <h2 className="text-lg font-bold text-blue-900 mb-2">ENGLISH LANGUAGE</h2>
              <ul className="list-disc list-inside text-sm text-blue-900">
                <li>Basic</li>
                <li>Intermediate</li>
                <li>Advance</li>
                <li>Interview Preparation</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="text-xs text-gray-600 text-center mt-2">
              Jorpati-6, Narayanatar, Kathmandu<br/>
              01-4912727/9767222671<br/>
              9767222671<br/>
              pathibharaworldinstitute@gmail.com
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}
