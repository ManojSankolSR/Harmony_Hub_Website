import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import { Button, buttonVariants } from './components/ui/button'
import { PiGithubLogo } from "react-icons/pi";
import { RxDownload } from "react-icons/rx";
import { Card, CardHeader, CardFooter, CardContent } from './components/ui/card'
import { Alert, AlertDescription, AlertTitle } from './components/ui/alert'
import { Terminal } from 'lucide-react'
import { BsStars } from "react-icons/bs";
import { SiMeilisearch } from "react-icons/si";
import { FiSun } from "react-icons/fi";
import Badge from './ScreenComponents/Badge'
import NavBar from './ScreenComponents/NavBar'
import FeaturesCard from './ScreenComponents/FeaturesCard'
import { IoMdSend } from "react-icons/io";
import { Separator } from '@radix-ui/react-separator';
import { PiCopyrightFill } from "react-icons/pi";
import { FaThreads } from "react-icons/fa6";
import ScreensShotscard from './ScreenComponents/ScreensShotscard'




function App() {




  return (
    <>
      < NavBar />

      <div id='maindiv' className='' >
        {/* lg:flex lg:flex-row lg:justify-between */}
        <div className='flex flex-col-reverse items-center  sm:flex-row sm:justify-between pt-16 min-h-screen ' id='Home' >
          <div className=" flex justify-center flex-col items-center  min-[800px]:w-3/5 min-[800px]:items-start" >
            <CardHeader className="text-4xl text font-bold text-center sm:text-6xl min-[800px]:text-start lg:text-8xl" >
              Harmony Hub Music.
            </CardHeader>
            <CardContent className="text-sm  text-center min-[800px]:text-start sm:text-base " >
              Welcome to Harmony Hub, the ultimate free music streaming app designed for music lovers everywhere. With Harmony Hub, you can enjoy your favorite songs, create personalized playlists, and discover new music, all in one convenient place.
            </CardContent>
            <CardContent className='flex justify-center items-start min-[800px]:justify-start  gap-3 flex-wrap' >
              <Badge icon={<BsStars size={16} />} title={"Unlimited & Free Streaming"} />
              <Badge icon={<BsStars size={16} />} title={"Add Free"} />
              <Badge icon={<BsStars size={16} />} title={"Free Downloads"} />
              <Badge icon={<BsStars size={16} />} title={"Cross-Platform Support"} />
              <Badge icon={<BsStars size={16} />} title={"Smart Search and Recommendations"} />
              <Badge icon={<BsStars size={16} />} title={"Offline Music Playback"} />
            </CardContent>
            <div >

            </div>

            < CardFooter className="flex flex-row gap-3" >
            <a href='http://github.com/ManojSankolSR/harmony_hub' className={buttonVariants({ variant: "" })}><PiGithubLogo size={25} className="mr-2" />GitHub</a>

              {/* <Button variant=""  ></Button> */}
              <a href='https://drive.google.com/file/d/1c7VnBLp-wFD2a6wEnw-MzNSTj5OG6tsx/view?usp=sharing' className={buttonVariants({ variant: "outline" })}><RxDownload size={25} className="mr-2" />Download</a>
              
              {/* <Button variant="outline"  ><RxDownload size={25} className="mr-2" />Download</Button> */}


            </CardFooter>
          </div>
          <br />
         
          <img src="./assets/HH_icon.svg" alt="" className='h-44 lg:w-[30%]  min-[800px]:flex lg:h-fit sm:hidden sm:w-[30%]  lg:flex' />
          <br />
         
          
        </div>



        <br id='Features' />
        <br />


        <br />
        <div className="flex flex-col justify-center" >

          <div className='flex flex-row items-center justify-evenly gap-5'>
            <IoMdSend size={35} />

            <div className='h-[.2px] bg-gray-500 w-20' ></div>
            <p className='text-xl font-semibold text-start sm:text-3xl lg:text-5xl'  >
              Features
            </p>
            <div className='h-[.2px] bg-gray-500 w-full' ></div>
          </div>

          <br />
          <br />

          <br />
          <div className='flex flex-wrap gap-6 justify-center flex-row' >
            <FeaturesCard title={"Music Downloads"} subtitle={"Download your favorite songs to your device and enjoy them offline without any interruptions. Harmony Hub makes your music accessible even when you don't have an internet connection."} />
            <FeaturesCard title={"Background Playback"} subtitle={"Keep your music playing while you multitask with other apps, ensuring a continuous listening experience.."} />
            <FeaturesCard title={"Save Playlists"} subtitle={"Organize your music with custom playlists. Create different playlists for different moods, activities, or occasions, and easily manage them within the app."} />
            <FeaturesCard title={"High-Quality Audio"} subtitle={"Experience superior sound quality with support for various audio formats. Harmony Hub ensures your music sounds its best, whether you're using headphones or speakers."} />
            <FeaturesCard title={"Search Songs"} subtitle={"Discover new music and find exactly what you're looking for with our advanced search feature. Explore an extensive library of songs, artists, and albums."} />
            <FeaturesCard title={"User-Friendly Interface"} subtitle={"Enjoy a seamless and intuitive user experience. Harmony Hub's sleek design and easy navigation make it simple to find and play your music."} />
            <FeaturesCard title={"Customizable Themes"} subtitle={"Personalize the app's look and feel with a variety of themes that match your style and preferences."} />
            <FeaturesCard title={"Music Recommendations"} subtitle={"Discover new music tailored to your tastes with personalized recommendations based on your listening habits."} />
          </div>



        </div>


        <br id='Screenshots' />
        <br />


        <br />
        <div className="flex flex-col justify-center"  >

          <div className='flex flex-row items-center justify-evenly gap-5'>
            <IoMdSend size={35} />

            <div className='h-[.2px] bg-gray-500 w-20' ></div>
            <p className='text-xl font-semibold text-start sm:text-3xl lg:text-5xl' >
              Screenshots
            </p>
            <div className='h-[.2px] bg-gray-500 w-full' ></div>
          </div>

          <br />
          <br />

          <br />
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6' >
            <ScreensShotscard image={"./assets/music_app_HomeScreen.png"} />
            <ScreensShotscard image={"./assets/Music_App_Drawer.png"} />
            <ScreensShotscard image={" ./assets/Music_App_PlayListScreen.png"} />
            <ScreensShotscard image={"./assets/Music_App_SongsPlayScreen.png"} />
            <ScreensShotscard image={"./assets/Music_App_Playlists.png"} />
            <ScreensShotscard image={"./assets/Music_App_FavSongs.png"} />
            <ScreensShotscard image={"./assets/Music_App_Recent.png"} />
            <ScreensShotscard image={"./assets/Music_App_Downloads.png"} />
            <ScreensShotscard image={"./assets/Music_App_Settings.png"} />
            <ScreensShotscard image={"./assets/Music_App_Search_1.png"} />
            <ScreensShotscard image={"./assets/Music_App_Search_2.png"} />













          </div>



        </div>

      </div>
      <br />
      <br />
      <br />
      <br />
      <div className=' h-fit border w-full shadow-xl shadow-black flex flex-row items-center justify-between  px-8 py-5' >



        
        <div className='flex gap-2 flex-row justify-center items-center text-gray-500 ' >
          <img src="./assets/HH_icon.svg" alt="" width={30} />
       

          <p className='text-1xl font-light' >Harmony Hub Music</p>
        </div>



        <div className='flex justify-center items-center gap-2  font-light text-gray-500' >
          <PiCopyrightFill size={20} /> 2024 Harmony Hub Music
        </div>

      </div>




    </>


  )
}

export default App
