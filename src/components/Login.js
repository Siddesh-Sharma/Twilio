import React from 'react'
import {Button, Form, Grid, Header, Segment} from 'semantic-ui-react'

function Login() {
    return <Grid textAlign="center" verticalAlign="middle" style={{height: '100vh'}}>
                <Grid.Column style={{maxWidth: 450}}>
                    <Header as='h2' color='teal' textAlign='centre'>Log into your account</Header>
                    <Form>
                        <Segment stacked>
                            <Form.Input fluid icon="user" iconPosition='left' placeholder="Username">
                            </Form.Input>
                            <Form.Input fluid icon="mobile alternate" iconPosition='left' placeholder="Mobile Number" />
                            <Button color='teal' fluid size='large'>
                                Login/Signup
                            </Button>
                        </Segment>
                    </Form>
                 </Grid.Column>
            </Grid>;
}

export default Login
