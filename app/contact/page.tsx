// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
  return (
    <>
      <div  className="m-auto min-h-screen rounded p-2 sm:flex sm:border-rose-600 md:border-blue-400 lg:w-[70%] lg:flex-1 lg:border-yellow-500">
        <div className=" mb-3 rounded-md p-2 text-3xl font-semibold text-[#353535] sm:w-[40%] sm:text-4xl md:text-5xl lg:text-6xl">Facilis blanditiis impedit atque.</div>
        <div className="rounded-md border-lime-400 bg-secondary text-six p-2 font-semibold  sm:w-[60%]">
          <form action="https://formspree.io/f/mnqebqjq" method="POST" className="m-4">
            <label className="text-sm ">
              Full name <br />
              <input className="ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring mt-2 flex h-10 w-full rounded  bg-six px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:bg-lime-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" type="text" name="name" placeholder="Enter name..." /> <br />
            </label>
            <label className="text-sm ">
              Your phone <br />
              <input className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring mt-2 flex h-10 w-full rounded border-lime-600 bg-lime-200 px-3 py-2 text-sm ring-yellow-400 file:border-0 file:bg-transparent file:text-sm file:font-medium focus:bg-lime-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" type="tel" placeholder="+00XXXXXXXXXX" name="phone" title="Not valid"  required autoComplete="off"  /><br />
            </label>
            <label className="text-sm text-[#353535]">
              Your email <br />
              <input className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring mt-2 flex h-10 w-full rounded border-lime-600 bg-lime-200 px-3 py-2 text-sm ring-yellow-400 file:border-0 file:bg-transparent file:text-sm file:font-medium focus:bg-lime-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" type="email" name="email" placeholder="Enter email" />
            </label>
            <br />
            <label className="text-sm text-[#353535]">
              Your message: <br />
              <textarea className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring mt-2 flex h-24 w-full rounded border-lime-600 bg-lime-200 px-3 py-2 text-sm ring-yellow-400 file:border-0 file:bg-transparent file:text-sm file:font-medium focus:bg-lime-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" name="message" placeholder="Send a note..."></textarea>
            </label>
            <br />
            {/* <!-- your other form fields go here --> */}

            <button className="h-10 w-28 rounded bg-lime-700 text-white transition ease-in active:origin-bottom active:scale-95 active:border active:border-lime-700 active:bg-lime-100 active:text-lime-800 active:transition-all">Send</button>
          </form>
        </div>
      </div>

    </>
  )
}
