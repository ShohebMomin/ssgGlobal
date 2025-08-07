import HeadingParagraph from './HeadingParagraph'
const ReservePujaForm = () => {

  return (
    <>

        <HeadingParagraph heading="Reserve Your Puja Now" text="text-customPurple"/>
        <div className="max-w-4xl mx-auto p-6  rounded-2xl bg-[#fffff0]">
          <form className="space-y-4">
            {/* 2 Column Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="p-3 rounded-md bg-white w-full focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Phone No."
                className="p-3 rounded-md bg-white w-full focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-3 rounded-md bg-white w-full focus:outline-none"
              />
              <input
                type="date"
                className="p-3 rounded-md bg-white w-full focus:outline-none"
              />
            </div>

            <input
              type="text"
              placeholder="Address"
              className="p-3 rounded-md bg-white w-full focus:outline-none"
            />

            <textarea
              rows="4"
              placeholder="Message"
              className="p-3 rounded-md bg-white w-full focus:outline-none"
            />

            {/* Button */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="bg-[#800080] text-white font-semibold py-2 px-6 rounded-full hover:bg-[#5e005e]"
              >
                Reserve Now
              </button>
            </div>
          </form>
    </div>
    </>
  )
}

export default ReservePujaForm
