import { IconHeartFilled } from "@tabler/icons-react";
import { FloatingNavDemo } from "../components/floatingNavBar";
import Footer from "../components/footer";
import { Toaster } from "@/components/ui/toaster";
import Image from "next/image"


interface BlogLayoutProps {
  children: React.ReactNode;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-primary min-h-screen">
        <FloatingNavDemo/>
        <header className=" border-b h-28  bg-custom-radial-lg justify-between items-center  text-five ">
          <div className="flex basis-1/2 justify-between items-start p-2 max-w-7xl m-auto">
          <div className="h-22 basis-1/2 rounded-full">
          
            <p>problems are create by itself it&apos;s not heppen </p>
          </div>
          <div className="h-22 ">
            <ul className="text-four justify-center text-end font-semibold flex-row gap-2">
              
              <li className="text-sm md:text-base ">
                {new Date().toLocaleDateString("en-US", {
                  
      dayPeriod: 'narrow',
      weekday: 'short',
                })}
              </li>
              <li className="text-sm md:text-base font-semibold text-secondary ">
               <p>lession to love </p>
               <p>the life you live</p>
              </li>
            </ul>
          </div>
          </div>
        </header>
       {children}
       <section className='min-h-screen border-third uppercase tracking-wide text-four'>
        <div className='flex items-center  py-4 justify-center  '>
          <span className='flex items-center bg-secondary rounded-full gap-2 text-primary p-2 px-3'><IconHeartFilled /> like this</span>
        </div>
        <div className='flex gap-4 text-sm py-2  items-center font-semibold justify-center  '>
        
           <span className="font-bold">Himanshu</span> <span  className="opacity-50">and</span><span className="font-bold">12</span>
         <p className="opacity-50">others love this</p>
        </div>
        <div className="">
        <div className="relative ">
          <div className="absolute h-44 w-full flex  justify-center items-center  w-full ">
            <div className="h-[0.3px] bg-seven w-full "></div>
          </div>
          <div className="absolute h-44   w-full absolute h-20 w-full flex flex-col justify-center items-center">
            <Image 
            className="rounded-full"
            src={'/me.webp'}
            width={40}
            height={40}
            alt="neel"
            />
           <div className="absolute  bottom-0 text-center ">
           <h6 className="font-bold py-2 text-sm">neeraj rekwar</h6>
           <p className="text-xs opacity-50 tracking-widest">Artist way show realism</p>
           <div className="absolute w-full text-center -bottom-24 ">
<a href="/" target="_blank" className="flex justify-center items-center bg-secondary rounded-full gap-2 text-primary p-2 px-3">suggest an idea</a>
           </div>
           </div>
          </div>
         
          
          
        </div>

        
        </div>
      </section>
        <Toaster />
      </body>
    </html>
  );
}
export default BlogLayout;