export default function ContactLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <body className="bg-primary">{children}</body>;
}
