"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, CalendarDays } from "lucide-react";
import Link from "next/link";

export default function HomeCta() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section ref={ref} className="py-20 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative rounded-[28px] overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%)",
          }}
        >
          {/* decorative blobs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-leaf/15 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-nursery/10 rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />
          <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)", backgroundSize: "36px 36px" }} />

          <div className="relative p-10 md:p-16 text-center">
            <span className="text-5xl mb-5 block">🏫</span>
            <h2 className="font-nunito font-extrabold text-3xl sm:text-4xl text-white mb-4 leading-tight">
              Ready to Give Your Child
              <br />
              <span className="text-nursery">A Strong Foundation?</span>
            </h2>
            <p className="font-poppins text-white/75 text-base mb-8 max-w-md mx-auto leading-relaxed">
              Join hundreds of families who chose Thinkers Base Academy — where every child is known, valued, and inspired to become their very best.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://wa.me/2348037134462"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-nursery text-forest font-nunito font-extrabold text-sm px-7 py-3.5 rounded-button hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-lg shadow-black/20"
              >
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 border border-white/25 text-white font-nunito font-bold text-sm px-7 py-3.5 rounded-button hover:bg-white/20 hover:-translate-y-0.5 transition-all"
              >
                <CalendarDays className="w-4 h-4" />
                Schedule a Visit
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}