import Reveal from "@/components/Reveal";
import Nav from "@/components/Nav";
import Image from "next/image";

const skills = [
  { name: "JavaScript", icon: "🟨" },
  { name: "TypeScript", icon: "🔷" },
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "Node.js", icon: "🟢" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "Git", icon: "🔀" },
  { name: "SQL", icon: "🗄️" },
];

const accents = ["bg-coral", "bg-violet", "bg-lime"];

export default function Home() {
  return (
    <main>
      <Nav />
      {/* HERO */}
      <section className="relative min-h-screen flex items-center px-6 md:px-16 pt-32 pb-20 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-lime/40 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-24 w-80 h-80 bg-violet/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-coral/20 rounded-full blur-3xl" />

        <div className="relative grid md:grid-cols-2 gap-12 items-center w-full">
          <div>
            <p className="font-display text-sm tracking-widest uppercase text-coral mb-4">
              Hola, soy
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-plum leading-tight">
              Adriana
            </h1>
            <h2 className="font-display text-2xl md:text-4xl font-semibold text-violet mt-2">
              Desarrolladora Full Stack
            </h2>
            <p className="mt-6 max-w-xl text-lg text-plum/80">
              Construyo aplicaciones web de punta a punta, del backend al pixel
              perfecto. Me interesa el buen código tanto como el buen diseño.
            </p>

            <div className="mt-5 inline-flex items-center gap-2.5 bg-cream border-2 border-line rounded-full px-4 py-2.5">
              <span className="relative flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500" />
              </span>
              <span className="text-sm font-semibold text-plum">
                Disponible para nuevas oportunidades
              </span>
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href="#contacto"
                className="bg-coral text-cream px-6 py-3 rounded-full font-semibold hover:bg-violet transition-colors"
              >
                Contactame
              </a>
              <a
                href="#proyectos"
                className="border-2 border-plum text-plum px-6 py-3 rounded-full font-semibold hover:bg-plum hover:text-cream transition-colors"
              >
                Ver proyectos
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-plum">
              <Image
                src="/fotoPerfil.jpg"
                alt="Foto de Adriana"
                fill
                className="object-cover object-[center_50%] scale-150"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section className="relative px-6 md:px-16 py-24 bg-plum text-cream overflow-hidden">
        <div className="absolute top-10 right-10 w-56 h-56 bg-coral/20 rounded-full blur-3xl" />

        <div className="relative grid md:grid-cols-2 gap-12 items-start">
          <Reveal>
            <p className="font-display text-sm tracking-widest uppercase text-lime mb-4">
              Sobre mí
            </p>
            <p className="text-xl md:text-2xl leading-relaxed">
              Soy desarrolladora Full Stack, apasionada por construir cosas que
              funcionen bien y se vean mejor. Me gusta entender el problema
              completo: desde cómo se guarda un dato en la base, hasta cómo se
              siente hacer clic en un botón.
            </p>
            <p className="mt-6 text-lg text-cream/80 leading-relaxed">
              Estoy siempre aprendiendo herramientas nuevas, y este mismo
              portfolio es parte de ese proceso — lo construí desde cero
              mientras aprendía Next.js y React.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 gap-4">
            <Reveal delay={100}>
              <div className="bg-coral text-plum rounded-2xl p-6 h-full flex flex-col justify-center">
                <span className="text-3xl">🎯</span>
                <p className="font-display font-bold mt-3">Full Stack</p>
                <p className="text-sm mt-1 text-plum/70">
                  Backend y frontend, de punta a punta
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="bg-lime text-plum rounded-2xl p-6 h-full flex flex-col justify-center">
                <span className="text-3xl">🚀</span>
                <p className="font-display font-bold mt-3">Next.js & React</p>
                <p className="text-sm mt-1 text-plum/70">
                  Mi stack principal ahora mismo
                </p>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="col-span-2 bg-violet text-cream rounded-2xl p-6 flex items-center gap-4">
                <span className="text-3xl">🌱</span>
                <div>
                  <p className="font-display font-bold">Siempre aprendiendo</p>
                  <p className="text-sm mt-1 text-cream/80">
                    Cada proyecto es una excusa para aprender algo nuevo
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="px-6 md:px-16 py-24 bg-cream">
        <Reveal>
          <p className="font-display text-sm tracking-widest uppercase text-coral mb-4">
            Skills
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-plum mb-10">
            Con qué trabajo
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <Reveal key={skill.name} delay={i * 80}>
              <div className="bg-white border-2 border-line rounded-2xl p-6 text-center hover:-translate-y-2 hover:border-violet hover:shadow-lg transition-all duration-300">
                <span className="text-3xl">{skill.icon}</span>
                <p className="font-display font-semibold text-plum mt-3">
                  {skill.name}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROYECTOS */}
      <section
        id="proyectos"
        className="relative px-6 md:px-16 py-24 bg-cream overflow-hidden"
      >
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-violet/10 rounded-full blur-3xl" />

        <Reveal>
          <p className="font-display text-sm tracking-widest uppercase text-coral mb-4">
            Proyectos
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-plum mb-10">
            Lo que estoy construyendo
          </h2>
        </Reveal>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
          {[0, 1, 2].map((slot) => (
            <Reveal key={slot} delay={slot * 120}>
              <div className="rounded-2xl overflow-hidden border-2 border-dashed border-line min-h-[220px]">
                <div className={`h-2 ${accents[slot]}`} />
                <div className="flex flex-col items-center justify-center text-center p-8 text-plum/40">
                  <span className="text-3xl mb-3">＋</span>
                  <p className="font-semibold">Próximamente</p>
                  <p className="text-sm mt-1">
                    Acá va a aparecer uno de mis proyectos
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section
        id="contacto"
        className="relative px-6 md:px-16 py-24 bg-plum text-cream overflow-hidden"
      >
        <div className="absolute -top-10 -left-10 w-64 h-64 bg-lime/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-coral/20 rounded-full blur-3xl" />

        <Reveal>
          <p className="font-display text-sm tracking-widest uppercase text-lime mb-4">
            Contacto
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 max-w-2xl">
            ¿Charlamos?
          </h2>
          <p className="text-lg text-cream/80 max-w-xl mb-10">
            Estoy abierta a nuevas oportunidades y colaboraciones. Escribime por
            cualquiera de estos medios.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:tuemail@ejemplo.com"
              className="bg-coral text-cream px-6 py-3 rounded-full font-semibold hover:bg-violet transition-colors"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-cream text-cream px-6 py-3 rounded-full font-semibold hover:bg-cream hover:text-plum transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/adri0212-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-cream text-cream px-6 py-3 rounded-full font-semibold hover:bg-cream hover:text-plum transition-colors"
            >
              GitHub
            </a>
            <a
              href="/cv-adriana.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-cream text-cream px-6 py-3 rounded-full font-semibold hover:bg-cream hover:text-plum transition-colors"
            >
              Descargar CV
            </a>
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="px-6 md:px-16 py-6 bg-plum text-cream/50 text-sm text-center border-t border-cream/10">
        © {new Date().getFullYear()} Adriana. Hecho con Next.js y mucho café.
      </footer>
    </main>
  );
}
