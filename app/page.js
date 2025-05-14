import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-white to-blue-100 font-sans">
      {/* Header */}
      <header className="flex flex-col md:flex-row items-center justify-between px-6 py-6 bg-white/90 shadow-md">
        <div className="flex items-center gap-4">
          <div className="bg-blue-900 rounded-full p-2">
            <span className="text-white font-bold text-2xl">PW</span>
          </div>
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
            <div className="w-32 h-44 bg-gray-200 rounded-lg flex items-center justify-center">
              {/* Placeholder for student image */}
              <span className="text-gray-400">Student</span>
            </div>
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
          <div className="bg-yellow-200 rounded p-3">
            <h3 className="font-bold text-blue-900 mb-1">SPECIAL PREPARATION SCIENCE BRIDGE COURSE</h3>
            <span className="block font-semibold text-gray-800 mb-1">Subjects Offered</span>
            <ul className="list-disc list-inside text-sm text-gray-700 grid grid-cols-2 gap-x-4">
              <li>Biology</li>
              <li>Botany+Zoology</li>
              <li>Chemistry</li>
              <li>Physics</li>
              <li>English</li>
              <li>Mathematics</li>
              <li>GK & IQ</li>
            </ul>
          </div>
          <div className="flex flex-col items-center gap-2">
            <button className="bg-red-600 text-white px-6 py-2 rounded-full font-bold text-lg shadow hover:bg-red-700 transition">JOIN NOW</button>
            <div className="text-xs text-gray-600 text-center">Jorpati-6, Narayanatar, Kathmandu<br/>01-4912727/9767222671<br/>9767222671<br/>pathibharaworldinstitute@gmail.com</div>
          </div>
        </section>

        {/* Right Section */}
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
            <h2 className="text-lg font-bold text-blue-900 mb-2">COMPUTER TREAINING PACKAGE</h2>
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
      </main>
    </div>
  );
}
