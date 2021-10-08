//数据接口的ip和端口
const ip = 'http://127.0.0.1:5000';

const get_hd5_file_list = ip+'/api/get_hdf5_file_list';
const upload_hdf5file = ip+'/api/upload_hdf5file';
//一定要注册才可以使用
export default {
    get_hd5_file_list: get_hd5_file_list,
    upload_hdf5file: upload_hdf5file,
};