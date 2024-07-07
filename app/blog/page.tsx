import Demo from "../components/demo";
// `app/page.tsx` is the UI for the `/` URL

export default function blog() {
  return(
    <section className="m-auto max-w-fit bg-eight flex flex-col justify-center items-center">
      <Demo/>
    </section>
  ) ;
}
