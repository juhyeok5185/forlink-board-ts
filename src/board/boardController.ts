import { Request, Response } from "express";
import ApiResponse from "../response/ApiResponse";
import boardService from "./boardService";

const findAll = async (req: Request, res: Response)=> {
    res.json(ApiResponse.success(200 , "list 조회 성공" , await boardService.findAll() ));
};

const save = async (req: Request, res: Response)=> {
    const {title , content} = req.body;
    res.status(201).json(ApiResponse.success(201 , "저장 성공" , await boardService.save(title , content)));
}

const findById = async (req: Request, res: Response)=> {
    res.status(200).json(ApiResponse.success(200 , "조회 성공" , await boardService.findById))
}

export default {
    findAll
    , save
    ,findById
};