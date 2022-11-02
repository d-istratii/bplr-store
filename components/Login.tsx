import { useState } from 'react';
import LoginExistingUser from './LoginExistingUser';
import LoginNewUser from './LoginNewUser';
import { motion } from 'framer-motion';

function Login(props: any) {
    const [newUser, setNewUser] = useState(false);

    return (
        <div>
            {props.loginModal ? (
                <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                    {!newUser ? (
                        <motion.div>
                            <LoginExistingUser
                                setLoginModal={props.setLoginModal}
                                setNewUser={setNewUser}
                            />
                        </motion.div>
                    ) : (
                        <motion.div>
                            <LoginNewUser
                                setLoginModal={props.setLoginModal}
                                setNewUser={setNewUser}
                            />
                        </motion.div>
                    )}
                </div>
            ) : null}
        </div>
    );
}

export default Login;
