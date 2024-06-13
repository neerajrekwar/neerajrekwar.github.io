import Image from 'next/image'
export default function Home() {
  return (
    <main className="antileased">
      <section className="m-2 border-blue-500 border-2 bg-white">
        <div className="m-2 p-1 border-2 border-gray-400 ">
          <figure className="border-2 flex">
            <div className="m-2">
              <Image
                src="/me.jpg"
                width={350}
                height={320}
                alt="Picture of the author"
                className="rounded shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]"

              />
            </div>
            <div>
              <h2 className="text-2xl">Neeraj Rekwar</h2>
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
