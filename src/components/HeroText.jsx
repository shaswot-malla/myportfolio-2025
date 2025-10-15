import { FlipWords } from "./FlipWords"


const HeroText = () => {
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
        {/* DesktopView */}
        <div className="flex-col hidden md:flex c-space">
            <h1 className="text-4xl font-medium">Greetings! Im Shaswot </h1>
            <br></br>
            <div className="flex flex-col items-start">
                <p className="text-3xl font-medium text-neutral-300">An artist and a designer <br/> 
                who rock n rolls and is dedicated to crafting awesome designs</p>
            <div>
               <FlipWords words={["Secure", "Modern", "Fun", "Scalable"]} className={"font-black text-white text-8xl"}/>
            </div>
            <p className="text-2xl font-medium text-neutral-300">
                Web Design and Solutions 
            </p>
            </div>
        </div>
        {/* { MobileView } */}
    </div>
  )
}

export default HeroText