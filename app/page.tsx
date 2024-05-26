import Image from "next/image";
import profilePic from "../public/me.jpg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className=" h-screen w-full border-yellow-500">
        <div className="z-10  border-lime-500 items-center justify-between font-mono text-sm lg:flex-col lg:border-blue-500">
          <figure className="flex-col flex justify-center">
            <Image
              src={profilePic}
              width={500}
              height={500}
              alt="Picture of the author"
              className="text-center rounded shadow-2"
            />
            <h2 className=" text-xl sm:text-4xl lg:text-5xl font-bold text-[#242424] mt-4 pb-2 ">Neeraj Rekwar</h2>
            <figcaption>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum quos quidem suscipit a? Ad laudantium accusamus dolorem quae sed est, voluptatibus ipsam harum repudiandae, nam perferendis, at molestiae tempore. Provident!</figcaption>
          </figure>

          <div className=" left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">

          </div>
        </div>
      </section>
      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
      </div>
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
      </div>
    </main>
  );
}
