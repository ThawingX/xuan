#!/bin/sh
cd /proj/website/temp/
data=www
ps -fe|grep $data |grep -v grep
if [ $? -ne 0 ]
then
echo begin `date '+%Y%m%d %H:%S:%M'`
echo "start process....."
nohup node bin/www &
else
	echo "runing....."
fi
