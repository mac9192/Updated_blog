import Image from 'next/image'
import { Post } from "../DUMMY_DATA"
import HomeBlogPostCard from './HomeBlogPostCard';

interface PostListProps {
    posts: Post[];
    layout?: "vertical" | "horizontal";
    locale:string
}
const HomeBlogPosts = ({posts, locale }:PostListProps) => {

  

    return (

        <div>
                             <div className="flex sm:flex-col md:flex-col  p-10 border-b-2 ">
                    <div>
                    
                    </div>
                    {posts.map((post) => (
         <HomeBlogPostCard locale={locale}   post={post} key={post.id} />
        ))}
               </div>
        </div>
    )
}

export default HomeBlogPosts