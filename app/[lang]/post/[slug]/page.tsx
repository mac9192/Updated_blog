import { notFound } from "next/navigation"
import { createDirectus, rest, readItems } from '@directus/sdk';
import React from 'react'
import SocialLink from "../../../../blog-components/elements/socialLink"
import PostBody from "../../../../blog-components/post/postBody"
import PostHero from "../../../../blog-components/post/postHero"
import { DUMMY_CATEGORIES, DUMMY_POST } from "../../../../DUMMY_DATA"
import CTACard from "../../../../blog-components/elements/CTACard"
import directus from "../../../../lib/directus"
import { getDictionary } from "../../../../lib/getDictionary"
import { cache } from  "react"
import siteConfig from "../../../../constants/site"
import Head from 'next/head'



export const getPostData = cache(async (postSlug: string, locale:string)=> {
  try {
    
    const post = await directus.request(
      readItems('post', {
filter: {
        slug: {
          _eq: postSlug
        }
      },
        fields: [
        "*", //Will get everything from our table
        "author.id",
        "author.first.name",// (.) period means: go up a level on tables to the relational tables
        "author.last.name",
        "category.id",
        "category.title",
        "translations.*",
        "category.translations.*"
      ],
    
      })

    )    

 
    const postData = post?.[0]

    if(locale === 'en'){
      return postData;
    }else{
      const localisedPostData = {
        ...postData,
        title: postData?.translations?.[0]?.title,
        description: postData?.translations?.[0]?.description,
        body: postData?.translations?.[0]?.body,
        category: {
          ...postData?.category,
          title: postData?.category?.translations?.[0]?.title
        }

      }
      return localisedPostData;
    }
    

  } catch (error) {
    
  }
}
)

//Generate Metadata Function
 

 /*

Route (app)                                    Size     First Load JS
┌ ○ /                                          0 B                0 B
├ ○ /blog                                      188 B          88.2 kB
├ ● /blog/[category]                           189 B          88.2 kB
├   ├ /blog/cities
├   └ /blog/experiences
├ ● /blog/post/[slug]                          137 B          77.7 kB
├   ├ /blog/post/a-lovely-green-city-new-york
├   ├ /blog/post/a-lovely-green-city-Florida
├   ├ /blog/post/a-lovely-green-city-Colorado
├   └ [+3 more paths

 */

 /* return DUMMY_POST.map((post) => {
      return {
          slug: post.slug //We get slug param bc folder is [slug]
      }
  })*/

  //Pre-populates slugs at build time for SSR (helps SEO)
  
  /*
  export const generateStaticParams = async () => {
    /* return DUMMY_POSTS.map((post) => {
      return {
        slug: post.slug,
      };
    }); 
    try {

      

             
      const posts = await directus.request(
        readItems('post', {
  filter: {
    status: {
      _eq: "published",
    },
  },
  fields: ["slug"],
      
        })
  
      )    
  
      const params = posts?.map((post:any) => {
        return {
          slug: post.slug as string,
          lang: "en",
        };
      });
  
      const localisedParams = posts?.map((post:any) => {
        return {
          slug: post.slug as string,
          lang: "es",
        };
      });
  
      // Concat Localised and Regular Params
      const allParams = params?.concat(localisedParams ?? []);
  
      return allParams || [];
    } catch (error) {
      console.log(error);
      throw new Error("Error fetching posts");
    }
  };
    */

//We get slug param bc folder is [slug]
const page = async ({params}:{params:{slug:string; lang:string}}) => {

  //const post = DUMMY_POST.find((post) => post.slug === params.slug)


  // Structured data for Google


  const locale = params.lang;
  const postSlug = params.slug

  const post = await getPostData(postSlug, locale)


  console.log('date:...',(post as any).date_created)
  console.log('dateUP:...',(post as any).date_updated)
  console.log('slug', (post as any)?.slug)
  console.log('image', (post as any).image)
const dateCreated = (post as any).date_updated
console.log('const date', (post as any) .date_created)

  const jsonLd = {
      "@context": "https://schema.org", 
      "@type": "Article",
      "headline": post?.title,
      "image": `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}/post/${postSlug}/opengraph-image.png`,
      "author": (post as any).author.first_name + " " + (post as any).author.last_name, 
      "genre": post?.category.title,
      "publisher": siteConfig.siteName,
      "url": `${process.env.NEXT_PUBLIC_SITE_URL}/post/${postSlug}`,
      "datePublished": new Date((post as any).date_created).toISOString,
      "dateCreated": new Date((post as any).date_created).toISOString,
      "dateModified": new Date((post as any).date_updated).toISOString,
      "description": post?.description,
      "articleBody": post?.body,
}
  

  if (!post){  //If no post, show 404 Not Founf Page, Remember bc posts can be deleted
    notFound()
  }
  
  const dictionary = await getDictionary(locale)

  console.log('post test', post)

  return (
  
  
  
  <div className="bg-white pt-10 ">


        {/* Add JSON-LD to your page Open Graph Social Media shareable article metadata */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    
      <div className="md:container md:mx-auto sm:p-10 md:p-0 text-white text-left space-y-10">
        
        {/*Post Hero */}
      <PostHero locale={locale} post={post as any} />
         {/*Post Body and Social Share */}
      <div className="flex flex-col md:flex-row gap-10 mt-10">
        <div className="relative mt-11   ">
           <div className="sticky flex md:flex-col items-center gap-5 top-40">
             <div className="font-medium md:hidden text-black text-2xl">Share this content: </div>
             <SocialLink
          isShareURL={true}
          platform="facebook"
          link={`https://www.facebook.com/sharer/sharer.php?u=${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${(post as any).slug}`}`}
        />
             <SocialLink
          isShareURL={true}
          platform="twitter"
          link={`https://twitter.com=${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${(post as any).slug}`}`}
        />
             <SocialLink
          isShareURL={true}
          platform="linkedin"
          link={`https://www.linkedin.com/shareArticle?mini=true&url=${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${(post as any).slug}`}`}
        />
            
           </div>
        </div>
      <PostBody body={post.body} />
     
     
      </div>
      {/* CTA CARD */}
      
      <CTACard dictionary={dictionary}/>
    
    
    </div> 
    </div>
  

  )
}

export default page
