import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";


const appID = "a5ec9b31327948cc8b5d65c47bf643c8";
const token = "006a5ec9b31327948cc8b5d65c47bf643c8IACHK8e3EhzBLM0CNIpufjCO8pWQ5Yx3AVlANSb24RJc5VpiGh8AAAAAEADd+JEhz9uQYQEAAQDN25Bh";


export const config = {mode: "rtc", codec: "vp8", appId: appID, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "Main";