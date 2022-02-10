import React, {Component} from 'react';

class Login extends Component {
    state = {
        username: '',
        password: '',
        errors: {}
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const errors = this.validate();
        if (errors) return

        console.log('Submit')
    }

    handleChange = e => {
        const state = {...this.state}
        state[e.currentTarget.name] = e.currentTarget.value;
        this.setState(state)
    }

    validate = () => {
        const errors = {}

        if (this.state.username.trim() === '')
            errors.username = 'Username is required!'

        if (this.state.password.trim() === '')
            errors.password = 'Password is required!'

        this.setState({errors})

        return errors.length === 0 ? null : errors

    }


    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <div className="my-3">
                        <label htmlFor="username" className="form-label">UserName:</label>
                        <input type="username" className="form-control" id="username" name="username"
                               value={this.state.username} onChange={this.handleChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password:</label>
                        <input type="password" className="form-control" id="password" name="password"
                               value={this.state.password} onChange={this.handleChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </>
        );
    }
}

export default Login;