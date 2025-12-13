import { motion } from 'framer-motion';
import './About.css';

const skills = [
    'JavaScript (ES6+)', 'TypeScript', 'React', 'Node.js', 'HTML5 & CSS3',
    'Git', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'SQL'
];

const About = () => {
    return (
        <div className="about-page container section">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="section-title">Sobre Mí</h1>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            Hola, soy un desarrollador apasionado por crear soluciones web elegantes y eficientes.
                            Tengo experiencia trabajando en el stack completo, desde el diseño de interfaces intuitivas
                            hasta la arquitectura de servidores robustos.
                        </p>
                        <p>
                            Me encanta aprender nuevas tecnologías y mantenerme al día con las últimas tendencias
                            del desarrollo web. Cuando no estoy programando, probablemente me encuentres
                            leyendo sobre tecnología, jugando videojuegos o explorando nuevos lugares.
                        </p>
                    </div>

                    <div className="skills-section">
                        <h2>Habilidades</h2>
                        <div className="skills-grid">
                            {skills.map((skill, index) => (
                                <motion.span
                                    key={skill}
                                    className="skill-tag"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default About;
