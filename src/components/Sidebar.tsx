
import { useState } from 'react';
import { Menu, X, User, Briefcase, Calendar, Trophy, Code, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Sidebar = ({ activeSection, onSectionChange }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: 'about', label: 'About Me', icon: User },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'activities', label: 'Activities', icon: Calendar },
    { id: 'achievements', label: 'Achievements', icon: Trophy },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleSectionClick = (sectionId: string) => {
    onSectionChange(sectionId);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-6 left-6 z-50 md:hidden bg-white shadow-lg p-3 rounded-lg border border-slate-200 hover:shadow-xl transition-all duration-200"
      >
        {isOpen ? <X size={20} className="text-slate-700" /> : <Menu size={20} className="text-slate-700" />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 h-full w-64 bg-white/98 backdrop-blur-sm border-r border-slate-200 shadow-xl z-40 transition-transform duration-300",
          "md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-8">
          <div className="text-center mb-12">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-800 to-blue-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
              LBD
            </div>
            <h2 className="text-xl font-bold text-slate-800 mb-2">Le Ba Dac</h2>
            <p className="text-sm text-blue-700 font-semibold bg-blue-50 px-3 py-1 rounded-full inline-block">AI Engineer Intern</p>
          </div>

          <nav className="space-y-3">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => handleSectionClick(section.id)}
                  className={cn(
                    "w-full flex items-center space-x-4 px-4 py-3 rounded-lg text-left transition-all duration-200 font-medium",
                    activeSection === section.id
                      ? "bg-blue-800 text-white shadow-md"
                      : "text-slate-600 hover:bg-slate-100 hover:text-blue-800"
                  )}
                >
                  <Icon size={20} />
                  <span>{section.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
