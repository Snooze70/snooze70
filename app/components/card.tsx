import { FC } from "react"

interface CardProps {
    image: string,
    title: string,
    subtitle: string,
}
const Card: FC<CardProps> = ({image, title, subtitle}) => {
    return (
        <div className="w-[23rem] h-[25rem] rounded-[10px] border border-gray-200 outline-none ">
            <div className="w-[23rem] h-[20rem] rounded-[10px] ">
                <img src={ image } alt="woman meditating" className="object-cover w-full h-full rounded-[10px]" />
            </div>
            <p className="text-yellow-400 p-2">{ title }</p>
            <span className="text-[#1C5A5A] p-2">{ subtitle }</span>
        </div>
    )
}

export default Card;