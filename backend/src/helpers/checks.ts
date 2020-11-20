class Checks {
    public camps = (
        name: string, description:string, 
        author: string, color: string): boolean => {
            if( name == null || description == null ||
                author == null || color == null ){
                    return true
                }
            return false
    }
}


export interface IChecks {
    camps: (name: string, description:string, 
        author: string, color: string) => boolean
}

export default Checks