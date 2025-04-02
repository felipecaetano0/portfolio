// Components
import './App.css'
import DemoPanel from './DemoPanel'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useEffect } from 'react';
import WhatsAppButton from './WhatsAppButton';


// Images
import flex_motor_img from './assets/flex-motor.png'

import fluxo1 from './assets/fluxo1.png'
import fluxo2 from './assets/fluxo2.png'
import fluxo3 from './assets/fluxo3.png'
import fluxo4 from './assets/fluxo4.png'
import fluxo5 from './assets/fluxo5.png'
import fluxo6 from './assets/fluxo6.png'
import fluxo7 from './assets/fluxo7.png'
import fluxo8 from './assets/fluxo8.png'
const fluxo_imgs = [fluxo1, fluxo2, fluxo3, fluxo4, fluxo5, fluxo6, fluxo7, fluxo8]

import diabetes1 from './assets/diabetes1.png'
import diabetes2 from './assets/diabetes2.png'
import diabetes3 from './assets/diabetes3.png'
import diabetes4 from './assets/diabetes4.png'
const diabetes_imgs = [diabetes1, diabetes2, diabetes3, diabetes4]

import engrenagem_binaria from './assets/engrenagem_binaria.png'
import banner from './assets/logo_colorida.png'
import GmailButton from './GmailButton';
import { FaWhatsapp } from 'react-icons/fa';


// Informações que podem mudar ao longo do tempo
const telefone_completo = '5535988566083'
const telefone_display = '(35) 98856-6083'
const email = 'felipecaetano0@gmail.com'

type Servico = {
  nome: string
  descricao: string
  imagem?: string
  preco?: number
}

const servicos: Servico[] = [
  { nome: "Consultoria e Suporte Técnico em Tecnologia", descricao: "Consulta técnica para empresas ou indivíduos para solucionar problemas técnicos, melhorar processos e tomar decisões estratégicas relacionadas à tecnologia. O objetivo pode variar, desde a implementação de novas ferramentas até a otimização de sistemas existentes. Não irei cobrar nada sem propor uma solução uma solução para seu problema." },
  { nome: "Computadores Pessoais", descricao: "Formatação, limpeza, manutenções gerais, melhorias, instalação de programas, configuração de impressoras, etc.", preco: 100 },
  { nome: "Computadores Servidores", descricao: "Manutenção e configuração de servidores, instalação de serviços, backup, criação de servidores de arquivos locais, etc.", preco: 250 },
  { nome: "Automação de Processos", descricao: "Desenvolvimento de robôs para automatização de processos manuais.", preco: 200 },
  { nome: "Redes de computadores", descricao: "Instalação e manutenção de redes e cabeamento estruturado, configuração de roteadores, configuração de impressoras em rede e câmeras IP.", preco: 100 },
  { nome: "Desenvolvimento de Sites e Landing pages ", descricao: "Desenvolvimento de sites responsivos e otimizados para SEO.", preco: 500 },
  { nome: "Desenvolvimento de Sistemas", descricao: "Desenvolvimento de sistemas web e mobile para solução de problemas específicos.", preco: 1000 },
  { nome: "Aulas e treinamentos", descricao: "Lógica de programação para profissionais de outras áreas, treinamentos e aulas para sistemas complexos.", preco: 80 },
]

const automacoes: Servico[] = [
  { nome: "Automação de Relatórios e Planilhas", descricao: "Robô para geração automática de relatórios semanais/mensais, cálculo automático de comissões de vendedores, consolidação de dados de várias planilhas em uma só, atualização de gráficos/dashboards automaticamente, entre outras possibilidades.", preco: 200 },
  { nome: "Robô para compra de insumos", descricao: "Robô capaz de realizar compras automaticamente via dados de uma planilha. O robô adiciona tudo ao carrinho e pode esperar intervenção humana para fechar a compra ou comprar automaticamente.", preco: 200 },
  { nome: "Automação de Consulta de Preços / Dados na Web", descricao: "Comparação automática de preços em sites concorrentes, extração de dados de sites públicos (ex: INPI, Receita Federal, sites de licitações), coleta de oportunidades de vendas.", preco: 200 },
  { nome: "Envio Automático de e-mails e WhatsApp", descricao: "Envio de relatórios, cobranças, lembretes ou boletins automaticamente a partir do Gmail ou WhatsApp.", preco: 200 },
  { nome: "Automação de publicações para redes sociais", descricao: "Realizar publicações em redes sociais com base em arquivos presentes em um diretório, realizando uma publicação por vez.", preco: 200 },
  { nome: "Automação de Cadastro de Clientes ou Produtos", descricao: "Preenchimento automático em sistemas online com base em dados extraídos de uma planilha, documento Word ou PDF para integração com plataformas como Bling, Tiny, NuvemShop, Mercado Livre, Amazon, etc.", preco: 200 },
  { nome: "Automação de Backup de Arquivos", descricao: "Cópia automática de arquivos locais para nuvem (Google Drive, OneDrive) ou servidor de arquivos FTP próprio que posso configurar para você.", preco: 200 },
  { nome: "Criação de dashboards e relatórios", descricao: "Gerar relatórios automaticamente e demonstrar os resultados em um dashboard para melhor visualização de dados.", preco: 200 },
  { nome: "Automação de Financeiro Simples", descricao: "Lançamento automático de contas a pagar/receber com base em planilhas, geração de boletos ou recibos automáticos, controle de fluxo de caixa automatizado com alertas.", preco: 200 },
  { nome: "Automação de Atendimento", descricao: "Chatbot simples para WhatsApp ou site com respostas automáticas com base em palavras-chave.", preco: 500 },
  { nome: "Projetos eletrônicos personalizados de automação residencial, rural, industrial* ou comercial", descricao: "Monitoramento de temperatura, umidade, peso, etc, com envio para planilha ou servidor, controle automático de iluminação, irrigação, segurança, volume armazenado. Conjunto sensor, atuador com tomada de decisão e coleta de informações.", preco: 1000 },
  { nome: "Criação e manutenção de servidores de arquivos locais", descricao: "Estabelecer um servidor para atuar na rede local como um Google Drive onde você tem total controle sobre o hardware e não necessita mensalidade.", preco: 2000 },
  // { nome: "", descricao: "", preco:200 },
]



