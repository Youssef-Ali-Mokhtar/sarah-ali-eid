import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { fontWeight } from '@mui/system';

const Contact = () => {
    const style = {
        padding:'20px',
        transform: 'scale(1.8)',
        cursor:'pointer',
        color:'white'
    }

    const textStyle = {
        fontSize:'18px',
        color:'white',
    }
    return ( <div id="contact" className="contact">
        <div className='contact-wrapper'>
            <a className="contact-icon-wrapper" target="blank" href="https://www.facebook.com/people/%D8%B3%D8%A7%D8%B1%D8%A9-%D8%B9%D9%84%D9%8A-%D8%B9%D9%8A%D8%AF-%D8%A3%D8%AE%D8%B5%D8%A7%D8%A6%D9%8A%D8%A9-%D8%AA%D8%B9%D8%AF%D9%8A%D9%84-%D8%B3%D9%84%D9%88%D9%83/100063900393182/">
                <FacebookIcon sx={style}/>
                <p className='contact-icon-text'>سارة علي عيد - أخصائية تعديل سلوك</p>
            </a>
            <a className="contact-icon-wrapper" target="blank" href="https://www.youtube.com/@user-rf9lz4ej7c">
                <YouTubeIcon sx={style}/>
                <p className='contact-icon-text'>كبسولة تربوية مع ساره علي</p>
            </a>   
            <a className="contact-icon-wrapper" target="blank" href="" onClick={()=>alert("تم نسخ 01023806628")} >
                <WhatsAppIcon sx={style}/>
                <p className='contact-icon-text'>01023806628</p>
            </a>
        </div>
    </div> );
}
 
export default Contact;