const Social = () => {
    return (
        <section id="social" className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="w-full text-center mb-4 flex items-center flex-col">
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Impacto Social</h1>
                <p className="max-w-5xl text-xl font-semibold mt-8 mb-4">
                    El impacto social del enclave bananero en Costa Rica ha sido profundo y multifacético, afectando las condiciones de trabajo, la vida de los trabajadores y sus familias, así como los cambios demográficos y sociales en las comunidades involucradas.
                </p>
            </div>

            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-2 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-2">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            <h2 className="mt-2 text-2xl text-center font-bold tracking-tight text-gray-900 sm:text-2xl">Condiciones de Trabajo</h2>
                            <p className="mt-6 text-xl leading-8 text-gray-700 text-justify">
                                Las condiciones laborales en las plantaciones bananeras han sido históricamente difíciles. Los trabajadores enfrentaban largas jornadas, salarios bajos y un ambiente de trabajo peligroso, a menudo expuestos a pesticidas sin la protección adecuada. La organización sindical fue limitada, y las huelgas, aunque a veces exitosas, a menudo resultaban en represalias por parte de las empresas. A pesar de las mejoras en algunos aspectos a lo largo de los años, las condiciones laborales siguen siendo un tema de preocupación, reflejando la lucha constante por derechos y mejores condiciones de trabajo en el sector.
                            </p>
                        </div>

                        <div className="lg:max-w-lg">
                            <h2 className="mt-2 text-2xl text-center font-bold tracking-tight text-gray-900 sm:text-2xl">Cambios Demográficos y Sociales</h2>
                            <p className="mt-6 text-xl leading-8 text-gray-700 text-justify">
                                Las condiciones laborales en las plantaciones bananeras han sido históricamente difíciles. Los trabajadores enfrentaban largas jornadas, salarios bajos y un ambiente de trabajo peligroso, a menudo expuestos a pesticidas sin la protección adecuada. La organización sindical fue limitada, y las huelgas, aunque a veces exitosas, a menudo resultaban en represalias por parte de las empresas. A pesar de las mejoras en algunos aspectos a lo largo de los años, las condiciones laborales siguen siendo un tema de preocupación, reflejando la lucha constante por derechos y mejores condiciones de trabajo en el sector.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="-ml-12 -mt-12 p-12 lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            <h2 className="mt-2 text-2xl text-center font-bold tracking-tight text-gray-900 sm:text-2xl">Vida de los Trabajadores</h2>
                            <p className="mt-6 text-xl leading-8 text-gray-700 text-justify">
                                La vida de los trabajadores bananeros y sus familias ha estado marcada por la precariedad. Muchos dependían del empleo en las plantaciones para su sustento, lo que generaba una vulnerabilidad económica significativa. Las familias a menudo enfrentaban dificultades para acceder a servicios básicos como educación y salud, debido a la baja remuneración y la inestabilidad laboral. Sin embargo, el enclave también ha sido un espacio de socialización, donde los trabajadores han formado comunidades fuertes y redes de apoyo, lo que ha permitido la organización y la lucha por derechos laborales.
                            </p>
                        </div>

                        <div className="mt-24 lg:max-w-lg hover:scale-105 transition-transform cursor-pointer">
                            <img
                                className="rounded-lg shadow-xl"
                                src="https://www.nacion.com/resizer/ph7fS6HK79P0FVq8XcTk-XBe0zY=/arc-anglerfish-arc2-prod-gruponacion/public/ZQPQBQYWCZEZJHKZCPDPS2K76E.JPG"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Social
