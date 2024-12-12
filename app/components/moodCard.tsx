import { FC } from "react"

interface MoodCardProps {
    mood: string,
    cause: string,
    image: string,
}
const MoodCard: FC<MoodCardProps> = ({ mood, cause, image }) => {
    return (
        <div className="border-b border-slate-300 pt-2 w-[28rem]">
            <div className="flex items-center mb-4">
                <img src={ image } alt={ mood } className="w-12 h-12 rounded-full mr-2" /> {/* Placeholder */}
                <div className="pt-5">
                    <small className="font-medium">{ mood }</small>
                    <p className="text-[12px] pb-5">{ cause }</p>
                </div>
            </div>
            
        </div>
    )
}

export default MoodCard