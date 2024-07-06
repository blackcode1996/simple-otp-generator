<h1 align="center" id="title">Simple OTP and Password Generator</h1>



<p align="center"><img src="https://github.com/blackcode1996/simple-otp-generator/assets/110044436/1b8c2877-c232-4697-a4fe-e1646860d6a6" alt="project-image" width="180" height="180/"></p>
<p align="center">Generate one-time passwords (OTPs) and Random Password with ease.</p>


## :accessibility: Installation

```
npm install simple-otp-generator
```

## :space_invader: Usage

- How to use OTP Generator
```
import { generateOTP } from 'simple-otp-generator';

// Default length is 4
const otp1 = generateOTP();
console.log('Generated OTP (default length):', otp1);

// Specify length as an option
const otp2 = generateOTP({ length: 6 });
console.log('Generated OTP (length 6):', otp2);

// Provide length directly (backward compatible)
const otp3 = generateOTP(8);
console.log('Generated OTP (length 8):', otp3);
```
- How to use Password Generator
```
import { generatePassword } from 'simple-otp-generator';

// Default length is 6
const password1 = generatePassword();
console.log('Generated Password (default length):', password1);

// Specify length as an option
const password2 = generatePassword({ length: 8 });
console.log('Generated Password (length 6):', password2);

// Provide length directly (backward compatible)
const password3 = generatePassword(8);
console.log('Generated Password (length 8):', password3);
```


## 🏛️Options

```
length (optional)
Type: number
Default: 4 for OTP generator and 6 for Password generator
Description: The length of the generated OTP or Password.
```
