export const swaggerSchemasUser = {
  RegisterUser: {
    type: "object",
    required: ["name", "email", "password"],
    properties: {
      name: {
        type: "string",
        description: "Name of the users",
        example: "Jhon Doe",
      },
      email: {
        type: "string",
        description:
          "Unique email (only allowed: example.com, gmail.com, riwi.com)",
        example: "jhondoe@example.com",
      },
      password: {
        type: "string",
        description: "Secure password (will be hashed)",
        example: "Password_super_secret",
      },
    },
  },
  LoginUser: {
    type: "object",
    required: ["email", "password"],
    properties: {
      email: {
        type: "string",
        description: "Registered email",
        example: "jhondoe@example.com",
      },
      password: {
        type: "string",
        description: "Registered password",
        example: "Password_super_secret",
      },
    },
  },
  AuthResponse: {
    type: "object",
    properties: {
      token: {
        type: "string",
        description: "JWT token used for authentication",
        example: "eyJhbGciOiJIUzI1NiIsInR...",
      },
    },
  },
  UpdateUser: {
    type: "object",
    required: ["name", "email", "password"],
    properties: {
      name: {
        type: "string",
        description: "New name",
        example: "Jhon Doe Updated",
      },
      email: {
        type: "string",
        description: "New email",
        example: "jhondoenew@example.com",
      },
      password: {
        type: "string",
        description: "New password",
        example: "New_password_super_secret",
      },
    },
  },
  ResponseUser: {
    type: "object",
    properties: {
      id: {
        type: "integer",
        example: 1,
      },
      name: {
        type: "string",
        example: "Jhon Doe",
      },
      email: {
        type: "string",
        example: "jhondoe@example.com",
      },
      active: {
        type: "boolean",
        example: "true",
      },
      createdAt: {
        type: "string",
        format: "date-time",
        example: "2025-10-17T20:00:00Z",
      },
      updatedAt: {
        type: "string",
        format: "date-time",
        example: "2025-10-17T20:00:00Z",
      },
    },
  },
  ResponseUserAll: {
    type: "array",
    items: { $ref: "#/components/schemas/ResponseUser" },
  },
  ErrorResponse: {
    type: "object",
    properties: {
      status: {
        type: "integer",
        example: 404,
      },
      message: {
        type: "string",
        example: "Valida",
      },
      errors: {
        type: "object",
        additionalProperties: {
          type: "string",
        },
        example: "message with more details",
      },
    },
  },
};
