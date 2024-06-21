export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h2 className="text-yellow-400 pb-2">Inner Layout</h2>
      <div className='text-white'>
        {children}
      </div>
    </>
  );
}
