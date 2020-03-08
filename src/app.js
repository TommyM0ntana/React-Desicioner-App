//const whit main object 
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
  app.options = ['']
 
}

// const onMakeDecision = () => const randomNum = Math.random()
const appRoot = document.getElementById('app')
const renderForm = () => {
  const template = (
  <div>
  <h1> {app.title}</h1>
  {app.subtitle && <p>{app.subtitle}</p>}
  
  <p>{app.options.length > 0 ? 'Here are your option' : 'No options'  } </p>
  


    <ol>
    {
      app.options.map((option)=> <li key={option}>{option}</li>)
    }
    
    </ol>
   
    <form onSubmit={onFormSubmit}>
    <input type="text" name='option'/>
    <button>Add Option</button>
    <button onClick={remove}>Remove All</button>
  
    </form>
  </div>
);
ReactDOM.render(template, appRoot)
}

 
 renderForm()
 remove()


