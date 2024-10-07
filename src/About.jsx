
import './App.css'
export default function About() {
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
                className='hover:text-sky-500 leading-6 text-sky-400'>About Us</a>
              </li>
              <li>
               <a href="/academics.html" 
                className='hover:text-sky-500 leading-6'>Academics</a>
              </li>
              <li>
               <a href="/admission.html" 
                className='hover:text-sky-500 leading-6'>Admission</a>
              </li>
              <li>
               <a href="/gallery.html" 
                className='hover:text-sky-500 leading-6'>Gallery</a>
              </li>
              <li>
               <a href="/contact.html" 
                className='hover:text-sky-500 leading-6'>Contact Us</a>
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

        <div className='hero bg-white shadow-xl flex flex-col justify-center items-center mx-auto pt-4'>
        {/* <div className='flex flex-col items-center justify-center'>
              <p className='text-lg text-blue-400 '>
                Empower
                </p>
              <h2 className='font-bold text-4xl text-center pt-4 text-slate-570'>
                Nurturing Future Leaders
              </h2>
              <p className='pt-4 text-center w-[53vw] text-slate-500 '>
                Our mission is to inspire and empower students to achieve their fullest potential through education.
              </p>
            </div> */}
        </div>
      </header>
      
      <main>
      
        {/* about */}
        <section className='px-14 pt-10 pb-20'>
          <div className='flex flex-col items-center   justify-center'>
              <p className='text-lg text-gray-500 '>
              History
                </p>
              <h2 className='font-bold text-4xl w-1/2 text-center pt-4'>
              Our journey: A Legacy of Excellence
              </h2>
              <p className='pt-4 text-center w-[70vw] text-balance text-slate-600 '>
              Our school offers a variety of innovative programs designed to foster creativity and critical thinking. We are commited to nurturing well-rounded individuals who excel academically and socially.
              </p>
            </div>
          <div className='flex pt-20 gap-x-16'>
            <div className='w-1/2'>
              <p className='font-medium text-gray-700 leading-8 text-lg'>
              Academy De La Salle, founded by Saint Jean-Baptiste de La Salle and established by the La Sallian Brothers, is dedicated to fostering the values of Faith, Brotherhood, and Quality. Since its inception, the Academy has committed itself to nurturing students through a holistic approach that emphasizes spiritual growth, a sense of community, and educational excellence. By integrating these core values into its teaching and school culture, the Academy prepares students to excel both academically and personally, embodying the enduring principles and vision of its founder.
              </p>
            </div>
            <div className='w-1/2'>
              <img src="https://images.stockcake.com/public/5/7/5/5752206f-69c1-433f-95bf-645e7ece243c_large/colorful-science-lab-stockcake.jpg" alt=""  className='rounded-md'/>
            </div>
          </div>
        </section>

        {/* people */}
        <section className='px-14 pt-10 pb-20'>

          <div className='flex flex-col items-center   justify-center'>
              <p className='text-lg text-gray-500 '>
                Dedicated
                </p>
              <h2 className='font-bold text-4xl w-1/2 text-center pt-4'>
              Our Team
              </h2>
              <p className='pt-4 text-center w-[70vw] text-balance text-slate-600 '>
              Meet the passionate individuals behind our school.
              </p>
          </div>

          <div className='grid grid-cols-3 gap-x-10 gap-y-20 pt-20'>

            <div className='flex flex-col items-center justify-center'>
              <div>
                <img src="https://images.stockcake.com/public/8/1/f/81fa0492-956c-4045-87c6-aaf3c4080ef5_large/bearded-man-contemplating-stockcake.jpg" alt="" className='h-24 w-24 rounded-full object-cover' />
              </div>
              <a className='flex flex-col pt-6'>
                <span className='font-semibold text-lg text-center'>Mugisha Safari</span>
                <span className='text-sky-400 text-center'>Head principal</span>
              </a>
              <div className=''>
                <p className='text-center pt-2 text-slate-600 font-medium leading-6'>Leading our school with over 1 years of experience in education.</p>

                <div className="flex justify-center mt-5 gap-4">

                  <div className="h-8 w-8 bg-white shadow-lg rounded-full flex items-center justify-center hover:scale-125 transition-all">
                    <svg class="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd"/>
                    </svg>
                    
                  </div>

                  <div className="h-8 w-8 bg-white shadow-lg rounded-full flex items-center justify-center hover:scale-125 transition-all">
                    <svg class="w-4 h-4 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path fill="currentColor" fill-rule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clip-rule="evenodd"/>
                      <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"/>
                    </svg>
                    
                  </div>

                  <div class="h-8 w-8 bg-white shadow-lg rounded-full flex items-center justify-center hover:scale-125 transition-all">
                    <svg class="w-4 h-4 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"/>
                    </svg>
                    
                  </div>

                </div>
              </div>
            </div>

            <div className='flex flex-col items-center justify-center'>
              <div>
                <img src="https://images.stockcake.com/public/8/1/f/81fa0492-956c-4045-87c6-aaf3c4080ef5_large/bearded-man-contemplating-stockcake.jpg" alt="" className='h-24 w-24 rounded-full object-cover' />
              </div>
              <a className='flex flex-col pt-6'>
                <span className='font-semibold text-lg text-center'>Mark smith</span>
                <span className='text-sky-400 text-center'>Math teacher</span>
              </a>
              <div className=''>
                <p className='text-center pt-2 text-slate-600 font-medium leading-6'>Inspiring students with a passion for mathematics and critical thinking.</p>

                <div className="flex justify-center mt-5 gap-4">

                  <div className="h-8 w-8 bg-white shadow-lg rounded-full flex items-center justify-center hover:scale-125 transition-all">
                    <svg class="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd"/>
                    </svg>
                    
                  </div>

                  <div className="h-8 w-8 bg-white shadow-lg rounded-full flex items-center justify-center hover:scale-125 transition-all">
                    <svg class="w-4 h-4 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path fill="currentColor" fill-rule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clip-rule="evenodd"/>
                      <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"/>
                    </svg>
                    
                  </div>

                  <div class="h-8 w-8 bg-white shadow-lg rounded-full flex items-center justify-center hover:scale-125 transition-all">
                    <svg class="w-4 h-4 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"/>
                    </svg>
                    
                  </div>

                </div>
              </div>
            </div>

            <div className='flex flex-col items-center justify-center'>
              <div>
                <img src="https://images.stockcake.com/public/8/1/f/81fa0492-956c-4045-87c6-aaf3c4080ef5_large/bearded-man-contemplating-stockcake.jpg" alt="" className='h-24 w-24 rounded-full object-cover' />
              </div>
              <a className='flex flex-col pt-6'>
                <span className='font-semibold text-lg text-center'>Linda Brown</span>
                <span className='text-sky-400 text-center'>Science Teacher</span>
              </a>
              <div className=''>
                <p className='text-center pt-2 text-slate-600 font-medium leading-6'>Fostering and exporation in the world of science.</p>

                <div className="flex justify-center mt-5 gap-4">

                  <div className="h-8 w-8 bg-white shadow-lg rounded-full flex items-center justify-center hover:scale-125 transition-all">
                    <svg class="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd"/>
                    </svg>
                    
                  </div>

                  <div className="h-8 w-8 bg-white shadow-lg rounded-full flex items-center justify-center hover:scale-125 transition-all">
                    <svg class="w-4 h-4 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path fill="currentColor" fill-rule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clip-rule="evenodd"/>
                      <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"/>
                    </svg>
                    
                  </div>

                  <div class="h-8 w-8 bg-white shadow-lg rounded-full flex items-center justify-center hover:scale-125 transition-all">
                    <svg class="w-4 h-4 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"/>
                    </svg>
                    
                  </div>

                </div>
              </div>
            </div>

            <div className='flex flex-col items-center justify-center'>
              <div>
                <img src="https://images.stockcake.com/public/8/1/f/81fa0492-956c-4045-87c6-aaf3c4080ef5_large/bearded-man-contemplating-stockcake.jpg" alt="" className='h-24 w-24 rounded-full object-cover' />
              </div>
              <a className='flex flex-col pt-6'>
                <span className='font-semibold text-lg text-center'>Jame Leo</span>
                <span className='text-sky-400 text-center'>Art instructor</span>
              </a>
              <div className=''>
                <p className='text-center pt-2 text-slate-600 font-medium leading-6'>Encouraging creativity and self-expression through various art forms.</p>

                <div className="flex justify-center mt-5 gap-4">

                  <div className="h-8 w-8 bg-white shadow-lg rounded-full flex items-center justify-center hover:scale-125 transition-all">
                    <svg class="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd"/>
                    </svg>
                    
                  </div>

                  <div className="h-8 w-8 bg-white shadow-lg rounded-full flex items-center justify-center hover:scale-125 transition-all">
                    <svg class="w-4 h-4 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path fill="currentColor" fill-rule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clip-rule="evenodd"/>
                      <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"/>
                    </svg>
                    
                  </div>

                  <div class="h-8 w-8 bg-white shadow-lg rounded-full flex items-center justify-center hover:scale-125 transition-all">
                    <svg class="w-4 h-4 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"/>
                    </svg>
                    
                  </div>

                </div>
              </div>
            </div>

            <div className='flex flex-col items-center justify-center'>
              <div>
                <img src="https://images.stockcake.com/public/8/1/f/81fa0492-956c-4045-87c6-aaf3c4080ef5_large/bearded-man-contemplating-stockcake.jpg" alt="" className='h-24 w-24 rounded-full object-cover' />
              </div>
              <a className='flex flex-col pt-6'>
                <span className='font-semibold text-lg text-center'>Sarah davis</span>
                <span className='text-sky-400 text-center'>History teacher</span>
              </a>
              <div className=''>
                <p className='text-center pt-2 text-slate-600 font-medium leading-6'>Bringing history to life with engaging lessons and discussions.</p>

                <div className="flex justify-center mt-5 gap-4">

                  <div className="h-8 w-8 bg-white shadow-lg rounded-full flex items-center justify-center hover:scale-125 transition-all">
                    <svg class="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd"/>
                    </svg>
                    
                  </div>

                  <div className="h-8 w-8 bg-white shadow-lg rounded-full flex items-center justify-center hover:scale-125 transition-all">
                    <svg class="w-4 h-4 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path fill="currentColor" fill-rule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clip-rule="evenodd"/>
                      <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"/>
                    </svg>
                    
                  </div>

                  <div class="h-8 w-8 bg-white shadow-lg rounded-full flex items-center justify-center hover:scale-125 transition-all">
                    <svg class="w-4 h-4 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"/>
                    </svg>
                    
                  </div>

                </div>
              </div>
            </div>

            <div className='flex flex-col items-center justify-center'>
              <div>
                <img src="https://images.stockcake.com/public/8/1/f/81fa0492-956c-4045-87c6-aaf3c4080ef5_large/bearded-man-contemplating-stockcake.jpg" alt="" className='h-24 w-24 rounded-full object-cover' />
              </div>
              <a className='flex flex-col pt-6'>
                <span className='font-semibold text-lg text-center'>Tom Wilson</span>
                <span className='text-sky-400 text-center'>Physical Teacher</span>
              </a>
              <div className=''>
                <p className='text-center pt-2 text-slate-600 font-medium leading-6'>Promoting health and wellness through physical activity and sports.</p>

                <div className="flex justify-center mt-5 gap-4">

                  <div className="h-8 w-8 bg-white shadow-lg rounded-full flex items-center justify-center hover:scale-125 transition-all">
                    <svg class="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd"/>
                    </svg>
                    
                  </div>

                  <div className="h-8 w-8 bg-white shadow-lg rounded-full flex items-center justify-center hover:scale-125 transition-all">
                    <svg class="w-4 h-4 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path fill="currentColor" fill-rule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clip-rule="evenodd"/>
                      <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"/>
                    </svg>
                    
                  </div>

                  <div class="h-8 w-8 bg-white shadow-lg rounded-full flex items-center justify-center hover:scale-125 transition-all">
                    <svg class="w-4 h-4 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"/>
                    </svg>
                    
                  </div>

                </div>
              </div>
            </div>

          </div>

          <div className='flex flex-col items-center justify-center pt-16'>
            <p className='font-semibold text-xl'>We're hiring</p>
            <p className='text-gray-500 pt-6 pb-10'>Join our dynamic team and make a difference.</p>
            <button className='bg-slate-900 hover:bg-slate-700 text-white py-3 px-5 rounded-xl cursor-not-allowed'>
              
              <abbr title="Not now hiring please visit us later">Open positions</abbr>
            </button>
          </div>
          
        </section>
        <hr />
        {/* awards */}
        <section className='px-14 pt-10 pb-20'>
          <div className='flex gap-x-1'>
            <div>
              <h2 className='text-4xl font-bold'>Our Awards and Recognition</h2>
              <p className='py-14 font-medium leading-8 text-lg'>Celebrating our achievement: excellence in education and community engagement recognized by variuos organizations.</p>

              <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700">Learn more <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg></a>
            </div>
            <div>
              <img src="https://images.stockcake.com/public/9/5/f/95f1a273-383f-4d11-9b7f-c3552dfab866_large/wall-of-achievements-stockcake.jpg" alt="" className='rounded-lg' />
            </div>
          </div>
        </section>
        {/* mission,vision */}
        <section className='px-14 pt-10 pb-20'>
          <div className='grid grid-cols-2 gap-x-20 gap-y-6'>
            <div className='card px-6 py-8 hover:scale-105'>
              <h2 className='font-bold text-4xl py-8'>
                Our Mission 🏹
              </h2>
              <p className='font-medium text-gray-700 leading-7 text-lg'>
              "Providing Inclusive and wholistic education grounded in Christian values, enabling our students to be good Christians and citizens"
              </p>
            </div>
            <div className='card px-6 py-8 hover:scale-105'>
              <h2 className='font-bold text-4xl py-8'>
                Our Vision 🔑
              </h2>
              <p className='font-medium text-gray-700 leading-7 text-lg'>
              "Providing Inclusive and wholistic education grounded in Christian values, enabling our students to be good Christians and citizens"
              </p>
            </div>
            <div className='card px-6 py-8 hover:scale-105'>
              <h2 className='font-bold text-4xl py-8'>
                Golden Rule 🔔
              </h2>
              <p className='font-medium text-gray-700 leading-7 text-lg'>
              "Providing Inclusive and wholistic education grounded in Christian values, enabling our students to be good Christians and citizens"
              </p>
            </div>
            <div className='card px-6 py-8 hover:scale-105'>
              <h2 className='font-bold text-4xl py-8'>
                Core values 💡
              </h2>
              <p className='font-medium text-gray-700 leading-7 text-lg'>
              "Providing Inclusive and wholistic education grounded in Christian values, enabling our students to be good Christians and citizens"
              </p>
            </div>
          </div>
        </section>

        {/* timeline */}
        <section className='px-14 pt-10 pb-20 '>
          <div className='flex flex-col items-center   justify-center pb-12'>
              <p className='text-lg text-gray-500 '>
                Principals
                </p>
              <h2 className='font-bold text-4xl w-1/2 text-center pt-4'>
               Who Led Our Community
              </h2>
              <p className='pt-4 text-center w-[70vw] text-balance text-slate-600 '>
              Our school was led by different leaders in different time.
              </p>
          </div>

          

          <div className='flex items-center justify-center'>
            <ol class="relative  border-s border-gray-200 dark:border-gray-700">                  
                <li class="mb-10 ms-4">
                    <div class="absolute w-3 h-3 bg-sky-400 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                    <time class="mb-1 text-sm font-normal leading-none text-gray-400 ">Now</time>
                    <h3 class="text-lg font-semibold text-gray-900 ">MUGISHA Safari</h3>
                    
                    
                </li>
                <li class="mb-10 ms-4">
                  <div class="absolute w-3 h-3 bg-sky-400 rounded-full mt-1.5 -start-1.5 border border-white ">

                  </div>
                  <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2, 2021</time>
                  <h3 class="text-lg font-semibold text-gray-900 ">MUCYO Derrick</h3>
                    
                </li>

                <li class="ms-4 mb-10">
                  <div class="absolute w-3 h-3 bg-sky-400 rounded-full mt-1.5 -start-1.5 border border-white "></div>
                    <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Released on July 2, 2021
                    </time>
                    <h3 class="text-lg font-semibold text-gray-900 ">HIRWA Bonheur</h3>
                    
                </li>

                <li class="ms-4 mb-10">
                  <div class="absolute w-3 h-3 bg-sky-400 rounded-full mt-1.5 -start-1.5 border border-white "></div>
                    <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Released on July 2, 2021
                    </time>
                    <h3 class="text-lg font-semibold text-gray-900 ">HIRWA Leo</h3>
                    
                </li>

                <li class="ms-4 mb-10">
                  <div class="absolute w-3 h-3 bg-sky-400 rounded-full mt-1.5 -start-1.5 border border-white "></div>
                    <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Released on July 2, 2021
                    </time>
                    <h3 class="text-lg font-semibold text-gray-900 ">Hope Jimy</h3>
                    
                </li>

                <li class="ms-4">
                  <div class="absolute w-3 h-3 bg-sky-400 rounded-full mt-1.5 -start-1.5 border border-white "></div>
                    <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Released on July 2, 2021
                    </time>
                    <h3 class="text-lg font-semibold text-gray-900 ">GASANA Byiza</h3>
                    
                </li>
                
                
            </ol>            
          </div>





        </section>

        {/* goals */}
        <section className='px-14 pt-10 pb-20'>
          <div className='flex flex-col items-center   justify-center'>
              <p className='text-lg text-gray-500 '>
                Goals
              </p>
              <h2 className='font-bold text-4xl w-1/2 text-center pt-4'>
                Our school imihigo
              </h2>
             
          </div>

          <div className='flex pt-20 gap-x-16'>
            <div className='w-1/2'>
              <p className='font-medium text-gray-700 leading-8 text-lg'>
              Academy De La Salle, founded by Saint Jean-Baptiste de La Salle and established by the La Sallian Brothers, is dedicated to fostering the values of Faith, Brotherhood, and Quality. Since its inception, the Academy has committed itself to nurturing students through a holistic approach that emphasizes spiritual growth, a sense of community, and educational excellence. By integrating these core values into its teaching and school culture, the Academy prepares students to excel both academically and personally, embodying the enduring principles and vision of its founder.
              </p>
            </div>
            <div className='w-1/2'>
              <img src="https://images.stockcake.com/public/0/1/3/0130ee1c-7716-4e07-9eeb-04c58a0723f9_large/colorful-pie-chart-stockcake.jpg" alt=""  className='rounded-md'/>
            </div>
          </div>
          <div className='flex flex-row-reverse pt-20 gap-x-16'>
            <div className='w-1/2'>
              <p className='font-medium text-gray-700 leading-8 text-lg'>
              Academy De La Salle, founded by Saint Jean-Baptiste de La Salle and established by the La Sallian Brothers, is dedicated to fostering the values of Faith, Brotherhood, and Quality. Since its inception, the Academy has committed itself to nurturing students through a holistic approach that emphasizes spiritual growth, a sense of community, and educational excellence. By integrating these core values into its teaching and school culture, the Academy prepares students to excel both academically and personally, embodying the enduring principles and vision of its founder.
              </p>
            </div>
            <div className='w-1/2'>
              <img src="https://images.stockcake.com/public/7/d/a/7daf9302-925a-47cf-9f02-1f0ef4999145_large/gradient-bar-graph-stockcake.jpg" alt=""  className='rounded-md'/>
            </div>
          </div>
          <div className='flex pt-20 gap-x-16'>
            <div className='w-1/2'>
              <p className='font-medium text-gray-700 leading-8 text-lg'>
              Academy De La Salle, founded by Saint Jean-Baptiste de La Salle and established by the La Sallian Brothers, is dedicated to fostering the values of Faith, Brotherhood, and Quality. Since its inception, the Academy has committed itself to nurturing students through a holistic approach that emphasizes spiritual growth, a sense of community, and educational excellence. By integrating these core values into its teaching and school culture, the Academy prepares students to excel both academically and personally, embodying the enduring principles and vision of its founder.
              </p>
            </div>
            <div className='w-1/2'>
              <img src="https://images.stockcake.com/public/6/3/d/63d3fc7c-fc0a-4b5d-8676-1d1a20e5260b_large/colorful-bar-graph-stockcake.jpg" alt=""  className='rounded-md'/>
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