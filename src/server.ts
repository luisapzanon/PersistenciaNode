const {app, setup} = require('./index')
//parte 11
if (require.main === module) {
 setup();
 app.listen(3000, () => console.log('Server started at http://localhost:3000'));
}