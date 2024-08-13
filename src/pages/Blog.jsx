import { useState } from "react";
import { Link, Outlet, useLoaderData, useNavigation, useParams } from "react-router-dom";
import Loader from "../Components/Loader/Loader";
import { TbBookmarkPlus } from "react-icons/tb";
import { saveBlog } from "../utility/LocalStorage";
import  { Toaster } from 'react-hot-toast';

const Blog = () => {


	const [tabIndex, setTabIndex] = useState(0);
	const navigation = useNavigation();

	const blog = useLoaderData();
	const { id } = useParams();
	const { comments_count, title, reading_time_minutes, public_reactions_count, tags } = blog;

	if (navigation.state === 'loading') return <Loader></Loader>

	const handleBookmark = blog => {
		console.log(blog);
		saveBlog(blog);
	}
	return (
		<div className="max-w-3xl px-6 py-16 mx-auto space-y-12">
			<article className="space-y-8 ">
				<div className="space-y-6">
					<h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">Suspendisse ut magna et ipsum sodales accumsan.</h1>
					<div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-600">
						<p className="text-sm">Leroy Jenkins • July 19th, 2021</p>
						<p className="flex-shrink-0 mt-3 text-sm md:mt-0">4 min read • 1,570 views</p>
					</div>
				</div>
				{/* tab section */}

				<div className="flex items-start -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap ">
					<Link onClick={() => setTabIndex(0)} rel="noopener noreferrer" to="" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? "border border-b-0" : "border-b"} rounded-t-lg`}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
							<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
						</svg>
						<span>Content</span>
					</Link>
					<Link onClick={() => setTabIndex(1)} rel="noopener noreferrer" to="author" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? "border border-b-0" : "border-b"} rounded-t-lg `}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
							<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
							<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
						</svg>
						<span>Author</span>
					</Link>
					<div onClick={() => handleBookmark(blog)} className="bg-primary p-3 ml-5 rounded-full hover:bg-opacity-30 bg-opacity-20 cursor-pointer hover:scale-105 overflow-hidden">
						<TbBookmarkPlus size={20} className="text-secondary" />
					</div>
				</div>
				<Toaster />
				<Outlet></Outlet>


			</article>
			<div>

				<div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
					{
						tags.map(tag => (<a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50"># {tag}</a>))
					}
				</div>

			</div>
		</div>
	);
};

export default Blog;