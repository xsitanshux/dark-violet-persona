
import { ExternalLink, Github, Brain, Database, Bot, Cpu } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Recommendation System",
      description: "Built a sophisticated recommendation engine using collaborative filtering and deep learning to personalize user experiences.",
      tech: ["Python", "TensorFlow", "PyTorch", "MongoDB"],
      icon: Brain,
      github: "#",
      demo: "#"
    },
    {
      title: "Computer Vision Analytics Platform",
      description: "Developed an end-to-end computer vision solution for real-time object detection and analysis in industrial settings.",
      tech: ["OpenCV", "YOLO", "React", "FastAPI"],
      icon: Cpu,
      github: "#",
      demo: "#"
    },
    {
      title: "Natural Language Processing Bot",
      description: "Created an intelligent chatbot using transformer models for customer service automation with 95% accuracy.",
      tech: ["BERT", "Transformers", "Node.js", "Docker"],
      icon: Bot,
      github: "#",
      demo: "#"
    },
    {
      title: "Predictive Analytics Dashboard",
      description: "Built a machine learning dashboard for business intelligence with predictive modeling and data visualization.",
      tech: ["Scikit-learn", "Plotly", "PostgreSQL", "Flask"],
      icon: Database,
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Featured <span className="gradient-text">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="gradient-border group hover:scale-105 transition-all duration-300"
              >
                <div className="bg-card p-8 rounded-lg h-full hover:bg-card/80 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <project.icon className="w-8 h-8 text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a 
                      href={project.github}
                      className="flex items-center text-muted-foreground hover:text-purple-400 transition-colors duration-300"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      Code
                    </a>
                    <a 
                      href={project.demo}
                      className="flex items-center text-muted-foreground hover:text-purple-400 transition-colors duration-300"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
