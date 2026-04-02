export default function Footer() {
  return (
    <footer className="bg-surface-container w-full rounded-none mt-24">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-12 md:py-16 w-full max-w-screen-2xl mx-auto font-body text-sm tracking-wide">
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <div className="text-lg font-bold text-primary mb-4 uppercase tracking-widest font-headline">
            Aquapouch
          </div>
          <p className="text-on-surface-variant max-w-xs">
            © 2024 Aquapouch Editorial Engineering. Team ANDROMEDA, Department of Materials and Metallurgical Engineering. BUET.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Contact BUET Team</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Sustainability Report</a>
        </div>
      </div>
    </footer>
  );
}
