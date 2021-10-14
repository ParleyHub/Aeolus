import type { NextPage } from 'next';
import Head from 'next/head';

import {
  ArrowDownIcon,
  CloseIcon,
  EyeIcon,
  EyeCloseIcon,
} from '@parley-hub/aeolus';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Icon Font - Parley Hub</title>
        <meta name="description" content="Icon Font - Parley Hub" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ArrowDownIcon />

        <CloseIcon />

        <EyeIcon />

        <EyeCloseIcon />
      </main>
    </div>
  );
};

export default Home;
