import { useEffect } from "react";

const SITE_NAME = "KRUPA ELEVATORS";

function upsertMeta(name, content) {
  if (!content) return;
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertCanonical(href) {
  let tag = document.querySelector('link[rel="canonical"]');
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", "canonical");
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", href);
}

/**
 * Sets the document title, meta description, and canonical link for the
 * current route. No external dependency (no react-helmet) — plain DOM writes
 * via useEffect, since this is a client-rendered SPA with one index.html.
 */
export default function Seo({ title, description, path }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Reliable Riding Experience`;
    document.title = fullTitle;
    upsertMeta("description", description);

    const base = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");
    const routePath = path || window.location.pathname.replace(base, "") || "/";
    const canonicalHref = `${window.location.origin}${base}${routePath === "/" ? "/" : routePath}`;
    upsertCanonical(canonicalHref);
  }, [title, description, path]);

  return null;
}
