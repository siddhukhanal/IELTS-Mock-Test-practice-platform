import ContactUs from '@/src/app/components/ContactUs/ContactUs'

export default function Page() {
  return (
    <div className="px-4 flex gap-4 flex-col bg-stone-100 rounded-lg shadow w-full min-h-screen">
      <header className="">
        <h1 className="text-2xl font-bold text-stone-800p p-4">Contact Us</h1>

      </header>

      <div className="w-full">
        <ContactUs />
      </div>



    </div>
  )
}


