import { ThemeProvider } from "../context/ThemeContext"

export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <body className="bg-primary ">
        
        <div className="basis-1/3 text-five font-semibold bg-four m-auto h-64 sm:h-auto ">
          <h1 className="p-1 text-6xl">Blog Posts</h1>
          <p className="p-2">
            Latest News and <br /> update
          </p>
        </div>
         <ThemeProvider>{children}</ThemeProvider>
      </body>
    )
  }