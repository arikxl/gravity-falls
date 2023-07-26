import { Character, Characters } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const url = await fetch('https://gravity-falls-api.vercel.app/api/characters');

  return url.json()
}
getData()

export default async function Home() {

  const data: Characters = await getData();

  return (
    <main className="">
      <h2>characters: {data.length}</h2>
      <div className='grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-5 xl:gap-8'>

      {
          data.map((character: Character) => (
            <div key={character.id}
              className='w-58 border  flex flex-col overflow-hidden rounded-lg bg-white'>
              <p className='text-center '>
                {character.name}
              </p>
            <Link href={`/characters/${character.id}`}
                className='group relative block h-36  overflow-hidden bg-gray-100 '>
                <Image className='absolute inset-0 w-full h-full object-cover
                transition duration-200 group-hover:scale-110'
                src={
                  character.image[0] === '/'
                  ? `https:${character.image}`
                  : `${character.image}`
                }
                width={500} height={300} alt={character.name}
                loading="lazy"
                />
            </Link>
              </div>
        ))
      }
      </div>
    </main>
  )
}
