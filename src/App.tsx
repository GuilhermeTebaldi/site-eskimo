import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function HomePublic() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://backend-eskimo.onrender.com/api/products/list?page=1&pageSize=100");
        if (res.data && Array.isArray(res.data.items)) {
          setProducts(res.data.items);
        } else {
          throw new Error("Resposta da API inválida ou sem produtos.");
        }
      } catch (err) {
        console.error("Erro ao buscar produtos", err);
        setError("Erro ao buscar produtos. Tente novamente mais tarde.");
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Helmet>
        <html lang="pt-BR" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Eskimo Sorvetes - Unidade Efapi</title>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <style>{`
          body {
            font-family: 'Inter', sans-serif;
            position: relative;
            overflow-x: hidden;
          }
          .orb {
            position: absolute;
            border-radius: 9999px;
            z-index: 0;
            animation: pulseOrb 4s infinite ease-in-out;
          }
        `}</style>
      </Helmet>

      <div className="relative overflow-hidden bg-white text-gray-800">
        <div className="orb bottom-[-60px] right-[-60px] h-40 w-40 bg-yellow-300"></div>
        <div className="orb left-[-40px] top-1/2 h-32 w-32 bg-red-100"></div>

        <header className="relative z-10 flex flex-col items-center justify-between gap-4 px-4 py-4 shadow-md md:flex-row md:gap-0 md:px-8" data-aos="fade-down">
          <div className="flex items-center gap-4">
            <img src="https://eskimo.com.br/wp-content/uploads/2023/03/image-1.png" alt="Eskimo Sorvetes" className="h-10 transition-transform duration-500 hover:scale-110" />
            <span className="text-3xl font-bold text-red-600 md:hidden">Efapi</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a href="#" className="font-semibold text-red-600 hover:text-red-800">Inicio</a>
            <a href="#" className="hover:text-red-600">Sobre</a>
            <a href="#" className="hover:text-red-600">Onde Encontrar</a>
          </nav>
          <div className="hidden flex-col items-end gap-2 md:flex md:flex-row md:items-center md:gap-4">
            <button className="rounded-full bg-red-600 px-4 py-2 text-sm text-white shadow-md hover:bg-red-700">Fale conosco</button>
            <span className="text-5xl font-bold text-red-600">Efapi</span>
          </div>
        </header>

        <section className="relative mx-auto flex max-w-7xl flex-col-reverse items-center gap-8 overflow-hidden bg-white px-6 py-12 lg:flex-row">
          <div className="max-w-xl text-center lg:text-left" data-aos="fade-right">
            <p className="text-sm font-semibold text-red-500">👋 Olá! É bom ter você aqui</p>
            <h1 className="mt-2 text-4xl font-bold leading-tight md:text-5xl">Sabores para <br className="hidden md:block" /> todos os gostos</h1>
            <p className="mt-4 text-gray-600">Transformamos momentos em sabores. Nossos picolés e sorvetes são a alegria que derrete na boca e aquece o coração.</p>
            <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <button className="rounded-full bg-red-600 px-6 py-3 font-semibold text-white">Ver os produtos</button>
            </div>
          </div>

          <div className="relative" data-aos="fade-left">
            <img src="https://eskimo.com.br/wp-content/uploads/2023/03/Pedrinho-1-1.png" alt="Mascote" className="mx-auto w-[280px] md:w-[320px]" />
            <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium shadow-lg">
              🍦 Sabor Incrível! <span className="text-gray-500">2.874 curtidas</span>
            </div>
          </div>
        </section>

        <section id="produtos" className="px-6 py-12 max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Produtos disponíveis</h3>
          {error ? (
            <p className="text-red-600 font-semibold text-center">{error}</p>
          ) : (
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {products.map(product => (
                <div key={product.id} className="border rounded-xl p-4 shadow-sm bg-white">
                  <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover rounded" />
                  <h4 className="mt-4 text-lg font-semibold">{product.name}</h4>
                  <p className="text-sm text-gray-600">{product.description}</p>
                  <p className="mt-2 font-bold">R$ {product.price.toFixed(2)}</p>
                  <button className="mt-4 w-full bg-red-600 text-white py-2 rounded hover:bg-red-700">Adicionar ao Carrinho</button>
                </div>
              ))}
            </div>
          )}
        </section>

        <footer className="bg-gray-100 py-6 text-center text-sm text-gray-500">
          © 2025 Eskimo Sorvetes - Unidade Efapi. Todos os direitos reservados.
        </footer>
      </div>
    </>
  );
}
