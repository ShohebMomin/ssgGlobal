import HeadingParagraph from './HeadingParagraph'
const ReservePujaForm = () => {

  return (
    <>

        <HeadingParagraph heading="Reserve Your Puja Now" text="text-customPurple"/>
        <div className="max-w-6xl  flex justify-center m-auto mb-20 rounded-2xl bg-[#fffff0]">
        <form action="post" >
            <div id="name-number">
            <input className="form-input" type="text" id="full-name" placeholder="Full Name"/>
            <input className="form-input" type="number" id="phone-number" placeholder="Phone Number"/>
            </div>
            <div id="email-date">
            <input className="form-input" type="text" id="email" placeholder="Email"/>
            <input className="form-input" type="date" id="preferred-date" placeholder="Preferred Date"/>
            </div>
            <div id="address-message" className="">
            <input  className="" type="text" id="address" placeholder="Address" />
            <input className="!h-28" type="text-box" id="message" placeholder="Message" />
            </div>
            <div className="justify-center flex m-10"><button className="purple-btn m-auto">Reserve Now</button></div>
        </form>
        </div>
    </>
  )
}

export default ReservePujaForm
