import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Loader from 'react-loaders';
import './index.scss';
import AnimationLetters from '../AnimatedLetters';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();

    useEffect(() => {
        const funcSetTimeout = () => {
            setTimeout(() => {
                setLetterClass('text-animate-hover')
            }, 4000)
        };
        funcSetTimeout();
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_nf013o4',
                'template_2fan39w',
                refForm.current,
                'erVs6ujzxTk2nvDJQ'
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                (error) => {
                    alert('Failed to send the message, try again')
                    console.log(error);
                }
            )
    }
    
    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimationLetters 
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>Keep in touch.</p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type="text" name='name' placeholder="Name" required />
                            </li>
                            <li className='half'>
                                <input type="email" name='email' placeholder="Email" required />
                            </li>
                            <li>
                                <input placeholder="Subject" type="text" name="subject" required />
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required></textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value='send' />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className='info-map'>
                Yevhen Reshetar,
                <br />
                Ukraine,
                <br />
                Kyiv, Khreschatyk St, 02000
                <br />
            </div>
            <div className='map-wrap'>
                <MapContainer center={[50.449000, 30.522300]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[50.449000, 30.522300]}>
                        <Popup>Yevhen lives here</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default Contact;