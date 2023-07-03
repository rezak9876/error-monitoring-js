## Monitoring all errors

[![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/error-monitoring)

### Installation
`npm install error-monitoring-js`

### Usage
```javascript 
<script type="module">
    import Monitoring from "./node_modules/error-monitoring/src/index.js";
  try {
    Monitoring.init({
      dsn: "a2918bf3b6d6867d96385add0a8cc5042f35a4e6"
    });
  } finally {}


  function c() {
    b()
  }

  function b() {
    fj()
  }
  c()
</script>
```

### Author
Reza Karimi