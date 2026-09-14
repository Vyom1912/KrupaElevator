import { useState, useEffect, useRef, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { PageHero, ElevatorSection } from "../../components/index";
import { ELEVATORS } from "../../data/index";
import "./ProductsPage.css";

export default function ProductsPage() {
  const location = useLocation();
  const scrolledRef = useRef(false);

  useEffect(() => {
    if (scrolledRef.current) return;
    const hash = location.hash.replace("#", "");
    if (!hash) return;
    const t = setTimeout(() => {
      const el = document.getElementById(hash);
      if (!el) return;
      const navH =
        parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--nav-h",
          ),
        ) || 64;
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - navH - 6,
        behavior: "smooth",
      });
      scrolledRef.current = true;
    }, 120);
    return () => clearTimeout(t);
  }, [location.hash]);

  return (
    <main>
      <PageHero
        label='Our Elevator Range'
        heading='Complete Vertical Transportation Solutions'
        text='Eight product lines — from 2-person home elevators to 5000 kg industrial goods lifts — each with full technical specifications.'
        chips={[
          "Passenger",
          "Hospital",
          "Goods",
          "Capsule",
          "Car",
          "Home",
          "MRL",
          "Hydraulic",
        ]}
        dataBg='PRODUCTS'
      />

      <div className='products-layout'>
        <div className='products-content'>
          {ELEVATORS.map((elev) => (
            <ElevatorSection key={elev.id} elev={elev} />
          ))}
        </div>
      </div>
    </main>
  );
}
