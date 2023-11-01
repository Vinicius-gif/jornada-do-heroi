import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <h1>Hello Next.js!</h1>
      <p>
        Get started by editing <code>pages/index.js</code>
      </p>
      <Image src="/logo.svg" alt="Jornada do Herói" width={100} height={100} />
    </main>
  );
}
