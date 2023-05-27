import Image from "next/image";
import CatSec from "../../public/image-catsec.jpg"
import Shoe1 from "../../public/running-shoe-371624_640.jpg"
export default function Catsec() {
  return (
    <main className="flex">
    <div>
        <div className="text-center font-extrabold text-6xl mt-5"> CATEGORIES</div>
        <div className="flex mt-12">
            <div>
                
                <div className="border-4 border-blue-950 m-6 shadow-2xl">
                <p className="text-center font-semibold text-lg">
                    Running Shoes : Highly customized for running
                </p>
                    <Image src={Shoe1} alt="1"/>
                   
                </div>
            </div>
            <div>
            <div className="border-4 border-blue-950 m-6 shadow-2xl">
                <p className="text-center font-semibold text-lg">
                    Running Shoes : Highly customized for running
                </p>
                    <Image src={Shoe1} alt="1"/>
                   
                </div>

            </div>  
            </div>
<div className="flex">
            <div>
            <div className="border-4 border-blue-950 m-6 shadow-2xl">
                <p className="text-center font-semibold text-lg">
                    Running Shoes : Highly customized for running
                </p>
                    <Image src={Shoe1} alt="1"/>
                   
                </div>

            </div>  
            <div>
            <div className="border-4 border-blue-950 m-6 shadow-2xl">
                <p className="text-center font-semibold text-lg">
                    Running Shoes : Highly customized for running
                </p>
                    <Image src={Shoe1} alt="1"/>
                   
                </div>

            </div>  
            </div>
        </div>
        <div>
            <div className="my-6">
        <Image src={CatSec} alt="catsec"/>
        </div>
        </div>
    </main>
  )
}
