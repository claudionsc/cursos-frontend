import React from "react"
import Button from "../Button/Button"
// import {connect} from 'react-redux'

const Input = (props) => (
    <div>
        {props.label &&<label>{props.label}</label>}
        <input 
            value={props.value} 
            onChange={props.onChange}
            placeholder={props.placeholder}
            type={props.type || 'text'} />
    </div>

)
 class Form extends React.Component {

    state = {
        form: {
            nome: '',
            email: '',
            curso: '',
            nota: '',
        }
    }

    onChange = (field, ev) => {
        const { form } = this.state;
        form[field] = ev.target.value
        this.setState({ form })
    }
    
    handleSubmit(event){
    
        event.preventDefault()
    console.log('Submit')
   

    }

    render(){

        const { form } = this.state

    return (
        <div className="Form">
            <div>
                <Input 
                value={form.nome}
                onChange={(ev) => this.onChange('nome', ev)}
                placeholder={"Nome"}
                />
                <Input 
                value={form.email}
                onChange={(ev) => this.onChange('email', ev)}
                placeholder={"Email"}
                type={'email'}
                />
                <Input 
                value={form.curso}
                onChange={(ev) => this.onChange('curso', ev)}
                placeholder={"Curso"}
                />
                <Input 
                value={form.nota}
                onChange={(ev) => this.onChange('nota', ev)}
                placeholder={"Nota"}
                />
                <Button onClick={this.handleSubmit} >Enviar</Button>
            </div>
        </div>
    )
    }
}

// export default connect()(Form)
export default Form