/* eslint-disable import/no-unresolved */
import MoodCard from "~/components/moodCard"
import MoodTrackerCard from "~/components/moodTrackerCard"
import MoodTriggerCard from "~/components/moodTriggerCard"

export const MoodTracker = () => {
    return (
        <div className="bg-[#EEF3EF] w-[100vw]">
            {/* Hero Section */}
            <div className="relative h-[40vh] w-full">
                <img
                src="/mood-tracker.jpeg"
                alt="herosimage"
                className="absolute inset-0 object-cover h-full w-full"
                />
                <div className="relative flex justify-center text-center text-white p-4">
                    <div className="relative">
                        <h2 className="text-4xl font-bold mb-4">Mood Tracker</h2>
                        <small className="text-gray-100">
                            Log your thoughts and feelings to monitor your mental well-being
                        </small>
                        <button className="absolute right-24 top-32 w-[15rem] h-[3rem] bg-amber-500 rounded-md ">Start Now</button>
                    </div>
                </div>
            </div>

            {/* "Join Snooze Today" Section */}
            <div className="relative w-screen py-10 text-[#1C5A5A] flex justify-center">
                <div className="w-screen max-w-[1200px] gap-10 flex justify-between items-start sm:px-8">
                    {/* Text Section */}
                    <div className="relative w-1/2 top-[45%]">
                    <h2 className="text-4xl font-bold mb-4">Mood Tracking Options</h2>
                    <small className="">
                        Choose how you want to track your mood
                    </small>
                    </div>

                    {/* Form Section */}
                    <div className="w-1/2 rounded-lg ">
                        <MoodTrackerCard
                        title="Emoji Mood Tracker"
                        subtitle="Select and emoji that represents your current mood."
                        image="/emoji-mood.png"
                        />
                        <MoodTrackerCard
                        title="Slider Scale"
                        subtitle="Slide the scale to rate your mood from 1 to 10."
                        image="/slid.png"
                        />
                        <MoodTrackerCard
                        title="Journaling"
                        subtitle="Write freely about your thoughts and feelings."
                        image="/mood.png"
                        />
                    </div>
                </div>
            </div>

            <div className="relative w-screen py-10 text-[#1C5A5A] flex justify-center">
                <div className="w-screen max-w-[1200px] gap-10 flex justify-between items-start sm:px-8">
                    {/* Text Section */}
                    <div className="relative w-1/2 top-[45%]">
                    <h2 className="text-4xl font-bold mb-4">Trigger Identification</h2>
                    <small className="">
                        Identify patterns and triggers for your mood swings
                    </small>
                    </div>

                    {/* Form Section */}
                    <div className="w-1/2 rounded-lg ">
                        <div className="flex">
                            <MoodTriggerCard
                            title="Significant Events"
                            subtitle="Track events that affect your mood."
                            image="/triger-1.png"
                            />
                            <MoodTriggerCard
                            title="Triggers"
                            subtitle="Identify triggers that impact your emotions."
                            image="/triger-2.png"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative w-[100vw] ml-20 pr-28 py-10 text-[#1C5A5A] flex justify-center">
                <section className="w-1/2 py-8 pl-8 text-[#1C5A5A]">
                    <h2 className="text-4xl font-bold mb-7">Recent Thoughts</h2>
                    <p className="pb-7">Track and reflect on your emotions</p>
                    <button className="right-24 top-32 w-[14rem] text-white h-[3rem] bg-[#1C5A5A] rounded-md ">Add New</button>
                    <div className="relative pt-10">
                        <MoodCard
                        mood="Sarah Smith"
                        image="/Sarah-Smith.png"
                        cause="Amazing app for meditation practices"
                        />
                        <MoodCard
                        mood="David Johnson"
                        image="/David-Johnson.png"
                        cause="Helped me reduce stress and boost focus"
                        />
                    </div>
                </section>
                <div className="w-[1/2]">
                    <img
                    src="/thoughts.png"
                    alt="client"
                    className="w-[85%] h-[30rem]"
                    />
                </div>
            </div>
        </div>
    )
}

export default MoodTracker