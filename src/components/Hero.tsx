import Button from "./Button";
import bg from "../assets/images/bg-intro-desktop.svg";
import mockup from "../assets/images/image-mockups.png";

const Hero = () => {
    return (
        <header className='h-auto md:h-screen  bg '>
            <div className='max-w-6xl mx-auto pt-20  flex items-center flex-col-reverse md:flex-row px-6'>
                <div className='hero--wrapper flex flex-col gap-4 text-center md:text-left py-4 -mt-24 md:mt-0 max-w-md '>
                    <h1 className='text-4xl md:text-6xl'>
                        Next generation digital banking
                    </h1>

                    <p className=' text-lg text-grayish-blue font-light'>
                        Take your financial life online. Your Easybank account
                        will be a one-stop-shop for spending, saving, budgeting,
                        investing, and much more.
                    </p>

                    <div>
                        <Button />
                    </div>
                </div>
                <div>
                    <img
                        src={mockup}
                        alt='Mockups'
                        className='max-w-3xl w-full translate-y-[-115px] md:translate-y-[-115px] md:translate-x-64 z-1 '
                    />
                </div>
            </div>
        </header>
    );
};

export default Hero;
