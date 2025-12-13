import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('¡Gracias por tu mensaje! Te responderé pronto.');
    };

    return (
        <div className="contact-page container section">
            <motion.h1
                className="section-title"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Contacto
            </motion.h1>

            <div className="contact-container">
                <motion.div
                    className="contact-info"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h3>Hablemos</h3>
                    <p>
                        Estoy siempre abierto a discutir nuevos proyectos, ideas creativas o oportunidades para ser parte de tus visiones.
                    </p>

                    <div className="info-item">
                        <div className="icon-box">
                            <Mail size={20} />
                        </div>
                        <div>
                            <h4>Email</h4>
                            <p>hola@bielma.me</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <div className="icon-box">
                            <MapPin size={20} />
                        </div>
                        <div>
                            <h4>Ubicación</h4>
                            <p>Ciudad de México, México</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <div className="icon-box">
                            <Phone size={20} />
                        </div>
                        <div>
                            <h4>Teléfono</h4>
                            <p>+52 55 1234 5678</p>
                        </div>
                    </div>
                </motion.div>

                <motion.form
                    className="contact-form"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    onSubmit={handleSubmit}
                >
                    <div className="form-group">
                        <label htmlFor="name">Nombre</label>
                        <input type="text" id="name" required placeholder="Tu nombre" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" required placeholder="tu@email.com" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Mensaje</label>
                        <textarea id="message" rows={5} required placeholder="¿En qué puedo ayudarte?"></textarea>
                    </div>

                    <button type="submit" className="btn submit-btn">
                        Enviar Mensaje <Send size={18} />
                    </button>
                </motion.form>
            </div>
        </div>
    );
};

export default Contact;
