'use client'
import Image from "next/image";
import CatSec from "../../public/image-catsec.jpg"
import Shoe1 from "../../public/running-shoe-371624_640.jpg"
import { listcr } from "./subcomp/listcr";
import { NextResponse } from "next/server";
import CatCards from "./subcomp/catCards";


export default function Catsec(catCards:) {
    const Lala = async () => {
        const abc = await fetch("/api/cartdb", {
            method: "POST",
            body: JSON.stringify({
                name: "dksmdf",
                owner: "jsdnjkd",
            })
        })
        return NextResponse.json
    }
    return (


        <main className="flex">
            <div>
                <div className="text-center font-extrabold text-6xl mt-5"> CATEGORIES</div>
                <CatCards/>
            </div>
        
        </main>
        
    )
}
