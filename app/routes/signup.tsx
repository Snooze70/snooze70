
export const SignUp = () => {
    return (
        <div className="bg-[#EEF3EF] w-[100vw]">
            {/* Hero Section */}
            <div className="relative h-[40vh] w-full">
                <img
                src="/signup-hero-image.png"
                alt="herosimage"
                className="absolute inset-0 object-cover h-full w-full"
                />
                <div className="relative flex px-[23rem] flex-col justify-center text-white p-4">
                    <img src="/dummy-image.png" alt="dummy-picture" className="relative top-[5rem] left-[-10rem] w-24 h-24 rounded-full mr-2" /> {/* Placeholder */}
                    <div className="relative bottom-3">
                        <h2 className="text-4xl font-bold mb-4">Join Snooze Today</h2>
                        <small className="text-gray-100">
                            Create your profile to access all features
                        </small>
                    </div>
                </div>
            </div>

            {/* "Join Snooze Today" Section */}
            <div className="relative w-screen py-10 text-[#1C5A5A] flex justify-center">
                <div className="w-screen max-w-[1200px] gap-10 flex justify-between items-start sm:px-8">
                    {/* Image Section */}
                    <img
                    src="/signup.png"
                    alt="client"
                    className="w-[35rem] h-[35rem]"
                    />

                    {/* Form Section */}
                    <form className="w-1/2 rounded-lg ">
                        <h2 className="text-4xl font-bold mb-4">Sign Up for Snooze</h2>
                        <small className="relative pb-24">
                            Create your profile to access all features on the app
                        </small>
                        <div className="mb-12 pt-6">
                            <label htmlFor="fullname" className="block text-sm font-bold mb-2">
                            Full Name
                            </label>
                            <input
                            id="fullname"
                            type="text"
                            required
                            placeholder="Enter your fullname"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div className="mb-12">
                            <label htmlFor="email" className="block text-sm font-bold mb-2">
                            Email
                            </label>
                            <input
                            id="email"
                            type="email"
                            required
                            placeholder="Enter your email"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div className="mb-12">
                            <label
                            htmlFor="password"
                            className="block text-sm font-bold mb-2"
                            >
                            Password
                            </label>
                            <input
                            id="password"
                            type="password"
                            required
                            placeholder="Enter your password"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div className="mb-12">
                            <label
                            htmlFor="confirm-password"
                            className="block text-sm font-bold mb-2"
                            >
                            Confirm Password
                            </label>
                            <input
                            id="confirm-password"
                            type="password"
                            required
                            placeholder="Confirm your password"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-[10rem] bg-[#1C5A5A] text-[#f8f8f8] font-bold py-2 px-4 rounded hover:bg-[#1b5f5f] transition"
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp