import imgHistory from '/imgHistory.jpg';

const History = () => {
    return (
        <section id="history" className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-2 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-2">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Historia</h1>
                            <p className="mt-6 text-xl leading-8 text-gray-700 text-justify">
                                El enclave bananero en Costa Rica tiene sus raíces en la década de 1870, cuando se comenzó a cultivar banano de manera comercial, impulsado por la necesidad de generar carga continua para el Ferrocarril al Atlántico. Este ferrocarril, inicialmente construido para el café, no era suficiente para mantener la actividad económica, lo que llevó a la introducción del banano como un cultivo alternativo.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <img
                        alt=""
                        src={imgHistory}
                        className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                    />
                </div>
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                            <p className="mt-6 text-lg leading-8 text-gray-700 text-justify">
                                La primera exportación significativa se realizó en 1879, gracias a la intervención de Minor Keith, quien obtuvo concesiones para la explotación del ferrocarril y grandes extensiones de tierra. Esto marcó el inicio de un periodo en el que el banano se convirtió en un producto clave para la economía costarricense, especialmente en la región del Caribe.
                            </p>

                            <p className="mt-6 text-lg leading-8 text-gray-700 text-justify">
                                A lo largo de los años, el enclave bananero estuvo caracterizado por la fuerte presencia de empresas transnacionales, como la United Fruit Company, que controlaban la producción y exportación. Este modelo de en <q>clave</q> significó que los beneficios generados por las plantaciones no se reinvirtieron en el desarrollo local, sino que fueron repatriados a los países de origen de estas empresas.
                            </p>

                            <p className="mt-6 text-lg leading-8 text-gray-700 text-justify">
                                El impacto social del enclave fue profundo, desencadenando tensiones laborales que culminaron en importantes huelgas, como la de 1934, que sentaron las bases del sindicalismo en Costa Rica y llevaron a reformas laborales significativas. Sin embargo, a partir de la década de 1980, el sector bananero enfrentó crisis, y en 1984, la transnacional se retiró oficialmente, aunque la producción continuó bajo control nacional.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default History
