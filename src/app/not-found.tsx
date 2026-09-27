import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full border-2 border-black bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center space-y-6">
        <div className="inline-block px-3 py-1 bg-black text-white font-mono text-xs uppercase font-bold">
          Error 404
        </div>
        <h1 className="text-4xl font-headline font-bold uppercase tracking-tight">
          Page Not Found
        </h1>
        <p className="text-zinc-600 font-body text-sm leading-relaxed">
          The requested coordinate does not exist in this architecture.
        </p>
        <div>
          <Link href="/">
            <Button
              variant="default"
              className="rounded-none border-2 border-black bg-primary hover:bg-accent text-white font-headline font-bold uppercase py-5 px-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px]"
            >
              Return to Base
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
