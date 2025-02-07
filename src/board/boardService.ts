import boardRepository from "./boardRepository";

const findAll = async () =>{
    return await boardRepository.findAll();
}

const save = async (title:string , content:string) =>{
    return await boardRepository.save(title , content);
}

const findById = async (id:string) =>{
    return await boardRepository.findById(id);
}

export default {findAll , save , findById}