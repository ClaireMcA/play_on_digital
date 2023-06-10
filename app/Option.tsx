'use client';

import React, { FC } from 'react';
import Link from 'next/link';

interface Props {
    imgNum: number,
    title: string,
    subtitle: string,
    link: string
}

export default function Option (props:Props) {

    return (
            <Link href={props.link} className="items-center grayscale hover:grayscale-0 w-full h-full bg-cover" >
                <div className="rounded-lg px-3 pb-16 pt-14 h-full items-center grid" style={{ backgroundColor: "rgb(31, 41, 55, 0.7)" }}>
                  <h5 className="text-white text-xl text-center title py-0">{props.title}</h5>
                  <p className="secondaryTitle text-center text-white py-0">{props.subtitle}</p>
                </div>
            </Link>
    )
}