function App() {

  // SEO
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Felipe Caetano",
      "jobTitle": "Engenheiro de Computadores e Técnico em eletrônica",
      "description": "Consultoria em tecnologia, automação e desenvolvimento de sistemas",
      "email": "felipecaetano0@gmail.com",
      "telephone": "+5535988566083",
      "url": "https://felipecaetano0.github.io/portfolio/",
      "knowsAbout": ["Automação", "Desenvolvimento de Software", "Eletrônica",
        "Software", "Hardware", "Consultoria Técnica", "Manutenção de Computadores", "Redes de Computadores"],
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (

    <div className="min-h-screen bg-gray-950 text-white">


      {/* Header */}
      <header className="bg-black text-2xl font-bold pt-15 pb-3 px-15"
        style={{ backgroundImage: `url(${engrenagem_binaria})`, backgroundSize: '35%', backgroundPosition: 'left', backgroundRepeat: 'no-repeat', backgroundPositionY: '-8vh', backgroundPositionX: '-5vh' }}>
        <div className="flex flex-row justify-center md:justify-between  flex-wrap gap-5">
          <div className="flex flex-col justify-between items-left ">
            <h2 className='text-center md:text-left text-5xl font-bold text-white'>
              Felipe Caetano
            </h2>
            <p className="text-center md:text-left text-base text-gray-400 font-normal">
              Engenheiro de Computadores e Técnico em eletrônica
            </p>
          </div>
          <div className="flex flex-col justify-between items-stretch gap-2">
            <WhatsAppButton full_number={telefone_completo} display_number={telefone_display} />
            <GmailButton email={email} />
          </div>
        </div>
      </header>


      {/* Seção de Apresentação */}
      <section className="text-center p-10"
        style={{
          backgroundImage: `url(${banner})`, backgroundSize: '80vw', backgroundPosition: '', backgroundRepeat: 'no-repeat', backgroundPositionY: '', backgroundPositionX: '20vw', backgroundColor: '#000000', 
        }}
      >
        <h1 className="text-xl font-bold">
          Tecnologia & Automação
        </h1>
        <p className="text-2xl text-gray-400 pb-15">
          Vamos usar tecnologia para ajudar a construir um futuro melhor.
        </p>
        <p className="text-2xl text-white font-bold py-10 px-1 md:px-7 text-center">
          Ajudo empresas e profissionais a resolver problemas técnicos,
          melhorar processos e tomar decisões estratégicas relacionadas à tecnologia.

          Ofereço consultoria sobre tecnologia, serviços gerais em informática, suporte técnico,
          desenvolvimento de pequenos sistemas, aplicativos e automação para empresas e profissionais liberais.
        </p>
      </section>


      {/* Seção de Serviços */}
      <DemoPanel
        title="Como eu poderia ajudar você e seu negócio?"
        subtitle="Desde manutenção de computadores, configuração de redes e servidores, até automação ou pequenos apps para otimizar seu tempo!"
        data={servicos}
      />


      {/* Portfolio de automações */}
      <DemoPanel
        title="Automações Interessantes"
        subtitle="Aqui estão alguns exemplos interessantes de automações úteis que eu posso implementar para você"
        data={automacoes}
      />


      {/* Contato */}
      <div className="flex flex-col text-center py-30 items-center">
        <p className="text-4xl text-green-500">
          Achou interessante? Vamos conversar!
        </p>
        <p className="text-2xl ">
          Entre em contato para uma análise gratuita e sem compromisso.
        </p>
        <p className="text-2xl pb-10">
          Eu posso resolver seus problemas e tornar sua vida mais fácil!
        </p>
        <button
          className=" flex flex-row items-center justify-around"
          onClick={() => window.location.href = 'https://wa.me/' + telefone_completo}
          style={{ backgroundColor: '#00A63E', borderRadius: '2.5rem', minWidth: '18rem', width: 'auto'  }}
        >
          <FaWhatsapp className="text-xl text-white " />
          <p className='text-xl'>
            Entre em contato
          </p>
        </button>
      </div>



      {/* Sobre mim */}
      <section className="p-10 ">
        <h2 className="text-4xl font-bold text-center p-4">Sobre mim</h2>
        <p className="text-lg text-gray-400 text-justify p-5">
          Me chamo Felipe Caetano, sou engenheiro da computação pela Universidade Federal de Itajubá, UNIFEI, e técnico em eletrônica pela ETE FMC. Sou um profissional com conhecimentos diversificados, possuindo múltiplas habilidades tanto em software como em hardware. Já trabalhei com desenvolvimento de firmware, aplicativos Android, automação de testes, automação de processos, desenvolvimento de software e hardware.
        </p>
        <p className="text-lg text-gray-400 text-justify p-5">
          Trabalhei na Motorola com automação de testes para smartphones, lá criei baterias de testes, criei novas ferramentas, inclusive utilizando IA para analisar nossos logs, trabalhei nos frameworks proprietários e modernizei nossas pipelines CI/CD de automação.
        </p>
        <p className="text-lg text-gray-400 text-justify p-5">
          Anteriormente atuei como desenvolvedor de firmware e aplicativos Android. Trabalhei em projetos de controladores para motores e de ar condicionado, conversores DC~AC, dispositivos coletores de informação, entre outros.
        </p>
        <p className="text-lg text-gray-400 text-justify p-5">
          Atualmente venho trabalhando em um projeto pessoal de um aplicativo multiplataforma para gerenciamento de vendas, estoque, despesas para geração de relatórios e gráficos dos resultados financeiros. Logo disponibilizarei este produto juntamente com meus serviços.
        </p>
      </section>


      {/* Trabalhos */}
      <h2 className="text-4xl font-bold text-center pt-15 pb-7">Alguns dos meus Trabalhos</h2>
      <h3 className="text-2xl font-bold text-center">Fluxo</h3>

      <div className="max-w-3xl mx-auto p-4 w-90">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="rounded-lg shadow-lg"
        >
          {fluxo_imgs.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Aplicativo Fluxo - Gerenciamento de vendas e estoque - Tela ${index + 1}`}
                loading='lazy'
                className="w-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex flex-col justify-center items-center ">
        <p className='text-xl text-gray-400 w-1/2 text-center p-1 m:p-10'>
          Aplicativo para registrar vendas, cuidar do estoque e despesas, gerar relatórios e gráficos de vendas e despesas.
          Também é possível criar um produto a partir de outros ou um serviço que utiliza os produtos do estoque, utilizando uma lista de materiais que são descontados iterativamente do estoque.
        </p>
      </div>


      <h3 className="text-2xl font-bold text-center pt-15 pb-7">Flex Motor</h3>
      <div className="flex flex-col justify-center items-center gap-7">
        <img
          src={flex_motor_img}
          alt="Aparelho de fisioterapia Flex Motor para reabilitação"
          width="30%"
          style={{ minWidth: '300px', borderRadius: '30px', flex: '1' }}
        />
        <p className='text-xl text-gray-400 w-1/2 text-center p-1 m:p-10'>
          Aparelho de fisioterapia similar a uma bicicleta ergométrica, onde o pedal é movimentado e controlado por um motor. A velocidade
          e o tempo de duração do treino são ajustadas de acordo com a necessidade do paciente.
        </p>
      </div>


      <h3 className="text-2xl font-bold text-center pt-15 pb-7">Monitor de Diabetes</h3>
      <div className="max-w-3xl mx-auto p-4 w-90">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="rounded-lg shadow-lg"
        >
          {diabetes_imgs.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                loading='lazy'
                alt={`Aplicativo para monitoramento de glicemia - Tela ${index + 1}`}
                className="w-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex flex-col justify-center items-center ">
        <p className='text-xl text-gray-400 w-1/2 text-center p-1 m:p-10'>
          Este aplicativo tem como objetivo ajudar pessoas com diabetes a monitorar seu índice glicêmico e alertar um contato em caso de necessidade.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-center pt-15 pb-7">Infinity Pool</h3>
      <div className="flex flex-col justify-center items-center ">
        <p className='text-xl text-gray-400 w-1/2 text-center p-1 m:p-10'>
          Sistema para gerenciar uma piscina inteligente para atletas de alto desempenho.
          Com ela é possível coletar dados do treino do nadador
          e informar grandezas ao usuário como distância total percorrida, velocidade atual e média,
          aceleração e mostrar de maneira gráfica ao usuário
        </p>
      </div>



      {/* Contato */}
      <footer className="bg-gray-900 text-center p-5 pb-5 mt-10">
        <div className='flex flex-col justify-center items-center gap-3'>
          <p className="text-3xl font-bold pb-3">
            Contato:
          </p>
          <WhatsAppButton full_number='5535988566083' display_number='(35) 98856-6083' />
          <GmailButton email='felipecaetano0@gmail.com' />

        </div>
      </footer>
    </div>
  )
}

export default App
