import DotCircle from "./acceries/DotCircle";
import { InfiniteMovingCardsDemo } from "./infiniteCard";

export default function ReviewSection(){
  return(
    <>
     <section className="">
       <div className="max-w-5xl m-auto text-[#242424]">
         <i className="not-italic flex text-lg md:text-3xl  font-medium py-4 justify-start items-center">
           <DotCircle />
           Recent projects
         </i>
       </div>
       <InfiniteMovingCardsDemo/>
     </section>
    </>
  )
}