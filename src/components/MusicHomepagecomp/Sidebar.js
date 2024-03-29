import { HeartIcon, HomeIcon, LibraryIcon, PlusCircleIcon, RssIcon, SearchIcon } from '@heroicons/react/outline'
import React from 'react';
import { playlistData } from '../../constant/playlistData';



const Sidebar = ({ setListId }) => {


    return (
        <div className='text-gray-500 p-5 text-sm border-r  border-gray-900 overflow-y-scroll h-90 scrollbar-hide w- w-56 pointer-events-auto'>
            <div className='space-y-4'>

                <button className='flex items-center space-x-2 hover:text-white'>
                    <HomeIcon className='h-5 w-5' />
                    <p>Home</p>
                </button>
                <button className='flex items-center space-x-2 hover:text-white'>
                    <SearchIcon className='h-5 w-5' />
                    <p>Search</p>
                </button>
                <button className='flex items-center space-x-2 hover:text-white'>
                    <LibraryIcon className='h-5 w-5' />
                    <p>Your Library</p>
                </button>
                <hr className='border-t-[0.1px] border-gray-900' />

                <button className='flex items-center space-x-2 hover:text-white'>
                    <PlusCircleIcon className='h-5 w-5' />
                    <p>Create Playlist</p>
                </button>
                <button className='flex items-center space-x-2 hover:text-white'>
                    <HeartIcon className='h-5 w-5' />
                    <p>Liked songs</p>
                </button>
                <button className='flex items-center space-x-2 hover:text-white'>
                    <RssIcon className='h-5 w-5' />
                    <p>Your episodes</p>
                </button >
                <hr className='border-t-[0.1px] border-gray-900' />

                {/* playlist */}

                {playlistData.map(({ id, name }, index) => (
                    <p key={id} onClick={() => setListId(index)} className='cursor-pointer hover:text-white'>{name}</p>
                ))}
            </div>
        </div>
    )
}

export default Sidebar
