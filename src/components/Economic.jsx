import imgEconomic from '/imgEconomic.jpg';

const Economic = () => {
    return (
        <section id="economic" className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-2 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-2">

                <div className="-mt-12 p-12 lg:sticky lg:top-6 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <img
                        alt=""
                        src={imgEconomic}
                        className="w-[48rem] max-w-none bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                    />
                </div>

                <div className="lg:col-span-2 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:w-full lg:max-w-none lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4 lg:col-span-2 lg:max-w-full">
                        <div className="lg:max-w-xl">
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-center text-gray-900 sm:text-4xl">Impacto Económico</h1>
                            <p className="mt-6 text-xl leading-8 text-gray-700 text-justify">
                                Este ha tenido un impacto económico significativo en el país, especialmente en términos de su contribución al PIB, generación de empleo y comercio internacional.
                            </p>
                            <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                <li className="flex gap-x-3">
                                    <span className='text-justify text-lg'>
                                        <strong className="font-semibold text-gray-900">Contribución al PIB:</strong> A lo largo de su historia, el banano ha sido un pilar fundamental de la economía costarricense. En su apogeo, a principios de la década de 1980, el banano representó aproximadamente el 20% de las exportaciones nacionales, lo que subraya su importancia en el Producto Interno Bruto (PIB) del país. Aunque su participación ha disminuido con el tiempo debido a la diversificación de la economía.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <span className='text-justify text-lg'>
                                        <strong className="font-semibold text-gray-900">Generación de Empleo:</strong> El sector bananero ha sido un importante generador de empleo. Las plantaciones bananeras han proporcionado miles de puestos de trabajo, tanto directos como indirectos, a lo largo de los años. Sin embargo, la dependencia de este sector también ha llevado a vulnerabilidades, ya que las crisis en la industria han resultado en despidos masivos y desplazamiento laboral, afectando la estabilidad económica de muchas comunidades.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <span className='text-justify text-lg'>
                                        <strong className="font-semibold text-gray-900">Comercio Internacional:</strong> El banano costarricense se ha consolidado como uno de los principales productos de exportación, con un enfoque en mercados internacionales, particularmente en Estados Unidos y Europa. Este comercio ha impulsado la integración de Costa Rica en la economía global, pero también ha expuesto al país a las fluctuaciones del mercado internacional y a las dinámicas de las empresas multinacionales que dominan la producción y distribución del banano.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-2 lg:col-start-2 lg:row-start-2 lg:mx-auto lg:w-full lg:max-w-none lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4 lg:col-span-2 lg:max-w-full">
                        <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-xl">
                            <p className="mt-6 text-lg leading-8 text-gray-700 text-justify">
                                El enclave bananero ha sido un motor económico crucial para Costa Rica, aunque su impacto ha sido complejo, con beneficios y desafíos que han moldeado la economía y la sociedad del país a lo largo del tiempo.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Economic
