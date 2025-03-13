"use server";

import crypto from "crypto";

export const isAdmin = async ({ key }: { key: string | null }) => {
  try {
    if (!key) return false;
    const SEC_KEY = process.env.ADMIN_SECRET;
    if (!SEC_KEY) {
      console.error("ADMIN_SECRET not found. Contact the developer.");
      return false;
    }
    // Ensure the lengths match before comparing
    if (key.length !== SEC_KEY.length) return false;
    const keyBuffer = Buffer.from(key);
    const secretBuffer = Buffer.from(SEC_KEY);
    return crypto.timingSafeEqual(keyBuffer, secretBuffer);
  } catch (error) {
    console.error("Error during admin check:", error);
    return false;
  }
};
