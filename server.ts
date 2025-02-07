import app from "./src/app"; // app.ts를 가져옵니다.

const PORT = 3000;

// 서버 실행
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});