import React from 'react'
import Layout from '../../components/hocs/layout/Layout'
import Header from '../../components/services/Header'
import Serviciosed from '../../components/services/Serviciosed'
import ServicesList from '../../components/services/ServicesList'
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import { useEffect } from "react"
import iconcamera from '../../assets/img/services/iconcamera.png'
import CTA from '../../components/home/CTA'
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

  
const posts_software = [
    {
      _id:4001,
      title: 'Boost your conversion rate',
      img: iconcamera,
      href: '#',
      category: { name: 'Article', href: '#' },
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
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
      _id:4002,
      title: 'How to use search engine optimization to drive sales',
      href: '#',
      img: iconcamera,
      category: { name: 'Video', href: '#' },
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
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
      _id:4003,
      title: 'Improve your customer experience',
      href: '#',
      img: iconcamera,
      category: { name: 'Case Study', href: '#' },
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
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


function Servicos() {
  useEffect(()=>{
    window.scrollTo(0,0)
},[])
  return (
    <Layout>
      <Navbar/>
      <div  className='bg-gradient-to-t from-orange-900 via-pretoneon  to-orange-500 '>
        <ServicesList posts={posts_design} section_title={'Design Services'}/>
      </div>
      <CTA/>

      <Footer/>
    </Layout>
  )
}

export default Servicos