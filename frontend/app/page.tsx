"use client";

import Header from "./dashboard/page";
import PropertyList from "./dashboard/PropertyList";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-#37496e to-[#1e335c]">
      <Header />
      <PropertyList />
    </div>
  );
}
