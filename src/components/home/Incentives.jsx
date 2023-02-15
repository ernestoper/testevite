import React from 'react'
import logt from '../../assets/img/portfolio/ICONS/LOGT.png';
import idv from '../../assets/img/portfolio/ICONS/IDV.png';
import imp from '../../assets/img/portfolio/ICONS/IMP.png';
import wb from '../../assets/img/portfolio/ICONS/WB.png';
import vec from '../../assets/img/portfolio/ICONS/VEC.png';
import smb from '../../assets/img/portfolio/ICONS/SM.png';

const posts_design  = [
  {
    _id:3001,
    title: 'LOGO TIPO',
    img:logt,
    href: '#',
    category: { name: 'Article', href: '#' },
    minidescription: 'É essencial que as empresas apresentem uma marca forte',
    description:'É essencial que as empresas apresentem uma marca forte e com personalidade, vindo a ser reconhecidas no mercado, afinal marcas vencedoras não apresentam somente benefícios funcionais, mas também emocionais.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '6 min',
    author: {
      name: 'Roel Aufderehar',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    _id:3002,
    title: 'IDENTIDADE VISUAL',
    href: '#',
    img: idv,
    category: { name: 'Video', href: '#' },
    minidescription: 'A  idealização da identidade visual de uma empresa,',
    description:'A  idealização da identidade visual de uma empresa, está intrinsicamente atrelada aos valores  e ao público que ela almeja , ou seja,  nela está o ponto de partida de todas as informações, valores e personalidade.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '4 min',
    author: {
      name: 'Brenna Goyette',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    _id:3003,
    title: 'IMPRESSOS',
    href: '#',
    img: imp,
    category: { name: 'Case Study', href: '#' },
    minidescription:'Ainda hoje, os impressos são o material gráfico de propaganda mais utilizado ',
    description:'Ainda hoje, os impressos são o material gráfico de propaganda mais utilizado para mostrar o seu negócio aos seus clientes. Para maior comodidade.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '11 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    _id:3004,
    title: 'EMBALAGEM',
    href: '#',
    img: smb,
    category: { name: 'Case Study', href: '#' },
    minidescription:'O bom design de embalagem pode garantir uma ótima comunicação com o consumidor',
    description:'O bom design de embalagem pode garantir uma ótima comunicação com o consumidor informando sobre o produto e seu caráter. É considerada uma poderosa ferramenta de marketing.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '11 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    _id:3005,
    title: 'WEB DESIGN',
    href: '#',
    img: wb,
    category: { name: 'Case Study', href: '#' },
    minidescription:'A internet tem papel determinante no planejamento de comunicação para expandir',
    description:'A internet tem papel determinante no planejamento de comunicação para expandir sua presença no mercado. Como mídia ou ponto-de-venda, é o meio mais ágil e direto para alcançar o público-alvo.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '11 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    _id:3006,
    title: 'VETORIZAÇÃO',
    href: '#',
    img: vec,
    category: { name: 'Case Study', href: '#' },
    minidescription:'Criação de artes e trabalhos com a qualidade exigida ',
    description:'Criação de artes e trabalhos com a qualidade exigida  no mercado atual ou até mesmo uma remodelação de um trabalho mal produzido.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '11 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]
function Incentives() {
  return (
    <div className="bg-blue-800  bg-gradient-to-t from-laranjaneon md:from-laranjaneon via-laranjaneon md:via-laranjaneon to-orange-900 md:to-orange-900">
    <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
      <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
        <div className="max-w-3xl">
          <span className="text-4xl font-bold tracking-tight  text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 ">
            We built our business on customer service
          </span>
          <p className="mt-4 text-white">
            At the beginning at least, but then we realized we could make a lot more money if we kinda stopped caring
            about that. Our new strategy is to write a bunch of things that look really good in the headlines, then
            clarify in the small print but hope people don't actually read it.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3   ">
          {posts_design.map((posts_design) => (
            <div key={posts_design._id} className="sm:flex lg:block shadow-sm rounded-lg shadow-orange-700">
              <div className="sm:flex-shrink-0 ">
                <img className="mx-40  h-16 w-16 animate-bounce" src={posts_design.img} alt="" />
              </div>
              <div className="mt-4 pt-20 lg:pt-0 sm:mt-0 sm:-ml-96 lg:mt-6 lg:ml-0">
                <h3 className="text-lg font-medium text-justify   text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">{posts_design.title}</h3>
                <p className="mt-2 text-sm text-justify text-white ">{posts_design.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Incentives