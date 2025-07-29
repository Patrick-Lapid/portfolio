<svelte:head>
    <title>Patrick Lapid</title>
    <meta name="description" content="Software Engineer at Instagram. Crafting intuitive interfaces and building polished, expressive software." />
    <meta name="keywords" content="Patrick Lapid, Software Engineer, Meta, Instagram, Frontend Developer, UI/UX, React, JavaScript, TypeScript" />
    <meta name="author" content="Patrick Lapid" />
    <meta property="og:title" content="Patrick Lapid" />
    <meta property="og:description" content="Software Engineer at Instagram. Crafting intuitive interfaces and building polished, expressive software." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://patricklapid.com" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="Patrick Lapid" />
    <meta name="twitter:description" content="Software Engineer at Meta/Instagram, crafting intuitive interfaces and building polished, expressive software." />
    <link rel="canonical" href="https://patricklapid.com" />
</svelte:head>

<div class="min-h-screen">
    <div class="container mx-auto px-6 sm:px-6 lg:px-8 max-w-3xl">
        <div class="pt-24 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">

            <article>
                <h1 class="font-inter text-xl lg:text-[20px] text-gray-700 mb-8 lg:mb-12 leading-tight animate-fade-in">
                    Patrick Lapid
                </h1>
                <p class="text-md lg:text-[17px] mb-6 text-slate-600 max-w-3xl mx-auto animate-fade-in-delayed">
                    <span class="font-newsreader italic text-[17px] lg:text-[19px] text-slate-700">Sculpting interfaces. </span> Crafting polished, expressive software. Blending design and engineering to create experiences that feel as good as they look.
                </p>
                <p class="text-md lg:text-[17px] mb-8 lg:mb-12 text-slate-600 max-w-3xl mx-auto animate-fade-in-delayed-2">
                    Software Engineer at <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" class="link underline cursor-pointer underline-offset-3 transition-colors duration-200">Instagram</a> / <a href="https://www.meta.com/" target="_blank" rel="noopener noreferrer" class="link underline cursor-pointer underline-offset-3 transition-colors duration-200">Meta</a>
                </p>
                <p class="text-md lg:text-[17px] mb-4 lg:mb-6 text-gray-600 max-w-3xl mx-auto animate-fade-in-delayed-3">
                    Previously
                </p>

                <div class="border-l border-[#b1bcd5] pl-6 space-y-3 mb-8 lg:mb-12 text-md lg:text-[17px] text-slate-600 animate-fade-in-delayed-4">
                    <div class="relative">
                      <div class="text-slate-600"> Infra at <a href="https://www.workday.com/" target="_blank" rel="noopener noreferrer" class="link underline cursor-pointer underline-offset-3 transition-colors duration-200">Workday</a> - Internship</div>
                    </div>
                    <div class="relative">
                      <div class="text-slate-600"> Software Engineer at <a href="https://www.socotec.us/" target="_blank" rel="noopener noreferrer" class="link underline cursor-pointer underline-offset-3 transition-colors duration-200">Socotec</a> - Internship</div>
                    </div>
                    <div class="relative">
                      <div class="text-slate-600"> Software Engineer at <a href="https://www.codecomply.ai/" target="_blank" rel="noopener noreferrer" class="link underline cursor-pointer underline-offset-3 transition-colors duration-200">CodeComply.Ai</a> / <a href="https://www.socotec.us/" target="_blank" rel="noopener noreferrer" class="link underline cursor-pointer underline-offset-3 transition-colors duration-200">SLS Consulting</a> - acquired</div>
                    </div>
                    <div class="relative">
                      <div class="text-slate-600"> Software Engineer at <a href="https://www.disney.com/" target="_blank" rel="noopener noreferrer" class="link underline cursor-pointer underline-offset-3 transition-colors duration-200">Disney</a> - Internship</div>
                    </div>
                </div>

                <p class="font-inter text-md lg:text-[17px] mb-6 text-gray-600 max-w-3xl mx-auto animate-fade-in-delayed-5">
                    Connect
                </p>
                <p class="text-md lg:text-[17px] text-slate-600 max-w-3xl mx-auto animate-fade-in-delayed-6">
                    Find me on 
                    <a href="https://x.com/patrikkml/" target="_blank" rel="noopener noreferrer" class="link underline cursor-pointer underline-offset-3 transition-colors duration-200">twitter</a>, 
                    <a href="https://www.linkedin.com/in/patrickml86/" target="_blank" rel="noopener noreferrer" class="link underline cursor-pointer underline-offset-3 transition-colors duration-200">linkedin</a>, and 
                    <a href="https://github.com/Patrick-Lapid" target="_blank" rel="noopener noreferrer" class="link underline cursor-pointer underline-offset-3 transition-colors duration-200">github</a> :)
                </p>
            </article>
        </div>
    </div>
</div>

<style>
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes showBorder {
        from {
            border-left-color: transparent;
        }
        to {
            border-left-color: #d1d5db;
        }
    }



    .animate-fade-in {
        animation: fadeIn 0.5s ease-out forwards;
    }

    .animate-fade-in-delayed {
        animation: fadeIn 0.5s ease-out 0.15s forwards;
        opacity: 0;
    }

    .animate-fade-in-delayed-2 {
        animation: fadeIn 0.5s ease-out 0.3s forwards;
        opacity: 0;
    }

    .animate-fade-in-delayed-3 {
        animation: fadeIn 0.5s ease-out 0.45s forwards;
        opacity: 0;
    }

    .animate-fade-in-delayed-4 {
        animation: fadeIn 0.5s ease-out 0.6s forwards;
        opacity: 0;
    }

    .animate-fade-in-delayed-5 {
        animation: fadeIn 0.5s ease-out 0.75s forwards;
        opacity: 0;
    }

    .animate-fade-in-delayed-6 {
        animation: fadeIn 0.5s ease-out 0.9s forwards;
        opacity: 0;
    }

    .link {
        text-decoration-color: rgb(173, 190, 215);
    }

    .link:hover {
        text-decoration-color: #49556b;
    }
</style>