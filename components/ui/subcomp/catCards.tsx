import { listcr } from './listcr'
import Image from 'next/image'
import Cat from "../../../public/image-catsec.jpg"
 
export default function CatCards() {
    const listcat = listcr
    return (
        <>
            <div className="grid grid-cols-3 mt-12">

                {listcat.map((item) => {
                    return (
                        <div key={item.id} className="border-4 border-blue-950 m-6 shadow-2xl">
                            <p className="text-center font-semibold text-lg">
                                {item.title}

                            </p>
                            <Image src={item.url} alt="1" />
                            <div className="flex justify-center">
                                {/* <button onClick={Lala} className=" border rounded-lg px-2 bg-blue-700">Add to Cart</button> */}

                            </div>

                        </div>

                    )
                })}


            </div>
            <div>
                <div className="my-6">
                    <Image src={Cat} alt="catsec" />
                </div>
            </div>
        </>
    )
}
