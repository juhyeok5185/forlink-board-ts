class ApiResponse<T> {
    status: number; // HTTP 상태 코드
    message: string; // 응답 메시지
    data: T | null; // 응답 데이터는 null 또는 제네릭 타입

    constructor(status: number = 200, message: string = "Api Success", data: T | null = null) {
        this.status = status;
        this.message = message;
        this.data = data;
    }

    // 성공적인 응답
    static success<T>(status:number , message: string = "Api Success" , data: T): ApiResponse<T> {
        return new ApiResponse(status, message , data);
    }

    // 실패한 응답
    static failure(message: string = "Api Failure", status: number = 500): ApiResponse<null> {
        return new ApiResponse(status, message, null);
    }
}

export default ApiResponse;