export default function ExpSection() {
  return (
    <section className="p-2 max-w-6xl m-auto">
      <header className="justify-start text-secondary flex items-center gap-2 sm:gap-1 py-10 text-2xl font-semibold visible sm:text-4xl">
        <div className="text-4xl text-third sm:text-5xl sm:mx-2">&#8226;</div>
        <h2 id="work-experience-heading">Work Experince</h2>
      </header>

      <div>
        <article className="m-2 md:flex static text-four justify-between items-center border-b-1 border-seven md:hover:pl-1 md:hover:translate-x-1 md:transition-all">
          <h4 className="text-xl md:text-2xl">Adminstrative Assistant</h4>
          <ul className="flex flex-wrap items-start justify-start py-6 gap-2 md:gap-4 text-xs md:text-1xl text-five border-secondary text-center">
            <li className="p-2 px-3 max-w-fit rounded-full border bg-seven border-seven antialiased text-sm text-center">
              VMR Pvt. Ltd.
            </li>
            <li className="p-2 px-3 max-w-fit rounded-full border bg-seven border-seven antialiased text-sm text-center">
              Part-time
            </li>
            <li className="p-2 px-3 max-w-fit rounded-full border bg-seven border-seven antialiased text-sm text-center">
              2021 Sep - 2022 Fab
            </li>
          </ul>
        </article>
        <article className="m-2 md:flex text-four justify-between items-center border-b-1 border-seven md:hover:pl-1 md:hover:translate-x-1 md:transition-all">
          <h4 className="text-xl md:text-2xl">Self Employed</h4>
          <ul className="flex flex-wrap items-start justify-start py-6 gap-2 md:gap-4 text-xs md:text-1xl text-five border-secondary text-center">
            <li className="p-2 px-3 max-w-fit rounded-full border bg-seven border-seven antialiased text-sm text-center">
              Field work
            </li>
            <li className="p-2 px-3 max-w-fit rounded-full border bg-seven border-seven antialiased text-sm text-center">
              Contract
            </li>
            <li className="p-2 px-3 max-w-fit rounded-full border bg-seven border-seven antialiased text-sm text-center">
              2021 Sep - 2022 Fab
            </li>
          </ul>
        </article>
        <article className="m-2 md:flex text-four justify-between items-center border-b-1 border-seven md:hover:pl-1 md:hover:translate-x-1 md:transition-all">
          <h4 className="text-xl md:text-2xl">Search Engine Markeing Intern.</h4>
          <ul className="flex flex-wrap items-start justify-start py-6 gap-2 md:gap-4 text-xs md:text-1xl text-five border-secondary text-center">
            <li className="p-2 px-3 max-w-fit rounded-full border bg-seven border-seven antialiased text-sm text-center">
              Web Infomatrix Pvt. Ltd.
            </li>
            <li className="p-2 px-3 max-w-fit rounded-full border bg-seven border-seven antialiased text-sm text-center">
              Full-time
            </li>
            <li className="p-2 px-3 max-w-fit rounded-full border bg-seven border-seven antialiased text-sm text-center">
              2022 Sep - 2022 Dec
            </li>
          </ul>
        </article>
        <article className="m-2 md:flex text-four justify-between items-center border-b-1 border-seven md:hover:pl-1 md:hover:translate-x-1 md:transition-all">
          <h4 className="text-xl md:text-2xl">Freelancer</h4>
          <ul className="flex flex-wrap items-start justify-start py-6 gap-2 md:gap-4 text-xs md:text-1xl text-five border-secondary text-center">
            <li className="p-2 px-3 max-w-fit rounded-full border bg-seven border-seven antialiased text-sm text-center">
              Online
            </li>
            <li className="p-2 px-3 max-w-fit rounded-full border bg-seven border-seven antialiased text-sm text-center">
              Contract
            </li>
            <li className="p-2 px-3 max-w-fit rounded-full border bg-seven border-seven antialiased text-sm text-center">
              2024 Aug - Present
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
