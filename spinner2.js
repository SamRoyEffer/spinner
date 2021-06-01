const spinnerForms = ['\r|   ','\r/   ','\r-   ','\r|    ','\r-   ','\r|\   ']
let secs = 200
for (let spin of spinnerForms){
setTimeout(() => {
  process.stdout.write(spin);
}, secs);
secs += 100
};