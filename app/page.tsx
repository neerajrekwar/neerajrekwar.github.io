import Image from 'next/image'

export default function Home() {
  return (
    <main className="antileased">
      <section className="m-2 border-blue-500 border-2 bg-white">
        <div className="m-2 p-1 border-2 border-gray-400 ">
          <figure className="flex-1 sm:flex border-2">
            <div className="m-2 lg:w-[50vw] md:w-[20vw]">
              <Image
                src="/me-jpg"
                width={350}
                height={350}
                alt="Picture of the author"
              />
            </div>
            <div className="m-2 md:w-[70vw]">
              <h2 className="font-bold text-[#212121] text-3xl md:text-4xl lg:text-4xl">Neeraj Rekwar</h2>
              <figcaption>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius illum architecto hic, dicta perferendis quo tenetur veniam magni quis aliquam, culpa repellat consequatur temporibus voluptatum fugiat voluptatibus doloribus rerum vitae?</figcaption>
            </div>
          </figure>
        </div>
        <div>

        </div>
      </section>
      <section className="m-2 bg-black text-white">
        <div className="p-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam consequatur repellendus saepe omnis amet pariatur sint debitis aut expedita perspiciatis quo nisi optio voluptatem necessitatibus, magni earum reprehenderit ipsum enim.</div>
      </section>
      <section className="h-[50vh] m-2 bg-white">
        <div className="p-1">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo dolorem exercitationem quam ad reiciendis perspiciatis dignissimos ea assumenda ducimus quasi, non vel quidem, suscipit eius, illo voluptatibus eaque inventore. Veritatis.
        </div>
      </section>
    </main>
  );
}
