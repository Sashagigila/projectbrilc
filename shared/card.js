'use client'

import picture from "../img/example.png";
import Image from "next/image";
import { useState, useEffect } from "react";

export const DogCard = ({breed}) =>{
    const [imageSrc, setImageSrc] = useState('');
    const [Loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchImage =async () =>{
            try{
                const response = await fetch('https://dog.ceo/api/breed/hound/image/random');
                const data = await response.json();
                setImageSrc(data.message);
            } catch (error) {
                console.error('Error');
            }
            finally {
                setLoading(false);
            }
        };
    }, [])

  return(
    <div>
      <Image src={imageSrc} className='rounded-[50px] w-[263px]' alt='alt text' width={} height={}/>
    </div>
  )
}