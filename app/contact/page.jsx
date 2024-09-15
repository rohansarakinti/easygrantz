'use client'
import React from 'react'
import { Header1 } from '@/components/ui/nav';


function Page() {
    async function handleSubmit(event) {
        console.log("Submitted")
        const formData = new FormData(event.target);

        formData.append("access_key","f8530e73-74bc-45e3-9808-410492f833ae");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
        }
        return;
    }

  return (
    <>
        <Header1 />
        <section className="bg-white py-20">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-green-600 ">Contact Us</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">Got a technical issue? Want to send feedback about a specific feature? Need details about our website or services? Let us know.</p>
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                        <label for="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                        <input type="text" id="name" name="name" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="What's Your Name?" required />
                    </div>
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                        <input type="email" id="email" name="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="name@email.com" required/>
                    </div>
                    
                    <div className="sm:col-span-2">
                        <label for="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                        <textarea id="message" name="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Let us know how we can help you or leave a comment..."></textarea>
                    </div>
                    <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-green-600 sm:w-fit hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-primary-300">Send message</button>
                </form>
            </div>
        </section>
        {/* <ContactForm handleSubmit={handleSubmit} /> */}
    </>
    
  )
}

export default Page