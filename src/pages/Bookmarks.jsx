import { useEffect, useState } from "react";
import { deleteBlog, getBlogs } from "../utility/LocalStorage";
import BlogCart from "../Components/BlogCart/BlogCart";
import EmptyState from "../Components/EmptyState/EmptyState";

const Bookmarks = () => {
    const [blogs,setBlogs] = useState([]);
    useEffect(() => {
        const storedBlogs = getBlogs();
        setBlogs(storedBlogs);
    },[]);
    const handleDelete = id => {
        deleteBlog(id);
        const storedBlogs = getBlogs();
        setBlogs(storedBlogs);
    }
    if(blogs.length < 1)  return <EmptyState message='No Bookmarks Available !'></EmptyState>
    return (
        <div className="grid px-4 sm:px-8 py-8 justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {
            blogs.map((blog,idx) => <BlogCart handleDelete={handleDelete} deletable={true} key={idx} blog={blog}></BlogCart>)
        }
    </div>
    );
};

export default Bookmarks;