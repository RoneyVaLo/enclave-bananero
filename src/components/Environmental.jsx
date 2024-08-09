const Environmental = () => {
    return (
        <section id="environmental" className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="w-full text-center mb-4 flex items-center flex-col">
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Impacto Ambiental</h1>
                <p className="max-w-5xl text-xl font-semibold mt-8 mb-4">
                    El impacto ambiental ha sido considerable, afectando tanto el ecosistema local como la salud de las comunidades aledañas. Dos de los principales aspectos de este impacto son la deforestación y el cambio de uso del suelo, así como el uso de pesticidas y sus consecuencias.
                </p>
            </div>

            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-2 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-2">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            <h2 className="mt-2 text-2xl text-center font-bold tracking-tight text-gray-900 sm:text-2xl">Deforestación y Cambio de Uso del Suelo</h2>
                            <p className="mt-6 text-xl leading-8 text-gray-700 text-justify">
                                La expansión de las plantaciones bananeras ha llevado a una significativa deforestación en las regiones donde se establecieron. Grandes extensiones de bosques tropicales han sido taladas para dar paso a monocultivos de banano, lo que ha alterado el equilibrio ecológico y reducido la biodiversidad. Este cambio en el uso del suelo ha tenido efectos adversos en los ecosistemas locales, incluyendo la pérdida de hábitats para numerosas especies y la degradación de suelos, lo que a su vez afecta la capacidad de la tierra para sostener otros cultivos y mantener la fertilidad.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="-ml-12 -mt-12 p-12 lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            <h2 className="mt-2 text-2xl text-center font-bold tracking-tight text-gray-900 sm:text-2xl">Uso de Pesticidas y sus Consecuencias</h2>
                            <p className="mt-6 text-xl leading-8 text-gray-700 text-justify">
                                El uso intensivo de pesticidas en las plantaciones bananeras es otro aspecto crítico del impacto ambiental. Las empresas han utilizado una variedad de químicos para controlar plagas y enfermedades, lo que ha llevado a la contaminación del suelo y del agua. Estos pesticidas pueden tener efectos nocivos no solo en el medio ambiente, sino también en la salud de los trabajadores y las comunidades cercanas. La exposición a estos productos químicos ha sido asociada con problemas de salud, incluyendo enfermedades respiratorias, trastornos neurológicos y problemas reproductivos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full text-center mb-4 flex items-center flex-col">
                <p className="max-w-5xl text-xl text-gray-700">
                    Además, la contaminación de fuentes de agua puede afectar la agricultura local y la calidad del agua potable, generando preocupaciones sobre la sostenibilidad a largo plazo de los recursos hídricos en las áreas afectadas.
                </p>

                <p className="max-w-5xl text-xl mt-4 mb-4 text-gray-700">
                    El enclave bananero en Costa Rica ha tenido un impacto ambiental significativo, caracterizado por la deforestación y el cambio de uso del suelo, así como por el uso de pesticidas y sus consecuencias. Estos factores no solo han afectado el ecosistema local, sino que también han planteado serios desafíos para la salud de las comunidades y la sostenibilidad ambiental en el país.
                </p>
            </div>
        </section>
    )
}

export default Environmental
