"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import PropertyList from "./PropertyList";
import Link from "next/link";

export default function DashboardPage() {
  const { user, logout, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/");
    }
  }, [user, loading, router]);

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return null;
  }

  return (
    <div>
      {/* Header Section */}
      <div className="relative">
        {/* <div className="absolute top-4 right-8">
          <Link
            href="/"
            onClick={handleLogout}
            className="bg-[#f11c0c] text-white px-4 py-2 rounded-full hover:bg-[#ff8a8a] transition-colors text-sm font-medium"
          >
            Logout
          </Link>
        </div> */}

        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0C3158]/90 z-10"
          aria-hidden="true"
        />

        <div
          className="w-full h-[240px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
          }}
        />

        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center pt-8">
          <h1 className="text-[42px] font-bold text-[#c9c9c9] mb-1">
            Amaia Scapes Laguna
          </h1>
          <h2 className="text-[18px] text-[#00A651] tracking-[0.2em] font-medium">
            PROPERTY LIST
          </h2>
        </div>
      </div>

      {/* Property List Section */}
      <PropertyList />
    </div>
  );
}
