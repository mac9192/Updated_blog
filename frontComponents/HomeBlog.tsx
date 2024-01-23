import React from 'react'
import { createDirectus, rest, readItems } from '@directus/sdk';
import Image from 'next/image'
import immigration from '../public/assets/img-immigrationnews.webp'
import law from '../public/assets/img-law.webp'
import passport from '../public/assets/img-passport.webp'
import lady from '../public/assets/img-lady.webp'
import justice from '../public/assets/img-justice.png'
import museum from '../public/assets/img-immigration2.webp'
import directus from '../lib/directus'
import {i18n} from '@i18n.config'
import {getDictionary} from '../lib/getDictionary'
import { notFound } from "next/navigation"
import HomeBlogPosts  from './HomeBlogPosts';
import {Post} from '../DUMMY_DATA'


 /*
export const generateStaticParams = async () =>{
     return i18n.locales.map((lang) =>{
       return {
         lang
       }
     })
   } */
   
   interface navBar {
    locale: string,
    dictionary: any
}

 
const HomeBlog = async ( {locale, dictionary}:navBar ) => { 

   console.log('es/en', locale)

     const getAllPosts = async() => {
          try {
            const posts = await directus.request(
              readItems('post', {
      
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
          if(locale ==="en"){
              return posts;
          }else{
            //Replace original 'en' with 'es'
            const localisedPosts = posts.map((post:any)=>{
              return {
                ...post,
                title: post.translations[0].title,
                description: post.translations[0].description,
                body: post.translations[0].body,
                category: {
                  ...post.category,
                  title:post.category.translations[0].title
                }
              }
            })
            return localisedPosts
          }
          
      
          } catch (error) {
            console.log(error);
          // throw new Error("Error fetching posts")
          }
        };


        const posts = await getAllPosts();

        //console.log("new",posts)
        
         if (!posts){
           notFound(); //If no post, show 404 Not Found Page, Remember bc posts can be deleted
        }
         /*To pass it to CTA CARD, for client approach, bc server actions is ina alpha*/
       // const dictionary = await getDictionary(locale)
        
      
     

  return (
      <div className=" pt-12 ">
             <div className="md:p-12 md:mt- text-5xl sm:p-10 mx-auto text-center max-w-screen-2xl text-logoBlue   ">
          <p>BLOG POSTS</p>
                  </div>
          
             <div className="p-3 mx-auto md:container sm:pt-10 ">
          <div className="flex  md:flex-row sm:flex-col mx-auto  md:space-y-0 sm:space-y-10   md:space-x-10  ">
              <div className="  border-t-4 border-logoBlue shadow-xl sm:p-3 bg-white shadow-2xl ">
               <div className="flex flex-row justify-between md:pl-[40px] md:pr-[40px] pt-5">
                    <p className="text-3xl">Top Stories</p>
                    <p className="text-logoBlue font-bold text-2xl">More</p>
               </div>
             
            
               <HomeBlogPosts locale={locale} posts={ posts.filter((_post:any,index:any) => index > 0 && index < 4)} /> 
              
              </div>
              <div className="  border-t-4 border-logoBlue shadow-xl sm:p-3 bg-white ">
               <div className="flex flex-row justify-between p-2">
                    <p className="mt-5">Upcoming Events</p>
                    <p className="text-logoBlue font-bold mt-5">More</p>
               </div>
               <div className="flex flex-col md:min-w-[300px]">
                
                      <p className="sm:text-[32px] pt-4  p-2">Nov 4 @ 12PM</p>
                      <p className="text-logoBlue font-bold  p-2">Immigration FAQ Seminar</p>
                      <p className="pt-3  p-2">Come and learn about the most recent Immigration reforms</p>
                      <p className="pt-2  p-2 text-logoBlue font-bold border-b-2 pb-5">Learn More</p>
               </div>
               <div className="flex flex-col md:min-w-[200px]">
                
                <p className="sm:text-[32px] pt-4  p-2">Nov 4 @ 12PM</p>
                <p className="text-logoBlue font-bold  p-2">Immigration FAQ Seminar</p>
                <p className="pt-3  p-2">Come and learn about the most recent Immigration reforms</p>
                <p className="pt-2 text-logoBlue font-bold border-b-2 pb-5  p-2">Learn More</p>
         </div>
         <div className="flex flex-col md:min-w-[200px]">
                
                <p className="sm:text-[32px] pt-4  p-2">Nov 4 @ 12PM</p>
                <p className="text-logoBlue font-bold  p-2">Immigration FAQ Seminar</p>
                <p className="pt-3  p-2">Come and learn about the most recent Immigration reforms</p>
                <p className="pt-2 text-logoBlue font-bold border-b-2 pb-5  p-2">Learn More</p>
         </div>
               
              
              </div>
          </div>
      </div>
      </div>
      
  )
}

export default HomeBlog
 