
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Sobre Nosotros</h1>
            <p className="text-lg max-w-2xl mx-auto opacity-90">
              Conectando consumidores con los mejores productos de importación al mejor precio
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="prose max-w-none">
              <h2>Nuestra Historia</h2>
              <p>
                ChiImport nació en 2018 con una misión clara: hacer que los mejores productos de China sean accesibles para todos. Lo que comenzó como un pequeño emprendimiento familiar se ha convertido en una empresa en crecimiento con clientes en todo el país.
              </p>
              
              <p>
                Comenzamos importando pequeños artículos electrónicos y accesorios, pero rápidamente expandimos nuestra gama de productos para incluir ropa, artículos para el hogar, juguetes y más. Nuestra red de proveedores seleccionados cuidadosamente nos permite ofrecer productos de alta calidad a precios competitivos.
              </p>
              
              <h2>Nuestra Misión</h2>
              <p>
                Nuestra misión es simple: conectar a los consumidores con productos de calidad a precios accesibles. Creemos que todos deberían tener acceso a productos innovadores sin tener que pagar precios inflados.
              </p>
              
              <h2>Nuestros Valores</h2>
              <ul>
                <li>
                  <strong>Calidad:</strong> Nos aseguramos de que todos los productos que ofrecemos cumplan con nuestros estándares de calidad.
                </li>
                <li>
                  <strong>Transparencia:</strong> Creemos en la honestidad con nuestros clientes sobre nuestros productos y procesos.
                </li>
                <li>
                  <strong>Servicio al Cliente:</strong> Nos esforzamos por proporcionar un servicio excepcional y resolver cualquier problema rápidamente.
                </li>
                <li>
                  <strong>Mejora Continua:</strong> Siempre estamos buscando formas de mejorar nuestra selección de productos y la experiencia de compra.
                </li>
              </ul>
              
              <h2>Nuestro Equipo</h2>
              <p>
                Somos un equipo diverso de apasionados por el comercio electrónico y la importación. Desde expertos en logística hasta especialistas en atención al cliente, cada miembro de nuestro equipo juega un papel crucial en el éxito de ChiImport.
              </p>
              
              <p>
                Nos enorgullecemos de crear un ambiente de trabajo colaborativo donde las ideas pueden prosperar y donde cada persona es valorada por sus contribuciones únicas.
              </p>
            </div>
            
            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold mb-6">¿Tienes alguna pregunta?</h2>
              <Link to="/contact" className="inline-block bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-md transition-colors">
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
