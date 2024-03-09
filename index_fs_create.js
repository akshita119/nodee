var fs=require('fs')


fs.writeFile('test2.txt', 'Hello World yayyyyy yipeee', function(err){
    if(err) throw err;
    else console.log('Saved')
})