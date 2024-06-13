import Image from 'next/image'
export default function Home() {
  return (
    <main>
      <section className=" m-2 border-blue-500 border-2">
        <div>
          <Image
            src="/me.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <div></div>
      </section>
      <section className="m-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius neque, atque similique veniam aperiam consequuntur placeat tempore, recusandae iusto quam omnis suscipit? Animi sed possimus repellat quo quae distinctio! Possimus!</section>
      <section className="h-[50vh] m-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius neque, atque similique veniam aperiam consequuntur placeat tempore, recusandae iusto quam omnis suscipit? Animi sed possimus repellat quo quae distinctio! Possimus!</section>
    </main>
  );
}
