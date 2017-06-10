var Log = {
  _messages: [],
  _refresh: function(messages){
    this._messages = messages;
  },
  id: "console",
  $update: function(){
    this.$components = this._messages.map(function(item){
      return {
        style: "padding: 5px;",
        $components: [{
          $type: "span", $text: item.keyword,
          style: item.valid ? "color: green;" : "background: #B64926; color: white; margin: 5px; padding: 2px 10px; border-radius: 20px;"
        }, {
          $type: "span", $text: item.dataPath ? item.dataPath + " " + item.message : item.message,
          style: item.valid ? "color: green;" : "color: #B64926;"
        }]
      }
    })
  }
}
