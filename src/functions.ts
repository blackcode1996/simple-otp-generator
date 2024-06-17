import { OtpGeneratorProps, PasswordGeneratorProps } from "./types";

function getLengthFromOptions(
  options: number | { length?: number },
  defaultLength: number
): number {
  if (typeof options === "number") {
    return options;
  } else if (
    typeof options === "object" &&
    typeof options.length === "number"
  ) {
    return options.length;
  } else {
    throw new Error(
      "Invalid options provided. Please provide a number or an object with a length property."
    );
  }
}

function getRandomCharacter(charSet: string): string {
  return charSet.charAt(Math.floor(Math.random() * charSet.length));
}

export function generateOTP(
  options: OtpGeneratorProps = { length: 4 }
): string {
  const length = getLengthFromOptions(options, 4);
  const num = "0123456789";
  let otp = "";

  for (let i = 0; i < length; i++) {
    otp += getRandomCharacter(num);
  }

  return otp;
}

export function generatePassword(
  options: PasswordGeneratorProps = { length: 6 }
): string {
  const length = getLengthFromOptions(options, 6);

  if (length < 2) {
    throw new Error(
      "Password length should be at least 2 to include numeric and special characters."
    );
  }

  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numericChars = "0123456789";
  const specialChars = "!@#$%^&*_";

  let password =
    getRandomCharacter(numericChars) + getRandomCharacter(specialChars);

  const allChars =
    lowercaseChars + uppercaseChars + numericChars + specialChars;
  for (let i = 0; i < length - 2; i++) {
    password += getRandomCharacter(allChars);
  }

  password = password
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");

  return password;
}
