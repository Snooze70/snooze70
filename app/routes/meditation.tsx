import { Link } from "@remix-run/react";
import React from "react";
import MeditationCategories from "~/components/MedCategory";
import MeditationPlaylists from "~/components/Playalist";
import MeditationCard from "~/components/RecommendedCard";

const Meditation: React.FC = () => {
  const meditationCategories = [
    {
      icon: "/public/music.png",
      title: "Meditation Music",
      description: "Soothing tracks for relaxation",
    },
    {
      icon: "/public/sounds.png",
      title: "Meditation Music",
      description: "Soothing tracks for relaxation",
    },
    {
      icon: "/public/head2.png",
      title: "Meditation Music",
      description: "Soothing tracks for relaxation",
    },
  ];
  const meditationPlaylists = [
    {
      icon: "/public/file.png",
      title: "My Meditation Mix",
      trackCount: 10,
    },
    {
      icon: "/public/file.png",
      title: "Chill Vibes",
      trackCount: 8,
    },
    {
      icon: "/public/file.png",
      title: "Work Focus",
      trackCount: 12,
    },
  ];
  return (
    <>
      <div className="bg-green-50">
        <div className="medHero relative">
          <img
            src="/medHero.jpeg"
            alt="calm waters"
            className="max-h-40 w-full md:max-h-52 "
          />
          <div className="text  flex flex-col gap-4 items-center absolute top-0 right-14 left-14 my-2 md:my-4">
            <h1 className="font-bold text-xl md:text-3xl text-white">
              Find Your Calm with Snooze
            </h1>
            <p className="text-sm text-gray-300 my-2">
              Improve focus, sleep better, and relax deeply
            </p>
            <button className="bg-orange-400 text-white font-semibold rounded-md p-2 text-sm">
              Upgrade To Premium
            </button>
          </div>
        </div>

        {/* meditation Room */}
        <div className="exploreMed flex flex-col-reverse md:flex-row justify-between items-center gap-4 m-12">
          {/* top test messages */}
          <div className="explore flex flex-col justify-center gap-4">
            <h2 className="text-2xl font-bold text-green-800">
              Meditation Room
            </h2>
            <p className="text-sm text-gray-400 my-2">
              Immense yourself in calming audio and images
            </p>

            <Link to="#">
              <button className="bg-green-800 p-3 font-bold rounded-md w-40 my-2 text-white">
                Explore
              </button>
            </Link>

            {/* Links to soothing meditation */}
            <div className="flex flex-col justify-between gap-6">
              <div
                className="flex flex-row gap-4 items-center rounded-md border border-gray-400
            p-4"
              >
                <div>
                  <img
                    src="/public/headphone.png"
                    alt="Listens to music"
                    className="h-20 w-20 rounded-sm"
                  />
                </div>
                <div className="flex flex-col items-center gap-4 ">
                  <Link to="#" className="fl">
                    <h3>Audio Player</h3>
                    <p className="text-sm text-gray-400">
                      Listen to soothing Musics
                    </p>
                  </Link>
                </div>
              </div>

              <div className="flex flex-row gap-4 items-center rounded-md border border-gray-400 p-4">
                <div>
                  <img
                    src="/public/calmImage.png"
                    alt="Listens to music"
                    className="h-20 w-20 rounded-sm"
                  />
                </div>
                <div className="flex flex-col text-left ">
                  <Link to="#" className="">
                    <h3 className="my-4">Calming Images</h3>
                    <p className="text-sm text-gray-400">
                      Find Serenity through beautiful Visual
                    </p>
                  </Link>
                </div>
              </div>

              <div className="flex flex-row gap-4 items-center rounded-md border border-gray-400 p-4 ">
                <div>
                  <img
                    src="/public/progresTracker.png"
                    alt="Listens to music"
                    className="h-20 w-20 rounded-sm"
                  />
                </div>
                <div className="flex flex-col items-center gap-4 ">
                  <Link to="#" className="fl">
                    <h3>Progress Bar</h3>
                    <p className="text-sm text-gray-400">
                      Track your meditation journey
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right image meditation */}
          <div className="imageMed">
            <img
              src="/public/meditation-image.png"
              alt="Meditation pic"
              className="max-h-screen"
            />
          </div>
        </div>

        <div className="line border border-gray-200"></div>

        {/*featured Meditation Serenity section */}
        <div className="flex flex-col m-12">
          {/* featured med-explore */}
          <div className="flex flex-col items-center gap-4 md:flex-row  ">
            <div className="image">
              <img src="/public/FeaturedMed.png" alt="Flower pic" />
            </div>
            <div className="text-green-800">
              <h2 className="text-3xl font-bold  my-4">Featured Meditations</h2>
              <p className="my-4 text-sm">
                Curated meditation for anxiety relief
              </p>
              <button className="my-2">
                <Link to="#" className="bg-green-800 p-3 rounded-md text-white">
                  Explore More
                </Link>
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4 items-center  md:flex-row my-8">
            <div className="flex flex-col border border-gray-200 rounded-md text-green-800">
              <div>
                <img src="/public/rechome.png" alt="Woman meditating" />
              </div>
              <div className="p-4">
                <p className="my-3">Beach Meditation</p>
                <span className="text-green-800 my-4 font-bold">10 mins</span>
                <div className="flex flex-row items-center gap-4 my-2">
                  <span>
                    <img src="/public/iconx2.png" alt="Leave icon" />
                  </span>
                  <span>
                    <img src="/public/icon-fountain.png" alt="blue sea" />
                  </span>
                  <span>
                    <img src="/public/icon-ice.png" alt="water wave" />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col border border-gray-200 rounded-md text-green-800">
              <div>
                <img src="/public/newhome.png" alt="Woman meditating" />
              </div>
              <div className="p-4">
                <p className="my-3">Beach Meditation</p>
                <span className="text-green-800 my-4 font-bold">15 mins</span>
                <div className="flex flex-row items-center gap-4 my-2">
                  <span>
                    <img src="/public/iconx2.png" alt="Leave icon" />
                  </span>
                  <span>
                    <img src="/public/icon-fountain.png" alt="blue sea" />
                  </span>
                  <span>
                    <img src="/public/icon-ice.png" alt="water wave" />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col border border-gray-200 rounded-md text-green-800">
              <div>
                <img src="/public/pophome.png" alt="Woman meditating" />
              </div>
              <div className="p-4">
                <p className="my-3">Beach Meditation</p>
                <span className="text-green-800 my-4 font-bold">20 mins</span>
                <div className="flex flex-row items-center gap-4 my-2">
                  <span>
                    <img src="/public/iconx2.png" alt="Leave icon" />
                  </span>
                  <span>
                    <img src="/public/icon-fountain.png" alt="blue sea" />
                  </span>
                  <span>
                    <img src="/public/icon-ice.png" alt="water wave" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="line border border-gray-200"></div>

        {/* Recommended Meditations */}
        <div className="flex flex-col m-12">
          {/* featured med-explore */}
          <div className="flex flex-col items-center gap-4 md:flex-row  ">
            <div className="image">
              <img
                src="/public/pophome.png"
                alt="Flower pic"
                className="h-40"
              />
            </div>
            <div className="text-green-800">
              <h2 className="text-3xl font-bold  my-4">
                Recommended Meditations
              </h2>
              <p className="my-4 text-sm">Find peace within yourself</p>
              <button className="hidden my-2">
                <Link to="#" className="bg-green-800 p-3 rounded-md ">
                  Explore More
                </Link>
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4 items-center  md:flex-row my-8">
            <MeditationCard
              imageSrc="/public/stresshome.png"
              title="Stress relief meditation"
              duration={10}
              description="Take a deep breath and relax your mind with this meditation"
              tags={["Anxiety", "Stress Relief"]}
              therapistName="Therapist Name"
              additionalIcons={[
                { src: "/public/iconx2.png", alt: "Leave icon" },
                { src: "/public/serehome.png", className: "h-5" },
                { src: "/public/iconx.png" },
              ]}
            />
            <MeditationCard
              imageSrc="/public/morningmedhome.png"
              title="Sleep Meditation"
              duration={15}
              description="Start your day with positivity and clarity of mind. Energize your soul."
              tags={["Focus", "Energy Boost"]}
              therapistName="Yoga Instructor"
              additionalIcons={[
                { src: "/public/iconx2.png", alt: "Leave icon" },
                { src: "/public/serehome.png", className: "h-5" },
                { src: "/public/iconx.png" },
              ]}
            />
            <MeditationCard
              imageSrc="/public/sleepmedhome.png"
              title="Stress relief meditation"
              duration={20}
              description="Let go of the day's worries and drift into peaceful sleep with this calming session."
              tags={["Sleep Aid", "Relaxation"]}
              therapistName="Meditation Expert"
              additionalIcons={[
                { src: "/public/iconx2.png", alt: "Leave icon" },
                { src: "/public/serehome.png", className: "h-5" },
                { src: "/public/iconx.png" },
              ]}
            />
          </div>
        </div>

        <div className="line border border-gray-200"></div>

        {/* Recent Meditations */}
        <div className="recent-meditations flex flex-col-reverse md:flex-row justify-between items-center p-12 gap-4">
          <div className="right-section 0 w-1/2 p-2 text-green-800">
            <div className="">
              <h3 className="font-bold text-2xl mb-4">Recent Meditations</h3>
              <p className="my-4">
                Keep track of your recent meditation session.
              </p>
              <button className="bg-green-800 p-2 rounded-md my-4 w-40 text-white">
                <Link to="#">View All</Link>
              </button>
            </div>

            <div className="flex flex-row gap-4 items-center justify-evenly my-4">
              <div className="Serenity text-center">
                <img
                  src="/public/serehome.png"
                  alt="Serene meditation"
                  className="bg-gray-400 rounded-full
                my-2 mx-auto"
                />
                <h3 className="font-bold">Serenity meditation</h3>
                <span className="text-gray-400 my-2 font-bold">Completed</span>
              </div>
              <div className="text-center">
                <img
                  src="/public/cbhome.png"
                  alt="flower-picture"
                  className="bg-gray-400 rounded-full
                my-2 mx-auto"
                />
                <h3 className="font-bold">Calm breath</h3>
                <span className="text-gray-400 my-2 font-bold">
                  In progress
                </span>
              </div>
            </div>
          </div>

          <div className="left-section">
            <img src="/public/srenhome.png" alt="" />
          </div>
        </div>
        <div className="line border border-gray-200"></div>
        {/* Music Library */}
        <div className="flex flex-col m-12">
          {/* featured med-explore */}
          <div className="flex flex-col items-center gap-4 md:flex-row  ">
            <div className="image">
              <img
                src="/public/pophome.png"
                alt="Flower pic"
                className="h-40"
              />
            </div>
            <div className="text-green-800">
              <h2 className="text-3xl font-bold  my-4">Music Library</h2>
              <p className="my-4 text-sm">
                Explore our music collection for meditation, relaxation, and
                focus.
              </p>
            </div>
          </div>
          <MeditationCategories categories={meditationCategories} />
        </div>
        <div className="line border border-gray-200"></div>
        {/* Personalized Playlist */}
        <div className="flex flex-col m-12">
          {/* featured med-explore */}
          <div className="flex flex-col items-center gap-4 md:flex-row  ">
            <div className="image">
              <img
                src="/public/p-header.png"
                alt="Flower pic"
                className="h-40"
              />
            </div>
            <div className="text-green-800">
              <h2 className="text-3xl font-bold  my-4">
                Personalized PlayList
              </h2>
              <p className="my-4 text-sm">
                Create your own playlists with your favorite tracks.
              </p>
            </div>
          </div>
          <MeditationPlaylists playlists={meditationPlaylists} />
        </div>

        <div className="line border border-gray-200"></div>

        {/* Featured */}

        <div className="flex flex-col m-12">
          {/* featured med-explore */}
          <div className="flex flex-col items-center text-center gap-4 md:flex-row ">
            <div className="text-center text-green-800 mx-auto">
              <h2 className="text-3xl font-bold  my-4">Featured Music</h2>
              <p className="my-4 text-sm">
                Check out our top picks to enhance your meditation experience.{" "}
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4 items-center  md:flex-row my-8 text-green-800">
            <div className="flex flex-row border border-gray-200 rounded-md p-2 gap-4">
              <div>
                <img src="/public/tq-1.png" alt="Ear piece" />
              </div>
              <div className="text-section">
                <h3 className="font-bold mb-2">Tranquil Serenity</h3>
                <span className="text-gray-400 my-2 font-bold">
                  Artist: Zen Harmony
                </span>
                <p className="text-wrap my-2">
                  Experience inner calm with this serene instrumental piece.
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-4 p-2 border border-gray-200 rounded-md">
              <div>
                <img src="/public/oc-1.png" alt="Ocean view" />
              </div>
              <div className="">
                <h3 className="font-bold mb-2">Ocean Breeze</h3>
                <span className="text-gray-400 my-2 font-bold">
                  Artist: Water Sounds
                </span>
                <p className="text-wrap my-2">
                  Let the calming sound of ocean waves lull you into relaxation.
                </p>
              </div>
            </div>

            <div className="flex flex-row border border-gray-200 gap-4 rounded-md p-2">
              <div>
                <img src="/public/mm-1.png" alt="mountain view" className="" />
              </div>
              <div className="text-section">
                <h3 className="font-bold mb-2">Stress relief meditation</h3>
                <span className="text-gray-400 my-2 font-bold">
                  Artist: Summit Symphony
                </span>
                <p className=" text-wrap my-2">
                  Feel rejuvenated as you listen to this mountain-inspired
                  composition.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="line border border-gray-200"></div>
      </div>
    </>
  );
};

export default Meditation;
