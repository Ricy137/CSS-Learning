import Image from "next/image";
import "@/styles/plane.css";

const PlanePage: React.FC = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-cover bg-[0px_center] animate-[backdrop_2s_infinite_linear] planWrapper">
            <Image
                className="animate-[flyIn_1s_1s_backwards,advance_4s_2s_infinite]"
                alt=""
                src="https://assets.codepen.io/605876/red-plane.png"
                height={50}
                width={50}
            />
        </div>
    );
};

export default PlanePage;
