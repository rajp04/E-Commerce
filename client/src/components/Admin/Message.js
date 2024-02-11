import React from 'react'
import { IoIosAddCircle } from "react-icons/io";
import { BsEmojiSmileFill } from "react-icons/bs";

function Message() {
    return (
        <div className='h-screen pt-20'>
            <div className='h-full bg-gray-100'>
                <div className='flex flex-col pt-2 px-2 h-[577px] overflow-scroll'>
                    <div className='w-full'>
                        <div className='w-3/4 float-right'>
                            <h1 className='bg-blue-500 float-right w-fit rounded-xl text-2xl py-1 px-3 mt-2 '>Right Hello Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni neque, odio alias, quasi modi expedita quae dolorum quidem, sequi dolore at. Non, beatae culpa cupiditate pariatur repellendus, ipsa maxime placeat suscipit veritatis deleniti dolor corporis consequuntur natus explicabo velit? Sed blanditiis nisi architecto, accusantium magnam eveniet excepturi sequi nostrum optio. Nulla quisquam temporibus corrupti iure voluptas! Atque suscipit reiciendis tempore at velit voluptatum necessitatibus distinctio, earum architecto rerum aliquam consequuntur maxime laborum repellendus reprehenderit, fugiat animi ut blanditiis. Labore voluptas sed aut quisquam modi impedit   consequuntur repudiandae recusandae? Nobis officia vdfghjkloiuygggsdxfawzsegbymokinubyvcrxezrdctgbyyyvcritae non repellat repudiandae ullam, corporis magnam. Alias, esse illum!</h1>
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className='w-3/4 float-left'>
                            <h1 className='bg-blue-500 float-left w-fit rounded-xl  text-2xl py-1 mt-2 px-3 '>Left Hello Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus maiores mollitia debitis explicabo quod cumque molestias amet, exercitationem, vel, optio quibusdam culpa repellat tempora blanditiis. Ducimus illo nihil earum sed? Eveniet saepe amet fuga, ea repellendus a vel corrupti magni odit ex quo cum repellat placeat, in aspernatur beatae numquam sint! Quia quae quo obcaecati quam doloribus quos animi sint sunt repudiandae veniam fuga, vel est sapiente impedit saepe facere dicta qui cum debitis eos possimus nostrum unde atque! Perferendis quibusdam excepturi, natus amet quae rerum non quis nobis impedit nostrum sed ullam minus fugit, voluptate, aperiam inventore nisi odit?</h1>
                        </div>
                    </div>

                </div>
                <div className='bg-gray-500 flex py-3 px-5'>
                    <IoIosAddCircle className='text-5xl text-gray-950' />
                    <div className='flex w-full px-5'>
                        <input type="text" className='bg-gray-400 rounded-xl px-2 py-2 outline-none text-2xl font-medium w-full placeholder:text-gray-500' placeholder='Type a message' />
                    </div>
                    <BsEmojiSmileFill className='text-5xl text-gray-950 pe-1 ps-2' />
                </div>
            </div>
        </div>
    )
}

export default Message