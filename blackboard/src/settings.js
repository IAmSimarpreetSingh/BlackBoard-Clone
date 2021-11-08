import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";


const appID = "a5ec9b31327948cc8b5d65c47bf643c8";
const token = "006a5ec9b31327948cc8b5d65c47bf643c8IACfou4AJhhpBSli4J55figzzH1p6xU4p951sJIh9Oy2lFpiGh8AAAAAEACkCrtyAZuKYQEAAQAAm4ph";


export const config = {mode: "rtc", codec: "vp8", appId: appID, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "Main";