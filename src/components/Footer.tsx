import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-32">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-display text-base">HarvestGuard</p>
          <p className="text-muted text-sm mt-1 max-w-md">
            A proposal for nuclear infrastructure enabling safe, traceable gamma-ray
            food preservation — built for URFU International Hackathon 2026.
          </p>
        </div>
        <div className="flex gap-6 text-sm text-muted">
          <Link to="/technology" className="hover:text-primary focus-ring">
            Technology
          </Link>
          <Link to="/facility" className="hover:text-primary focus-ring">
            Facility
          </Link>
          <Link to="/traceability" className="hover:text-primary focus-ring">
            Traceability
          </Link>
          <Link to="/contact" className="hover:text-primary focus-ring">
            Contact
          </Link>
        </div>
      </div>
      <p className="text-center text-xs text-muted/70 pb-8">
        Demonstration project — not a real operating facility or commercial certification.
      </p>
    </footer>
  );
}
