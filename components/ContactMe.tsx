import { PageInfo } from "../typings";

type Props = {
  pageInfo: PageInfo
}

const ContactMe = ({pageInfo}: Props) => {

  // @ts-ignore
    async function handleSubmit(event) {
        const form = event.target;
        event.preventDefault();
        const status = event.target.lastChild;
        const data = new FormData(event.target);
        fetch(event.target.action, {
          method: form.method,
          body: data,
          headers: {
              'Accept': 'application/json'
          }
        }).then(response => {
          if (response.ok) {
            status.classList.add('text-white')  
            status.innerHTML = `Thanks for your submission ${event.target.firstChild.firstChild.value}! I'll get back to you as soon as possible.`;
            form.reset()
          } else {
            response.json().then(data => {
              if (Object.hasOwn(data, 'errors')) {
                status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
              } else {
                status.classList.add('text-red-500')
                status.innerHTML = "Oops! There was a problem submitting your form"
              }
            })
          }
        }).catch(error => {
            status.classList.add('text-red-500')
            status.innerHTML = "Oops! There was a problem submitting your form"
        });
      }

  return (
    <div className='h-screen relative flex flex-col text-center md:text-left md:justify-end max-w-7xl p-10 justify-center items-center mx-auto gap-8 pt-8'>
        <h3 className='absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl text-center '>Contact</h3>
        <div className="w-full flex flex-col justify-center items-center gap-8 mb-10">
          <div className="w-full flex items-center md:justify-center gap-8">
            {/* <EnvelopeOpenOutline className='h-10 w-10 text-[#800080]/50'/> */}
            <p className="text-2xl">
              {pageInfo.email}
            </p>
          </div>
          <div className="w-full flex items-center md:justify-center  gap-8">
            {/* <MapPinOutline className='h-10 w-10 text-[#800080]/50'/> */}
            <p className="text-2xl"> 
              {pageInfo.address}
            </p>
          </div>
          <div className="w-full flex items-center gap-8 md:justify-center ">
            {/* <DevicePhoneMobileOutline className='h-10 w-10 text-[#800080]/50'/> */}
            <p className="text-2xl">
              {pageInfo.phoneNumber}
            </p>
            </div>
           
            
        </div>
        <form className='flex flex-col space-y-2 mx-auto max-w-md'  action="https://formspree.io/f/xyyagvlq" method="POST" onSubmit={handleSubmit}>
            <div className="flex space-x-2 w-full">
                <input type="text" className='formInput w-1/2'  placeholder='Name' name="Name"/>
                <input type="email" className='formInput w-1/2'  placeholder='Email' name="Email"/>
            </div>
            <input type="text"className='formInput' placeholder='Subject' name="Subject"/>
            <textarea className='formInput' placeholder='Message' name="Message" />
            <button type='submit' className='bg-[#800080]/50 py-5 px-10 rounded-md text-white font-bold text-lg'>
                Submit
            </button>

            <p className="font-medium text-lg underline w-full text-center"></p>
        </form>
       

    </div>
  )
}

export default ContactMe