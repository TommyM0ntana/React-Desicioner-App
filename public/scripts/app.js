'use strict';

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
  app.options = [];
  renderForm();
};

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
      app.options.length
    ),
    React.createElement(
      'p',
      null,
      app.options.length > 0 ? 'Here are your options' : 'No options',
      ' '
    ),
    React.createElement(
      'ol',
      null,
      React.createElement(
        'li',
        null,
        'Item one'
      ),
      React.createElement(
        'li',
        null,
        'Item two'
      )
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
      ),
      [React.createElement(
        'p',
        { key: '1' },
        'a'
      ), React.createElement(
        'p',
        { key: '2' },
        'b'
      ), React.createElement(
        'p',
        { key: '3' },
        'c'
      )]
    )
  );
  ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');
renderForm();
renderRemove();
