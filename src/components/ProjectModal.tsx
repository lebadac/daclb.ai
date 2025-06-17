import { X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  categories: string[];
  description: string;
  fullDescription: string;
  tech: string[];
  github?: string;
  appGithub?: string;
  modelGithub?: string;
  image: string;
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-bold text-gray-800">{project.title}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          <div className="space-y-6">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {project.categories.map((category, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    category === 'Computer Vision'
                      ? 'bg-blue-100 text-blue-800'
                      : category === 'Machine Learning'
                      ? 'bg-emerald-100 text-emerald-800'
                      : category === 'NLP'
                      ? 'bg-violet-100 text-violet-800'
                      : 'bg-slate-100 text-slate-800'
                  }`}
                >
                  {category}
                </span>
              ))}
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">{project.fullDescription}</p>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-slate-50 text-slate-700 text-sm rounded-md font-medium border border-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  View on GitHub
                </a>
              )}
              {project.appGithub && (
                <a
                  href={project.appGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  View App
                </a>
              )}
              {project.modelGithub && (
                <a
                  href={project.modelGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  View Model
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
