function fileExtension (x){
  const ext = x.split('.').pop();
  return ext;
}
console.log(fileExtension('App.js'))
console.log(fileExtension('index.html'))