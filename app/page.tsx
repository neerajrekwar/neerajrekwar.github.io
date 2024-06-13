import Image from 'next/image'
export default function Home() {
  return (
    <main className="antileased">
      <section className="m-2 border-blue-500 border-2">
        <div className="m-2 p-1 border-2 border-gray-400 ">
          <figure>
            <div className="m-2">
              <Image
                src="/me.jpg"
                width={350}
                height={320}
                alt="Picture of the author"
                className="shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"

              />
            </div>
            <h2 className="text-2xl">Neeraj Rekwar</h2>
            <figcaption>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius illum architecto hic, dicta perferendis quo tenetur veniam magni quis aliquam, culpa repellat consequatur temporibus voluptatum fugiat voluptatibus doloribus rerum vitae?</figcaption>
          </figure>
        </div>
        <div>

        </div>
      </section>
      <section className="m-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius neque, atque similique veniam aperiam consequuntur placeat tempore, recusandae iusto quam omnis suscipit? Animi sed possimus repellat quo quae distinctio! Possimus!</section>
      <section className="h-[50vh] m-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius neque, atque similique veniam aperiam consequuntur placeat tempore, recusandae iusto quam omnis suscipit? Animi sed possimus repellat quo quae distinctio! Possimus!</section>
    </main>
  );
}
