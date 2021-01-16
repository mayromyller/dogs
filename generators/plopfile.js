module.exports = function (plop) {	
  plop.setGenerator('component', {
    description: 'application component logi',

    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Component name?'
    }],

    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.js',
        templateFile: 'templates/index.js.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/style.module.css',
        templateFile: 'templates/style.module.css.hbs',
      }
    ]
  });

};
  