import axios from 'axios';
import { setCookie } from './cookie';
export async function slientRefresh(refresh) {
  try {
    const response = await axios.get(`/api/v1/account/code?token=${refresh}`);

    setCookie('myAToken', response.data.data.access, {
      path: '/',
      secure: true,
      sameSite: 'none',
    });

    return response.data.data.access;
  } catch (e) {
    console.log(e);
  }
}
