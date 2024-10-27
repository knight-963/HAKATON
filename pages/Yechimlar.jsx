import React from 'react'
import styles from "../styles/Yachimlar.module.css"


const Yechimlar = () => {
  return (
    <>
 <h1 className="text-center text-4xl p-5 pt-12">Biz muammolarni yachish uchun boshlang'ich va katta maktab o'quvchilariga shu ma'mumotlarni o'rgatishni boshlashimiz kerak!!! </h1>




    <h1 className="text-center text-2xl p-5 pt-8">3.4-mavzu. Yo'l belgilari. Majburiy belgilar</h1>
    <h1 className="text-center text-xl p-5">Ba'zi haydovchilar ushbu guruhning belgilarini ko'rib, <br /> ular tabiatan maslahatchi deb o'ylashadi.</h1>


<div className="flex p-[50px]">
<div className={styles.left}><img src="malum1.jpg" alt="" /></div>
<div className={styles.right}><h1 className="text-center text-xl p-5" >Yaxshi xulqli ko'rinishga qaramay, retsept belgilari juda qattiq.</h1></div>
</div>



<h1 className="text-center text-2xl p-5 pt-8">Belgilar 4.1.1 "To'g'ri harakatlaning", 4.1.2 "O'ngga siljiting", 4.1.3 "Chapga siljiting", 4.1.4 "To'g'ri yoki o'ngga harakat <br /> qiling", 4.1.5 "To'g'ri yoki chapga harakat qiling", 4.1.6 "Harakat qiling" o'ng yoki chap" <br /> harakati FAQAT oq o'qlar bilan belgilarda  ko'rsatilgan yo'nalishlarda <br /> ruxsat etiladi.</h1>

<div className="flex justify-center p-10">
<img src="logoo.jpg" alt="" />
</div>

<h1 className="text-center text-2xl p-5 pt-8">Harakat yo'nalishini ko'rsatadigan belgilarning ta'siri faqat ular oldida <br />  o'rnatiladigan qismlarning kesishishiga ta'sir qiladi.</h1>

<div className="flex justify-center">
    <div className="">
    <img className='p-10' src="bac.jpg" alt="" />
<h1 className='text-3xl '>Agar burilish kerak bo'lsa, nima qilish kerak?</h1>
<h1 className=" text-2xl p-5 pt-8">
1. Ushbu chorrahada boshqa transport vositalari bo'lmasa, buriling. <br />
2. To'g'ridan-to'g'ri haydab, chorrahadan buriling. <br />
3. To'g'ri harakatlaning va faqat keyingi chorrahada buriling. <br />
</h1>
    </div>
</div>


    </>
  )
}

export default Yechimlar