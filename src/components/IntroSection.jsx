import sarah from '../assets/family.jpg';

const IntroSection = () => {
    return (<div id="intro" className='intro-section'>
                <div className='intro-text'>
                <h1>سارة علي عيد</h1>
                <h3>أخصائية إرشاد أسري و تربوي</h3>
                <h3>و باحثة ماجستير في الصحة النفسية بكلية التربية جامعة الإسكندرية</h3>
                </div>
                <img className='intro-img' src={sarah} alt="Family"/>
            </div> 
  );
}
 
export default IntroSection;