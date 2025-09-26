import { useEffect, useState } from "react"
import ContactForm from "./ContactForm"
import Revelotion from "../HomePage/Revelotion"
import Revelotioncard from "../HomePage/Revelotion-card"
import Ask from "./Ask"
function Contact() {
  const [data, setdata] = useState([])
  useEffect(() => {
    fetch('/data/contact/data.json').then((res) => res.json()).then((data) => setdata(data))

  }, [])
  console.log(data)
  return (
    <section className="overflow-hidden">
      <section className="py-6 px-6 md:px-[50px]">
        <div data-aos="fade-down" className='text-white flex flex-wrap space-y-4 space-x-4 gap-2 justify-between'>
          {
            data.map((item, index) => {
              return <div key={index} className="gap-0.5">
                <div  className="flex flex-col md:flex-wrap space-x-3 space-y-3 gap-1.5 justify-between px-4">
                  <h2>{item.Section}</h2>
                </div>

                <div>
                  <div className="flex flex-col md:flex-wrap space-y-4 space-x-4 px-4 py-6 text-[#98989A]">
                    {item.Details.item || item.Details.SocialMedia && <p className="flex gap-4">{item.Details.item} {item.Details.SocialMedia.map((item, index) => {
                      return <div key={index} className="flex flex-col md:flex-wrap space-x-4 space-y-4">
                        {item.Platform}
                      </div>
                    })}</p>}
                  </div>
                </div>

                <div className="px-4 gap-3 text-[#98989A]">
                  {item.Details.item1 && <p>{item.Details.item1}</p>}
                </div>
              </div>
            })
          }
        </div>
        <ContactForm />
      </section>
      <Ask />
      <Revelotion />
      <Revelotioncard />
    </section>

  )
}

export default Contact
