import { Helmet } from "react-helmet";

export default function App() {
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
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
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
          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes float {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-20px);
            }
          }
          @keyframes pulseOrb {
            0%, 100% {
              transform: scale(1);
              opacity: 0.15;
            }
            50% {
              transform: scale(1.1);
              opacity: 0.3;
            }
          }
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .orb {
            position: absolute;
            border-radius: 9999px;
            z-index: 0;
            animation: pulseOrb 4s infinite ease-in-out;
          }
          .fade-in {
            animation: fadeInUp 1s ease-out forwards;
          }
        `}</style>
      </Helmet>
      <div className="relative overflow-hidden bg-white text-gray-800">
        {/* Orbs decorativas com efeito de brilho */}
        <div className="orb left-[-80px] top-[-80px] h-56 w-56 bg-red-300"></div>
        <div className="orb bottom-[-60px] right-[-60px] h-40 w-40 bg-yellow-300"></div>
        <div className="orb left-[-40px] top-1/2 h-32 w-32 bg-red-100"></div>

        {/* Header */}
        <header className="fade-in relative z-10 flex flex-col items-center justify-between gap-4 px-4 py-4 shadow-md md:flex-row md:gap-0 md:px-8">
          <div className="fade-in flex flex-col items-start">
            <img
              src="https://eskimo.com.br/wp-content/uploads/2023/03/image-1.png"
              alt="Eskimo Sorvetes"
              className="fade-in h-10 transition-transform duration-500 hover:scale-110"
            />
            <span className="mt-1 text-5xl font-bold text-red-600">Efapi</span>
          </div>

          <nav className="fade-in flex flex-wrap justify-center gap-4 md:gap-6">
            <a
              href="#"
              className="font-semibold text-red-600 transition-colors duration-300 hover:text-red-800"
            >
              Inicio
            </a>
            <a href="#" className="transition duration-300 hover:text-red-600">
              Sobre
            </a>
            <a href="#" className="transition duration-300 hover:text-red-600">
              Onde Encontrar
            </a>
          </nav>
          <div className="fade-in flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
            <a
              href="https://admin-panel-eskimo.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full border px-4 py-2 text-center text-sm font-medium text-red-600 shadow-md transition hover:bg-red-100"
            >
              Área do Lojista
            </a>
            <button className="rounded-full bg-red-600 px-4 py-2 text-sm text-white shadow-md transition duration-300 hover:bg-red-700">
              Fale conosco
            </button>
          </div>
        </header>
        {/* Hero Section */}
        <section className="relative mx-auto flex max-w-7xl flex-col items-center overflow-hidden bg-white px-6 py-12 lg:flex-row">
          <div className="max-w-xl text-center lg:text-left">
            <p className="text-sm font-semibold text-red-500">
              👋 Olá! É bom ter você aqui
            </p>
            <h1 className="mt-2 text-4xl font-bold leading-tight md:text-5xl">
              Sabores para <br className="hidden md:block" /> todos os gostos
            </h1>
            <p className="mt-4 text-gray-600">
              Transformamos momentos em sabores. Nossos picolés e sorvetes são a
              alegria que derrete na boca e aquece o coração.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <button className="rounded-full bg-red-600 px-6 py-3 font-semibold text-white">
                Ver os produtos
              </button>
            </div>
          </div>
          <div className="mt-15 relative mx-auto w-full max-w-xs lg:ml-12 lg:mt-0">
            <img
              src="https://eskimo.com.br/wp-content/uploads/2023/03/Pedrinho-1-1.png"
              alt="Mascote"
              className="mx-auto w-[320px]"
            />

            <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium shadow-lg">
              🍦 Sabor Incrível!{" "}
              <span className="text-gray-500">2.874 curtidas</span>
            </div>
            <div className="absolute bottom-4 right-4 w-48 rounded-lg bg-white px-4 py-3 text-sm shadow-lg">
              <p className="font-bold">⭐ Eu Adorei Tudo!</p>
              <p className="text-xs text-gray-500">
                Uma grande variedade de produtos...
              </p>
            </div>
          </div>
        </section>

        {/* Destaques */}
        <section className="grid grid-cols-1 gap-6 bg-red-600 px-6 py-10 text-center text-white sm:grid-cols-2 md:grid-cols-4">
          <div>
            <div className="text-3xl">🏆</div>
            <h3 className="mt-2 font-bold">Maior da América Latina</h3>
            <p className="text-sm">
              Somos a maior fabricante de picolés da América Latina
            </p>
          </div>
          <div>
            <div className="text-3xl">🏠</div>
            <h3 className="mt-2 font-bold">+1300 pontos de vendas</h3>
            <p className="text-sm">
              Mais de 100 lojas filiais e 1300 pontos de venda
            </p>
          </div>
          <div>
            <div className="text-3xl">😊</div>
            <h3 className="mt-2 font-bold">+100 variações de produtos</h3>
            <p className="text-sm">
              Grande variedade com mais de 100 apresentações
            </p>
          </div>
          <div>
            <div className="text-3xl">💰</div>
            <h3 className="mt-2 font-bold">Preço de fábrica</h3>
            <p className="text-sm">
              Produtos direto da fábrica para o consumidor
            </p>
          </div>
        </section>

        {/* Produtos */}
        <section className="mx-auto max-w-4xl px-6 py-12 text-center">
          <img
            src="https://eskimo.com.br/wp-content/uploads/2023/03/Group-86-1-1.png"
            alt="Linha de produtos"
            className="mx-auto w-64"
          />
          <h2 className="mt-6 text-2xl font-bold">
            Conheça nossa linha de produtos
          </h2>
          <p className="mt-2 text-gray-600">
            Receitas que unem compostos de primeira-linha nacionais e
            internacionais.
          </p>
          <button className="mt-6 rounded-full bg-yellow-400 px-6 py-3 font-semibold text-white hover:bg-yellow-500">
            Ver todos os produtos
          </button>
        </section>

        {/* Bob Esponja Section */}
        <section className="mx-auto max-w-5xl px-6">
          <img
            src="bob-esponja-banner.png"
            alt="Picolé do Bob Esponja e Patrick"
            className="w-full rounded-xl"
          />
        </section>

        {/* Lojas */}
        <section className="mx-auto grid max-w-5xl items-center gap-6 px-6 py-12 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">
              Mega lojas espalhadas pelo Brasil
            </h2>
            <p className="mt-2 text-gray-600">
              De Norte a Sul, refrescando o paladar dos brasileiros. A presença
              marcante da nossa marca pelo país.
            </p>
            <button className="mt-6 rounded-full bg-red-600 px-6 py-3 font-semibold text-white">
              Ver todas as unidades
            </button>
          </div>
          <img
            src="loja-eskimo.png"
            alt="Loja física"
            className="w-full rounded-xl"
          />
        </section>

        {/* Footer */}
        <footer className="bg-gray-100 py-6 text-center text-sm text-gray-500">
          © 2025 Eskimo Sorvetes - Unidade Efapi. Todos os direitos reservados.
        </footer>
      </div>
    </>
  );
}
