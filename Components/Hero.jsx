
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="bg-[#0c0617] min-h-screen flex flex-col items-center justify-center text-white">
      <header className="absolute top-0 left-0 right-0 flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          <img
            alt="eDC IIT Delhi logo"
            className="h-10"
            height="40"
            src="/placeholder.svg"
            style={{
              aspectRatio: "40/40",
              objectFit: "cover",
            }}
            width="40"
          />
          <nav className="flex space-x-4 justify-center md:justify-start">
            <a className="hover:text-gray-300" href="#">
              Home
            </a>
            <a className="hover:text-gray-300" href="#">
              Schedule
            </a>
            <a className="hover:text-gray-300" href="#">
              Speakers
            </a>
            <a className="hover:text-gray-300" href="#">
              Events
            </a>
            <a className="hover:text-gray-300" href="#">
              Merchandise
            </a>
            <a className="hover:text-gray-300" href="#">
              Sponsors
            </a>
            <a className="hover:text-gray-300" href="#">
              About
            </a>
            <a className="hover:text-gray-300" href="#">
              Startup Expo
            </a>
          </nav>
        </div>
        <div className="space-x-2">
          <Button className="bg-blue-600 hover:bg-blue-700">Login</Button>
          <Button className="bg-blue-600 hover:bg-blue-700">Register</Button>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-6xl font-bold mb-2">ECON 2024</h1>
        <p className="text-2xl mb-8">GENESIS WAVE OF INNOVATION</p>
        <p className="text-xl mb-12">3 & 4 FEB</p>
        <div className="space-x-4">
          <Button className="bg-blue-500 hover:bg-blue-600">Register</Button>
          <Button className="bg-transparent border border-white hover:bg-white hover:text-blue-500">Login</Button>
        </div>
      </main>
    </div>
  )
}

