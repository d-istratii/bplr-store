import { useState } from 'react';
import { IconContext } from 'react-icons';
import { FcGoogle } from 'react-icons/fc';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styled from '@emotion/styled';

export default function LoginNewUser(props: any) {
    const InvalidShaker = styled.div`
        .shaker:hover {
            animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
            transform: translate3d(0, 0, 0);
            backface-visibility: hidden;
            perspective: 1000px;
        }

        @keyframes shake {
            10%,
            90% {
                transform: translate3d(-1px, 0, 0);
            }

            20%,
            80% {
                transform: translate3d(2px, 0, 0);
            }

            30%,
            50%,
            70% {
                transform: translate3d(-4px, 0, 0);
            }

            40%,
            60% {
                transform: translate3d(4px, 0, 0);
            }
        }
    `;
    const initialInputStyle =
        'border-0 border-gray-400 py-2 px-7 rounded w-full text-white outline-0 bg-neutral-700 focus:outline-0 focus:outline';
    const invalidInputStyle =
        'border border-red-400 py-2 px-7 rounded w-full text-white outline-0 bg-red-700/10 focus:outline-0 focus:outline';
    const validInputStyle =
        'border-2 border-google-green py-2 px-7 rounded w-full text-white outline-0 bg-google-green/10 focus:outline-0 focus:outline';

    const [nameInput, setNameInput] = useState('');
    const [nameError, setNameError] = useState('');
    const [nameStyle, setNameStyle] = useState(initialInputStyle);

    const [emailInput, setEmailInput] = useState('');
    const [emailError, setEmailError] = useState('');
    const [emailStyle, setEmailStyle] = useState(initialInputStyle);

    const [passwordInput, setPasswordInput] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [passwordStyle, setPasswordStyle] = useState(initialInputStyle);

    const [formState, setFormState] = useState(0);
    const [formVisibility, setFormVisibility] = useState('');

    function validateName(): boolean {
        if (nameInput.length == 0) {
            setNameError('Name input is empty.');
            setNameStyle(invalidInputStyle);
            return false;
        } else if (nameInput.length > 50) {
            setNameError('Name input is too long.');
            setNameStyle(invalidInputStyle);
            return false;
        } else {
            setNameError('');
            setNameStyle(validInputStyle);
            return true;
        }
    }

    function validateNameBlur(): void {
        if (nameInput.length == 0) {
            setNameError('');
            setNameStyle(initialInputStyle);
        } else if (nameInput.length > 50) {
            setNameError('Name input is too long.');
            setNameStyle(invalidInputStyle);
        } else {
            setNameError('');
            setNameStyle(validInputStyle);
        }
    }

    function isLengthy(password: string): boolean {
        if (password.length >= 8) {
            setPasswordError('');
            return true;
        } else {
            setPasswordError('Password input is too short.');
            return false;
        }
    }

    function isUpperCase(password: string): boolean {
        var regex = /[A-Z]/;
        if (regex.test(password)) {
            setPasswordError('');
            return true;
        } else {
            setPasswordError('Missing upper-case character.');
            return false;
        }
    }

    function isLowerCase(password: string): boolean {
        var regex = /[a-z]/;
        if (regex.test(password)) {
            setPasswordError('');
            return true;
        } else {
            setPasswordError('Missing lower-case character.');
            return false;
        }
    }

    function isSpecialCase(password: string): boolean {
        var regex = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if (regex.test(password)) {
            setPasswordError('');
            return true;
        } else {
            setPasswordError('Missing special character.');
            return false;
        }
    }

    function isEmpty(password: string): boolean {
        return password.length == 0;
    }
    function validatePassword(): boolean {
        if (
            isLengthy(passwordInput) &&
            isUpperCase(passwordInput) &&
            isLowerCase(passwordInput) &&
            isSpecialCase(passwordInput)
        ) {
            setPasswordError('');
            setPasswordStyle(validInputStyle);
            return true;
        } else {
            setPasswordStyle(invalidInputStyle);
            return false;
        }
    }

    function validatePasswordBlur(): void {
        if (isEmpty(passwordInput)) {
            setPasswordError('');
            setPasswordStyle(initialInputStyle);
        } else if (
            isLengthy(passwordInput) &&
            isUpperCase(passwordInput) &&
            isLowerCase(passwordInput) &&
            isSpecialCase(passwordInput)
        ) {
            setPasswordError('');
            setPasswordStyle(validInputStyle);
        } else setPasswordStyle(invalidInputStyle);
    }

    function validateEmail(): boolean {
        var regex = /\S+@\S+\.\S+/;
        if (regex.test(emailInput)) {
            setEmailError('');
            setEmailStyle(validInputStyle);
            return true;
        } else {
            setEmailError('Invalid email');
            setEmailStyle(invalidInputStyle);
            return false;
        }
    }

    function validateEmailBlur(): boolean {
        if (emailInput.length === 0) {
            setEmailError('');
            setEmailStyle(initialInputStyle);
            return true;
        }
        var regex = /\S+@\S+\.\S+/;
        if (regex.test(emailInput)) {
            setEmailError('');
            setEmailStyle(validInputStyle);
            return true;
        } else {
            setEmailError('Invalid email');
            setEmailStyle(invalidInputStyle);
            return false;
        }
    }

    function requestStatus(): void {
        if (validateName() && validateEmail() && validatePassword()) {
            setFormState(-1000),
                setTimeout(() => setFormVisibility('hidden'), 500),
                setTimeout(() => props.setLoginModal(false), 500);
        }
    }

    const handleSubmit = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault();
        validateName();
        validateEmail();
        validatePassword();
        requestStatus();
    };

    return (
        <motion.div
            animate={{ x: 0, y: formState }}
            initial={{ x: 100, y: 0 }}
            className={formVisibility}
        >
            <div className='w-min space-y-2 rounded-lg bg-neutral-800/90 p-8 text-white backdrop-blur-sm sm:h-fit sm:w-screen'>
                <div className='mb-8 flex flex-row justify-between'>
                    <h1 className='text-2xl '>Come on in</h1>

                    <motion.button
                        className='rounded-md px-2 text-2xl hover:bg-neutral-700 active:bg-neutral-600'
                        onClick={() => props.setLoginModal(false)}
                        whileHover={{ scale: 1.33 }}
                    >
                        ×
                    </motion.button>
                </div>

                <div className='flex space-x-4 border-b border-gray-400'>
                    <button
                        className='text-neutral-400 hover:text-neutral-200 hover:filter  focus:font-black active:text-white'
                        onClick={() => props.setNewUser(false)}
                    >
                        SIGN IN
                    </button>

                    <button
                        className='border-b-2 border-white font-bold'
                        onClick={() => props.setNewUser(true)}
                    >
                        <div>I&#39;M NEW HERE</div>
                    </button>
                </div>

                <form autoComplete='off' onSubmit={handleSubmit}>
                    {/* <form onSubmit={handleSubmit}> */}
                    <div className='mt-3'>
                        <label className='text-lg'>Name</label>
                        <input
                            className={nameStyle}
                            type='text'
                            placeholder='Jane Smith'
                            onChange={(e) => setNameInput(e.target.value)}
                            onBlur={validateNameBlur}
                        />
                        <p className='mt-1 text-red-500'>{nameError}</p>
                    </div>

                    <div className='mt-3'>
                        <label className='text-lg'>E-mail address</label>
                        <input
                            className={emailStyle}
                            type='email'
                            placeholder='jane.smith@example.com'
                            onChange={(e) => setEmailInput(e.target.value)}
                            onBlur={validateEmailBlur}
                        />
                        <p className='mt-1 text-red-500'>{emailError}</p>
                    </div>

                    <div className='mt-3'>
                        <label className='text-lg'>Password</label>
                        <input
                            className={passwordStyle}
                            type='password'
                            placeholder='********'
                            onChange={(e) => setPasswordInput(e.target.value)}
                            onBlur={validatePasswordBlur}
                        />
                        <p className='mt-1 text-red-500'>{passwordError}</p>
                    </div>

                    <div className='pt-1 text-sm'>
                        By registering, you agree with our
                        <Link href='/terms-and-conditions'> </Link>
                        <Link href='/terms-and-conditions' passHref>
                            <button className='underline hover:text-neutral-400'>
                                Terms & Conditions
                            </button>
                        </Link>
                        <Link href='/terms-and-conditions'> </Link>
                        and
                        <Link href='/privacy-policy'> </Link>
                        <Link href='/privacy-policy' passHref>
                            <button className='underline hover:text-neutral-400'>
                                Privacy & Cookie Policy.
                            </button>
                        </Link>
                    </div>

                    <div className='flex flex-row justify-center pt-2'>
                        <button className='w-96 rounded-xl bg-neutral-700 py-2 font-semibold text-white shadow-xl hover:bg-neutral-600'>
                            Register
                        </button>
                    </div>
                </form>

                <div className='flex flex-row justify-center'>OR</div>

                <div className='flex flex-row justify-center'>
                    <button className='grid w-96 grid-cols-5 rounded-xl border border-white py-2 shadow-xl'>
                        <IconContext.Provider value={{ size: '24px' }}>
                            <FcGoogle className='ml-4' />
                        </IconContext.Provider>
                        <div className='col-span-3 font-bold'>
                            Continue with Google
                        </div>
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
