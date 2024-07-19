export default function ExpSection() {
  const svgStyles = {
    width: "auto",
    height: "100vh",
    filter: "contrast(170%) brightness(1000%)",
    background:
      "linear-gradient(0deg, rgba(0,0,255,1), rgba(0,0,0,0)), url(/projects/noise.svg)",
  };

  return (
    <>
      <div className="p-2 min-h-screen max-w-6xl m-auto">
        <div className="justify-start text-secondary flex items-center gap-2 sm:gap-1 py-10 text-2xl  font-semibold visible sm:text-4xl">
          <div className="text-4xl  text-third sm:text-5xl sm:mx-2">
            &#8226;
          </div>
          Work Experince
        </div>

        <div>
          <div className="">
            <div className="m-2 md:flex static text-four justify-between items-center border-b-1 border-seven  md:hover:pl-1 md:hover:translate-x-1 md:transition-all">
              <h4 className="  text-xl md:text-2xl">Adminstrative Assistant</h4>
              <ul className="flex flex-wrap items-start justify-start py-6 gap-2  md:gap-4 text-xs md:text-1xl text-five border-secondary text-center  ">
                <li className="p-2 px-3 max-w-fit rounded-full border bg-seven border-seven  antialiased text-sm text-center">
                  VMR Pvt. Ltd.
                </li>
                <li className="p-2 px-3 max-w-fit rounded-full border bg-seven border-seven  antialiased text-sm text-center">
                  Part-time
                </li>
                <li className="p-2 px-3 max-w-fit rounded-full border bg-seven border-seven  antialiased text-sm text-center">
                  2021 Sep - 2022 Fab
                </li>
              </ul>
            </div>
            <div className="m-2 md:flex text-four justify-between items-center border-b-1 border-seven md:hover:pl-1 md:hover:translate-x-1 md:transition-all">
              <h4 className="  text-xl md:text-2xl">Self Employed</h4>
              <ul className="flex flex-wrap items-start justify-start py-6 gap-2  md:gap-4 text-xs md:text-1xl text-five border-secondary text-center">
                <li className="p-2 px-3 max-w-fit rounded-full border bg-seven border-seven  antialiased text-sm text-center">
                  VMR Pvt. Ltd.
                </li>
                <li className="p-2 px-3 max-w-fit rounded-full border bg-seven border-seven  antialiased text-sm text-center">
                  Contract
                </li>

                <li className="p-2 px-3 max-w-fit rounded-full border bg-seven border-seven  antialiased text-sm text-center">
                  2021 Sep - 2022 Fab
                </li>
              </ul>
            </div>
            <div className="m-2 md:flex text-four justify-between items-center border-b-1 border-seven md:hover:pl-1 md:hover:translate-x-1 md:transition-all">
              <h4 className="text-xl md:text-2xl">SEO Intern.</h4>
              <ul className="flex flex-wrap items-start justify-start py-6 gap-2 md:gap-4 text-xs md:text-1xl text-five border-secondary text-center">
                <li className="p-2 px-3 max-w-fit rounded-full border bg-seven border-seven   antialiased text-sm text-center">
                  Web Infomatrix Pvt. Ltd.
                </li>
                <li className="p-2 px-3 max-w-fit rounded-full border bg-seven border-seven  antialiased text-sm text-center">
                  Full-time
                </li>
                <li className="p-2 px-3 max-w-fit rounded-full border bg-seven border-seven  antialiased text-sm text-center">
                  2022 Sep - 2022 Dec
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
