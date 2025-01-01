import React, { useState } from "react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Training");
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "John Doe",
      date: "January 1, 2025",
      title: "How to Improve Your Weaving Speed?",
      content:
        "I've been weaving for 5 years, and I'm looking for tips on improving speed without compromising quality. Any suggestions from experts?",
      replies: [],
    },
    {
      id: 2,
      user: "Jane Smith",
      date: "January 2, 2025",
      title: "Tips for Avoiding Common Weaving Errors",
      content:
        "I've noticed some common mistakes in weaving. Can anyone share techniques to avoid issues like thread breakage and misalignment?",
      replies: [],
    },
  ]);
  const [newPost, setNewPost] = useState("");
  const [newReply, setNewReply] = useState("");
  const [isNavOpen, setIsNavOpen] = useState(true); // State for tracking if the nav is open

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handlePostChange = (e) => {
    setNewPost(e.target.value);
  };

  const handleReplyChange = (e) => {
    setNewReply(e.target.value);
  };

  const handlePostSubmit = () => {
    if (newPost.trim()) {
      setPosts([
        ...posts,
        {
          id: posts.length + 1,
          user: "Anonymous",
          date: new Date().toLocaleDateString(),
          title: newPost.split("\n")[0], // Use the first line as the title
          content: newPost,
          replies: [],
        },
      ]);
      setNewPost("");
    }
  };

  const handleReplySubmit = (postId) => {
    if (newReply.trim()) {
      const updatedPosts = posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              replies: [
                ...post.replies,
                {
                  user: "Anonymous",
                  date: new Date().toLocaleDateString(),
                  content: newReply,
                },
              ],
            }
          : post
      );
      setPosts(updatedPosts);
      setNewReply("");
    } 
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-200">
      {/* Navbar */}
      {/* <nav className="w-full bg-orange-500 text-white py-4 px-6 top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center"> */}
        
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b bg-orange-500 border-neutral-700/80" >
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">WEAVERS WISDOM</h2>
          {/* Responsive Navbar (for smaller screens) */}
          <div className="lg:hidden">
            <button
              className="text-white"
              onClick={() => setIsNavOpen(!isNavOpen)} // Toggle visibility
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          {/* Desktop Navbar */}
          <div
            className={`${
              isNavOpen ? "block" : "hidden"
            } lg:flex space-x-6 lg:block`}
          >
            <button
              className={`py-2 px-4 rounded-md text-lg transition-all ${
                activeTab === "Training"
                  ? "bg-white text-orange-500"
                  : "text-white"
              }`}
              onClick={() => handleTabChange("Training")}
            >
              Training
            </button>
            <button
              className={`py-2 px-4 rounded-md text-lg transition-all ${
                activeTab === "Health"
                  ? "bg-white text-orange-500"
                  : "text-white"
              }`}
              onClick={() => handleTabChange("Health")}
            >
              Health & Safety
            </button>
            <button
              className={`py-2 px-4 rounded-md text-lg transition-all ${
                activeTab === "Community"
                  ? "bg-white text-orange-500"
                  : "text-white"
              }`}
              onClick={() => handleTabChange("Community")}
            >
              Community
            </button>
            <button
              className={`py-2 px-4 rounded-md text-lg transition-all ${
                activeTab === "Market"
                  ? "bg-white text-orange-500"
                  : "text-white"
              }`}
              onClick={() => handleTabChange("Market")}
            >
              Market Insights
            </button>
          </div>
        </div>
      </div>
    </nav>


      {/* Content Section */}
      <div className="flex-1 bg-white shadow-lg rounded-lg p-8">
        <div className="animate-fadeIn flex flex-col items-center h-full">
          {/* Training Tab */}
          {activeTab === "Training" && (
            <div className="w-full">
              <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 text-orange-500">Training Resources</h1>
              <p className="text-lg sm:text-xl text-gray-700 text-center mb-8 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto">
                Explore various training materials designed to improve your weaving skills. Learn new techniques, tools, and methods to increase productivity and quality.
              </p>
              {/* Training Content */}
              <div className="space-y-8">
                <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden">
                  <div className="flex items-center p-4 space-x-4">
                    <img
                      src="https://via.placeholder.com/80"
                      alt="Training Image"
                      className="rounded-lg w-24 h-24"
                    />
                    <div>
                      <p className="font-semibold text-gray-800">Advanced Weaving Techniques</p>
                      <p className="text-sm text-gray-500">Posted on January 5, 2025</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
                      Master the Art of Advanced Weaving
                    </h2>
                    <p className="text-gray-600">
                      Discover advanced weaving techniques that will help you increase both speed and quality. Learn the latest methods in the industry from experienced weavers.
                    </p>
                    <div className="mt-4">
                      <iframe
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/4O5vZX6ftAk"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden">
                  <div className="flex items-center p-4 space-x-4">
                    <img
                      src="https://via.placeholder.com/80"
                      alt="Training Image"
                      className="rounded-lg w-24 h-24"
                    />
                    <div>
                      <p className="font-semibold text-gray-800">Weaving Speed Improvement</p>
                      <p className="text-sm text-gray-500">Posted on January 6, 2025</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
                      Speed Up Your Weaving Process
                    </h2>
                    <p className="text-gray-600">
                      In this guide, we share strategies to increase your weaving speed without sacrificing quality. Learn the key techniques to optimize your workflow.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Health & Safety Tab */}
          {activeTab === "Health" && (
            <div className="w-full">
              <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 text-orange-500">Health & Safety</h1>
              <p className="text-lg sm:text-xl text-gray-700 text-center mb-8 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto">
                Learn about the safety measures and health tips to protect yourself while weaving. We cover everything from physical well-being to ergonomic practices.
              </p>
              {/* Health & Safety Content */}
              <div className="space-y-8">
                <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden">
                  <div className="flex items-center p-4 space-x-4">
                    <img
                      src="https://via.placeholder.com/80"
                      alt="Safety Image"
                      className="rounded-lg w-24 h-24"
                    />
                    <div>
                      <p className="font-semibold text-gray-800">Ergonomic Practices for Weavers</p>
                      <p className="text-sm text-gray-500">Posted on January 7, 2025</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
                      Preventing Injury with Ergonomic Practices
                    </h2>
                    <p className="text-gray-600">
                      Protect your health by following these ergonomic practices to avoid strains and injuries while working on your weaving loom. Incorporate these tips into your daily routine.
                    </p>
                    <div className="mt-4">
                      <iframe
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/yXbQpF6KbDQ"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden">
                  <div className="flex items-center p-4 space-x-4">
                    <img
                      src="https://via.placeholder.com/80"
                      alt="Health Tips"
                      className="rounded-lg w-24 h-24"
                    />
                    <div>
                      <p className="font-semibold text-gray-800">Health Tips for Weavers</p>
                      <p className="text-sm text-gray-500">Posted on January 8, 2025</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
                      Staying Healthy While Weaving
                    </h2>
                    <p className="text-gray-600">
                      Learn how to stay healthy while spending long hours weaving. This article covers basic stretches, diet tips, and mental well-being practices for weavers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Community Tab */}
          {activeTab === "Community" && (
            <div className="w-full">
              <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 text-orange-500">Community Forum</h1>
              <div className="space-y-8">
                {posts.map((post) => (
                  <div key={post.id} className="bg-gray-100 shadow-lg rounded-lg p-4">
                    <h2 className="text-xl font-semibold">{post.title}</h2>
                    <p className="text-sm text-gray-500 mb-2">By {post.user} on {post.date}</p>
                    <p className="text-gray-700 mb-4">{post.content}</p>

                    {/* Replies Section */}
                    <div className="space-y-4">
                      {post.replies.map((reply, index) => (
                        <div key={index} className="bg-gray-200 p-4 rounded-md">
                          <p className="text-sm text-gray-500">By {reply.user} on {reply.date}</p>
                          <p className="text-gray-600">{reply.content}</p>
                        </div>
                      ))}
                    </div>

                    {/* Reply Form */}
                    <div className="mt-4">
                      <textarea
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Write a reply..."
                        value={newReply}
                        onChange={handleReplyChange}
                      />
                      <button
                        className="bg-orange-500 text-white px-4 py-2 rounded-md mt-2"
                        onClick={() => handleReplySubmit(post.id)}
                      >
                        Submit Reply
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* New Post Form */}
              <div className="mt-8">
                <h2 className="text-xl font-semibold">Create a New Post</h2>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Write a new post..."
                  value={newPost}
                  onChange={handlePostChange}
                />
                <button
                  className="bg-orange-500 text-white px-4 py-2 rounded-md mt-2"
                  onClick={handlePostSubmit}
                >
                  Submit Post
                </button>
              </div>
            </div>
          )}

{activeTab === "Market" && (
  <div className="w-full">
    <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 text-orange-500">Market Insights</h1>
    <p className="text-lg sm:text-xl text-gray-700 text-center mb-8 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto">
      Stay updated with the latest market trends, pricing strategies, and industry news that can help you make informed business decisions.
    </p>

    {/* Market Insights Content */}
    <div className="space-y-8">
      {/* Insight 1 */}
      <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden">
        <div className="flex items-center p-4 space-x-4">
          <img
            src="https://via.placeholder.com/80"
            alt="Market Insight Image"
            className="rounded-lg w-24 h-24"
          />
          <div>
            <p className="font-semibold text-gray-800">Weaving Market Trends</p>
            <p className="text-sm text-gray-500">Posted on January 5, 2025</p>
          </div>
        </div>
        <div className="p-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
            Analyzing Current Weaving Market Trends
          </h2>
          <p className="text-gray-600">
            Explore the latest market trends in the weaving industry, including emerging demand for eco-friendly fabrics, automation in weaving technology, and the rise of digital tools for design.
          </p>
          <div className="mt-4">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/some-video-link"
              title="Market Insight Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Insight 2 */}
      <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden">
        <div className="flex items-center p-4 space-x-4">
          <img
            src="https://via.placeholder.com/80"
            alt="Market Insight Image"
            className="rounded-lg w-24 h-24"
          />
          <div>
            <p className="font-semibold text-gray-800">Pricing Strategies for Weaving Businesses</p>
            <p className="text-sm text-gray-500">Posted on January 6, 2025</p>
          </div>
        </div>
        <div className="p-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
            Developing Effective Pricing Strategies
          </h2>
          <p className="text-gray-600">
            Learn how to create competitive pricing strategies in the weaving industry by analyzing market demand, cost structure, and consumer behavior.
          </p>
        </div>
      </div>

      {/* Insight 3 */}
      <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden">
        <div className="flex items-center p-4 space-x-4">
          <img
            src="https://via.placeholder.com/80"
            alt="Market Insight Image"
            className="rounded-lg w-24 h-24"
          />
          <div>
            <p className="font-semibold text-gray-800">Impact of Automation in Weaving</p>
            <p className="text-sm text-gray-500">Posted on January 7, 2025</p>
          </div>
        </div>
        <div className="p-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
            The Future of Weaving with Automation
          </h2>
          <p className="text-gray-600">
            Discover how automation is transforming the weaving industry. Explore case studies on the use of smart looms, robotics, and AI in weaving production lines.
          </p>
          <div className="mt-4">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/another-video-link"
              title="Automation Insight Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
)}

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
