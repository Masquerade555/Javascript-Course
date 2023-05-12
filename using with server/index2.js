var k = 0
function timeout(){
while(k<=100000)
{
    k = k+1
    postMessage(k)
    setTimeout("timecount()",0)
}
}

self.onmessage = timeout()