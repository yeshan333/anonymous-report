/*
 * 获取最近上传的记录
 */

import request from 'umi-request';

const URL = 'http://47.92.4.141:8080/api/findLatestInf/admin';

export async function getSingleRecords() {
  return request(URL);
}
