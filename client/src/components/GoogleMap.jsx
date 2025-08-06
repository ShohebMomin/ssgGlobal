const GoogleMap = () => {
  return (
    <>
       
            <div id="map" className="md:w-2/4 md:h-96 h-80 m-auto md:p-0 p-5  w-full overflow-hidden">
            <iframe className=" rounded-2xl "
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77601.82411305289!2d73.94880717821748!3d18.569813649965866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c38429004771%3A0x95e60873b827e7aa!2sVM3%20Tech%20Solutions%20LLP!5e0!3m2!1sen!2sin!4v1753879588138!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="VM3 Tech Solutions Location"
            ></iframe>
            </div>
        
    </>
  )
}

export default GoogleMap
