import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import './Blog.css';

const posts = [
    {
        id: 1,
        title: 'El futuro del desarrollo web con React 19',
        excerpt: 'Explorando las nuevas características de React 19, incluyendo el compilador automático y las mejoras en Server Components.',
        date: '10 Oct, 2023',
        readTime: '5 min de lectura',
        category: 'React'
    },
    {
        id: 2,
        title: 'Por qué TypeScript es esencial en 2024',
        excerpt: 'Un análisis profundo de cómo TypeScript mejora la mantenibilidad del código y reduce errores en proyectos a gran escala.',
        date: '25 Sep, 2023',
        readTime: '7 min de lectura',
        category: 'TypeScript'
    },
    {
        id: 3,
        title: 'Optimizando el rendimiento web',
        excerpt: 'Consejos prácticos para mejorar el Core Web Vitals y asegurar que tu sitio cargue instantáneamente.',
        date: '12 Sep, 2023',
        readTime: '6 min de lectura',
        category: 'Performance'
    }
];

const Blog = () => {
    return (
        <div className="blog-page container section">
            <motion.h1
                className="section-title"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Blog
            </motion.h1>

            <div className="blog-list">
                {posts.map((post, index) => (
                    <motion.article
                        key={post.id}
                        className="blog-card"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="blog-meta">
                            <span className="blog-category">{post.category}</span>
                            <div className="meta-item">
                                <Calendar size={14} />
                                <span>{post.date}</span>
                            </div>
                            <div className="meta-item">
                                <Clock size={14} />
                                <span>{post.readTime}</span>
                            </div>
                        </div>
                        <h2>{post.title}</h2>
                        <p>{post.excerpt}</p>
                        <a href="#" className="read-more">
                            Leer más <ArrowRight size={16} />
                        </a>
                    </motion.article>
                ))}
            </div>
        </div>
    );
};

export default Blog;
