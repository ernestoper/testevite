import React, { useEffect, useState } from 'react'
import Layout from '../../components/hocs/layout/Layout'
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import contato from '../../assets/PRINCIPAL/TELA-CONTATO/contato.png';
function Contact() {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    const [enabled, setEnabled] = useState(false)

    const [loading, setLoading] = useState(false)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        phone: '',
        budget: '',
    });

    const { 
    name,
    email,
    subject,
    message,
    phone,
    budget 
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if(enabled){
            setLoading(true);

            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            const formData = new FormData()
            formData.append('name', name)
            formData.append('email', email)
            formData.append('phone', phone)
            formData.append('subject', subject)
            formData.append('message', message)
            formData.append('budget', budget)

            const fetchData = async()=>{
                const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/contacts/`,formData, config)
                if(res.status === 200){
                    setLoading(false);
                    setFormData({
                        name:'',
                        email:'',
                        subject:'',
                        message:'',
                        phone:'',
                        budget:'',
                    })
                    alert('Message has been sent.')
                }else{
                    setLoading(false);
                    alert('Error sending message.')
                }
            }
            fetchData()

        }else{
            alert('You must accept the terms of service and conditions')
        }
    }

    return(
        <Layout>
            <Navbar/>
            {/* <div className="pt-28 bg-gradient-to-t from-orange-900 via-pretoneon  to-pretoneon">
              <div className="relative bg-gradient-to-t from-orange-900 via-pretoneon  to-pretoneon">
                      <div className="absolute inset-0">
                        <div className="absolute inset-y-0 left-0 w-1/2 " />
                      </div>
                      <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
                        <div className=" py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
                          <div className="mx-auto max-w-lg">
                            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Bora Conversar?</h2>
                            <p className="mt-3 text-lg leading-6 text-white">
                             Precisando de um orçamento?
                            </p>
                            <dl className="mt-8 text-base text-white">
                              <div>
                                <dt className="sr-only">Localização</dt>
                                <dd>
                                  <p>Recife</p>
                                  <p>Pernambuco</p>
                                </dd>
                              </div>
                              <div className="mt-6">
                                <dt className="sr-only">PNúmero de Celular:</dt>
                                <dd className="flex">
                                  <PhoneIcon className="h-6 w-6 flex-shrink-0 text-white" aria-hidden="true" />
                                  <span className="ml-3">+55 81 9201-9782</span>
                                </dd>
                              </div>
                              <div className="mt-3">
                                <dt className="sr-only">Email:</dt>
                                <dd className="flex">
                                  <EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-white" aria-hidden="true" />
                                  <span className="ml-3">contato@edsonde.com</span>
                                </dd>
                              </div>
                            </dl>
                            <p className="mt-6 text-base text-white">
                             Vamos implusionar suas vendas?{' '}
                              <a href="/#" className="font-medium text-white underline">
                                Temos ideias modernas para impulsionar sua marca.
                              </a>
                              .
                            </p>
                          </div>
                        </div>
                        <div className=" py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">

                            <div className=" md:mt-0 lg:absolute  -right-10 lg:w-6/12">
                                <div className="relative w-full lg:-mt-96 ">
                                    <div aria-hidden="true" className="lg:ml-32 l lg:mb-4 absolute scale-75 md:scale-110 inset-0 m-auto lg:w-full lg:h-full w-96 h-96 rounded-lg  bg-gradient-to-t from-orange-200 to-white blur-2xl "></div>
                                      <img src={contato} className=" lg:mt-40 lg:ml-0 relative w-full" alt="wath illustration" loading="lazy" width="320" height="280"/>
                                    </div>
                            </div>
                        </div>
                      </div>
                    </div>
                    </div> */}
        <Footer/>
    </Layout>
  )
}
export default Contact