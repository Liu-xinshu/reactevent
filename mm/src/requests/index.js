import axios from 'axios';
import '@/mock/index';

//首页初始化
export const getdata = (params) => axios.post('/get/data', params);


//分类页面
export const getclassify = () => axios.get('/get/classify');