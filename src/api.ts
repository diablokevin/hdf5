//数据接口的ip和端口
const ip = 'http://127.0.0.1:5000';

const get_hd5_file_list = ip+'/api/get_hdf5_file_list';
const upload_hdf5file = ip+'/api/upload_hdf5file';
const get_hdf5file_basic_data = ip+'/api/get_hdf5file_basic_data';
const get_hdf5file_detail_data = ip+'/api/get_hdf5file_detail_data';
const get_parameter_list=ip+'/api/get_parameter_list';

//一定要注册才可以使用
export default {
    get_hd5_file_list: get_hd5_file_list,
    upload_hdf5file: upload_hdf5file,
    get_hdf5file_basic_data:get_hdf5file_basic_data,
    get_hdf5file_detail_data:get_hdf5file_detail_data,
    get_parameter_list:get_parameter_list

};