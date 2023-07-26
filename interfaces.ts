export interface Characters {
    [x: string]: any 
    results :Array<Character>
}
export interface Character {
    
            
        id: number,
        name: string,
        image: string,
        quote: string,
        episode: string    
    
}