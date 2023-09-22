import React from 'react'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

function Help() {
  return (
    <div className="bg-cyan-800 h-screen ">
<div className=' grid mx-14  h-1/6 items-end justify-start'>
  <div>
  <h1 className='font-black text-3xl text-white '>Help & Support</h1>
  <p className=' text-white'>Let's take a step ahead and help you better.</p>
  </div>
</div>
<div className='bg-white h-96 m-10 p-10 flex'>

<div className="h-full w-48 bg-slate-500 text-white flex flex-col items-center rounded-sm">
  <div className="py-2 text-black bg-white mt-1 px-5  rounded-lg ">Partner OnBoarding</div>
  <div className="py-2  text-black bg-white mt-1 px-5 rounded-lg">Legal</div>
  <div className="py-2  text-black bg-white mt-1 px-5 rounded-lg">FAQs</div>
</div>
<div>
  <div>
    <h1>Partner Onboarding</h1>
    <div className='w-full flex'> 

    <Dropdown >
      <DropdownTrigger>
        <Button 
          variant="bordered" 
        >
          Open Menu
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dynamic Actions" >
       <DropdownItem>
        Hello
       </DropdownItem>
      </DropdownMenu>
    </Dropdown>
 
    </div>
  </div>
</div>
</div>


    </div>
  )
}

export default Help