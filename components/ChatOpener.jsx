import Image from 'next/image'
import React from 'react'

function ChatOpener() {
  return (
    <div className='header'>
     <div className='flex justify-between items-center bg-white'>
        <Image
        src="/woman-2.png"
        width={60}
        height={70}
        alt='avatar'
        className='p-1'
        />
        <div className='flex justify-center items-center'>
        <Image
            src="/message-icon.svg"
            width={20}
            height={10}
            alt=''
            />
            <Image
            src="/dot-icon.svg"
            width={4}
            height={10}
            alt=''
            className='mx-8'
            />
        </div>
     </div>
     <div className='search bg-[#f1f1f0] py-3'>
          <div className='shadow-md rounded-md bg-white flex justify-between items-center gap-5 mx-3 px-6 py-2'>
          <Image
            src="/search-icon.svg"
            width={15}
            height={10}
            alt=''
            />
            <input type="text" className='w-full rounded-lg outline-none placeholder:text-sm' placeholder="Search or start a new chat" />
          </div>
        </div>
        <div className='flex justify-between gap-5'>
        <Image
        src="/man-2.png"
        width={72}
        height={70}
        alt='avatar'
        className='bg-white p-1'
        />
        <button className='bg-white w-full text-left'>
                <h3>Huzaifa</h3>
                <p className='text-xs text-[#767676]'>hey There Emo</p>
            </button>
            <p className='bg-white flex justify-center items-center text-xs text-[#aeadad] px-7 '>Yesterday</p>
        </div>
        <div className='flex justify-between gap-5'>
        <Image
        src="/man-1.png"
        width={73}
        height={70}
        alt='avatar'
        className='bg-white p-1'
        />
        <button className='bg-white w-full text-left'>
                <h3>Ali</h3>
                <p className='text-xs text-[#767676]'>hey There Emo</p>
            </button>
            <p className='bg-white flex justify-center items-center text-xs text-[#aeadad] px-7 '>Yesterday</p>
        </div>
        <div className='flex justify-between gap-5'>
        <Image
        src="/gamer.png"
        width={73}
        height={70}
        alt='avatar'
        className='bg-white p-1'
        />
        <button className='bg-white w-full text-left'>
                <h3>Ahan</h3>
                <p className='text-xs text-[#767676]'>hey There Emo</p>
            </button>
            <p className='bg-white flex justify-center items-center text-xs text-[#aeadad] px-7 '>Yesterday</p>
        </div>
        <div className='flex justify-between gap-5'>
        <Image
        src="/woman-1.png"
        width={73}
        height={70}
        alt='avatar'
        className='bg-white p-1'
        />
        <button className='bg-white w-full text-left'>
                <h3>Esha</h3>
                <p className='text-xs text-[#767676]'>hey There Emo</p>
            </button>
            <p className='bg-white flex justify-center items-center text-xs text-[#aeadad] px-7 '>Yesterday</p>
        </div>
        <div className='flex justify-between gap-5'>
        <Image
        src="/woman-3.png"
        width={73}
        height={70}
        alt='avatar'
        className='bg-white p-1'
        />
        <button className='bg-white w-full text-left'>
                <h3>Zainab</h3>
                <p className='text-xs text-[#767676]'>hey There Emo</p>
            </button>
            <p className='bg-white flex justify-center items-center text-xs text-[#aeadad] px-7 '>Yesterday</p>
        </div>
        <div className='flex justify-between gap-5'>
        <Image
        src="/man-3.png"
        width={73}
        height={70}
        alt='avatar'
        className='bg-white p-1'
        />
        <button className='bg-white w-full text-left'>
                <h3>Safi</h3>
                <p className='text-xs text-[#767676]'>hey There Emo</p>
            </button>
            <p className='bg-white flex justify-center items-center text-xs text-[#aeadad] px-7 '>Yesterday</p>
        </div>
        
    </div>

  )
}

export default ChatOpener
