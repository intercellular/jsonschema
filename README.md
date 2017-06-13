# jsonschema
JSON Schema Validator in Cell.js

# Demo 

Check out the demo [here](https://intercellular.github.io/jsonschema/)

# Usage

There are two ways (You can see an actual usage here: https://github.com/intercellular/jsonschema/blob/master/index.html#L30) :

## 1. Initialize with static value

Use the `value` attribute to initialize with your own value.

```js
var app = App({
  schema: {
    value: {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        }
      }
    }
  },
  data: {
    value: {
      "name": "Ethan"
    }
  }
});
```

## 2. Initialize with remote JSON

Use the `url` attribute to fetch a remote JSON object for usage.

```js
var app = App({
  schema: {
    url: "./example/schema.json"
  },
  data: {
    url: "./example/data.json"
  }
});
```
