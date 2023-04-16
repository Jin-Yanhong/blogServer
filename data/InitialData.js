/*******************************************************************************************/
// 用户数据

db.getCollection('sys_users').drop();

db.createCollection('sys_users');

db.getCollection('sys_users').insertMany([{ user_name: 'admin', password: '555953961,2052564391,1133070862,1249910723', _id: 'adminno1' }]);

