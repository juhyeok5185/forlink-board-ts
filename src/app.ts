import express, { Application } from "express";
import cors from "cors";
import { createClient } from "redis";
import boardRoutes from "./board/boardRoutes";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Redis 클라이언트 생성 및 연결
const redisClient = createClient({
    socket: { host: "localhost", port: 6379 }
});

redisClient.on("error", (err: Error) => console.error("❌ Redis 연결 오류:", err));

(async () => {
    try {
        await redisClient.connect();
        console.log("✅ Redis 연결 성공!");
    } catch (err) {
        console.error("❌ Redis 연결 실패:", err);
    }
})();

// 라우터 등록
app.use("/board", boardRoutes);

// 앱 내보내기
export default app;
