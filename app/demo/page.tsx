import CountAnimation from "../components/CountAnimation";
import { ImageSlides } from "../components/ImageSlides";

export default function Demo(){
    return(
        <>
            <div className="example-container">
                <ImageSlides />
              </div>
            <section className="min-h-screen justify-center flex items-center text-white bg-secondary">
                <CountAnimation />
            </section>
        </>
    )
}
