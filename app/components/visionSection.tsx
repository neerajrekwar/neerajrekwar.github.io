export default function VisionSection() {
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
          <div className="text-4xl text-third sm:text-5xl sm:mx-2">
            &#8226;
          </div>
          Work Experince
        </div>

        <div>
          <div className="">
           <div className="m-2 md:flex justify-between items-center border-b-1">
             <h4 className="  text-four font-semibold md:text-2xl">Adminstrative Assistant</h4>
            <ul className="flex py-2 gap-2 md:gap-4 text-xs md:text-1xl text-five text-center">
             <li className="p-1 px-2 max-w-fit border-1 bg-seven rounded-full text-center">
              VMR Pvt. Ltd.
             </li>  
             <li className="p-1 px-2 max-w-fit border-1 bg-seven rounded-full text-center">
              2021 sep - 2022 fab
             </li>  
            </ul>
           </div>
          </div>
        </div>
      </div>
    </>
  );
}
