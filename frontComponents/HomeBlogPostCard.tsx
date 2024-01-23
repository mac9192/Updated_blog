import {Post} from '../DUMMY_DATA'
import Image from 'next/image'
import Link from "next/link"
import { getReadingTime, getRelativeDate } from '../lib/helpers';

interface PostProps {
    post:Post;
    layout?: "vertical" | "horizontal"
    reverse?:boolean
    locale: string;
  }

const HomeBlogPostCard = ({post, layout = "vertical", reverse = false, locale }:PostProps) => {


    return (
        <Link 
        className= ""
        href={`/${locale}/post/${post.slug}`}
        >
        <div className="flex sm:flex-col md:flex-row p-3 md:mt-8 sm:mt-8">
                <div>
                    <Image className="max-h-[250px] md:max-w-[250px] sm:mx-auto sm:w-full md:w-full shadow-2xl" width={500} height={300} src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${post.image}?key=optimized`} alt={post.title}  />
                    </div>
                    <div className="md:pl-5  sm:p-0 md:flex-col">
    <h2 className="font-bold tracking-wide sm:pt-5 md:pt-0 md:text-[24px] sm:text-2xl">{post.title}</h2>
                        <p className="pt-2">{getRelativeDate(post.date_created, locale)}</p>
                  
                        <p className="pt-2">{post.description}</p>
                        <p className="pt-2 text-logoBlue font-bold ">Read More</p>
                        
                    </div>
                   
        </div>

        </Link>
    )
}

export default HomeBlogPostCard