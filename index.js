window.onload = async function() {
    var endpoint = "https://api.rss2json.com/v1/api.json";
    var feed_url = "https://b.hatena.ne.jp/hotentry/it.rss";
    
    // rss feed を取得
    var res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${feed_url}`);
    // text を json 化
    var data = await res.json();
    
    // フィードのタイトルをセット
    $feed_title.innerHTML = "にゅーす（はてぶ）";
  
    let count = 0;
    // アイテムを１個ずつ表示
    data.items.forEach(item => {
     count += 1;
     var $post = document.createElement('div');
      $post.innerHTML = `
        <h3><img src="http://capture.heartrails.com/180x150/?${item.link}">${count}位 <a href='${item.link}'>${item.title}</a></h3>

      `;
      $post.classList.add('post');
      $posts.appendChild($post);
    });
  };
  
          // <p>${item.description}</p>
