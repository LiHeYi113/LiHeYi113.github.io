var posts=["2024/12/16/这是一个擅长离开的世界，而我们都不擅长告别。/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };