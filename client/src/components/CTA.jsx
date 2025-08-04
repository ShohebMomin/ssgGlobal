
const CTA = (props) => {
  return (
    <>
      <section>
            <div className="w-full md:flex md:justify-center items-center h-auto text-center my-5 bg-amber-50">
                <div className="md:h-20 items-center justify-center flex md:mx-10 m-1 md:text-2xl font-playfair font-bold">
                    <h1>{props.heading}</h1>
                </div>
                <button className="bg-customPurple md:px-4 px-2 text-xs md:text-xl rounded-4xl py-1.5 text-white">{props.buttonText}</button>
            </div>
        </section>
    </>
  )
}

export default CTA
