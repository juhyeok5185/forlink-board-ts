import { Request, Response } from "express";
import ApiResponse from "../response/ApiResponse";
import boardService from "./boardService";

const findAll = async (req: Request, res: Response)=> {
    res.json(ApiResponse.success(200 , "list 조회 성공" , await boardService.findAll() ));
};

const save = async (req: Request, res: Response)=> {
    const {title , content} = req.body;
    res.json(ApiResponse.success(201 , "저장 성공" , await boardService.save(title , content)));
}

export default {
    findAll
    , save
};