import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <div className="relative">
      <div className="absolute top-0 right-0 z-30 p-4 flex gap-2">
        <Button
          variant="ghost"
          className="text-white hover:text-white hover:bg-[#0C3158]/20"
        >
          Log in
        </Button>
        <Button className="bg-[#00A651] hover:bg-[#00A651]/90 text-white">
          Sign up
        </Button>
      </div>

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
  );
}
