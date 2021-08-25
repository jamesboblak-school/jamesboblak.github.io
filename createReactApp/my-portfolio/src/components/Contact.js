import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          {" "}
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS{" "}
              </h2>{" "}
              <p className="mt-1">
                Downtown Berkeley <br />
                California{" "}
              </p>{" "}
            </div>{" "}
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL{" "}
              </h2>{" "}
              <p>
                {" "}
                <a href="mailto:james@skepticalrecords.com">
                  {" "}
                  james @skepticalrecords.com{" "}
                </a>
              </p>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE{" "}
              </h2>{" "}
              <p className="leading-relaxed"> <a href="tel:510-860-7742">click to call</a> </p>{" "}
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                RESUME{" "}
              </h2>{" "}
              <p className="leading-relaxed"> <a href="./assets/images/James-Boblak_resume.pdf">download</a> </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}

<div>
<article>
  <h2>About Me</h2>
  <p>I am a seasoned Project Manager, and am a partner at Bx2 Group Consulting.  I love a good challenge, and won't sleep until I find the best solution!  My hobbies include music, kayaking, and my dog, Freddie!</p>
</article>


      <form>
  <article><label>
    <h2>Send me a message!</h2>
    Name: 
    <input type="text" name="email" />
    <br></br>
    Email: 
    <input type="text" name="email" />
    <br></br>
    Message: 
    <input type="text" name="email" />
    <br></br>
  </label></article>
  <input type="submit" value="Submit" />
</form>
</div>
    </section>
  );
}
