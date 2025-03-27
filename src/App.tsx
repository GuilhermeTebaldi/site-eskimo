// block=projeto+mod
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCampground,
  FaHiking,
  FaTree,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

export default function Home() {
  const [showBar, setShowBar] = useState(false);
  const [form, setForm] = useState({
    dia: "",
    mes: "",
    descricao: "",
    tempo: "",
  });

  const handleSend = () => {
    const msg = `Olá! Quero reservar o acampamento.\n\n🗓 Dia: ${form.dia}/${form.mes}\n🕒 Tempo: ${form.tempo}\n📖 Plano: ${form.descricao}`;
    const url = `https://wa.me/5547991971440?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="relative z-0 overflow-x-hidden bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 font-sans text-white">
      {/* HERO - CAMPING NATURAL */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
        <div className="pointer-events-none absolute inset-0 z-0">
          <img
            src="https://i.pinimg.com/736x/6f/08/ae/6f08aefe7410ef59f354a7f3a0ed0fa9.jpg"
            alt="Fundo personalizado"
            className="h-full w-full object-cover opacity-30"
          />

          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-green-900/60 to-emerald-900/60" />
        </div>

        <motion.div className="z-10 flex w-full flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-gradient-to-r from-yellow-300 via-green-400 to-lime-300 bg-clip-text text-6xl font-extrabold text-transparent drop-shadow-xl md:text-7xl"
          >
            CAMPING TERRAMAR
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-6 max-w-2xl text-xl text-white/80 md:text-2xl"
          >
            Um refúgio natural para quem busca liberdade, natureza e aventura ao
            ar livre.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="z-10 mt-10 rounded-full bg-gradient-to-r from-lime-400 to-green-500 px-10 py-4 font-extrabold text-black shadow-xl"
            onClick={() => setShowBar(true)}
          >
            Reservar Acampamento
          </motion.button>
        </motion.div>

        <AnimatePresence>
          {showBar && (
            <motion.div
              initial={{ y: 300, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 300, opacity: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="fixed inset-0 z-50 flex items-end justify-center backdrop-blur-md"
              onClick={() => setShowBar(false)} // clica fora e fecha
            >
              {/* Container da barra reserva */}
              <motion.div
                onClick={(e) => e.stopPropagation()} // impede o clique interno de fechar
                initial={{ y: 300, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 300, opacity: 0 }}
                transition={{ duration: 0.6, type: "spring" }}
                className="relative w-full max-w-4xl border-t border-lime-400/20 bg-lime-300/20 p-6 shadow-2xl backdrop-blur-xl md:p-10"
              >
                {/* Botão (X) */}
                <button
                  onClick={() => setShowBar(false)}
                  className="absolute right-4 top-4 text-xl font-bold text-white hover:text-red-400"
                >
                  ✕
                </button>

                {/* Campos do formulário */}
                <div className="grid items-end gap-6 md:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Dia"
                    value={form.dia}
                    onChange={(e) => setForm({ ...form, dia: e.target.value })}
                    className="w-full rounded-xl bg-white/10 p-4 text-white placeholder-white/60"
                  />
                  <input
                    type="text"
                    placeholder="Mês"
                    value={form.mes}
                    onChange={(e) => setForm({ ...form, mes: e.target.value })}
                    className="w-full rounded-xl bg-white/10 p-4 text-white placeholder-white/60"
                  />
                  <input
                    type="text"
                    placeholder="O que pretende fazer?"
                    value={form.descricao}
                    onChange={(e) =>
                      setForm({ ...form, descricao: e.target.value })
                    }
                    className="col-span-2 w-full rounded-xl bg-white/10 p-4 text-white placeholder-white/60"
                  />
                  <input
                    type="text"
                    placeholder="Tempo de permanência"
                    value={form.tempo}
                    onChange={(e) =>
                      setForm({ ...form, tempo: e.target.value })
                    }
                    className="w-full rounded-xl bg-white/10 p-4 text-white placeholder-white/60"
                  />
                  <button
                    onClick={handleSend}
                    className="rounded-full bg-gradient-to-r from-green-400 to-lime-400 px-6 py-4 font-bold text-black shadow-lg transition hover:scale-105"
                  >
                    OK & Enviar para WhatsApp
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* EXPERIÊNCIAS DE CAMPO */}
      <section className="border-t border-white/10 bg-white/5 px-6 py-32 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mx-auto grid max-w-6xl gap-12 text-center md:grid-cols-3"
        >
          {[
            {
              icon: (
                <FaCampground className="mx-auto text-6xl text-lime-400 text-opacity-100" />
              ),
              title: "Camping Seguro",
              desc: "Áreas amplas com infraestrutura, segurança e natureza preservada.",
            },
            {
              icon: (
                <FaHiking className="mx-auto animate-pulse text-6xl text-emerald-400" />
              ),
              title: "Trilhas Guiadas",
              desc: "Explore trilhas incríveis com guias experientes e paisagens únicas.",
            },
            {
              icon: (
                <FaTree className="animate-fade-in mx-auto text-6xl text-green-300" />
              ),
              title: "Conexão com a Natureza",
              desc: "Silêncio, ar puro, e liberdade para reconectar com sua essência.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-3xl border border-white/10 bg-black/30 p-10 shadow-xl backdrop-blur-xl transition-all duration-300 hover:shadow-green-500/30"
            >
              <div className="mb-6">{item.icon}</div>
              <h3 className="mb-4 text-3xl font-bold tracking-wider text-white">
                {item.title}
              </h3>
              <p className="text-md leading-relaxed text-white/70">
                {item.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* INFORMAÇÕES DE LOCAÇÃO */}
      <section className="border-t border-white/10 bg-white/5 px-6 py-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl"
        >
          <h2 className="mb-6 text-4xl font-bold text-lime-300">
            Procurando um sítio para eventos?
          </h2>
          <p className="text-lg leading-relaxed text-white/80">
            Locação para confraternizações, aniversários, festas e lazer com
            estrutura completa em meio à natureza. Fale conosco!
          </p>
          <p className="text-md mt-6 text-white/70">
            <strong>📍 Local:</strong> Estrada Geral B. São Brás, 1707 -
            Balneário Piçarras, SC
            <br />
            <strong>📞 Contato:</strong> (47) 99197-1440
          </p>
        </motion.div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="px-6 py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="mb-12 text-4xl font-bold text-white">
            O que nossos campistas dizem
          </h2>
          <div className="grid gap-10 md:grid-cols-2">
            {[
              {
                name: "Cristiane",
                quote:
                  "Foi uma experiência transformadora. Dormir sob as estrelas é algo que nunca esquecerei.",
              },
              {
                name: "Guilherme",
                quote:
                  "Voltei mais leve, mais conectado. A estrutura é incrível e a vibe, indescritível.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="rounded-xl border border-white/10 bg-white/5 p-8 shadow-xl transition-all duration-300 hover:shadow-lime-400/20"
              >
                <p className="text-lg italic text-white/80">"{item.quote}"</p>
                <p className="mt-4 font-semibold text-lime-300">
                  – {item.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden bg-gradient-to-br from-lime-300 via-green-400 to-emerald-500 px-6 py-28 text-center text-black">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mb-6 text-5xl font-black drop-shadow-xl"
        >
          Respire fundo. Viva a liberdade.
        </motion.h2>
        <p className="mb-8 text-lg">
          Reserve agora sua experiência no Camp Terra Livre e renove sua alma.
        </p>
        <button className="rounded-full bg-black px-12 py-4 font-semibold text-white shadow-xl hover:bg-zinc-900">
          Quero Acampar
        </button>
      </section>

      {/* RODAPÉ CAMPING */}
      <footer className="border-t border-white/10 bg-black py-12 text-center text-white">
        <div className="mb-6 flex justify-center gap-6">
          <a href="#" className="transition duration-300 hover:text-green-300">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="transition duration-300 hover:text-lime-300">
            <FaWhatsapp size={24} />
          </a>
        </div>
        <p className="text-sm text-white/40">
          &copy; 2025 Camp Terra Livre — Sua liberdade começa aqui.
        </p>
      </footer>
    </div>
  );
}
