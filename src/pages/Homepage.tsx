import Button from "../components/Button"
import Ilustrasi from "../assets/ilustrasi.png"



const Homepage = () => {
    return (
        <div className="flex justify-between gap-5 h-screen items-center">
            <div className="w-[600px] flex flex-col gap-10">
                <div>
                    <h1 className="text-6xl text-black font-semibold mb-2">Tempat untuk berbagi Cerita dan ide.</h1>
                    <p className="text-normal text-lg text-black">Lempar adalah tempat di mana Anda dapat membaca, menulis, dan mengeksplorasi ide-ide baru. Temukan cerita yang menginspirasi, tuliskan pemikiran Anda, dan perdalam wawasan dengan setiap bacaan. </p>
                </div>
                <div>
                    <Button title="Start reading" variant="primary" />
                </div>
            </div>
            <div>
                <img src={Ilustrasi} alt="Ilsutrasi" style={{ width: 559 }} />
            </div>
        </div>
    )
}

export default Homepage