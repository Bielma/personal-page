import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const projects = [
    {
        id: 1,
        title: 'Mi muro',
        description: 'Sistema Gestor de Usuarios de la Secretaría de Educación Jalisco.',
        tags: ['React', 'Bootstrap', 'Laravel', 'MySQL'],
        github: 'https://github.com',
        demo: 'https://mi.sej.jalisco.gob.mx/',
        image: 'https://mi.sej.jalisco.gob.mx/assets/images/logo.svg'
    },
    {
        id: 2,
        title: 'Titulacion CUCEI',
        description: 'Aplicación de gestión de tareas colaborativa con actualizaciones en tiempo real y sistema de notificaciones.',
        tags: ['Next.js', 'React', 'Laravel', 'PostgreSQL',],
        github: 'https://github.com',
        demo: 'https://titulacion.cucei.udg.mx/',
        image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 3,
        title: 'Platvialum',
        description: 'Módulo de ventas para la empresa Platvialum.',
        tags: ['React', 'Node.js'],
        github: 'https://github.com',
        demo: 'https://platvialum.com/',
        image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 4,
        title: 'Asistente para atencion de citas',
        description: 'Bot para gestionar citas',
        tags: ['uwu']
    }
];

const Projects = () => {
    return (
        <div className="projects-page container section">
            <motion.h1
                className="section-title"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Mis Proyectos
            </motion.h1>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        className="project-card"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -10 }}
                    >
                        <div className="project-image">
                            <img src={project.image} alt={project.title} />
                            <div className="project-links">
                                <a href={project.github} target="_blank" rel="noopener noreferrer" title="Ver Código">
                                    <Github size={24} />
                                </a>
                                <a href={project.demo} target="_blank" rel="noopener noreferrer" title="Ver Demo">
                                    <ExternalLink size={24} />
                                </a>
                            </div>
                        </div>
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-tags">
                                {project.tags.map(tag => (
                                    <span key={tag}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
