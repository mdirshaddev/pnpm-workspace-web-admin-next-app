import Link from 'next/link';
import dynamic from 'next/dynamic';

export default async function Page() {
  return (
    <main>
      <div>
        blog page Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
        explicabo deleniti cupiditate! Dicta necessitatibus quam reprehenderit
        rem sed, inventore non perspiciatis dignissimos labore dolore recusandae
        facere, magni officia a! Expedita?
      </div>
      <Link href='/'>Homepage</Link>
    </main>
  );
}
