import { useState, useEffect } from "react";

const NAV_OFFSET = 110;

export function useScrollSpy(ids) {
  const [active, setActive] = useState("");

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY || window.pageYOffset;
        const threshold = scrollY + NAV_OFFSET;
        let current = "";
        for (const id of ids) {
          const el = document.getElementById(id);
          if (!el) continue;
          const top = el.getBoundingClientRect().top + scrollY;
          if (top <= threshold) current = id;
        }
        setActive(current);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids]);

  return active;
}
