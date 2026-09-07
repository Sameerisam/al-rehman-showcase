import { Link } from "@tanstack/react-router";
import { About } from "./About";

/** Compact about teaser for the home page */
export function AboutTeaser() {
  return (
    <div>
      <About showHighlights={false} />
      <div className="-mt-6 pb-14 text-center sm:-mt-10 sm:pb-20">
        <Link to="/about" className="btn-outline !border-ink !text-ink hover:!bg-ink hover:!text-gold">
          Read Our Story
        </Link>
      </div>
    </div>
  );
}
