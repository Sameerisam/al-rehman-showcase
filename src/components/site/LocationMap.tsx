import { useEffect, useState } from "react";
import { ExternalLink, MapPin } from "lucide-react";
import {
  contactInfo,
  images,
  mapsEmbedSrc,
  mapsHref,
} from "./data";

export function LocationMap() {
  const [online, setOnline] = useState(true);

  useEffect(() => {
    const sync = () => setOnline(typeof navigator !== "undefined" ? navigator.onLine : true);
    sync();
    window.addEventListener("online", sync);
    window.addEventListener("offline", sync);
    return () => {
      window.removeEventListener("online", sync);
      window.removeEventListener("offline", sync);
    };
  }, []);

  if (online) {
    return (
      <div className="relative overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border transition-transform duration-500 hover:shadow-xl">
        <iframe
          title="AR Pizza & Cafe exact location map"
          src={mapsEmbedSrc}
          className="h-[min(420px,70vw)] min-h-[360px] w-full border-0 lg:h-full lg:min-h-[420px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <a
          href={mapsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-3 left-3 z-10 inline-flex items-center gap-2 rounded-lg bg-white px-3.5 py-2 text-sm font-semibold text-[#1a73e8] shadow-md transition-transform duration-300 hover:scale-105 active:scale-95"
        >
          Open in Maps
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border">
      <img
        src={images.locationMapOffline}
        alt={`Exact location — ${contactInfo.address}`}
        width={1600}
        height={900}
        className="h-[min(420px,70vw)] min-h-[360px] w-full object-cover lg:h-full lg:min-h-[420px]"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-ink/90 via-ink/40 to-transparent p-6 text-center">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-gold text-ink shadow-lg">
          <MapPin className="h-6 w-6" />
        </span>
        <p className="mt-3 display-title text-3xl text-cream">AR Pizza &amp; Cafe</p>
        <p className="mt-1 text-sm font-semibold text-white/90">{contactInfo.address}</p>
        <p className="mt-1 text-sm text-white/75" dir="rtl">
          {contactInfo.addressUrdu}
        </p>
        <p className="mt-2 text-xs font-bold uppercase tracking-wider text-gold">
          Offline — saved exact location
        </p>
        <a
          href={mapsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-ink"
        >
          <MapPin className="h-3.5 w-3.5" />
          Open in Maps
        </a>
      </div>
    </div>
  );
}
