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

      <main className="main py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-12 gap-4">
            <div className="rounded-lg h-32 transition duration-300 ease-in-out cursor-pointer flex flex-col justify-center items-center hover:bg-gray-100">
              <ArrowDownIcon className="text-3xl" />

              <span className="text-sm">Arrow Down</span>
            </div>

            <div className="rounded-lg h-32 transition duration-300 ease-in-out cursor-pointer flex flex-col justify-center items-center hover:bg-gray-100">
              <ArrowUpIcon className="text-3xl" />

              <span className="text-sm">Arrow Up</span>
            </div>

            <div className="rounded-lg h-32 transition duration-300 ease-in-out cursor-pointer flex flex-col justify-center items-center hover:bg-gray-100">
              <ArrowLeftIcon className="text-3xl" />

              <span className="text-sm">Arrow Left</span>
            </div>

            <div className="rounded-lg h-32 transition duration-300 ease-in-out cursor-pointer flex flex-col justify-center items-center hover:bg-gray-100">
              <ArrowRightIcon className="text-3xl" />

              <span className="text-sm">Arrow Right</span>
            </div>

            <div className="rounded-lg h-32 transition duration-300 ease-in-out cursor-pointer flex flex-col justify-center items-center hover:bg-gray-100">
              <BarsIcon className="text-3xl" />

              <span className="text-sm">Bars</span>
            </div>

            <div className="rounded-lg h-32 transition duration-300 ease-in-out cursor-pointer flex flex-col justify-center items-center hover:bg-gray-100">
              <BellIcon className="text-3xl" />

              <span className="text-sm">Bell</span>
            </div>

            <div className="rounded-lg h-32 transition duration-300 ease-in-out cursor-pointer flex flex-col justify-center items-center hover:bg-gray-100">
              <CancelIcon className="text-3xl" />

              <span className="text-sm">Cancel</span>
            </div>

            <div className="rounded-lg h-32 transition duration-300 ease-in-out cursor-pointer flex flex-col justify-center items-center hover:bg-gray-100">
              <CommentingIcon className="text-3xl" />

              <span className="text-sm">Commenting</span>
            </div>

            <div className="rounded-lg h-32 transition duration-300 ease-in-out cursor-pointer flex flex-col justify-center items-center hover:bg-gray-100">
              <EyeIcon className="text-3xl" />

              <span className="text-sm">Eye</span>
            </div>

            <div className="rounded-lg h-32 transition duration-300 ease-in-out cursor-pointer flex flex-col justify-center items-center hover:bg-gray-100">
              <EyeCloseIcon className="text-3xl" />

              <span className="text-sm">Eye Close</span>
            </div>

            <div className="rounded-lg h-32 transition duration-300 ease-in-out cursor-pointer flex flex-col justify-center items-center hover:bg-gray-100">
              <HeartIcon className="text-3xl" />

              <span className="text-sm">Heart</span>
            </div>

            <div className="rounded-lg h-32 transition duration-300 ease-in-out cursor-pointer flex flex-col justify-center items-center hover:bg-gray-100">
              <HeartOutlineIcon className="text-3xl" />

              <span className="text-sm">Heart Outline</span>
            </div>

            <div className="rounded-lg h-32 transition duration-300 ease-in-out cursor-pointer flex flex-col justify-center items-center hover:bg-gray-100">
              <SpinnerIcon className="text-3xl" />

              <span className="text-sm">Spinner</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
