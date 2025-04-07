import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaStar,
  FaCalendarAlt,
  FaInstagram,
  FaHome,
  FaUser,
  FaTimes,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

const highlights = [
  "https://i.pinimg.com/736x/4f/4d/7a/4f4d7a60d3b45201658b5952249126bc.jpg",
  "https://i.pinimg.com/736x/3a/13/56/3a1356b52538b977f85234fae90ecaf8.jpg",
  "https://i.pinimg.com/736x/4f/10/87/4f1087ba1c5495571a798c392183cc29.jpg",
  "https://i.pinimg.com/736x/17/f1/2a/17f12aa39e3a9b619ddefc59c34cca71.jpg",
];

const galleryImages = [
  "https://i.pinimg.com/736x/e5/81/f6/e581f6d6224cb59e5ba22af30a58fb53.jpg",
  "https://i.pinimg.com/736x/59/92/8c/59928c31b05155e4c35c441d8ce219ed.jpg",
  "https://i.pinimg.com/736x/ae/df/8e/aedf8ee2194bdfd6b7bd777789fc858a.jpg",
  "https://i.pinimg.com/736x/1b/d6/f5/1bd6f59b4f80a032aeaedd2a9bf7ff39.jpg",
  "https://i.pinimg.com/736x/db/6b/96/db6b964afa48814212a79833b4191cf3.jpg",
  "https://i.pinimg.com/736x/85/50/75/8550759f72d5c516e704655945403720.jpg",
  "https://i.pinimg.com/736x/48/55/ba/4855ba2899b66d4990949b483145af3f.jpg",
  "https://i.pinimg.com/736x/53/d1/0d/53d10d629c03d4f470deb0a837ba1dde.jpg",
  "https://i.pinimg.com/736x/67/25/a3/6725a3ae50792c1ccaed6e0de50f2454.jpg",
  "https://i.pinimg.com/736x/1b/76/42/1b76423a22bc71f1541f5406bbf29c7e.jpg",
  "https://i.pinimg.com/736x/3f/02/c1/3f02c1a16a67a2683b300b6954da0a8b.jpg",
  "https://i.pinimg.com/736x/af/c3/f0/afc3f0aa8f6c44ac03a8d65394f98a93.jpg",
  "https://i.pinimg.com/736x/61/54/fd/6154fd9ac8f371a10ac95a77cad1c048.jpg",
  "https://i.pinimg.com/736x/8f/6d/a8/8f6da8e793bb0a1999a4a9e497554b3a.jpg",
  "https://i.pinimg.com/736x/d8/71/f3/d871f37581fa3f710a8079afe4a76632.jpg",
];

const artists = [
  {
    name: "DANIEL DAVI",
    image:
      "https://i.pinimg.com/736x/bd/a9/9c/bda99ccdb2ce7cd3d18d1fc98ff2bec5.jpg",
  },
];

