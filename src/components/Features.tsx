type Props = {
    icon: string;
    title: string;
    description: string;
};

const Features = ({ icon, title, description }: Props) => {
    return (
        <div>
            <img src={icon} alt='' className='mb-8 mx-auto md:mx-0' />
            <h3>{title}</h3>
            <p className='mt-6'>{description}</p>
        </div>
    );
};

export default Features;
