import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";


const appID = "a5ec9b31327948cc8b5d65c47bf643c8";
const token = "006a5ec9b31327948cc8b5d65c47bf643c8IAA0dfdt6olFMwaEKYi9t7Pg+5gfbvNGLo42qnqPhmHTJFpiGh8AAAAAEADOb2NvReWQYgEAAQBF5ZBi";


export const config = { mode: "rtc", codec: "vp8", appId: appID, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "Main";