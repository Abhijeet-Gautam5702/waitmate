import { IApiError } from "../interfaces/common.interface";

class ApiError extends Error implements IApiError {
  readonly statusCode: number;
  readonly message: string;
  readonly success: boolean;
  readonly errors?: unknown;

  constructor(
    statusCode: number,
    message: string,
    errors?: unknown,
    success: boolean = false
  ) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.success = success;

    // Normalize all types of errors into array
    if (Array.isArray(errors)) {
      this.errors = errors;
    } else if (errors instanceof Error) {
      this.errors = [errors];
      // Capture the error stack trace
      Error.captureStackTrace(this, ApiError);
      this.stack = errors.stack;
    } else if (errors !== undefined) {
      this.errors = [errors];
    } else {
      this.errors = [];
    }
  }

  // Structure the object to remove unnecessary fields in production environment
  toResponse() {
    return {
      statusCode: this.statusCode,
      message: this.message,
      success: this.success,
      errors: this.errors,
      // Return the error stack trace only in development environment
      ...{
        stack: process.env.NODE_ENV === "development" ? this.stack : undefined,
      }
    }
  }

  // Factory methods for boilerplate error responses
  static internal() {
    return new ApiError(500, "Internal Server Error");
  }

  static badRequest() {
    return new ApiError(400, "Bad Request");
  }

  static unauthorized() {
    return new ApiError(401, "Unauthorized");
  }
}

export default ApiError;
