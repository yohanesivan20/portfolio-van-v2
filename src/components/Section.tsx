export default function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`
        min-h-screen 
        flex flex-col justify-center 
        px-6 
        py-24 md:py-32   // 🔥 ini kunci spacing mobile
        border-b border-white/10 
        ${className}
      `}
    >
      <div className="max-w-6xl w-full mx-auto">
        {children}
      </div>
    </section>
  );
}