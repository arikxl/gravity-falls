
import { Character } from "@/interfaces";


async function getData(id: string) {
    const url = await fetch(`https://gravity-falls-api.vercel.app/api/characters/${id}`);

    const data:Character = await url.json();
    return data
}

const CharacterPage = async ({ params }: { params: { id: string } }) => {
    const { id} = params;
    const data = await getData(id);


    return (
        <>
            <div>Character {id}</div>
            <p>{data.name}</p>
            <img
                src={ data.image}
            />
        </>
    )
}

export default CharacterPage