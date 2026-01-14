import { FiFastForward } from "react-icons/fi";
import Button from "../ui/button";
import Image from "next/image";

const HeroSection = () =>{
    return (
        <section 
            id="hero-section" 
            className="container mx-auto h-screen flex">
                <div className="relative self-center">
                    <Image
                    src="/images/img-basketball-transparent.svg"
                    width={432}
                    height={423}
                    alt="image sporton"
                    className="grayscale absolute left-0 -top-10"
                    />

                    <div className="relative ml-40 w-full">
                    <div className="text-primary italic">
                        Friday Sale, 50%
                    </div>
                    <h1 className="font-extrabold text-[80px] italic bg-gradient-to-b leading-tight from-black to-[#979797] bg-clip-text text-transparent">
                        WEAR YOUR <br/> TOP-QUALITY <br/> SPORTSWEAR
                    </h1>
                    <p className="w-1/2 mt-6 leading-loose">
                    Engineered for endurance and designed for speed. Experience gear that moves as fast as you do. Premium fabrics. Unmatched comfort. Limitless motion.</p>
                    <div className="flex mt-6 gap-5">
                        <Button>
                            Explore More <FiFastForward/>
                        </Button>
                        <Button variant="ghost">
                            Watch Video{" "}
                            <Image
                            src="/images/icon-play-video.svg"
                            alt="icon playvideo"
                            height={29}
                            width={29}
                            />
                        </Button>
                    </div>
                    </div>
                      <Image
                        src="/images/img-hero.svg"
                        width ={623}
                        height={687}
                        alt="image sporton hero"
                        className="absolute -right-1 top-1/2 -translate-y-1/2"
                        />

                      <Image
                        src="/images/Ellipse 3.svg"
                        width ={150}
                        height={150}
                        alt="image Ellipse"
                        className="absolute -translate-y-1/2 -right-10 top-1/2"
                        />
                </div>
        </section>
    )
}
export default HeroSection;

