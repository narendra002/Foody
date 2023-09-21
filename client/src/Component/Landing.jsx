import { Input, Button } from "@nextui-org/react";
import Food from "../assets/Food.svg";

export default function Landing() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${Food})`,
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
      }}
    >
      <div className="absolute inset-4 flex flex-col items-center justify-center bg-white bg-opacity-0  rounded-lg shadow-lg text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
          Welcome To Our Site
        </h1>
        <div className="w-full max-w-md mx-auto">
          <Input placeholder="Enter City Name" />
          <Button className="mt-2 w-full">Find</Button>
        </div>
      </div>
    </div>
  );
}
