import { Link } from "react-router-dom";
import placeHolderImage from '../../assets/404.jpg'
import { ImCross } from "react-icons/im";


const BlogCart = ({blog,deletable,handleDelete}) => {
    const {id,cover_image,title,description,published_at} = blog;

    return (
    <div className="flex relative">
            <Link rel="noopener noreferrer" to={`/blog/${id}`} className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 transition border-2 hover:scale-105 border-primary hover:secondary border-opacity-30 rounded-lg">
                    <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || placeHolderImage} />
                    <div className="p-6 space-y-2">
                        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                        <span className="text-xs dark:text-gray-600">{new Date (published_at).toLocaleDateString()}</span>
                        <p>{description}</p>
                    </div>
            </Link>
            {deletable && <div onClick={() => handleDelete(id)} className="absolute  hover:scale-105 -top-3 right-0"><ImCross className="text-secondary text-xl hover:text-primary" /></div>}
    </div>   
    );
};

export default BlogCart;