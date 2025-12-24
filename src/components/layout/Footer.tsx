export function Footer() {
  return (
    <footer className="bg-space-dark border-t border-space-gray/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-suit-blue to-mars-red" />
              <span className="text-xl font-bold">MARS SUIT</span>
            </div>
            <p className="text-suit-silver text-sm max-w-md">
              Next-generation spacesuit technology designed for Mars exploration.
              Engineering the future of human space travel.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-suit-silver">
              <li>
                <a href="#features" className="hover:text-suit-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#specs" className="hover:text-suit-white transition-colors">
                  Specifications
                </a>
              </li>
              <li>
                <a href="#technology" className="hover:text-suit-white transition-colors">
                  Technology
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-suit-silver">
              <li>
                <a href="#about" className="hover:text-suit-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-suit-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-suit-white transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-space-gray/20 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-suit-silver text-sm">
            &copy; {new Date().getFullYear()} Mars Suit. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-suit-silver">
            <a href="#privacy" className="hover:text-suit-white transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-suit-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
