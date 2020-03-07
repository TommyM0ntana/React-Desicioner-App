const app = {
  title: 'Indesicion App',
  subtitle: 'I will deside your future',
  options: []
}

const onFormSubmit = (e) => {
 e.preventDefault()

 const option = e.target.elements.option.value

 if(option){
    app.options.push(option)
    e.target.elements.option.value = ''
    }
   renderForm()
 }

//create remove all button
//equal to empty array e rerender
let count = 0

const remove = () => {
  app.options = []
  renderForm()
}

const renderForm = () => {
  const template = (
  <div>
  <h1> {app.title}</h1>
  {app.subtitle && <p>{app.subtitle}</p>}
  <p>{app.options.length}</p>
  
  <p>{app.options.length > 0 ? 'Here are your options' : 'No options'  } </p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
    
    <form onSubmit={onFormSubmit}>
    <input type="text" name='option'  />
    <button>Add Option</button>
    <button onClick={remove}>Remove All</button>
    {
      [<p key="1">a</p>, <p key="2">b</p>, <p key="3">c</p> ]
    }

    </form>
  </div>
);
ReactDOM.render(template, appRoot)
}

 const appRoot = document.getElementById('app')
 renderForm()
 renderRemove()


