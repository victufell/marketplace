interface ISignin {
    email: string,
    password: string
}

const BASE_URL = 'http://localhost:3333'

const postSignIn = async ({ email, password }: ISignin): Promise<Response> => {
    const signInEndpoint = '/sellers/sessions'
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            email,
            password
        })
    };

    try {
        const response = await fetch(BASE_URL+signInEndpoint, options)
        return response.json()
    } catch(error) {
        return Promise.reject(error)
    }

    
}

interface ISignup {
    name: string,
    phone: string,
    email: string,
    avatarId: string,
    password: string,
    passwordConfirmation: string
}

const postSignUp = async ({
    name,
    phone,
    email,
    avatarId,
    password,
    passwordConfirmation
}: ISignup): Promise<Response> => {

    const signUpEndpoint = '/sellers'

    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name,
            phone,
            email,
            avatarId,
            password,
            passwordConfirmation
        })
      };
      
      try {
        const response = await fetch(BASE_URL+signUpEndpoint, options);
        return response.json()
      } catch (error) {
        return Promise.reject(error)
      }
}

const auth = {
    postSignIn,
    postSignUp
}

export default auth