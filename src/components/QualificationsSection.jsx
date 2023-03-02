import therapy from '../assets/therapy.jpg';
import Card from '../UI/Card';
const QualificationsSection = () => {
    return ( <div id="qualifications" className="qualifications-section">
        <img className="qualifications-img" src={therapy} alt="Therapy"/>
        <div className="qualifications-text">
            <h3 className='qualifications-title'>حنساعدك تربي أولادك صح و تحسني علاقتهم بيكي و تكوني بصحة نفسية كويسة</h3>
            <div className='qualifications-cards'>
                <div className='cards-column'>
                    <Card text="اللإرشاد النفسي"/>
                    <Card text="الاضطرابات النفسية"/>
                    <Card text="الإرشاد الأسري و الزواجي"/>
                </div>
                <div className='cards-column'>
                    <Card text="العلاج المعرفي السلوكي"/>
                    <Card text="تعديل السلوك"/>
                    <Card text="العلاج الجدلي السلوكي"/>
                </div>
            </div>
            
        </div>
    </div> );
}
 
export default QualificationsSection;