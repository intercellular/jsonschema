cm = function(vars){
  var e = {
    $type: "textarea",
    _ed: null,
    $init: function(){
      this._ed = CodeMirror.fromTextArea(this, {
        mode: "application/json", lineNumbers: true, lineWrapping: true, lint: true, styleActiveLine: true, autoCloseBrackets: true, matchBrackets: true, viewportMargin: true, theme: "neo", gutters: ["CodeMirror-lint-markers"]
      })
      try{
        this._ed.on("change", function(e){
          if(this._update) this._update(this._ed.getValue());
        }.bind(this))
      } catch (e) {}
      if(this._focused) this._ed.focus()
      if(vars._url){
        fetch(vars._url).then(function(res){
          return res.json();
        }).then(function(res){
          this.value = JSON.stringify(res, null, 2);
          this._ed.setValue(this.value);
          this._update(this.value);
        }.bind(this))
      } else {
        if(vars._afterInit && typeof vars._afterInit === "function") vars._afterInit.call(this);
      }
    },
  }
  // write variables
  for(var key in vars){
    if(key !== "$init") e[key] = vars[key];
  }

  return e;
}
