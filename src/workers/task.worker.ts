self.onmessage = () => {
  let count = 0;
  
  // Heavy task
  for (let i = 0; i < 1000000000; i++) {
    count += i;
  }

  self.postMessage(count);
}