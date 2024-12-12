import { FC } from "react"

interface MoodTrackerCardProps {
    title: string,
    subtitle: string,
    image: string,
}
const MoodTrackerCard: FC<MoodTrackerCardProps> = ({ title, subtitle, image }) => {
    return (
        <div className="pb-10">
            <div className="border border-slate-300 rounded-md">
                <div className="flex relative p-2 font-bold">
                    <img src={ image } alt="current mood emoji" className="w-[6rem] h-[6rem] " />
                    <div className="relative pl-3">
                        <p>{ title }</p>
                        <small>{ subtitle }</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoodTrackerCard