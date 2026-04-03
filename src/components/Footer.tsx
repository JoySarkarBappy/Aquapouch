export default function Footer() {
  return (
    <footer className="bg-surface-container w-full rounded-none mt-24 border-t border-outline-variant/10">
      <div className="flex flex-col lg:flex-row justify-between items-center px-6 md:px-12 py-12 md:py-16 w-full max-w-screen-2xl mx-auto gap-12">
        <div className="text-center lg:text-left">
          <div className="text-xl font-bold text-primary mb-4 uppercase tracking-[0.2em] font-headline">
            Aquapouch
          </div>
          <p className="text-on-surface-variant max-w-sm text-sm leading-relaxed">
            Team ANDROMEDA, Department of Materials and Metallurgical Engineering. BUET.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center items-center gap-x-8 gap-y-6 md:gap-x-12">
          <a className="text-on-surface-variant hover:text-primary transition-all duration-300 text-[10px] font-bold uppercase tracking-[0.15em] hover:translate-y-[-2px]" href="#">Privacy Policy</a>
          <a className="text-on-surface-variant hover:text-primary transition-all duration-300 text-[10px] font-bold uppercase tracking-[0.15em] hover:translate-y-[-2px]" href="#">Terms of Service</a>
          <a className="text-on-surface-variant hover:text-primary transition-all duration-300 text-[10px] font-bold uppercase tracking-[0.15em] hover:translate-y-[-2px]" href="#">Contact BUET Team</a>
          <a className="text-on-surface-variant hover:text-primary transition-all duration-300 text-[10px] font-bold uppercase tracking-[0.15em] hover:translate-y-[-2px]" href="#">Sustainability Report</a>
        </div>
      </div>
    </footer>
  );
}
