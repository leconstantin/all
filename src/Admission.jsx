
import './App.css'
export default function Admission() {
  return (
    <>
      <header className=''>
        <nav className='flex items-center justify-between px-14 py-5'>
          <div className='text-xl'>
            <a href="" className='font-semibold uppercase hover:text-slate-700
            '>
              Academie 
              <span className='text-blue-400'> Dela </span>
              Salle
            </a>
          </div>
          <div className='flex'>
            <ul className='flex gap-x-8 font-semibold text-md '>
              <li>
                <a href="/index.html" className='hover:text-sky-500 leading-6'>Home</a>
              </li>
              <li>
               <a href="/about.html" 
                className='hover:text-sky-500 leading-6'>About Us</a>
              </li>
              <li>
               <a href="/academics.html" 
                className='hover:text-sky-500 leading-6'>Academics</a>
              </li>
              <li>
               <a href="/admission.html" 
                className='hover:text-sky-500 leading-6 text-sky-400'>Admission</a>
              </li>
              
              <li>
               <a href="/gallery.html" 
                className='hover:text-sky-500 leading-6 '>Gallery</a>
              </li>
              <li>
               <a href="/contact.html" 
                className='hover:text-sky-500 leading-6'>Contact us</a>
              </li>
              
            </ul>
          </div>
          <div className='flex border-l border-slate-200 ml-6 pl-6 gap-x-2'>
            <div>
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
                  <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" class="fill-sky-400/20 stroke-sky-500"></path><path d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836" class="stroke-sky-500"></path>
                </svg>
              </span>

            </div>
            <div className='hidden'>
              <svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 0 1-.5-17.986V3c-.354.966-.5 1.911-.5 3a9 9 0 0 0 9 9c.239 0 .254.018.488 0A9.004 9.004 0 0 1 12 21Z"/>
              </svg>

            </div>
            <div>
              <span>
              <svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="fill-sky-400/20 stroke-sky-500" stroke-width="2" d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"/>
              </svg>

              </span>
            </div>
          </div>
        </nav>
        
        <div className='flex flex-col items-center  justify-center pt-16'>
              
              <h2 className='font-bold text-4xl w-1/2 text-center pt-4'>
                Join Our Family
              </h2>
              <p className='pt-4 text-center w-[70vw] text-balance text-slate-600 '>
                Welcome to our admission process, where your child's future begins with us ☀️.
              </p>
        </div>
        
      </header>
      
      <main>

        {/* programs */}
        <section className='px-14 pt-24 pb-20'>
          <div className='flex flex-col'>
            <div className='flex flex-col justify-start px-4'>
              <p className='text-lg text-gray-500 '>
                Welcome
                </p>
              <h2 className='font-bold text-4xl w-1/2  pt-4'>
                Join Our Community of Lifelong Learners
              </h2>
              <p className='pt-4  w-[70vw] text-balance text-slate-600 '>
                Our admission process is designed to be straightforwards and welcoming. We invite you to explore the criteria and documents needed to apply for a place at our school.
              </p>
            </div>
            <div>
            <div className='flex items-center gap-10 pt-20'>
              <div className='p-4'>
                <div className=''>
                  <img src="https://images.stockcake.com/public/b/6/b/b6b7e616-0483-4344-9fae-2f89e0ba3a4f_large/teddy-among-books-stockcake.jpg" alt="" className='rounded-lg h-[11.5rem] w-full' />
                </div>
                <div>
                  <h3 className='font-medium text-xl text-center pt-4'>
                    Admission Criteria and Requirements
                  </h3>
                  <p className='text-center pt-2 text-md'>We seek motivated students who are eager to learn.</p>
                </div>
              </div>
              <div className='p-4'>
                <div className=''>
                  <img src="https://images.stockcake.com/public/b/0/9/b098bdf5-39e2-4d83-b115-2b5d0e96ad2a_large/geometric-shapes-collection-stockcake.jpg" alt="" className='rounded-lg  h-[11.5rem] w-full' />
                </div>
                <div>
                  <h3 className='font-medium text-xl text-center pt-4'>
                    Essential Documents for Admision
                  </h3>
                  <p className='text-center pt-2 text-md'>Please prepare your transcript and identification documents.</p>
                </div>
              </div>
              <div className='p-4'>
                <div className=''>
                  <img src="https://images.stockcake.com/public/0/8/b/08bd7c3a-e795-4736-a176-5b5c74ae95fa_large/study-time-essentials-stockcake.jpg" alt="" className='rounded-lg h-[11.5rem] w-full' />
                </div>
                <div>
                  <h3 className='font-medium text-xl text-center pt-4'>
                    Important Dates to Remember
                  </h3>
                  <p className='text-center pt-2 text-md'>Mark your calendar for our application deadlines.</p>
                </div>
              </div>
            </div>
            </div>
            
          </div>
        </section>

        <section className='px-14 pt-24 pb-20'>
          <div className='flex'>

            <div className='flex flex-col   px-4'>
              <p className='text-lg text-gray-500 '>
                Apply
                </p>
              <h2 className='font-bold text-4xl w-1/2  pt-4'>
                Key Dates for your Appliaction Journey
              </h2>
              <button className='flex pt-10'>
                <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700">Ask 
                <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
                </a>
              </button>
            </div>

            
            <div className=''>

              <div>
                <h2 className='font-medium text-xl pt-4'>
                  Application Deadline
                </h2>
                <p className='pt-2 text-md'>
                  Submit your application by March 15 to be considered for the upcoming academic year.
                </p>
              </div>
              <div>
                <h2 className='font-medium text-xl pt-4'>Interview Details</h2>
                <p className='pt-2 text-md'>
                  Interview will be held from April 1 to April 15 for selected candidates.
                </p>
              </div>
              <div>
                <h2 className='font-medium text-xl pt-4'>Decision Notification</h2>
                <p className='pt-2 text-md'>
                  Except to receive your admission decision by April 30.
                </p>
              </div>
              <div>
                <h2 className='font-medium text-xl pt-4'>Enrollment Confirmation</h2>
                <p className='pt-2 text-md'>
                  Confirm your enrollment by May 15 to secure your spot for the fall semester.
                </p>
              </div>
            </div>

          </div>
        </section>

        <section className='px-14 pt-24 pb-20'>
          <div className='flex flex-col   px-4'>
                <p className='text-lg text-gray-500 '>
                  Forms
                  </p>
                <h2 className='font-bold text-4xl w-1/2  pt-4'>
                  Fill Application forms below to be noticed
                </h2>
                
          </div>
        </section>

        <section  className='px-14 pt-24 pb-20'>
          <div className='flex flex-col items-center  justify-center pt-16'>
                <p className='text-lg text-gray-500 '>
                  Connect
                </p>
                
                <h2 className='font-bold text-4xl w-1/2 text-center pt-4'>
                Get in touch.
                </h2>
                <p className='pt-4 text-center w-[70vw] text-balance text-slate-600 '>
                  We're here to assist you with admission inquires.
                </p>
          </div>

          <div className='flex gap-x-10 pt-16'>
            <div className='flex flex-col items-center justify-center gap-y-4'>
              <span>
              <svg class="w-16 h-16 text-sky-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
              </svg>

              </span>
              <p  className='font-semibold text-3xl w-1/2 text-center pt-4'>
              Email</p>
              <p className='text-center text-balance text-slate-600'>
                Reach out to us for any admission questions.
              </p>

              <a href="" className='text-balance text-sky-400 underline'>
                admission@gmail.com
              </a>
            </div>

            <div  className='flex flex-col items-center justify-center gap-y-4'>
              <span>
              <svg class="w-16 h-16 text-sky-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"/>
            </svg>

              </span>
              <p  className='font-semibold text-3xl w-1/2 text-center pt-4'>
              Phone</p>
              <p className='text-center text-balance text-slate-600'>
                Call us for immediate assistance with your application.</p>

              <a href="" className='text-balance text-sky-400 underline'>
                +250797367637
              </a>
            </div>

            <div  className='flex flex-col items-center justify-center gap-y-4'>

              <span>
              <svg class="w-16 h-16 text-sky-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"/>
              </svg>

              </span>
              <p  className='font-semibold text-3xl w-1/2 text-center pt-4'>
              Office</p>
              <p  className='text-center text-balance text-slate-600'>
                Visit us for in-person consultations regarding admission.</p>

              <a href="" className='text-balance text-sky-400 underline'>
                Gicumbi,Byumba,Nyamabuye
              </a>
            </div>
          </div>
        </section>


      </main>

      <footer className="bg-gray-100 px-14 pt-10 mt-2 text-white ">

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-10 pb-9">
              
        <div className="pt-5">
          <h5 className="font-semibold uppercase tracking-tight pb-3
                  text-gray-900 ">
            Academie DLS
          </h5>
          <p className="text-balance font-normal leading-5 text-gray-600">
            "Providing inclusive and wholistic education grounded
            in christian values enabling our student to be good
            christians and good citizens"
          </p>
        </div>

        <div className="pt-5">
          <h5 className="font-semibold uppercase text-gray-900 tracking-tight pb-3">
              Quick Links
          </h5>

          <ul className="w-20">
            <li class="font-normal text-gray-800  text-base transition-[2s] hover:translate-x-2 cursor-pointer pb-1">
                <a href="index.html" class=" tracking-tight text-sm">Home</a>
            </li>
            <li class="font-normal text-gray-800  text-base transition-[2s] hover:translate-x-2 cursor-pointer pb-1">
                <a href="school.html" class=" tracking-tight text-sm">About us</a>
            </li>
            <li class="font-normal text-gray-800  text-base transition-[2s] hover:translate-x-2 cursor-pointer pb-1">
                <a href="new.html" class=" tracking-tight text-sm">Academics</a>
            </li>
            <li class="font-normal text-gray-800  text-base transition-[2s] hover:translate-x-2 cursor-pointer pb-2">
                <a href="contact.html" class=" tracking-tight text-sm">Admission</a>
            </li>
            <li class="font-normal text-gray-800  text-base transition-[2s] hover:translate-x-2 cursor-pointer pb-2">
                <a href="contact.html" class=" tracking-tight text-sm">Gallery</a>
            </li>
          </ul>
        </div>

        <div className="pt-5">
          <h5 class="font-semibold uppercase text-gray-900 tracking-tight pb-3">
              Resources
          </h5>

          <ul className="w-40">
            <li class="font-normal text-gray-800  text-base transition-[2s] hover:translate-x-2 cursor-pointer pb-1">
                <a href="index.html" class=" tracking-tight text-sm">Student Life</a>
            </li>
            <li class="font-normal text-gray-800  text-base transition-[2s] hover:translate-x-2 cursor-pointer pb-1">
                <a href="school.html" class=" tracking-tight text-sm">Events Calendar</a>
            </li>
            <li class="font-normal text-gray-800  text-base transition-[2s] hover:translate-x-2 cursor-pointer pb-1">
                <a href="new.html" class=" tracking-tight text-sm">News Updates</a>
            </li>
            <li class="font-normal text-gray-800  text-base transition-[2s] hover:translate-x-2 cursor-pointer pb-2">
                <a href="contact.html" class=" tracking-tight text-sm">School Guidelines</a>
            </li>    
          </ul>
        </div>

        <div className="pt-5">
          <h5 className="font-semibold uppercase text-gray-900  tracking-tight pb-3">
              Support
          </h5>
          <ul className="w-40">
            <li className="font-normal text-gray-800  text-base transition-[2s] hover:translate-x-2 cursor-pointer pb-1">
                          <a href="" target="_blank"  
                          className=" tracking-tight text-sm"
                          >Help & FAQs</a>
            </li>
            <li class="font-normal text-gray-800  text-base transition-[2s] hover:translate-x-2 cursor-pointer pb-1">
                          <a href="" target="_blank" 
                          class=" tracking-tight text-sm"
                          >Contact us</a>
            </li>
            <li class="font-normal text-gray-800  text-base transition-[2s] hover:translate-x-2 cursor-pointer pb-1">
                          <a href="#" target="_blank" 
                          class=" tracking-tight text-sm"
                          >Refunds</a>
            </li>
            <li class="font-normal text-gray-800  text-base transition-[2s] hover:translate-x-2 cursor-pointer pb-2">
                          <a href="" target="_blank" 
                          class=" tracking-tight text-sm"
                          >Platform Status</a>
            </li>
          </ul>                 
        </div>

        <div className="pt-5">
                  <h5 class="font-semibold uppercase text-gray-900 tracking-tight pb-3">
                      OPEN HOURS
                  </h5>
                  <div>
                      <p class="text-balance text-gray-600  font-normal leading-5 pb-5">
                          Our support available to help you 24 hours a day, seven days a week.
                      </p>
                  </div>
                  <ul class="list-unstyled text-gray-800  ">
                      <li class="pb-1 font-extralight tracking-tight text-sm">
                          Monday-Friday: <span>8am to 5pm</span>
                      </li>
                      <li class="pb-1 font-extralight tracking-tight text-sm">
                          Saturday: <span>10am to 3pm</span>
                      </li>
                      <li class="pb-1 font-extralight tracking-tight text-sm">
                          Sunday: <span>Closed</span>
                      </li>
                  </ul>
                  

        </div>
   
      </div>
      <hr className="border border-slate-500 mt-4"/>

      <div className="flex justify-end mt-6 gap-4">

       <div className="h-8 w-8 bg-white shadow-lg rounded-full flex items-center justify-center">
        <svg class="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd"/>
        </svg>
        
       </div>

       <div className="h-8 w-8 bg-white shadow-lg rounded-full flex items-center justify-center">
        <svg class="w-4 h-4 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path fill="currentColor" fill-rule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clip-rule="evenodd"/>
          <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"/>
        </svg>
        
       </div>

       <div class="h-8 w-8 bg-white shadow-lg rounded-full flex items-center justify-center">
        <svg class="w-4 h-4 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"/>
        </svg>
        
       </div>

       <div class="h-8 w-8 bg-white shadow-lg rounded-full flex items-center justify-center">
        <svg class="w-4 h-4 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd"/>
        </svg>
        
       </div>

       <div class="h-8 w-8 bg-white shadow-lg rounded-full flex items-center justify-center">
        <svg class="w-4 h-4 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clip-rule="evenodd"/>
        </svg>
        
       </div>

      </div>

      <div className="flex justify-center items-center pt-5">
        <p className="mt-4 text-base text-gray-500 ">
          © adls.edu, academie dela salle</p>
      </div>
      
      </footer>
    </>

  )
}