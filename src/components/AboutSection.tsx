import { MapPin, Briefcase, Home, Download, GraduationCap, User } from 'lucide-react';

const AboutSection = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/LeBaDac_CV.pdf';
    link.download = 'LeBaDac_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="section-spacing">
      <div className="section-container">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            <span className="gradient-text">Le Ba Dac</span>
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 font-medium mb-8 animate-fade-in">
            AI Engineer Intern
          </p>

          <button
            onClick={handleDownloadCV}
            className="professional-button"
          >
            <Download size={20} />
            Download CV
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="professional-card p-8">
            <h2 className="text-3xl font-bold mb-6 gradient-text flex items-center gap-3">
              <User className="text-blue-800" size={32} />
              About Me
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg text-justify">
              I am a fourth-year student from the Advanced Program in Information Systems at the University of Information Technology, seeking a job related to Machine Learning and Deep Learning. With hands-on experience in various models, I am eager to apply my AI skills to real-world problems and continuously expand my knowledge.
            </p>
          </div>

          <div className="professional-card p-8">
            <h2 className="text-3xl font-bold mb-6 gradient-text flex items-center gap-3">
              <GraduationCap className="text-blue-800" size={32} />
              Education
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  BSc in Information Systems
                </h3>
                <p className="text-blue-700 font-semibold mb-1">
                  University of Information Technology, VNU-HCM
                </p>
                <p className="text-slate-500 text-sm mb-4">2021 – 2026</p>
                
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-slate-600">Academic Progress</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold">
                    GPA: 8.98/10
                  </span>
                </div>
                
                <div className="skill-progress">
                  <div className="skill-progress-bar animate-progress-fill" style={{width: '75%'}} />
                </div>
                <p className="text-xs text-slate-500 mt-1">75% Complete</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="professional-card p-6 text-center group hover:scale-105 transition-transform duration-200">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
              <Home className="text-blue-800" size={24} />
            </div>
            <h3 className="font-bold text-slate-800 mb-2">Residence</h3>
            <p className="text-slate-600">Vietnam</p>
          </div>
          
          <div className="professional-card p-6 text-center group hover:scale-105 transition-transform duration-200">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
              <Briefcase className="text-blue-800" size={24} />
            </div>
            <h3 className="font-bold text-slate-800 mb-2">Status</h3>
            <p className="text-slate-600">Available to work</p>
          </div>
          
          <div className="professional-card p-6 text-center group hover:scale-105 transition-transform duration-200">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
              <MapPin className="text-blue-800" size={24} />
            </div>
            <h3 className="font-bold text-slate-800 mb-2">Location</h3>
            <p className="text-slate-600">Ho Chi Minh City</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
