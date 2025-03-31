import './DemoPanel.css'


export type Item = {
  nome: string
  descricao: string
  // imagem?: string
  preco?: number
  link?: string
}


export default function DemoPanel(props: { title: string, subtitle: string, data: Item[] }) {

  return (
    <section className="p-10">
      <h2 className="text-4xl font-bold mb-6 text-center">{props.title}</h2>

      <h3 className="text-2xl pb-15 pt-5">{props.subtitle}</h3>

      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  gap-6">
        {props.data.map((item, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col justify-between">
            <h3 className="text-xl font-semibold">{item.nome}</h3>
            <p className="text-gray-400 mt-2">{item.descricao}</p>
            {item.preco && <p className="text-white p-4 text-right">A partir de: R$ {item.preco}</p>}
            <a href={item.link ?? "https://wa.me/5535988566083"} className="text-blue-400 mt-3 block">Ver mais</a>
          </div>
        ))}
      </div>
    </section>

  )
}