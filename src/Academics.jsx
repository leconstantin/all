
export default function Academics() {
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
                className='hover:text-sky-500 leading-6 text-sky-400'>Academics</a>
              </li>
              <li>
               <a href="/admission.html" 
                className='hover:text-sky-500 leading-6'>Admission</a>
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
                Academic Excellence Awaits
              </h2>
              <p className='pt-4 text-center w-[70vw] text-balance text-slate-600 '>
                Our commitment to academic excellence fosters a nurturing environment for every student's growth abd success ☀️.
              </p>
        </div>
        
      </header>
      
      <main>
      
        {/* Buttons */}
        <section className='px-14 pt-10 pb-20'>
          <div className='flex flex-wrap gap-x-10 gap-y-5 items-center justify-center'>
            <button>
              <a href="#curriculum" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700">
              Curriculum Overview
              </a>
            </button>

            <button>
              <a href="#support" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700">
              Support for All Learners
              </a>
            </button>

            <button>
              <a href="#excurriculum" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700">
              Extracurricular Academic Enrichment
              </a>
            </button>

            <button>
              <a href="#assesment" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700">
              Assessment and Evaluation
              </a>
            </button>

            <button>
              <a href="#calendar" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700">
              Academic Calendar
              </a>
            </button>

            <button>
              <a href="#educator" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700">
              Meet Our Educators
              </a>
            </button>

            <button>
              <a href="#student" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700">
              Student Success Stories
              </a>
            </button>
            <button>
              <a href="#faqs" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700">
              Frequently Asked Questions (FAQs)
              </a>
            </button>
          </div>
          
        </section>


        <section  className=' pt-10 pb-20' id='curriculum'>
          <div className='flex flex-col items-center  justify-center pt-16 px-14'>
                
            <h2 className='font-bold text-4xl w-1/2 text-center pt-4'>
                Curriculum Overview
            </h2>
            <p className='pt-4 text-center w-[70vw] text-balance text-slate-600 '>
              "Our educational philosophy centers around a student-centered approach, emphasizing critical thinking, creativity, and collaboration. We strive to create a learning environment that encourages exploration and discovery."
            </p>
          </div>
          <div>
            <h2 className='font-bold text-4xl w-1/2 text-cente  px-14 py-16'>
              Grade Levels
            </h2>
            
            <div className='px-14 py-16 bg-sky-100'>
              <h3 className='text-sky-400 font-medium text-2xl'>
                Nursery
              </h3>
              <div className='flex items-center pt- gap-10'>
                <div className='w-1/2'>
                  
                  <p className='font-medium text-gray-700 leading-8 text-lg py-4'>
                    <span className='text-sky-500'>Content Example: </span>
                    "Nurturing Young Minds
                  </p>
                  <p className='font-medium text-gray-700 leading-8 text-lg'>
                  Our nursery program is designed for children aged 3 to 5 years, providing a warm and welcoming environment where early learning begins. We focus on holistic development through play-based learning, fostering social, emotional, physical, and cognitive skills. Our experienced educators encourage exploration and creativity, helping children build a strong foundation for lifelong learning
                  </p>
                </div>
                <div className='w-1/2'>
                  <h2  className='py-4 font-medium text-sky-500 leading-8 text-lg'>
                  Activities 
                  include:
                  </h2>
                  <ul  className='font-medium text-gray-700 leading-8 text-lg'>
                    <li>
                    ✔️ Creative Play: Engaging in imaginative play to enhance social skills and creativity
                    </li>
                    <li>
                    ✔️ Literacy and Numeracy: Introduction to letters, numbers, and basic concepts through fun activities.
                    </li>
                    <li>
                    ✔️ Arts and Crafts: Encouraging self-expression through various art mediums.
                    </li>
                    <li>
                    ✔️ Outdoor Activities: Promoting physical health and teamwork through guided outdoor play.
                    </li>
                  </ul>
                </div>
              </div>              
            </div>

            <div className='bg-sky-200 px-14  py-16'>
              <h3 className='text-sky-400 font-medium text-2xl'>
              Primary
              </h3>
              <div className='flex flex-row-reverse  gap-10'>
                <div className='w-1/2'>
                  
                  <p className='font-medium text-gray-700 leading-8 text-lg py-4'>
                    <span className='text-sky-500'>Content Example: </span>
                    Building Strong Foundation
                  </p>
                  <p className='font-medium text-gray-700 leading-8 text-lg'>
                  Our primary program, catering to students aged 6 to 11, emphasizes a balanced curriculum that nurtures academic and personal growth. We strive to instill a love for learning while developing critical thinking and problem-solving skills.
                  </p>
                </div>
                <div className='w-1/2'>
                  <h2  className='py-4 font-medium text-sky-500 leading-8 text-lg'>
                  Key features include:
                  </h2>
                  <ul  className='font-medium text-gray-700 leading-8 text-lg'>
                    <li>
                    ✔️ Core Subjects: Comprehensive instruction in Mathematics, Science, Language Arts, and Social Studies, aligned with educational standards.
                    </li>
                    <li>
                    ✔️ Hands-On Learning: Incorporating projects and interactive lessons to make learning engaging and relevant.
                    </li>
                    <li>
                    ✔️ Social Development: Emphasizing collaboration and communication through group activities and discussions.
                    </li>
                    <li>
                    ✔️ Character Education: Fostering values such as respect, responsibility, and empathy through dedicated programs.
                    </li>
                  </ul>
                </div>
              </div>              
            </div>

            <div className='px-14 py-16 bg-sky-300'>
              <h3 className='text-sky-400 font-medium text-2xl'>
              Secondary
              </h3>
              <div className='flex  pt- gap-10'>
                <div className='w-1/2'>
                  
                  <p className='font-medium text-gray-700 leading-8 text-lg py-4'>
                    <span className='text-sky-500'>Content Example: </span>
                    Preparing for the Future
                  </p>
                  <p className='font-medium text-gray-700 leading-8 text-lg'>
                  Our secondary program, for students aged 12 to 18, focuses on academic rigor and personal development, preparing students for higher education and the workforce. We offer a wide range of courses and extracurricular activities to cater to diverse interests and aspirations.
                  </p>
                </div>
                <div className='w-1/2'>
                  <h2  className='py-4 font-medium text-sky-500 leading-8 text-lg'>
                  Highlights include:
                  </h2>
                  <ul  className='font-medium text-gray-700 leading-8 text-lg'>
                    <li>
                    ✔️ Rigorous Curriculum: Advanced courses in Mathematics, Science, Language Arts, Social Studies, and Electives such as Arts and Technology.
                    </li>
                    <li>
                    ✔️ Advanced Placement (AP) Options: Opportunities to take AP courses for college credit, helping students gain a competitive edge.
                    </li>
                    <li>
                    ✔️Extracurricular Activities: A variety of clubs, sports, and volunteer opportunities to promote leadership and teamwork.
                    </li>
                    <li>
                    ✔️ College and Career Counseling: Dedicated support for college applications, career exploration, and skill development.
                    </li>
                  </ul>
                </div>
              </div>              
            </div>

          </div>
        </section>


        <section  className='px-14 pt-10 pb-20' id='support'>
          <div className='flex flex-col items-center  justify-center pt-16 px-14' id='support'>
                
            <h2 className='font-bold text-4xl w-1/2 text-center pt-4'>
              Support for All Learners
            </h2>
            <p className='pt-4 text-center w-[70vw] text-balance text-slate-600 '>
              "we believe that every student deserves the opportunity to succeed, regardless of their individual challenges or backgrounds. Our comprehensive support programs are designed to foster an inclusive environment where all learners can thrive."
            </p>
            <p  className='pt-10 text-center w-[70vw] text-balance text-slate-600'>
             Here are some key components of our support services:
            </p>
          </div>

          <div className='flex gap-5 flex-wrap items-center justify-center py-16'>
            <div className='flex items-center gap-4'>
              <div className='h-4 w-4 rounded-full bg-sky-300'></div>
              Special Education Services
            </div>
            <div className='flex items-center gap-4'>
              <div className='h-4 w-4 rounded-full bg-blue-600'></div>
              English Language Learning (ELL)
            </div>
            <div className='flex items-center gap-4'>
              <div className='h-4 w-4 rounded-full bg-yellow-200'></div>
             Academic Support Services
            </div>
            <div className='flex items-center gap-4'>
              <div className='h-4 w-4 rounded-full bg-indigo-400'></div>
            Counseling and Guidance
            </div>
            <div className='flex items-center gap-4'>
              <div className='h-4 w-4 rounded-full bg-green-400'></div>
            Parental Involvement
            </div>
          </div>

          <div className='flex flex-wrap items-center justify-center gap-x-10 gap-y-10'>
              <div className='flex flex-col items-center'>
                <div className='bg-sky-300 h-20 w-20 flex items-center justify-center rounded-full'>
                <svg class="w-10 h-10 text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clip-rule="evenodd"/>
                </svg>

                </div>
                <span  className='pt-4 text-center text-balance text-slate-600 '>
                  Individualized Education Plans (IEPs)
                </span>
              </div>
              <div className='flex flex-col items-center'>
                <div className='bg-sky-300 h-20 w-20 flex items-center justify-center rounded-full'>
                <svg class="w-10 h-10 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z" clip-rule="evenodd"/>
                </svg>


                </div>
                <span  className='pt-4 text-center text-balance text-slate-600 '>
                Collaborative Teaching
                </span>
              </div>
              <div className='flex flex-col items-center'>
                <div className='bg-sky-300 h-20 w-20 flex items-center justify-center rounded-full'>
                <svg class="w-10 h-10 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4H4m0 0v4m0-4 5 5m7-5h4m0 0v4m0-4-5 5M8 20H4m0 0v-4m0 4 5-5m7 5h4m0 0v-4m0 4-5-5"/>
                </svg>



                </div>
                <span  className='pt-4 text-center text-balance text-slate-600 '>
                Skill Development Programs
                </span>
              </div> 
              <div className='flex flex-col items-center'>
                <div className='bg-blue-600 h-20 w-20 flex items-center justify-center rounded-full'>
                <svg class="w-10 h-10 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.133 12.632v-1.8a5.406 5.406 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V3.1a1 1 0 0 0-2 0v2.364a.955.955 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C6.867 15.018 5 15.614 5 16.807 5 17.4 5 18 5.538 18h12.924C19 18 19 17.4 19 16.807c0-1.193-1.867-1.789-1.867-4.175ZM6 6a1 1 0 0 1-.707-.293l-1-1a1 1 0 0 1 1.414-1.414l1 1A1 1 0 0 1 6 6Zm-2 4H3a1 1 0 0 1 0-2h1a1 1 0 1 1 0 2Zm14-4a1 1 0 0 1-.707-1.707l1-1a1 1 0 1 1 1.414 1.414l-1 1A1 1 0 0 1 18 6Zm3 4h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2ZM8.823 19a3.453 3.453 0 0 0 6.354 0H8.823Z"/>
                </svg>


                </div>
                <span  className='pt-4 text-center text-balance text-slate-600 '>
                 Dedicated ELL Instruction
                </span>
              </div>
              <div className='flex flex-col items-center'>
                <div className='bg-blue-600 h-20 w-20 flex items-center justify-center rounded-full'>
                <svg class="w-10 h-10 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 21-5-4-5 4V3.889a.92.92 0 0 1 .244-.629.808.808 0 0 1 .59-.26h8.333a.81.81 0 0 1 .589.26.92.92 0 0 1 .244.63V21Z"/>
                </svg>



                </div>
                <span  className='pt-4 text-center text-balance text-slate-600 '>
                Cultural Enrichment Activities
                </span>
              </div>  
              <div className='flex flex-col items-center'>
                <div className='bg-yellow-200 h-20 w-20 flex items-center justify-center rounded-full'>
                <svg class="w-10 h-10 text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clip-rule="evenodd"/>
                </svg>

                </div>
                <span  className='pt-4 text-center text-balance text-slate-600 '>
                Tutoring Programs
                </span>
              </div>
              <div className='flex flex-col items-center'>
                <div className='bg-yellow-200 h-20 w-20 flex items-center justify-center rounded-full'>
                <svg class="w-10 h-10 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M11 4.717c-2.286-.58-4.16-.756-7.045-.71A1.99 1.99 0 0 0 2 6v11c0 1.133.934 2.022 2.044 2.007 2.759-.038 4.5.16 6.956.791V4.717Zm2 15.081c2.456-.631 4.198-.829 6.956-.791A2.013 2.013 0 0 0 22 16.999V6a1.99 1.99 0 0 0-1.955-1.993c-2.885-.046-4.76.13-7.045.71v15.081Z" clip-rule="evenodd"/>
                </svg>



                </div>
                <span  className='pt-4 text-center text-balance text-slate-600 '>
                Homework Clubs
                </span>
              </div>
              <div className='flex flex-col items-center'>
                <div className='bg-yellow-200 h-20 w-20 flex items-center justify-center rounded-full'>
                <svg class="w-10 h-10 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M9.586 2.586A2 2 0 0 1 11 2h2a2 2 0 0 1 2 2v.089l.473.196.063-.063a2.002 2.002 0 0 1 2.828 0l1.414 1.414a2 2 0 0 1 0 2.827l-.063.064.196.473H20a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-.089l-.196.473.063.063a2.002 2.002 0 0 1 0 2.828l-1.414 1.414a2 2 0 0 1-2.828 0l-.063-.063-.473.196V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-.089l-.473-.196-.063.063a2.002 2.002 0 0 1-2.828 0l-1.414-1.414a2 2 0 0 1 0-2.827l.063-.064L4.089 15H4a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h.09l.195-.473-.063-.063a2 2 0 0 1 0-2.828l1.414-1.414a2 2 0 0 1 2.827 0l.064.063L9 4.089V4a2 2 0 0 1 .586-1.414ZM8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" clip-rule="evenodd"/>
              </svg>




                </div>
                <span  className='pt-4 text-center text-balance text-slate-600 '>
                Learning Resources
                </span>
              </div>
              <div className='flex flex-col items-center'>
                <div className='bg-indigo-400 h-20 w-20 flex items-center justify-center rounded-full'>
                <svg class="w-10 h-10 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H6Zm7.25-2.095c.478-.86.75-1.85.75-2.905a5.973 5.973 0 0 0-.75-2.906 4 4 0 1 1 0 5.811ZM15.466 20c.34-.588.535-1.271.535-2v-1a5.978 5.978 0 0 0-1.528-4H18a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2h-4.535Z" clip-rule="evenodd"/>
                </svg>


                </div>
                <span  className='pt-4 text-center text-balance text-slate-600 '>
                One-on-One Counseling
                </span>
              </div>
              <div className='flex flex-col items-center'>
                <div className='bg-indigo-400 h-20 w-20 flex items-center justify-center rounded-full'>
                <svg class="w-10 h-10 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z" clip-rule="evenodd"/>
                </svg>


                </div>
                <span  className='pt-4 text-center text-balance text-slate-600 '>
                Workshops and Group Sessions
                </span>
              </div>
              <div className='flex flex-col items-center'>
                <div className='bg-green-400 h-20 w-20 flex items-center justify-center rounded-full'>
                <svg class="w-10 h-10 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M17 10v1.126c.367.095.714.24 1.032.428l.796-.797 1.415 1.415-.797.796c.188.318.333.665.428 1.032H21v2h-1.126c-.095.367-.24.714-.428 1.032l.797.796-1.415 1.415-.796-.797a3.979 3.979 0 0 1-1.032.428V20h-2v-1.126a3.977 3.977 0 0 1-1.032-.428l-.796.797-1.415-1.415.797-.796A3.975 3.975 0 0 1 12.126 16H11v-2h1.126c.095-.367.24-.714.428-1.032l-.797-.796 1.415-1.415.796.797A3.977 3.977 0 0 1 15 11.126V10h2Zm.406 3.578.016.016c.354.358.574.85.578 1.392v.028a2 2 0 0 1-3.409 1.406l-.01-.012a2 2 0 0 1 2.826-2.83ZM5 8a4 4 0 1 1 7.938.703 7.029 7.029 0 0 0-3.235 3.235A4 4 0 0 1 5 8Zm4.29 5H7a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h6.101A6.979 6.979 0 0 1 9 15c0-.695.101-1.366.29-2Z" clip-rule="evenodd"/>
              </svg>

                </div>
                <span  className='pt-4 text-center text-balance text-slate-600 '>
                Workshops for Parents
                {/* <span>
                Regular sessions that provide parents with tools and strategies to support their children's learning at home.
                </span> */}
                </span>
              </div>
              <div className='flex flex-col items-center'>
                <div className='bg-green-400 h-20 w-20 flex items-center justify-center rounded-full'>
                <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M4 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1v2a1 1 0 0 0 1.707.707L9.414 13H15a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Z" clip-rule="evenodd"/>
                  <path fill-rule="evenodd" d="M8.023 17.215c.033-.03.066-.062.098-.094L10.243 15H15a3 3 0 0 0 3-3V8h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1v2a1 1 0 0 1-1.707.707L14.586 18H9a1 1 0 0 1-.977-.785Z" clip-rule="evenodd"/>
                </svg>



                </div>
                <span  className='pt-4 text-center text-balance text-slate-600 '>
                Open Communication
                </span>
              </div>              
          </div>









        </section>

        <section  className=' pt-10 pb-20' id='excurriculum'>
          <div className='flex flex-col items-center  justify-center pt-16 px-14'>
                
            <h2 className='font-bold text-4xl w-1/2 text-center pt-4'>
              Extracurricular Academic Enrichment
            </h2>
            <p className='pt-4 text-center w-[70vw] text-balance text-slate-600 '>
            "Engagement beyond the classroom is vital to student growth. Our clubs and societies, such as the Science Olympiad and Debate Team, foster teamwork and critical thinking. We also encourage participation in academic competitions, allowing students to showcase their skills and creativity."
            </p>
          </div>
          
        </section>

        <section  className=' pt-10 pb-20' id='assesment'>
          <div className='flex flex-col items-center  justify-center pt-16 px-14'>
                
            <h2 className='font-bold text-4xl w-1/2 text-center pt-4'>
            Assessment and Evaluation
            </h2>
            <p className='pt-4 text-center w-[70vw] text-balance text-slate-600 '>
            "Assessment at Academie is designed to promote learning and development. We utilize a balanced approach, incorporating formative assessments, standardized tests, and feedback to guide student progress. Parents receive detailed report cards, outlining achievements and areas for improvement."
            </p>
          </div>
          
        </section>

        <section  className=' pt-10 pb-20' id='calendar'>
          <div className='flex flex-col items-center  justify-center pt-16 px-14'>
                
            <h2 className='font-bold text-4xl w-1/2 text-center pt-4'>
            Academic Calendar
            </h2>
            <p className='pt-4 text-center w-[70vw] text-balance text-slate-600 '>
            "Stay informed with our academic calendar! Key dates include the first day of school, holidays, and testing periods. [Insert link to downloadable PDF calendar]"
            </p>
          </div>
          
        </section>

        <section  className=' pt-10 pb-20' id='educator'>
          <div className='flex flex-col items-center  justify-center pt-16 px-14'>
                
            <h2 className='font-bold text-4xl w-1/2 text-center pt-4'>
            Meet Our Educators
            </h2>
            <p className='pt-4 text-center w-[70vw] text-balance text-slate-600 '>
            "Get to know our dedicated educators! Our faculty brings a wealth of experience and passion for teaching. [Include photos and bios of key academic staff, highlighting their expertise and contributions to student success.]"
            </p>
          </div>
          
        </section>

        <section  className=' pt-10 pb-20' id='student'>
          <div className='flex flex-col items-center  justify-center pt-16 px-14'>
                
            <h2 className='font-bold text-4xl w-1/2 text-center pt-4'>
            Student Success Stories
            </h2>
            <p className='pt-4 text-center w-[70vw] text-balance text-slate-600 '>
            "Discover the achievements of our students! Read inspiring testimonials from current students and alumni who have thrived at [School Name]. Their stories reflect the impact of our academic programs on their journeys."
            </p>
          </div>
          
        </section>

        <section  className=' pt-10 pb-20' id='faqs'>
          <div className='flex flex-col items-center  justify-center pt-16 px-14'>
                
            <h2 className='font-bold text-4xl w-1/2 text-center pt-4'>
            Frequently Asked Questions (FAQs)
            </h2>
            <p className='pt-4 text-center w-[70vw] text-balance text-slate-600 '>
            "Have questions? Check out our FAQs for answers to common inquiries about academics, enrollment, and resources. If you don't find what you're looking for, feel free to reach out!"
            </p>
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