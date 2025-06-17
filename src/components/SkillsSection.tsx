import { Code, Users, Brain, Lightbulb } from 'lucide-react';

const SkillsSection = () => {
  const hardSkills = [
    { name: "Python", level: 90 },
    { name: "Scikit-learn", level: 90 },
    { name: "TensorFlow/Keras", level: 85 },
    { name: "PyTorch", level: 60 },
    { name: "SQL", level: 85 },
    { name: "C#/C++", level: 80 },
    { name: "Docker/ AWS", level: 80 },
    { name: "Git", level: 90 },
  ];

  const softSkills = [
    { name: "Team Collaboration", level: 90 },
    { name: "Research & Documentation", level: 90 },
    { name: "Critical Thinking", level: 80 },
    { name: "Problem Solving", level: 80 },
    { name: "Agile & Scrum", level: 85 },
    { name: "Communication", level: 80 }
  ];

  const SkillCard = ({ title, skills, icon: Icon, gradient }: any) => (
    <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className={`p-3 rounded-lg ${gradient}`}>
          <Icon className="text-white" size={24} />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      
      <div className="space-y-4">
        {skills.map((skill: any, index: number) => (
          <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="flex justify-between mb-2">
              <span className="font-medium text-gray-700">{skill.name}</span>
              <span className="text-sm text-gray-500">{skill.level}%</span>
            </div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-600 to-blue-800 animate-progress-fill"
                style={{ 
                  width: `${skill.level}%`,
                  animationDelay: `${index * 0.2}s`
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold gradient-text mb-4">Skills</h2>
          <p className="text-gray-600">Technical expertise and soft skills that drive my success</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SkillCard
            title="Hard Skills"
            skills={hardSkills}
            icon={Code}
            gradient="bg-gradient-to-r from-blue-600 to-blue-800"
          />
          
          <SkillCard
            title="Soft Skills"
            skills={softSkills}
            icon={Users}
            gradient="bg-gradient-to-r from-blue-600 to-blue-800"
          />
        </div>

        {/* Additional Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div className="text-center bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl p-6 hover:bg-blue-50/30 transition-colors">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg inline-block mb-3">
              <Brain className="text-white" size={24} />
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">AI/ML Libraries</h4>
            <p className="text-sm text-gray-600">Scikit-learn, TensorFlow, Keras, PyTorch, Pandas, Numpy, Matplotlib, Seaborn</p>
          </div>
          
          <div className="text-center bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl p-6 hover:bg-blue-50/30 transition-colors">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg inline-block mb-3">
              <Code className="text-white" size={24} />
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">Programming</h4>
            <p className="text-sm text-gray-600">Python, R, SQL, C#/C++, JavaScript, Kotlin, html, css</p>
          </div>
          
          <div className="text-center bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl p-6 hover:bg-blue-50/30 transition-colors">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg inline-block mb-3">
              <Lightbulb className="text-white" size={24} />
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">Tools</h4>
            <p className="text-sm text-gray-600">Docker, FastAPI, Git, Notion, LaTeX, Kafka</p>
          </div>
          
          <div className="text-center bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl p-6 hover:bg-blue-50/30 transition-colors">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg inline-block mb-3">
              <Users className="text-white" size={24} />
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">Methodologies</h4>
            <p className="text-sm text-gray-600">Agile, Scrum, Research, Documentation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
