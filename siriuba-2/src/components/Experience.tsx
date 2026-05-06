import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const experiences = [
  {
    time: "Manhã",
    title: "O início silencioso",
    desc: "A casa começa silenciosa. A luz entra suave. O mar ainda está mais calmo. É o momento de abrir tudo, deixar o ar circular e tomar um café olhando para fora, sem pressa.",
    img: "/assets/siriuba-2/Manhã.jpg"
  },
  {
    time: "Tarde",
    title: "A casa ganha vida",
    desc: "A luz fica mais forte e o mar começa a brilhar. A piscina reflete no teto da sala, movimentando o ambiente e trazendo vida para todos os espaços integrados.",
    img: "/assets/siriuba-2/Tarde.jpg"
  },
  {
    time: "Noite",
    title: "Protagonismo íntimo",
    desc: "A casa fica mais contida. Mais silenciosa. A iluminação interna assume o protagonismo. A sala, a área externa e a piscina funcionam de forma mais íntima.",
    img: "/assets/siriuba-2/Noite.jpg"
  }
];

export default function Experience() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Cores da iluminação ambiente: Manhã (Dourado), Tarde (Azul claro), Noite (Azul escuro/Índigo)
  const lightColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#FBBF24", "#38BDF8", "#312E81"]
  );

  const lightOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.12, 0.08, 0.20]
  );

  const lightY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["0%", "40%", "80%"]
  );

  return (
    <section id="experiencia" ref={containerRef} className="py-24 md:py-32 bg-bg-main relative overflow-hidden">
      {/* Efeito de Iluminação Ambiente */}
      <motion.div 
        className="absolute left-0 right-0 mx-auto w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full pointer-events-none z-0 blur-[80px] md:blur-[150px] will-change-transform"
        style={{
          backgroundColor: lightColor,
          opacity: lightOpacity,
          top: lightY,
          transform: "translateY(-10%)"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-primary-2 uppercase tracking-widest text-xs font-bold mb-4 block">Como seria viver aqui…</span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary-1"
          >
            A Vivência
          </motion.h2>
        </div>

        <div className="space-y-24 md:space-y-32">
          {experiences.map((exp, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}>
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 1 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2"
              >
                <div className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                  <img src={exp.img} alt={exp.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full lg:w-1/2 lg:px-8"
              >
                <span className="text-primary-2 font-medium tracking-widest uppercase text-sm mb-4 block">{exp.time}</span>
                <h3 className="text-3xl md:text-4xl font-serif text-primary-1 mb-6 leading-tight">{exp.title}</h3>
                <p className="text-text-sec text-lg font-light leading-relaxed">{exp.desc}</p>
              </motion.div>
            </div>
          ))}
        </div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mt-32 text-center max-w-2xl mx-auto"
        >
          <p className="text-2xl md:text-3xl font-serif text-primary-1 italic leading-relaxed">
            "Porque no fim, não é sobre como a casa é. É sobre como ela funciona ao longo do seu dia."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
