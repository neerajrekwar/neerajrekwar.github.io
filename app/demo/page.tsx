import CountAnimation from "../components/CountAnimation";
import { ImageSlides } from "../components/ImageSlides";

export default function Demo(){
    return(
        <>
            <div className="min-h-screen">
                <ImageSlides />
              </div>
            <section className="min-h-screen bg-black justify-center flex items-center text-white ">
                <CountAnimation />
            </section>
        </>
    )
}
