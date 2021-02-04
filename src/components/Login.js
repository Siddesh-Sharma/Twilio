import React from 'react'
import {Button, Form, Grid, Header, Segment} from 'semantic-ui-react'

function Login({user:{username, mobileNumber}, setUser}) {
    function populateFields(event, data){
        setUser(draft => {
            draft[data.name] = data.value;
        });
    }
    
    
    return <Grid textAlign="center" verticalAlign="middle" style={{height: '100vh'}}>
                <Grid.Column style={{maxWidth: 450}}>
                    <Header 
                        as='h2' 
                        color='teal' 
                        textAlign='centre'
                    >
                        Log into your account
                    </Header>
                    <Form>
                        <Segment stacked>
                            <Form.Input 
                                fluid icon="user" 
                                iconPosition='left' 
                                placeholder="Username" 
                                value={username}
                                onChange={(event, data) => populateFields(event, data)}
                                name="username"
                            >
                            </Form.Input>
                            <Form.Input 
                                fluid icon="mobile alternate" 
                                iconPosition='left' 
                                placeholder="Mobile Number"
                                value={mobileNumber}
                                onChange={(event, data) => populateFields(event, data)} 
                                name="mobileNumber"
                            />
                            <Button 
                                color='teal' 
                                fluid size='large'
                            >
                                Login/Signup
                            </Button>
                        </Segment>
                    </Form>
                 </Grid.Column>
            </Grid>;
}

export default Login
