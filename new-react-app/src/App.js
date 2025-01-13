import Features from "./Components/Features";
import SuitsImage from "./Components/SuitsImage";



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaintBrush, faCheckCircle, faMarker, faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <>
   
      <div className=" flex justify-evenly items-center flex-col lg:flex-row">
        <div>
          <h2 className="text-red-600 underline font-bold">tailor</h2>
        </div>
        <div className="flex gap-2">
          <p className="text-gray-900">Call us for free!</p>
          <p className="text-red-600 font-bold">0-000-000-0000</p>
        </div>
      </div>

      <div className="red-back bg-red-600 flex justify-evenly items-center flex-col lg:flex-row h-auto p-4">
        <div>
          <h2 className="text-white font-semibold text-3xl mt-5">TAILOR SHOP MADE <br /> FOR GENTLEMAN</h2>
          <p className="text-white">Sed ut perspiciatis unde omnis iste natus error.</p>
          <button className="bg-white text-red-600 font-bold border border-white px-4 py-2 mt-2">START DESIGNING</button>
        </div>
        <div className="image">
          <img src="/men in suit.jpg" alt="Men in Suit" className=" w-64 h-auto" />
        </div>
      </div>

      <Features
  feature1="COME SEE US"
  feature1Desc="Lorem Ipsum is simply dummy text of the printing and typing industry."
  feature1Icon={<FontAwesomeIcon icon={faMapMarker} className="text-white text-2xl" />}
  feature2="MAKE IT YOUR OWN"
  feature2Desc="Lorem Ipsum is simply dummy text of the printing and typing industry."
  feature2Icon={<FontAwesomeIcon icon={faPaintBrush} className="text-white text-2xl" />}
  feature3="PERFECT THE FIT"
  feature3Desc="Lorem Ipsum is simply dummy text of the printing and typing industry."
  feature3Icon={<FontAwesomeIcon icon={faCheckCircle} className="text-white text-2xl" />}
/>


      <div className=" bg-[url('/get ready.jpg')] bg-cover bg-center bg-no-repeat h-96 w-full flex justify-center items-center text-center mt-5 flex-col lg:flex-row p-4 bg-black">
        <div>
          <h2 className="text-white font-bold text-2xl">AMAZING QUALITY</h2>
          <p className="text-white  mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has <br/>been the industry's
            standard dummy text ever since.
          </p>
          
        </div>
      </div>

      <SuitsImage
        suit1="/suit1.jpg"
        suit1Alt="Suit 1"
        suit2="/men.jpg"
        suit2Alt="Men"
        suit3="/men in suit.jpg"
        suit3Alt="Men in Suit"
        suit4="/men.jpg"
        suit4Alt="Men"
        suit5="/suit.jpg"
        suit5Alt="Suit"
        suit6="/suit1.jpg"
        suit6Alt="Suit 1"
      />

      <div className=" bg-red-700 flex justify-center items-center p-4 flex-col lg:flex-row mt-4 text-center">
        <div>
          <h4 className="mt-3 text-xl font-semibold text-white">VISIT US  OUR CENTER</h4>
          <p className="text-white text-sm">MON to SAT 9.30 AM - 9.00 PM</p>
          <p className="text-white text-sm">SUN 11.00 AM - 7.00 PM</p>
          <h6 className="text-white text-sm">GRAND OPENING ON APRIL 6</h6>
          <button className="bg-white text-red-600 font-bold border px-4 py-2 mt-2">BOOK AN APPOINTMENT</button>
        </div>
      </div>

      <div className=" flex flex-col items-center mt-5">
        <div>
          <h3 className="text-xl font-semibold">OUR TESTIMONIALS</h3>
        </div>
        <div className="text-back bg-gray-200 flex justify-center items-center mt-5 relative p-4">
        


         
          <p className="mt-5 text-center w-96">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
            ever since.Lorem Ipsum is simply dummy text of the printing and typing industry.
          </p>
        </div>
        <div className=" mt-3">
          <img src="profile6.jpg" alt="Person" className="rounded-full w-16 h-16" />
        </div>
        <h6 className="font-bold mt-2">Jiya Jhanson</h6>
      </div>

      <div className="bg-gray-800 flex justify-center items-center  text-lg flex-col lg:flex-row h-auto p-4">
  <div className="flex flex-col items-center gap-2">
    <div className="flex gap-2 text-sm">
      <FontAwesomeIcon icon={faTwitter} className="text-white text-2xl" />
      <FontAwesomeIcon icon={faFacebook} className="text-white text-2xl" />
      <FontAwesomeIcon icon={faInstagram} className="text-white text-2xl" />
    </div>
    
    <div className="mt-0 text-sm">
      <p className="text-white">Copyrights@2018</p>
    </div>
  </div>
</div>


       
      
    </>
  );
}

export default App;
