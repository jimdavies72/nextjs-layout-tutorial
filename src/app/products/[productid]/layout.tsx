export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <h2 className='text-yellow-400 pb-2'>Features products</h2>
    </>
  );
};
