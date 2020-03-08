'use strict';

//const whit main object 
var app = {
  title: 'Indesicion App',
  subtitle: 'I will deside your future',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
  }
  renderForm();
};

//create remove all button
//equal to empty array e rerender
var count = 0;

var remove = function remove() {
  app.options = [''];
};

// const onMakeDecision = () => const randomNum = Math.random()
var appRoot = document.getElementById('app');
var renderForm = function renderForm() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      ' ',
      app.title
    ),
    app.subtitle && React.createElement(
      'p',
      null,
      app.subtitle
    ),
    React.createElement(
      'p',
      null,
      app.options.length > 0 ? 'Here are your option' : 'No options',
      ' '
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (option) {
        return React.createElement(
          'li',
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      ),
      React.createElement(
        'button',
        { onClick: remove },
        'Remove All'
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

renderForm();
remove();
