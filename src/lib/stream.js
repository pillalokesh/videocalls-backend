import { StreamChat } from "stream-chat";
import "dotenv/config";

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

if (!apiKey || !apiSecret) {
  throw new Error("Stream API Key and Secret must be defined in .env");
}

const streamClient = StreamChat.getInstance(apiKey, apiSecret);

export const upsertStreamUser = async (userData) => {
  try {
    const response = await streamClient.upsertUsers([userData]);
    return response;
  } catch (error) {
    console.error("❌ Error upserting Stream user:", error.message);
    return null;
  }
};

export const generateStreamToken = async (userId) => {
  try {
    const userIdStr = userId.toString();
    return streamClient.createToken(userIdStr);
  } catch (error) {
    console.error("❌ Error generating Stream token:", error.message);
    return null;
  }
};
