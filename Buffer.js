//请在node环境下执行
//JavaScript里的String对象，存储的是字符串，而且是Unicode编码的。
//Buffer代表一个缓冲区，存储二进制数据，是字节流。我们在网络传输时，就传输的这种字节流。写文件时，也是写的字节流。

//Buffer对象
构造方法：
1.poolSize: 8192,
2.from:
3.alloc:
4.allocUnsafe:
5.allocUnsafeSlow:
6.isBuffer:
7.compare:
8.isEncoding:
9.concat:
10.byteLength:

//实例化Buffer的四种方式
//1. 字符串实例 根据一个字符串和编码格式创建buffer，不指定编码时默认使用utf8
//let buf = new Buffer(str[,encoding])
new Buffer('Hello Node')
<Buffer 35>

//指定大小实例
new Buffer(8)
<Buffer 00 00 00 00 00 00 00 00>

//数组实例
let buf = new Buffer([1 ,2 ,3])
<Buffer 01 02 03>
//取值
buf[1]
2
