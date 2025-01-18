import crypto from 'crypto';
const SECRET_KEY = process.env.SECRET_KEY || 'default_secret_key'; 

export const encrypt = (data: object): string => {
  const cipher = crypto.createCipheriv(
    'aes-256-cbc',
    Buffer.from(SECRET_KEY.substring(0, 32)),
    Buffer.from(SECRET_KEY.substring(0, 16))
  );
  let encrypted = cipher.update(JSON.stringify(data), 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
};

export const decrypt = (encryptedData: string): object => {
  const decipher = crypto.createDecipheriv(
    'aes-256-cbc',
    Buffer.from(SECRET_KEY.substring(0, 32)),
    Buffer.from(SECRET_KEY.substring(0, 16))
  );
  let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return JSON.parse(decrypted);
};