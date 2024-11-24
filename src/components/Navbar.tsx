import logo from "../assets/images/logo.svg";
import menu from "../assets/images/icon-hamburger.svg";
import close from "../assets/images/icon-close.svg";
import Button from "./Button";
import { useState, useEffect } from "react";

const links = ["Home", "About", "Contact", "Blog", "Careers"];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => setIsOpen((prev) => !prev);

    useEffect(() => {
        if (isOpen) {
            document.documentElement.style.overflow = "hidden";
        } else {
            document.documentElement.style.overflow = "";
        }
    }, [isOpen]);

    return (
        <nav className='h-20   shadow-md fixed w-full z-10 bg-white top-0 px-3'>
            <div className='flex max-w-6xl mx-auto justify-between h-full items-center'>
                <img src={logo} alt='' className='w-52' />
                <div className='gap-5 hidden md:flex '>
                    {links.map((link) => (
                        <Link url={link} key={link} />
                    ))}
                </div>
                <div className='hidden md:block'>
                    <Button />
                </div>
                <button className='block md:hidden' onClick={toggleMenu}>
                    <img src={isOpen ? close : menu} alt='Menu Icon' />
                </button>
            </div>
            {isOpen && (
                <div className='navbar--wrapper h-screen p-6 absolute top-20 left-0 z-20  w-full  text-center text-black'>
                    <div className='space-y-6 w-full max-w-72 mx-auto bg-white p-4 rounded-lg'>
                        {links.map((link) => (
                            <Link url={link} key={link} />
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

const Link = ({ url }: { url: string }) => {
    return (
        <div className='relative after:h-1 hover:after:opacity-100 after:opacity-0 after:absolute after:w-full after:left-0 after:bg-gradient-to-r after:from-lime-green after:to-bright-cyan  after:-bottom-[30px] text-grayish-blue hover:text-dark-blue transition-all after:transition-all'>
            <a href={`/${url}`}>{url}</a>
        </div>
    );
};

export default Navbar;
