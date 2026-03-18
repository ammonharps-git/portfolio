import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

interface RequestBody {
  message: string;
  captchaToken: string;
}

interface RecaptchaResponse {
  success: boolean;
  challenge_ts?: string;
  hostname?: string;
  "error-codes"?: string[];
}

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  if (!event.body) {
    return { statusCode: 400, body: "Missing request body" };
  }

  const body: RequestBody = JSON.parse(event.body);

  if (!body.captchaToken) return { statusCode: 403, body: "Missing capcha token" };

  // Verify capcha
  const response = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.RECAPTCHA_SECRET}&response=${body.captchaToken}`,
    }
  );

  const data: RecaptchaResponse = await response.json();

  if (!data.success) {
    return { statusCode: 403, body: "Captcha failed" };
  }

  // TODO: send SES email here

  return { statusCode: 200, body: "Contact form submitted" };
};