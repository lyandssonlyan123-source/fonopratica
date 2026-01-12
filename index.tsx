import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  Zap, CheckCircle2, Star, Clock, ShieldCheck, 
  ChevronDown, ShoppingBag, Award, Lock, Mail, 
  Download, CreditCard, Sparkles, XCircle, 
  AlertCircle, BadgeCheck, Quote, ChevronRight
} from 'lucide-react';

const App = () => {
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutos
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [toastData, setToastData] = useState({ name: '' });
  const [heroIndex, setHeroIndex] = useState(0);

  const images = [
    "https://i.ibb.co/JFSBJBVd/Chat-GPT-Image-8-de-jan-de-2026-19-17-52.png",
    "https://i.ibb.co/SwHK8ZTV/Chat-GPT-Image-8-de-jan-de-2026-22-24-43.png",
    "https://i.ibb.co/gFcLj4QJ/Chat-GPT-Image-8-de-jan-de-2026-22-31-49.png"
  ];

  // Timer de escassez
  useEffect(() => {
    const timer = setInterval(() => setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0)), 1000);
    return () => clearInterval(timer);
  }, []);

  // Slider automático do Hero
  useEffect(() => {
    const slideInterval = setInterval(() => setHeroIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1)), 5000);
    return () => clearInterval(slideInterval);
  }, [images.length]);

  // Prova Social Dinâmica (Notificações)
  useEffect(() => {
    const names = ["Dra. Ana", "Dra. Beatriz", "Dra. Carla", "Dra. Juliana", "Dra. Paula", "Dra. Renata", "Dra. Mariana", "Dra. Cristina"];
    const toastInterval = setInterval(() => {
      setToastData({ name: names[Math.floor(Math.random() * names.length)] });
      setShowToast(true);
      setTimeout(() => setShowToast(false), 5000);
    }, 15000);
    return () => clearInterval(toastInterval);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-white font-poppins text-gray-900 overflow-x-hidden">
      
      {/* Notificação de Venda */}
      <div className={`fixed top-24 right-4 z-[100] transition-all duration-700 transform ${showToast ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
        <div className="bg-white/95 backdrop-blur-md border border-gold/20 shadow-2xl rounded-2xl p-4 flex items-center gap-4 w-80">
          <div className="bg-gold/10 p-3 rounded-xl text-gold-dark">
            <ShoppingBag size={24} />
          </div>
          <div>
            <div className="flex items-center gap-1 text-[10px] font-black text-green-600 uppercase tracking-tighter">
              <CheckCircle2 size={12} /> Compra Aprovada
            </div>
            <p className="text-xs font-bold text-gray-900 leading-tight">{toastData.name} acabou de adquirir o Arsenal!</p>
          </div>
        </div>
      </div>

      {/* Banner de Urgência */}
      <div className="fixed top-0 left-0 w-full bg-gold-gradient text-white py-3 px-4 z-[90] shadow-xl flex justify-center items-center gap-3 font-bold text-xs md:text-sm">
        <Zap className="animate-pulse" size={18} />
        <span className="uppercase tracking-widest italic font-black">
          OFERTA DE R$ 24,90 EXPIRA EM: <span className="bg-black/20 px-3 py-1 rounded font-mono ml-1">{formatTime(timeLeft)}</span>
        </span>
      </div>

      {/* Hero Section */}
      <header className="pt-48 pb-32 px-4 bg-health-light relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 text-center lg:text-left space-y-10 animate-fade-in z-10">
            <div className="inline-flex items-center gap-2 bg-gold/10 text-gold-dark px-6 py-3 rounded-full text-[11px] font-black border border-gold/20 uppercase tracking-[0.25em]">
              <BadgeCheck size={18} /> Autoridade Máxima na Fonoaudiologia
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[10rem] font-black text-gray-900 leading-[0.85] tracking-tighter uppercase italic">
              Clínica de <span className="text-gold">Elite</span>.
            </h1>
            <p className="text-xl text-gray-400 font-medium leading-relaxed max-w-2xl italic">
              Abandone materiais amadores. Tenha em mãos o arsenal terapêutico visualmente impecável que economiza seu tempo e impressiona os pais.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a href="#oferta" className="w-full sm:w-auto bg-gold text-white px-14 py-8 rounded-full font-black text-2xl uppercase shadow-2xl hover:bg-gold-dark transform hover:scale-105 transition-all animate-pulse text-center tracking-tighter">
                QUERO MEU ACESSO AGORA
              </a>
            </div>
          </div>

          <div className="flex-1 w-full max-w-2xl relative">
            <div className="image-container p-3 bg-white z-10">
              <div className="aspect-[4/3] relative overflow-hidden rounded-[2.5rem] bg-gray-50">
                {images.map((img, idx) => (
                  <img 
                    key={idx} 
                    src={img} 
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1500 ${idx === heroIndex ? 'opacity-100' : 'opacity-0'}`} 
                  />
                ))}
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gold-gradient rounded-full blur-2xl opacity-20"></div>
          </div>
        </div>
      </header>

      {/* Seção de Depoimentos */}
      <section className="py-40 px-4 bg-white">
        <div className="max-w-6xl mx-auto space-y-24">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">O que as <span className="text-gold">especialistas dizem?</span></h2>
            <p className="text-gray-400 font-medium italic">Resultados reais de fonoaudiólogas que profissionalizaram sua prática clínica.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { name: "Dra. Mariana Silva", role: "Fono Clínica", text: "Minha agenda lotou e os pais agora percebem muito mais valor no meu atendimento. O design desses materiais é outro nível." },
              { name: "Dra. Beatriz Santos", role: "Especialista em Linguagem", text: "Antes eu perdia horas criando atividades no Canva. Hoje, imprimo o que preciso em 5 minutos e a terapia flui perfeitamente." },
              { name: "Dra. Juliana Ferreira", role: "Fono Escolar", text: "Material fundamentado e visualmente lindo. As crianças se engajam muito mais com os desenhos lúdicos e profissionais." }
            ].map((dep, i) => (
              <div key={i} className="bg-health-light p-12 rounded-[4rem] border border-gray-100 relative group hover:border-gold/30 transition-all shadow-sm">
                <Quote className="absolute top-10 right-10 text-gold/10" size={48} />
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, idx) => <Star key={idx} size={16} className="fill-gold text-gold" />)}
                </div>
                <p className="text-gray-600 font-medium italic mb-10 leading-relaxed">"{dep.text}"</p>
                <div>
                  <h4 className="font-black text-gray-900 uppercase text-sm tracking-tighter">{dep.name}</h4>
                  <p className="text-gold font-bold text-[10px] uppercase tracking-widest">{dep.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparação: O Jeito Amador vs O Jeito Elite */}
      <section className="py-40 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto space-y-24">
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter italic text-center leading-none">Profissionalismo vs <br/><span className="text-gold">Amadorismo.</span></h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left">
            <div className="bg-white p-14 rounded-[5rem] border-l-8 border-red-500 shadow-sm space-y-10">
              <h3 className="text-2xl font-black uppercase text-red-600 flex items-center gap-3"><XCircle size={28}/> Atendimento Comum</h3>
              <ul className="space-y-6 text-gray-400 font-bold italic">
                {["Materiais feios e sem padrão", "Planejamento que rouba seu sono", "Dificuldade em cobrar valor justo", "Baixo engajamento da criança"].map((t, i) => (
                  <li key={i} className="flex items-center gap-4"><AlertCircle size={20} className="text-red-200"/> {t}</li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-900 p-14 rounded-[5rem] border-l-8 border-gold shadow-2xl space-y-10">
              <h3 className="text-2xl font-black uppercase text-gold flex items-center gap-3"><CheckCircle2 size={28}/> Arsenal FonoPrática</h3>
              <ul className="space-y-6 text-white font-black italic">
                {["Design de nível internacional", "Terapia pronta em poucos cliques", "Autoridade máxima perante os pais", "Resultados clínicos acelerados"].map((t, i) => (
                  <li key={i} className="flex items-center gap-4"><Sparkles size={20} className="text-gold"/> {t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Entrega em 4 Passos */}
      <section className="py-40 px-4 bg-white text-center">
        <div className="max-w-6xl mx-auto space-y-32">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter italic">Como você vai <br/><span className="text-gold">receber seu acesso?</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative text-left">
            <div className="absolute top-1/2 left-0 w-full h-1 border-t-2 border-dashed border-gray-100 -translate-y-1/2 hidden lg:block"></div>
            {[
              { step: "01", title: "Inscrição", desc: "Pagamento 100% seguro via Kiwify.", icon: <Lock /> },
              { step: "02", title: "Aprovação", desc: "Acesso liberado imediatamente após confirmação.", icon: <CreditCard /> },
              { step: "03", title: "E-mail", desc: "Dados de acesso chegam direto no seu e-mail.", icon: <Mail /> },
              { step: "04", title: "Download", desc: "Acesse e baixe todos os PDFs em um clique.", icon: <Download /> }
            ].map((item, i) => (
              <div key={i} className="bg-health-light p-10 rounded-[4rem] border border-gray-100 relative z-10 hover:bg-white transition-all shadow-sm">
                <div className="bg-gold text-white w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xl mb-8 mx-auto lg:mx-0 shadow-lg">{item.step}</div>
                <div className="text-gold mb-4 flex lg:justify-start justify-center">{item.icon}</div>
                <h3 className="font-black uppercase tracking-tighter mb-4 italic text-center lg:text-left">{item.title}</h3>
                <p className="text-gray-400 font-medium text-sm leading-relaxed italic text-center lg:text-left">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conteúdo do Kit */}
      <section className="py-40 px-4 bg-health-light border-y border-gray-100 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-24">
          <div className="flex-1 space-y-10">
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter italic leading-none text-center lg:text-left">O que vem no <span className="text-gold">Kit?</span></h2>
            <div className="grid grid-cols-1 gap-6 text-left">
              {[
                "Consciência Fonológica (Coleção Completa)",
                "Treino Articulatório para Todos os Fonemas",
                "Estimulação de Linguagem e Vocabulário",
                "Relatórios e Prontuários Editáveis",
                "Atividades de Motricidade Orofacial"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-5 bg-white p-7 rounded-[2.5rem] border border-gray-100 shadow-sm hover:border-gold transition-all">
                  <CheckCircle2 className="text-gold flex-shrink-0" />
                  <span className="font-black uppercase tracking-tight text-sm italic">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <div className="image-container p-3 bg-white">
              <img src={images[1]} className="w-full h-full object-cover rounded-[2.8rem]" alt="Conteúdo Kit" />
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Bônus Exclusivo */}
      <section className="py-40 px-4 bg-gray-950 text-white relative">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gold/10 border border-gold/20 rounded-[5rem] p-12 md:p-24 flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-gold text-black px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">Presente para Você</div>
              <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter italic leading-none">Guia de <br/><span className="text-gold">Trava-línguas</span></h2>
              <p className="text-gray-400 text-xl font-medium leading-relaxed italic max-w-lg">
                O material definitivo para trabalhar articulação e dicção de forma lúdica, acelerando a automatização dos fonemas.
              </p>
              <div className="flex flex-col gap-4">
                <div className="text-gray-500 line-through font-bold text-2xl uppercase italic opacity-50">Valor Original: R$ 47,00</div>
                <div className="text-gold font-black text-5xl uppercase italic animate-pulse">Hoje: R$ 0,00</div>
              </div>
            </div>
            <div className="flex-1 w-full max-w-md">
              <div className="bg-white p-3 rounded-[4rem] shadow-2xl border-2 border-gold/30">
                <img src={images[2]} className="rounded-[3.2rem] w-full" alt="Bônus Trava-Línguas" />
                <div className="mt-8 text-center pb-4">
                  <span className="text-gray-900 font-black text-[10px] uppercase italic tracking-widest">Apoio Articulatório Profissional</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Garantia de Satisfação */}
      <section className="py-40 px-4 bg-white">
        <div className="max-w-4xl mx-auto bg-health-light rounded-[5rem] p-16 md:p-24 flex flex-col md:flex-row items-center gap-16 border border-gray-100 shadow-inner">
          <div className="w-56 h-56 flex-shrink-0 bg-white rounded-full flex items-center justify-center border-8 border-gold/10 shadow-2xl animate-float">
            <ShieldCheck size={120} className="text-gold" />
          </div>
          <div className="space-y-8 text-center md:text-left">
            <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tighter italic leading-tight">Garantia Blindada <br/><span className="text-gold">7 Dias de Teste</span></h2>
            <p className="text-gray-500 font-medium text-lg leading-relaxed italic">
              Use o material em suas terapias. Se você não notar o aumento da percepção de valor dos seus atendimentos, devolvemos 100% do seu dinheiro. Sem perguntas.
            </p>
          </div>
        </div>
      </section>

      {/* Oferta Irresistível */}
      <section id="oferta" className="py-40 px-4 bg-white relative">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 rounded-[6rem] p-16 md:p-24 text-center text-white relative shadow-2xl border-b-[20px] border-gold overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gold/10 blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gold-gradient text-white px-14 py-6 rounded-full font-black uppercase text-sm tracking-[0.4em] shadow-2xl italic">PROMOÇÃO POR TEMPO LIMITADO</div>
            
            <h2 className="text-5xl md:text-9xl font-black mb-10 italic tracking-tighter uppercase leading-none">Arsenal <br/>FonoPrática</h2>
            <p className="text-gray-500 mb-16 font-bold uppercase tracking-[0.5em] text-[10px] md:text-xs italic">Toda a Coleção + Bônus + Acesso Vitalício</p>

            <div className="flex flex-col items-center mb-16">
              <span className="text-gray-700 line-through text-3xl font-bold italic opacity-40 mb-2 tracking-widest uppercase">R$ 164,00</span>
              <div className="flex items-center justify-center">
                <span className="text-4xl md:text-6xl font-black text-gold mr-3 self-center transform -translate-y-8 italic">R$</span>
                <span className="text-[12rem] md:text-[18rem] font-black text-white leading-none tracking-tighter drop-shadow-2xl">24</span>
                <div className="flex flex-col items-start ml-2 self-start pt-14">
                  <span className="text-8xl md:text-[10rem] font-black text-white leading-none tracking-tighter border-b-8 border-gold/30">,90</span>
                </div>
              </div>
            </div>

            <a href="https://pay.kiwify.com.br/mPAGzGJ" className="inline-block w-full max-w-xl bg-gold text-white py-12 rounded-full font-black text-3xl uppercase shadow-2xl hover:bg-gold-dark transition-all transform hover:scale-105 active:scale-95 animate-bounce tracking-tighter">
              QUERO MEU ACESSO AGORA
            </a>

            <div className="mt-20 flex flex-wrap justify-center gap-16 border-t border-white/5 pt-16">
              {[
                { l: "Garantia Total", i: <ShieldCheck size={24} /> },
                { l: "Envio Instantâneo", i: <Zap size={24} /> },
                { l: "Acesso Vitalício", i: <Clock size={24} /> }
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-4 text-[11px] font-black uppercase text-gray-500 tracking-[0.3em]">
                  <span className="text-gold">{b.i}</span> {b.l}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Dúvidas Frequentes */}
      <section className="py-40 px-4 bg-health-light">
        <div className="max-w-4xl mx-auto space-y-16 text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">Dúvidas <span className="text-gold">Respondidas</span></h2>
          <div className="space-y-6 text-left">
            {[
              { q: "O acesso é realmente vitalício?", a: "Sim! Pagamento único de R$ 24,90. Você baixa e usa para sempre, sem mensalidades." },
              { q: "Para qual idade é recomendado?", a: "O material foi desenvolvido para crianças de 3 a 10 anos, abrangendo diversas fases terapêuticas." },
              { q: "Como recebo os arquivos?", a: "Imediatamente após a confirmação do pagamento, você recebe os dados de acesso no seu e-mail cadastrado." },
              { q: "Posso imprimir todas as páginas?", a: "Com certeza! Os PDFs estão em alta resolução (CMYK) para garantir uma impressão perfeita." }
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-[3.5rem] border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all">
                <button 
                  onClick={() => setActiveFAQ(activeFAQ === i ? null : i)} 
                  className="w-full p-12 text-left flex justify-between items-center font-black text-gray-800 hover:text-gold transition-colors text-lg italic uppercase tracking-tight"
                >
                  {faq.q}
                  <ChevronDown className={`text-gold transition-transform duration-500 ${activeFAQ === i ? 'rotate-180' : ''}`} />
                </button>
                {activeFAQ === i && (
                  <div className="p-12 pt-0 text-gray-500 leading-relaxed font-medium text-lg animate-fade-in italic">
                    <div className="h-[1px] bg-gray-50 mb-10 w-full"></div>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Profissional */}
      <footer className="bg-gray-950 text-gray-700 py-40 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-16">
          <h3 className="text-white font-black text-5xl uppercase tracking-[0.6em] opacity-10 italic">FonoPrática</h3>
          <p className="text-[11px] leading-loose uppercase tracking-[0.4em] font-bold opacity-30 px-6 italic">
            Este site não faz parte do Facebook ou da Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira. FACEBOOK é uma marca comercial da FACEBOOK, Inc.
          </p>
          <div className="flex justify-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-white/10 italic">
            <a href="#" className="hover:text-gold transition-colors">Políticas de Privacidade</a>
            <a href="#" className="hover:text-gold transition-colors">Termos de Uso</a>
          </div>
          <p className="text-xs font-black uppercase text-white/5 tracking-[0.5em] italic">© 2024 FonoPrática - Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
