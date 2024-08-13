import toast from "react-hot-toast";
export const getBlogs = () =>{
    let blogs = [];
    const  StoredBlogs = localStorage.getItem('blogs');
    if(StoredBlogs){
       blogs = JSON.parse(StoredBlogs);
    }
    return blogs;
}

// save 
export const saveBlog = blog =>{
    let blogs = getBlogs();
    const isExits = blogs.find(b => b.id === blog.id);
    if(isExits){
      return toast.error('Already BookMarked')
    }
    blogs.push(blog);
    localStorage.setItem('blogs', JSON.stringify(blogs))
    toast.success('Blog Bookmarked Successfully');
}

// delete 
export const deleteBlog = id => {
    let blogs = getBlogs();
    const remaining = blogs.filter(b => b.id !== id );
    localStorage.setItem('blogs', JSON.stringify(remaining));
    toast.success('Blog Removed from Bookmark!')
}