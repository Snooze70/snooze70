import { FC } from "react"

interface MoodTriggerCardProps {
    title: string,
    subtitle: string,
    image: string,
}
const MoodTriggerCard: FC<MoodTriggerCardProps> = ({ title, subtitle, image }) => {
    return (
        <div className="relative justify-center text-center text-[#1C5A5A] p-4">
            <img src={ image } alt="triggered person" className="relative left-20 w-[5rem] h-[5rem] rounded-[50%] " />
            <h2 className="font-bold mb-2">{ title }</h2>
            <small className="text-gray-400">
                { subtitle }
            </small>
        </div>
    )
}

export default MoodTriggerCard