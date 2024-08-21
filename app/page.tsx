import React from 'react'
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Header1 } from '@/components/ui/nav';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
import Logo from './images/eglogo.png'
import Image from 'next/image';
import CFALogo from './images/chickfila.jpeg';

export default function Page() {
  return (
    <>
        <Header1 />
        <div className="w-full py-20 lg:py-40">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
                    <div className="flex gap-4 flex-col">
                        <div className="flex gap-4 flex-col">
                            <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
                                This is the start of something!
                            </h1>
                            <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                                Managing a small business today is already tough. Avoid further
                                complications by ditching outdated, tedious trade methods. Our
                                goal is to streamline SMB trade, making it easier and faster than
                                ever.
                            </p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <Button asChild size="lg" className="gap-4 border-2 border-green-600" variant="outline">
                                <Link href="/grants">Go to Database!</Link>
                            </Button>
                            <Button disabled size="lg" className="gap-4">
                                Contact Us!
                            </Button>
                        </div>
                    </div>
                    <div className="bg-white rounded-md aspect-square">
                        <Image src={Logo} alt="Easygrantz Logo"/>
                    </div>
                </div>
            </div>
        </div>
        <section className="bg-white">
            <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
                <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 md:text-4xl">You’ll be in good company</h2>
                <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6">
                    <a href="https://www.chick-fil-a.com" className="flex justify-center items-center">
                        <Image src={CFALogo} alt='chick fil a logo'/>
                    </a>
                </div>
            </div>
        </section>
        <div className="w-full py-20 lg:py-40">
            <div className="container mx-auto">
            <div className="flex flex-col gap-10">
                <div className="flex text-center justify-center items-center gap-4 flex-col">
                    <div className="flex gap-2 flex-col">
                        <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
                        FAQs
                        </h4>
                        <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
                        Managing a small business today is already tough. Avoid further
                        complications by ditching outdated, tedious trade methods. Our
                        goal is to streamline SMB trade, making it easier and faster than
                        ever.
                        </p>
                    </div>
                    <div>
                        <Button className="gap-4" variant="outline">
                            Any questions? Reach out
                        </Button>
                    </div>
                    </div>

                    <div className="max-w-3xl w-full mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem  value="index1">
                            <AccordionTrigger>
                            What are grants?
                            </AccordionTrigger>
                            <AccordionContent>
                            Grant: Financial award given by an entity to support an initiative or project. Grants do not need to be repaid.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem  value="index2">
                            <AccordionTrigger>
                            What are microloans?
                            </AccordionTrigger>
                            <AccordionContent>
                            Microloans: Short term loans offered to individuals or organizations, that often come in low amounts. These are designed to assist those who may not qualify for traditional loans.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    </div>
                </div>
            </div>
        </div>
        
     </>
  )
}

