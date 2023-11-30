export type ApiErrorType =
  | {
      status: 401;
      data: {
        status_code: 401;
        status: "error";
        data: {
          error: string;
        };
      };
    }
  | {
      status: 403;
      data: {
        status_code: 403;
        status: "error";
        data: {
          error: string;
        };
      };
    }
  | {
      status: 422;
      data: {
        status_code: 422;
        status: "error";
        data: {
          error: string;
        };
      };
    };
