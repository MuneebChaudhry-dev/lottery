'use cliet';
import Atomic from './components/Atomic';
import Classic from './components/Classic';
import Cosmic from './components/Cosmic';
import Card from './components/common/Card';
import Navbar from './components/common/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <h2 className='px-4 text-2xl'>Lattest Results</h2>
      <Cosmic />
      <Classic />
      <Atomic />
    </>
  );
}
