import { useLoaderData } from "react-router-dom";
import placeHolderImage from '../../assets/404.jpg';

const Content = () => {
    const blog = useLoaderData();
    console.log(blog);
    const { cover_image, title, description, published_at, tags, body_html } = blog;

    return (
        <div rel="noopener noreferrer" className="p-1 mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 border border-opacity-30">
            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || placeHolderImage} />

            {/* tags */}
            <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
                {
                    tags.map((tag, index) => (
                        <a key={index} rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">
                            # {tag}
                        </a>
                    ))
                }
            </div>
            
            <div>
                <a target="_blank" className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    {title}
                </a>
                <div dangerouslySetInnerHTML={{ __html: body_html }} />
            </div>
        </div>
    );
};

export default Content;
