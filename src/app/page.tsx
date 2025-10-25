"use client";
import { useState } from "react";
import axios from "axios";
import { Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";

export default function Home() {
  const [showInput, setShowInput] = useState(false);
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState("");

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setReply("");

    try {
      const res = await axios.post("/api/generate", {
        prompt,
      });
      setReply(res.data.reply || "No recipe generated.");
    } catch (err: any) {
      console.error(err);
      setReply("Error generating recipe.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-baseline px-4 text-center mt-10">
        <main className="p-20 rounded-2xl mx-4 md:min-w-4xl">
          <h1 className="text-6xl md:text-8xl mb-4">Recipe Generator</h1>
          <p className=" text-lg md:text-2xl mb-8">
            Get recipes based on your ingredients.
          </p>

          {!showInput ? (
            <button
              onClick={() => setShowInput(true)}
              className="py-0.5 border-b hover:border-white border-transparent duration-300 transition-border text-xl md:text-3xl"
            >
              Get your recipies &rarr;
            </button>
          ) : (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-4">
              <input
                type="text"
                placeholder="Enter your ingredients, or what you want to make..."
                onChange={(e) => setPrompt(e.target.value)}
                className="py-0.5 border-b duration-300 focus:outline-none transition-border text-xl w-full"
              />
              <button
                onClick={handleGenerate}
                className="py-0.5 ml-2 border-b hover:border-white border-transparent duration-300 transition-border text-xl"
              >
                Generate
              </button>
            </div>
          )}
        </main>
      </div>

      {loading && (
        <div className="flex gap-2 items-center justify-center px-4 text-center mt-10">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Generating...
          </h1>
          <Loader2 className="animate-spin" size={40} />
        </div>
      )}

      {reply && (
        <div className="flex flex-col items-center justify-center px-4 mt-10">
          <main className="p-5 md:p-20 rounded-2xl shadow-[8px_8px_15px_#171717,-8px_-8px_15px_#2a2a2a] mx-4 mb-10 md:min-w-4xl text-xl ">
            <ReactMarkdown
              components={{
                h1: ({ node, ...props }) => (
                  <h1 className="text-3xl font-bold my-4" {...props} />
                ),
                h2: ({ node, ...props }) => (
                  <h2 className="text-2xl font-semibold my-3" {...props} />
                ),
                h3: ({ node, ...props }) => (
                  <h3 className="text-xl font-semibold my-2" {...props} />
                ),
                p: ({ node, ...props }) => (
                  <p className="text-lg my-1" {...props} />
                ),
                ul: ({ node, ...props }) => (
                  <ul className="ml-5 list-disc text-lg mb-3" {...props} />
                ),
                ol: ({ node, ...props }) => (
                  <ol className="ml-5 list-decimal text-lg mb-3" {...props} />
                ),
                li: ({ node, ...props }) => <li className="mb-1" {...props} />,
                em: ({ node, ...props }) => (
                  <em className="italic" {...props} />
                ),
                strong: ({ node, ...props }) => (
                  <strong className="font-semibold" {...props} />
                ),
              }}
            >
              {reply}
            </ReactMarkdown>
          </main>
        </div>
      )}
    </>
  );
}
