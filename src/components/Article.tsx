type Props = {
    author: string;
    image: string;
    title: string;
    description: string;
};

const Article = ({ author, image, title, description }: Props) => {
    return (
        <article className=' bg-white'>
            <img
                src={image}
                alt='Image of a picture'
                className='w-full h-[200px] object-cover'
            />
            <div className='py-5 px-4'>
                <p className='text-sm'>By: {author}</p>

                <h4 className='text-xl hover:text-lime-green transition cursor-pointer'>
                    {title}
                </h4>

                <p className='text-sm'>{description}</p>
            </div>
        </article>
    );
};

export default Article;