export default function TattooStudioLuxuryApp() {
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);
  const [showModelos, setShowModelos] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [nome, setNome] = useState("");
  const [estilo, setEstilo] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % highlights.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const enviarWhatsApp = () => {
    const msg = `Olá! Meu nome é ${nome}. Gostaria de agendar uma tatuagem no estilo: ${estilo}`;
    const url = `https://wa.me/SEUNUMERO?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  const closePanels = () => {
    setShowForm(false);
    setShowModelos(false);
  };

  const openLightbox = (i) => {
    setCurrentImg(i);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);
  const prevImage = () =>
    setCurrentImg(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length,
    );
  const nextImage = () =>
    setCurrentImg((prev) => (prev + 1) % galleryImages.length);

  return (
    <div
      className="text-gold min-h-screen scroll-smooth bg-gradient-to-b from-black via-zinc-900 to-black pb-24 font-sans"
      id="topo"
      onClick={closePanels}
    >
      <div className="relative h-60 w-full overflow-hidden sm:h-80">
        <AnimatePresence mode="wait">
          <motion.img
            key={highlights[index]}
            src={highlights[index]}
            alt="destaque"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute left-0 top-0 h-full w-full scale-105 object-cover"
          />
        </AnimatePresence>
      </div>

      <div className="px-4 py-10 text-center">
        <h1 className="bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-100 bg-clip-text font-serif text-4xl font-black uppercase tracking-widest text-transparent drop-shadow-[0_3px_6px_rgba(255,215,0,0.8)]">
          ✦ Davi Tattoo Studio ✦
        </h1>
        <p className="mt-3 text-base italic text-yellow-300">
          Arte na pele com identidade e alma
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 px-4 py-6 sm:grid-cols-3">
        {galleryImages.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt="tattoo grid"
            className="aspect-square w-full cursor-pointer rounded-xl object-cover shadow-xl hover:ring-2 hover:ring-yellow-400/60"
            whileHover={{ scale: 1.03 }}
            onClick={() => openLightbox(i)}
          />
        ))}
      </div>

      {lightboxOpen && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
        >
          <div
            className="relative mx-4 w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[currentImg]}
              className="h-auto w-full rounded-xl object-contain"
            />
            <button
              onClick={closeLightbox}
              className="text-gold absolute right-2 top-2 text-2xl"
            >
              <FaTimes />
            </button>
            <div
              className="text-gold absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer px-3 text-2xl"
              onClick={prevImage}
            >
              <FaArrowLeft />
            </div>
            <div
              className="text-gold absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer px-3 text-2xl"
              onClick={nextImage}
            >
              <FaArrowRight />
            </div>
          </div>
        </div>
      )}

      <div className="px-6 py-4">
        <h2 className="mb-3 text-xl font-semibold text-yellow-300">Artista</h2>
        <div className="grid grid-cols-1 gap-4">
          {artists.map((artist, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-4 rounded-2xl bg-zinc-900 p-4 shadow-md"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={artist.image}
                alt={artist.name}
                className="border-gold h-16 w-16 rounded-full border-2 object-cover"
              />
              <div>
                <p className="text-lg font-bold uppercase tracking-wide text-yellow-400">
                  {artist.name}
                </p>
                <p className="text-sm text-yellow-200">
                  Especialista em realismo e arte custom
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Painel Modelos */}
      {showModelos && (
        <motion.div
          initial={{ y: 300 }}
          animate={{ y: 0 }}
          exit={{ y: 300 }}
          className="fixed bottom-20 left-0 right-0 z-40 rounded-t-2xl bg-zinc-900/95 p-6 text-center shadow-inner backdrop-blur-md"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setShowModelos(false)}
            className="absolute right-4 top-3 text-xl text-yellow-300"
          >
            <FaTimes />
          </button>
          <h3 className="mb-2 text-lg font-bold">Outros Modelos</h3>
          <p className="text-sm text-yellow-300">
            Em breve catálogo artístico exclusivo!
          </p>
        </motion.div>
      )}

      {/* Formulário Agendar */}
      {showForm && (
        <motion.div
          initial={{ y: 300 }}
          animate={{ y: 0 }}
          exit={{ y: 300 }}
          className="fixed bottom-20 left-0 right-0 z-50 rounded-t-3xl border-t border-yellow-400 bg-black/90 p-6 backdrop-blur-md"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setShowForm(false)}
            className="absolute right-4 top-3 text-xl text-yellow-300"
          >
            <FaTimes />
          </button>
          <h3 className="mb-4 text-center text-xl font-black text-yellow-300">
            Agendar Horário
          </h3>
          <input
            type="text"
            placeholder="Seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="mb-3 w-full rounded-md border border-yellow-500 bg-zinc-800 p-3 text-yellow-300 placeholder:text-yellow-200"
          />
          <input
            type="text"
            placeholder="Estilo de tatuagem"
            value={estilo}
            onChange={(e) => setEstilo(e.target.value)}
            className="mb-3 w-full rounded-md border border-yellow-500 bg-zinc-800 p-3 text-white placeholder:text-zinc-400"
          />
          <button
            onClick={enviarWhatsApp}
            className="w-full rounded-full bg-yellow-400 py-3 text-lg font-bold text-black shadow-lg hover:bg-yellow-300"
          >
            Confirmar & Enviar
          </button>
        </motion.div>
      )}

      {/* Barra de navegação */}
      <motion.div
        className="fixed bottom-0 z-50 flex w-full justify-around border-t border-zinc-700/70 bg-zinc-950/95 px-6 py-3 backdrop-blur-sm"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        onClick={(e) => e.stopPropagation()}
      >
        <FaHome
          className="cursor-pointer text-xl text-yellow-400"
          onClick={() =>
            document
              .getElementById("topo")
              .scrollIntoView({ behavior: "smooth" })
          }
        />
        <FaStar
          className="cursor-pointer text-xl text-yellow-400"
          onClick={(e) => {
            e.stopPropagation();
            setShowModelos(true);
          }}
        />
        <FaInstagram
          className="cursor-pointer text-xl text-yellow-400"
          onClick={(e) => {
            e.stopPropagation();
            window.open("https://instagram.com", "_blank");
          }}
        />
        <div
          className="flex cursor-pointer flex-col items-center text-yellow-400"
          onClick={(e) => {
            e.stopPropagation();
            setShowForm(true);
          }}
        >
          <FaCalendarAlt className="text-xl" />
          <span className="mt-1 text-[10px] leading-tight">Agendar</span>
        </div>
      </motion.div>
    </div>
  );
}
