import {
  create
} from 'zustand'
import {
  doLogin
} from '@/api/user'

export const useUserStore = create((set) => ({
  user: null, // 用户信息
  isLogin: false, // 登录状态
  setLogin: async ({username="",password=""}) => {
    const res = await doLogin({username,password});
    const {token,data: user} = res.data;
    console.log('res',res);
    console.log('token',token);
    console.log('user',user);
    
    localStorage.setItem('token',token);
    set({
      user,
      isLogin: true,
    });
  },
  setLogout: () => {
    localStorage.removeItem('token');
    set({
      user: null,
      isLogin: false,
    });
  },
}))