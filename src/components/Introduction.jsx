import DownArrow from "./DownArrow"

const Introduction = () => {
    return (
        <section id="home" className="w-full mb-4 pt-20 flex flex-col items-center">
            <h1 className="text-5xl font-bold mb-8">Enclave Bananero En Costa Rica</h1>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/SoI4OE0-9ew?si=KhU30euYo_Tz5exr" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <p className="w-[80%] text-center text-xl font-semibold mt-8 mb-4">
                El enclave bananero en Costa Rica se refiere a la intensa actividad económica y social asociada con la producción y exportación de bananos, que comenzó a desarrollarse a finales del siglo XIX. Este fenómeno se originó con la llegada de empresas transnacionales, que establecieron plantaciones en la región caribeña del país, atraídas por las políticas agrarias liberales y la demanda internacional de banano.
            </p>
            <a href="#history">
                <DownArrow />
            </a>
        </section>
    )
}

export default Introduction
