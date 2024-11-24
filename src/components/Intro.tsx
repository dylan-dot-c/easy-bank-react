import Features from "./Features";
import { features } from "../assets/data/features";

const Intro = () => {
    return (
        <section className='bg-light-gray-blue p-4 text-center md:text-left'>
            <div className='max-w-6xl mx-auto py-12 md:py-24 px-4 '>
                <div>
                    <h2 className=''>Why Choose Easy Bank? </h2>
                    <p className='mt-4 max-w-2xl'>
                        We leverage Open Banking to turn your bank account into
                        your financial hub. Control your finances like never
                        before.
                    </p>
                </div>

                <div className='grid md:grid-cols-4 gap-10 md:mt-16 mt-8 grid-cols-1'>
                    {features.map((feature) => {
                        return (
                            <Features
                                key={feature.title}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Intro;
