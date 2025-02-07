import { Router } from "express";
import boardController from "./boardController";

const router = Router();

// 게시글 목록 조회
router.get("/", boardController.findAll);

// 게시글 작성
router.post("/", boardController.save);

// 특정 게시글 조회
router.get("/:id", boardController.findById);

// // 특정 게시글 수정
// router.put("/:id", boardController.update);
//
// 특정 게시글 삭제 추가
// router.delete("/:id", boardController.deleteById);

export default router;