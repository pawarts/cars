import CarFilter from "@/components/CarSelector/CarFilter";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <h1 className="text-2xl font-bold mb-20">CarFilter</h1>
      <CarFilter />
    </div>
  );
}
