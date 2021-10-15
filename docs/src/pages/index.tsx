import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';

import {
  ArrowDownIcon,
  ArrowUpIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  BarsIcon,
  BellIcon,
  CancelIcon,
  CommentingIcon,
  EyeIcon,
  EyeCloseIcon,
  HeartIcon,
  HeartOutlineIcon,
  SpinnerIcon,
  LinkIcon,
  MicrophoneIcon,
  MicrophoneSlashIcon,
  PaperPlaneIcon,
  PencilSquareOutlineIcon,
  PhoneIcon,
  PowerOffIcon,
  TrashIcon,
  VideoCameraIcon,
  VolumeOffIcon,
  VolumeUpIcon,
} from '@parley-hub/aeolus';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Icon Font - Parley Hub</title>
        <meta name="description" content="Icon Font - Parley Hub" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="border-b border-solid border-gray-200 bg-white flex h-16 items-center justify-center">
        <Link href="/">
          <a>
            <h1 className="text-xl text-blue-500 font-medium md:inline-block">
              Parley Hub Icon Font
            </h1>
          </a>
        </Link>
      </header>

      <main className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 gap-4">
            <div className="rounded-lg h-32 transition duration-300 ease-in-out cursor-pointer flex flex-col justify-center items-center hover:bg-gray-100 text-center">
              <ArrowDownIcon className="text-3xl" />

              <span className="text-xs md:text-sm">Arrow Down</span>
            </div>

            <div className="rounded-lg h-32 transition duration-300 ease-in-out cursor-pointer flex flex-col justify-center items-center hover:bg-gray-100 text-center">
              <ArrowUpIcon className="text-3xl" />

              <span className="text-xs md:text-sm">Arrow Up</span>
            </div>

            <div className="rounded-lg h-32 transition duration-300 ease-in-out cursor-pointer flex flex-col justify-center items-center hover:bg-gray-100 text-center">
              <ArrowLeftIcon className="text-3xl" />

              <span className="text-xs md:text-sm">Arrow Left</span>
            </div>

            <div className="rounded-lg h-32 transition duration-300 ease-in-out cursor-pointer flex flex-col justify-center items-center hover:bg-gray-100 text-center">
              <ArrowRightIcon className="text-3xl" />

              <span className="text-xs md:text-sm">Arrow Right</span>
            </div>

            <div className="rounded-lg h-32 transition duration-300 ease-in-out cursor-pointer flex flex-col justify-center items-center hover:bg-gray-100 text-center">
              <BarsIcon className="text-3xl" />

              <span className="text-xs md:text-sm">Bars</span>
            </div>

            <div className="rounded-lg h-32 transition duration-300 ease-in-out cursor-pointer flex flex-col justify-center items-center hover:bg-gray-100 text-center">
              <BellIcon className="text-3xl" />

              <span className="text-xs md:text-sm">Bell</span>
            </div>

            <div className="rounded-lg h-32 transition duration-300 ease-in-out cursor-pointer flex flex-col justify-center items-center hover:bg-gray-100 text-center">
              <CancelIcon className="text-3xl" />

              <span className="text-xs md:text-sm">Cancel</span>
            </div>

            <div className="rounded-lg h-32 transition duration-300 ease-in-out cursor-pointer flex flex-col justify-center items-center hover:bg-gray-100 text-center">
              <CommentingIcon className="text-3xl" />

              <span className="text-xs md:text-sm">Commenting</span>
            </div>

            <div className="rounded-lg h-32 transition duration-300 ease-in-out cursor-pointer flex flex-col justify-center items-center hover:bg-gray-100 text-center">
              <EyeIcon className="text-3xl" />

              <span className="text-xs md:text-sm">Eye</span>
            </div>

            <div className="rounded-lg h-32 transition duration-300 ease-in-out cursor-pointer flex flex-col justify-center items-center hover:bg-gray-100 text-center">
              <EyeCloseIcon className="text-3xl" />

              <span className="text-xs md:text-sm">Eye Close</span>
            </div>

            <div className="rounded-lg h-32 transition duration-300 ease-in-out cursor-pointer flex flex-col justify-center items-center hover:bg-gray-100 text-center">
              <HeartIcon className="text-3xl" />

              <span className="text-xs md:text-sm">Heart</span>
            </div>

            <div className="rounded-lg h-32 transition duration-300 ease-in-out cursor-pointer flex flex-col justify-center items-center hover:bg-gray-100 text-center">
              <HeartOutlineIcon className="text-3xl" />

              <span className="text-xs md:text-sm">Heart Outline</span>
            </div>

            <div className="rounded-lg h-32 transition duration-300 ease-in-out cursor-pointer flex flex-col justify-center items-center hover:bg-gray-100 text-center">
              <SpinnerIcon className="text-3xl" />

              <span className="text-xs md:text-sm">Spinner</span>
            </div>

            <div className="rounded-lg h-32 transition duration-300 ease-in-out cursor-pointer flex flex-col justify-center items-center hover:bg-gray-100 text-center">
              <LinkIcon className="text-3xl" />

              <span className="text-xs md:text-sm">Link</span>
            </div>

            <div className="rounded-lg h-32 transition duration-300 ease-in-out cursor-pointer flex flex-col justify-center items-center hover:bg-gray-100 text-center">
              <MicrophoneIcon className="text-3xl" />

              <span className="text-xs md:text-sm">Microphone</span>
            </div>

            <div className="rounded-lg h-32 transition duration-300 ease-in-out cursor-pointer flex flex-col justify-center items-center hover:bg-gray-100 text-center">
              <MicrophoneSlashIcon className="text-3xl" />

              <span className="text-xs md:text-sm">MicrophoneSlash</span>
            </div>

            <div className="rounded-lg h-32 transition duration-300 ease-in-out cursor-pointer flex flex-col justify-center items-center hover:bg-gray-100 text-center">
              <PaperPlaneIcon className="text-3xl" />

              <span className="text-xs md:text-sm">PaperPlane</span>
            </div>

            <div className="rounded-lg h-32 transition duration-300 ease-in-out cursor-pointer flex flex-col justify-center items-center hover:bg-gray-100 text-center">
              <PencilSquareOutlineIcon className="text-3xl" />

              <span className="text-xs md:text-sm">Pencil Square Outline</span>
            </div>

            <div className="rounded-lg h-32 transition duration-300 ease-in-out cursor-pointer flex flex-col justify-center items-center hover:bg-gray-100 text-center">
              <PhoneIcon className="text-3xl" />

              <span className="text-xs md:text-sm">Phone</span>
            </div>

            <div className="rounded-lg h-32 transition duration-300 ease-in-out cursor-pointer flex flex-col justify-center items-center hover:bg-gray-100 text-center">
              <PowerOffIcon className="text-3xl" />

              <span className="text-xs md:text-sm">PowerOff</span>
            </div>

            <div className="rounded-lg h-32 transition duration-300 ease-in-out cursor-pointer flex flex-col justify-center items-center hover:bg-gray-100 text-center">
              <TrashIcon className="text-3xl" />

              <span className="text-xs md:text-sm">Trash</span>
            </div>

            <div className="rounded-lg h-32 transition duration-300 ease-in-out cursor-pointer flex flex-col justify-center items-center hover:bg-gray-100 text-center">
              <VideoCameraIcon className="text-3xl" />

              <span className="text-xs md:text-sm">Video Camera</span>
            </div>

            <div className="rounded-lg h-32 transition duration-300 ease-in-out cursor-pointer flex flex-col justify-center items-center hover:bg-gray-100 text-center">
              <VolumeOffIcon className="text-3xl" />

              <span className="text-xs md:text-sm">Volume Off</span>
            </div>

            <div className="rounded-lg h-32 transition duration-300 ease-in-out cursor-pointer flex flex-col justify-center items-center hover:bg-gray-100 text-center">
              <VolumeUpIcon className="text-3xl" />

              <span className="text-xs md:text-sm">Volume Up</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
