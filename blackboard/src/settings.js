import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";


const appID = "a5ec9b31327948cc8b5d65c47bf643c8";
const token = "006a5ec9b31327948cc8b5d65c47bf643c8IAD9lov5QPknP3OFPu/9S2ntk3NQhQpgzcrwGHu18d6qClpiGh8AAAAAEACkCrtyyP2HYQEAAQDYC4hh";


export const config = {mode: "rtc", codec: "vp8", appId: appID, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "Main";