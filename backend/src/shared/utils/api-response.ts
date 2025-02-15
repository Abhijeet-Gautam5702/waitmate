interface IApiResponse {
  readonly statusCode: number;
  readonly message: string;
  readonly data: unknown;
  readonly success: boolean;
}

class ApiResponse implements IApiResponse {
  readonly statusCode: number;
  readonly message: string;
  readonly data: unknown;
  readonly success: boolean;

  constructor(
    statusCode: number,
    message: string,
    data: unknown
  ) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.success = true;
  }
}

export default ApiResponse;
