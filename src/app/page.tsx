import Image from 'next/image'
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="bg-hero h-[100vh] relative">
      <Header/>
        {/*<Hero/>*/}
    </div>
  )
}
