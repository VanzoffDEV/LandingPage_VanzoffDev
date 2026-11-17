import { useState } from "react";
import { TypewriterText } from "./components/TypewriterText";

import {
  ArrowRightIcon,
  Menu,
  X,
  Share2,
  Star,
  Zap,
  CodeXml,
  Heart,
} from "lucide-react";

import { motion } from "framer-motion";

const GithubIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const WhatsappIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const navLinks = [
  { href: "#Contato", label: "Contato" },
  { href: "#projects", label: "Portfólio" },

  { href: "#sobre", label: "Sobre" },
];

const features = [
  { title: "Design Responsivo" },
  { title: "SEO Otimizado" },
  { title: "Integração com Redes Sociais" },
];

function App() {
  const [open, setOpen] = useState(false);

  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <div className="bg-[#f3f3f3] text-slate-100 selection:bg-fuchsia-500/30">
      {/* NavBar */}
      <header className="sticky top-0 z-50 border-b border-white/5 backdrop-blur-sm bg-[#f3f3f3]/90">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <CodeXml className="size-5  text-blue-500" />
            <span className="font-bold tracking-tight text-slate-500">
              Vanzoff
              <span className="text-blue-500 ml-1">Dev.</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-small text-slate-500">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hover:text-blue-600 transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden p-2 rounded-lg bg-slate-200 text-slate-600 hover:bg-slate-300 transition-colors duration-200"
            onClick={() => setOpen(true)}
          >
            <Menu className="size-5" />
          </button>
        </div>
      </header>

        {/* Menu Mobile */}
       {open && (
          <div className="fixed inset-0 z-50 md:hidden">
            {/* Fundo escuro semi-transparente (backdrop) */}
            <div
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
              onClick={() => setOpen(false)}
            />

            {/* Caixa lateral do menu - Alterado para bg-white sólido */}
            <div className="fixed right-0 top-0 h-full w-80 bg-white text-slate-800 p-6 shadow-2xl border-l border-slate-200 flex flex-col justify-between">
              <div>
                {/* Topo do Menu: Logo e Botão de Fechar */}
                <div className="flex items-center justify-between pb-6 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <CodeXml className="size-5 text-blue-500" />
                    <span className="font-bold tracking-tight text-slate-700">
                      Vanzoff <span className="text-blue-500 ml-1">Dev.</span>
                    </span>
                  </div>
                  <button
                    className="p-2 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    <X className="size-5 text-slate-600" />
                  </button>
                </div>

                {/* Links de Navegação */}
                <nav className="flex flex-col gap-4 mt-6">
                  {navLinks.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      className="text-slate-700 hover:text-blue-600 font-medium text-base transition-colors duration-200 py-2"
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        )}

      {/*Hero*/}
      <section className="relative overflow-hidden" id="Main">
        <div className="mx-auto max-w-6xl px-4 py-20 relative">
          <motion.h1
            className="text-4xl font-extrabold md:text-6xl font-bold text-slate-800 leading-tight"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Acelere sua presença online com um site profissional e responsiva,{" "}
            <span className="text-blue-500">
              projetada para destacar seu negócio e atrair clientes.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-400 font-mono mt-4"
          >
            <TypewriterText
              text="Desenvolvedor Front-End focado em criar experiências web modernas e de alto impacto."
              speed={40}
            />
          </motion.p>

          <motion.div
            className="text-4xl font-extrabold md:text-6xl font-bold text-slate-800 leading-tight"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <a
              href="https://wa.me/5581983029897?text=%20olá,%20gostaria%20de%20contratar%20seus%20servi%C3%A7os!!"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-500 px-6 py-3 text-lg font-semibold text-white shadow-md hover:bg-blue-600 transition-colors duration-200"
            >
              Contrate Agora{" "}
              <ArrowRightIcon className="size-6 text-white inline-block transition-transform duration-200 group-hover:translate-x-1" />
            </a>

            <a
              href=" https://vanzoffdev.github.io/My-Portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-500 px-6 py-3 text-lg font-semibold text-white shadow-md hover:bg-blue-600 transition-colors duration-200 gap-4 ml-4"
            >
              Portfólio{" "}
              <ArrowRightIcon className="size-6 text-white inline-block transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </motion.div>

          <motion.div
            className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-100 p-6 rounded-lg shadow-md transition-transform duration-350 hover:scale-105 hover:shadow-lg "
              >
                <h3 className="text-xl font-bold text-slate-800">
                  {feature.title}
                </h3>
                <p className="text-slate-500 mt-2">
                  {index === 0 && (
                    <Zap className="size-5 text-blue-500 inline-block mr-2" />
                  )}
                  {index === 1 && (
                    <Star className="size-5 text-blue-500 inline-block mr-2" />
                  )}
                  {index === 2 && (
                    <Share2 className="size-5 text-blue-500 inline-block mr-2" />
                  )}
                  {index === 0 &&
                    "Seu site se adapta a qualquer dispositivo, garantindo uma experiência perfeita para todos os usuários."}
                  {index === 1 &&
                    "Nosso foco em SEO garante que seu site seja facilmente encontrado pelos motores de busca, aumentando sua visibilidade online."}
                  {index === 2 &&
                    "Conecte seu site às suas redes sociais favoritas para compartilhar conteúdo e interagir com seu público."}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio */}

      <section className="mx-auto max-w-6xl px-4 py-16" id="projects">
        <h2 className="text-3xl font-bold text-slate-800 mb-2">
          Meu Portfólio
        </h2>
        <p className="text-slate-600 mt-2 max-w-2xl mb-8">
          Conheça alguns dos sistemas e aplicações web de alta performance
          desenvolvidos com foco em experiência do usuário e arquitetura limpa.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Agência Vanzoff",
              category: "Web Development / Branding",
              description:
                "Plataforma digital completa focada em soluções corporativas, otimização de conversão e design moderno em dark mode.",
              image: "/AgenciaVanz.png",
              link: " https://agenciavanzoff.com.br",
              techFront:
                "React + TypeScript •Vite •Axios •React Router DOM •Tailwind CSS",
              techBack:
                "Java 17 •Spring Boot •Spring Data JPA •PostgreSQL (Neon.tech) •Cloudinary SDK",
            },
            {
              title: "Mais Climatização",
              category: "Fullstack Application",
              description:
                "Projeto acadêmico desenvolvido como extensão universitária para ajudar uma empresa a gerenciar a sua agenda.",
              image: "/MaisClima.png",
              link: " https://agendamentos-ui.vercel.app",
              techFront:
                "React + Vite  •Tabler Icons (Ícones) •Axios (Consumo de API) •React Router Dom (Navegação)",
              techBack:
                "Java 25 + Spring Boot 4 •Spring Security (Autenticação e Proteção) •PostgreSQL (Base de dados) •Docker (Contentorização do banco)",
            },
            {
              title: "Projeto Bom Samaritano",
              category: "Media & Content Platform",
              description:
                "Um projeto desenvolvido como parte do ambiente acadêmico com o propósito de criar um canal digital para a Igreja Evangélica Bom Samaritano, facilitando a comunicação com a comunidade e ajudando a espalhar a palavra de Deus.",
              image: "/IEBS.png",
              link: "https://github.com/VanzoffDEV/Projeto-IEBS--ineter-faculdade-.git",
              techFront:
                "HTML5:Estruturação semântica das páginas • CSS3:Estilização visual,layout e identidade visual • JavaScript:Interatividade e lógica da interface",
              Ps: " Status do Projeto: Em andamento (Versão de Esboço/MVP). O projeto já possui a estrutura visual inicial e navegação básica.",
            },
          ].map((project, index) => {
            const isFlipped = flippedIndex === index;

            return (
              <div
                key={index}
                className="h-80 cursor-pointer [perspective:1000px]"
                onClick={() => handleCardClick(index)}
              >
                <div
                  className={`relative w-full h-full duration-500 [transform-style:preserve-3d] ${
                    isFlipped ? "[transform:rotateY(180deg)]" : ""
                  }`}
                >
                  {/* FRENTE DO CARD (Capa com Imagem e Título) */}
                  <div className="absolute inset-0 rounded-xl border border-slate-200 bg-white shadow-sm flex flex-col justify-between overflow-hidden [backface-visibility:hidden]">
                    <div className="h-40 w-full bg-slate-100 overflow-hidden relative border-b border-slate-100">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4 flex flex-col justify-between flex-grow">
                      <div>
                        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                          {project.category}
                        </span>

                        <h3 className="text-lg font-bold text-slate-800 mt-1">
                          {project.title}
                        </h3>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                        <span className="text-xs text-slate-400 break-words min-w-0 flex-1 ">
                          {project.techFront}
                        </span>
                        <span className="text-xs text-blue-500 font-medium shrink-0">
                          Ver detalhes ➔
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* VERSO DO CARD (Descrição Completa e Link de Acesso) */}
                  <div className="absolute inset-0 rounded-xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <div>
                      <h3 className="text-lg font-bold text-slate-800 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        {project.description}
                      </p>
                      <div className="bg-slate-50 p-2 rounded-lg border border-slate-100 max-h-20 overflow-y-auto my-1 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-thumb]:rounded-full">
                        <span className="text-[10px] font-semibold text-slate-500 block mb-0.5">
                          Detalhes:
                        </span>
                        <span className="text-xs text-slate-700 font-medium block">
                          {project.techBack}
                        </span>
                        {project.Ps && (
                          <span className="text-[11px] text-slate-600 block mt-1">
                            {project.Ps}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg transition-colors font-medium flex items-center gap-1.5"
                        onClick={(e) => e.stopPropagation()} // Impede que o clique no link feche/vire o card
                      >
                        Link do Projeto ↗
                      </a>
                      <span className="text-xs text-slate-400">Voltar ↺</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/*About-Me*/}

      <section id="sobre" className="py-20 bg-gray-100/50 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="flex justify-center md:justify-end pt-2">
            <img
              src="/FotoAbel2.png"
              alt="Foto de Abelardo Vanzoff"
              className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-2xl border-4 border-white"
            />
          </div>

          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold mb-6 tracking-tight">
              Um pouco sobre{" "}
              <span className="gradient-text">minha jornada</span>
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Minha paixão pela tecnologia começou numa sala de aula de{" "}
              <strong>robótica</strong>, onde descobri o prazer de dar vida a
              projetos através do código. Aquela experiência foi o meu primeiro
              contato com o desenvolvimento e também com a{" "}
              <strong>liderança</strong>, atuando como monitor da turma e
              ajudando outros colegas a desbravarem o mundo da programação.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Essa base sólida me levou ao curso de{" "}
              <strong>Análise e Desenvolvimento de Sistemas (ADS)</strong>.
              Hoje, mergulho fundo na lógica de programação e arquitetura de
              software, mantendo um foco especial em linguagens de alta
              performance como <strong>C++</strong>, sem deixar de lado a
              versatilidade do ecossistema JavaScript/TypeScript.
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Atualmente, transformo esse background técnico em valor real
              através da <strong>Agência Vanzoff</strong>. Como co-fundador, meu
              objetivo é unir o rigor técnico do desenvolvimento com estratégias
              digitais de alto impacto, criando soluções que não apenas
              funcionam perfeitamente, mas que impulsionam negócios no mundo
              digital.
            </p>

            <div className="border-t border-gray-200 pt-8 mt-8">
              <h3 className="font-semibold text-gray-900 mb-4">Core Skills:</h3>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <span className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium">
                  React & JS/TS
                </span>
                <span className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium">
                  C++ (Lógica)
                </span>
                <span className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium">
                  UX/UI Design
                </span>
                <span className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Landing Pages Responsivas
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Footer*/}

      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div>
            <span className="text-xl font-bold text-white tracking-tight">
              Abelardo <span className="text-blue-400">Vanzoff</span>
            </span>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Co-fundador da Agência Vanzoff. Desenvolvedor Fullstack focado em
              criar experiências web de alta performance e impacto digital.
            </p>
          </div>

          <div className="flex justify-center gap-6 text-sm font-medium">
            <a href="#sobre" className="hover:text-blue-400 transition-colors ">
              Sobre
            </a>
            <a
              href="#projects"
              className="hover:text-blue-400 transition-colors"
            >
              Portfólio
            </a>
            <a href="#Main" className="hover:text-blue-400 transition-colors ">
              Voltar ao topo
            </a>
            <a
              href="https://wa.me/5581983029897?text=%20ol%C3%A1,%20gostaria%20de%20contratar%20seus%20servi%C3%A7os!!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-blue-400 transition-colors"
              id="Contato"
            >
              Contato <WhatsappIcon className="size-4" />
            </a>
          </div>

          <div className="flex justify-center md:justify-end gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="size-9 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
            >
              <GithubIcon className="size-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="size-9 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
            >
              <LinkedinIcon className="size-4" />
            </a>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Abelardo Vanzoff. Todos os direitos
            reservados.
          </p>
          <p className="flex items-center gap-1 mt-2 sm:mt-0">
            Feito com{" "}
            <Heart className="size-3 text-blue-400 fill-blue-400" /> para
            a web.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
