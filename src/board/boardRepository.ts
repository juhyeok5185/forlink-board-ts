import redisConfig from "../config/redisConfig";

const BOARD_LIST_KEY = "board:list"; // 게시글 리스트 키
const BOARD_IDS_KEY = "board:ids"; // 게시글 ID 자동 증가 키

// Redis에서 리스트 데이터 조회
const findAll = async (): Promise<string[]> => {
    return await redisConfig.lRange(BOARD_LIST_KEY, 0, -1);
};

const save = async (title: string, content: string): Promise<void> => {
    try {
        // 1. 새로운 게시글 ID 생성 (자동 증가)
        const boardId = await redisConfig.incr(BOARD_IDS_KEY);

        // 2. Redis에 게시글 데이터 저장 (board:{id} 형식)
        const boardKey = `board:${boardId}`;
        await redisConfig.hSet(boardKey, { title, content });

        // 3. 게시글 ID를 board:list에 추가 (게시글 리스트 업데이트)
        await redisConfig.rPush(BOARD_LIST_KEY, boardKey);

        console.log(`✅ 게시글 저장 완료: ${boardKey}`);
    } catch (error) {
        console.error("❌ 게시글 저장 중 오류 발생:", error);
        throw error; // 에러 재전달
    }
};

export default {findAll , save};