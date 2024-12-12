import { Link } from "@remix-run/react";

export default function Footer() {
    return (
        <footer className="flex justify-between py-[1rem] bg-neutral-100 w-full mt-auto">
            <div className="relative w-full px-[6rem] pt-8">
                <div className="flex justify-between pb-8">
                    <div className="flex relative w-[30vw] items-center justify-between gap-[1.25rem]">
                        <div className="">
                            <img src="/Snooze_logo.png" className="w-[50%] h-[50%] pb-5" alt="Snooze logo" />
                            <small className="pt-10">Our vision is to provide convenience and help increase your sales business.</small>
                            <div className="flex pt-6">
                                <Link to="#">
                                    <img src="/Facebook.png" alt="facebook link" width={50} height={50} />
                                </Link>
                                <Link to="#">
                                    <img src="/Twitter.png" alt="X (formerly twitter) link" width={50} height={50} />
                                </Link>
                                <Link to="#">
                                    <img src="/Instagram.png" alt="instagram link" width={50} height={50} />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex relative w-[70vw] justify-evenly left-[5rem]">
                        <div>
                            <div className="font-bold pb-5">About</div>
                            <p>How It Works</p>
                            <p>Featured</p>
                            <p>Partnership</p>
                            <p>Business Relation</p>
                        </div>
                        <div>
                            <div className="font-bold pb-5">Contact Us</div>
                            <p>Events</p>
                            <p>Blog</p>
                            <p>Podcast</p>
                            <p>Invite a friend</p>
                        </div>
                        <div>
                            <div className="font-bold pb-5">Socials</div>
                            <p>Discord</p>
                            <p>Instagram</p>
                            <p>Twitter</p>
                            <p>Facebook</p>
                        </div>
                    </div>
                </div>
                <div className="relative h-[0.15rem] w-full bg-gray-200"></div>
                <div className="flex justify-between pt-8 text-[#1C5A5A] font-semibold">
                    <small>©2024 Snooze. All rights reserved.</small>
                    <span className="flex relative gap-10 justify-between">
                        <small>Privacy & Policy</small>
                        <small>Terms & Condition</small>
                    </span>
                </div>
            </div>
        </footer>
    );
}
