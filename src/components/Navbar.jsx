const Navbar = () => {
    return (
        <nav className="w-full bg-black text-white font-bold text-lg fixed top-0 left-0 z-20">
            <ul className="w-full min-h-16 flex justify-between items-center px-10 flex-wrap">
                <li
                    className="m-2 sm:m-0"
                >
                    <a href="#"
                        className="transition-shadow shadow-md hover:shadow-white px-3 py-2"
                    >
                        Inicio
                    </a>
                </li>
                <li
                    className="m-2 sm:m-0"
                >
                    <a href="#history"
                        className="transition-shadow shadow-md hover:shadow-white px-3 py-2"
                    >
                        Historia
                    </a>
                </li>
                <li
                    className="m-2 sm:m-0"
                >
                    <a href="#economic"
                        className="transition-shadow shadow-md hover:shadow-white px-3 py-2"
                    >
                        Impacto Económico
                    </a>
                </li>
                <li
                    className="m-2 sm:m-0"
                >
                    <a href="#social"
                        className="transition-shadow shadow-md hover:shadow-white px-3 py-2"
                    >
                        Impacto Social
                    </a>
                </li>
                <li
                    className="m-2 sm:m-0"
                >
                    <a href="#environmental"
                        className="transition-shadow shadow-md hover:shadow-white px-3 py-2"
                    >
                        Impacto Ambiental
                    </a>
                </li>
                {/* <li
                className="m-2 sm:m-0"
                >
                    <a href="#policies"
                    className="transition-shadow shadow-md hover:shadow-white px-3 py-2"
                    >
                        Políticas
                    </a>
                </li>
                <li
                className="m-2 sm:m-0"
                >
                    <a href="#legacy"
                    className="transition-shadow shadow-md hover:shadow-white px-3 py-2"
                    >
                        Legado
                    </a>
                </li> */}
            </ul>
        </nav>
    )
}

export default Navbar
