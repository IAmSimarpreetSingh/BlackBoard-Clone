import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";


const appID = "a5ec9b31327948cc8b5d65c47bf643c8";
const token = "006a5ec9b31327948cc8b5d65c47bf643c8IABiDthGk3AOUDnIGff1f9TsEp5FTum6X+mk+tz8bYpjE1piGh8AAAAAEADfTJIXc+i+YQEAAQBz6L5h";


export const config = { mode: "rtc", codec: "vp8", appId: appID, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "Main";