import { DefaultService, OpenAPI, RefreshToken_In, UserInfo_Out } from 'client';

export const checkUserSession = async (): Promise<UserInfo_Out> => {
  try {
    const res = await DefaultService.getCurrentUserInfo();
    return res;
  } catch {
    if (typeof OpenAPI.TOKEN === 'string') {
      const refresh_token_req: RefreshToken_In = {
        refresh_token: OpenAPI.TOKEN
      };
      const res = await DefaultService.getRefreshToken(refresh_token_req);
      OpenAPI.TOKEN = res.access_token;
      const response = await DefaultService.getCurrentUserInfo();
      return response;
    } else {
      throw new Error('No token found');
    }
  }
};

export const logoutApi = async () => {
  OpenAPI.TOKEN = '';
};
