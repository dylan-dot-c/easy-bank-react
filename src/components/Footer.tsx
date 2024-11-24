import logo from "../assets/images/logo-white.svg";
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaYoutube,
    FaPinterest,
    FaTwitter,
} from "react-icons/fa";
import Button from "./Button";

const icons = [
    <FaFacebookSquare size={32} />,
    <FaInstagramSquare size={32} />,
    <FaPinterest size={32} />,
    <FaTwitter size={32} />,
    <FaYoutube size={32} />,
];
const links = ["About Us", "Contact", "Blog"];
const links2 = ["Careers", "Support", "Privacy Policy"];

const Footer = () => {
    return (
        <footer className=' bg-dark-blue'>
            <div className='max-w-6xl mx-auto px-10 py-12 md:py-12 md:px-0'>
                <div className='flex justify-between flex-col md:flex-row gap-4'>
                    <div className='flex gap-4 md:gap-28 flex-col md:flex-row '>
                        <div className='flex justify-between items-center md:items-start flex-col'>
                            <img
                                src={logo}
                                alt='Logo of easy bank'
                                className='max-w-[200px]'
                            />

                            <div className='flex gap-4 flex-row justify-center mt-4'>
                                {icons.map((icon, index) => {
                                    return (
                                        <span
                                            key={index}
                                            className='text-white hover:text-lime-green transition text-2xl cursor-pointer'>
                                            {icon}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>
                        <div className='flex flex-wrap flex-col justify-between items-center md:items-start gap-5'>
                            {links.map((link, index) => {
                                return (
                                    <a
                                        href={`/${link}`}
                                        key={index}
                                        className='text-white hover:text-lime-green transition'>
                                        {link}
                                    </a>
                                );
                            })}
                        </div>
                        <div className='flex flex-wrap flex-col justify-between gap-5 items-center md:items-start '>
                            {links2.map((link, index) => {
                                return (
                                    <a
                                        key={index}
                                        href={`/${link}`}
                                        className='text-white hover:text-lime-green transition'>
                                        {link}
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    <div>
                        <div className='flex justify-between items-center flex-col h-full gap-8'>
                            <div>
                                <Button />
                            </div>

                            <p> © Easybank. All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
