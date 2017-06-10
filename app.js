App = function(options){
  return {
    $cell: true,
    class: "horizontal layout",
    _schema: null,
    _data: null,
    _run: function(){
      if(this._schema && this._data){
        var ajv = new Ajv({ allErrors: true, verbose: true });
        var validate = ajv.compile(this._schema)
        var valid = validate(this._data);
        var log = this.querySelector("#console");
        if(valid){
          log._refresh([{keyword: "", message: "It's Valid!", valid: true}]);
        } else {
          log._refresh(validate.errors);
        }
      }
    },
    $components: [
      {
        class: "col",
        $components: [
          label("Schema"), 
          cm({
            _url: (options && options.schema && options.schema.url) ? options.schema.url : null,
            value: (options && options.schema && options.schema.value) ? JSON.stringify(options.schema.value, null, 2) : null,
            _afterInit: function(){ this._update(this.value) },
            _update: function(content){
              this._schema = JSON.parse(content);
              this._run()
            }
          })
        ]
      },
      {
        class: "col",
        $components: [
          label("Data"),
          cm({
            _url: (options && options.data && options.data.url) ? options.data.url : null,
            value: (options && options.data && options.data.value) ? JSON.stringify(options.data.value, null, 2) : "{}",
            _afterInit: function(){ this._update(this.value) },
            _update: function(content){
              try { this._data = JSON.parse(content); } catch (e) { }
              this._run(); 
            }
          })
        ]
      },
      {
        class: "col",
        $components: [
          label("Console"),
          Log
        ]
      }
    ]
  }
}
