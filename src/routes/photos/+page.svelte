<svelte:head>
    <title>Photos | Patrick Lapid</title>
    <meta name="description" content="Photo library by Patrick Lapid." />
    <meta name="keywords" content="Patrick Lapid, Photography, Fujifilm X-T5, Landscape Photography, Photo Gallery" />
    <meta name="author" content="Patrick Lapid" />
    <meta property="og:title" content="Photos | Patrick Lapid" />
    <meta property="og:description" content="Photo library by Patrick Lapid." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://patricklapid.com/photos" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="Photos | Patrick Lapid" />
    <meta name="twitter:description" content="Photo library by Patrick Lapid." />
    <link rel="canonical" href="https://patricklapid.com/photos" />
</svelte:head>

<script lang="ts">
    let isViewerOpen = false;
    let isViewerClosing = false;
    let currentImageIndex = 0;
    
    const images = [
        "https://images.unsplash.com/photo-1751586676049-b7de70076327?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1751586676048-c43663e4e56c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1753755167149-2f089c3597cc?q=80&w=1314&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1753755167200-d6b3f6bd3f9c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1753755167150-167cbfcb2a0a?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1753755167150-0d4c3cad7632?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1753755167166-9052645ee655?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1753755167154-b7741d584fb5?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1753755167156-4f81364be1bc?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1751586676046-21318c95ff90?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1753755167150-722b6baed05b?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1751586676047-1ae18d43a85c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ];

    function openViewer(index: number) {
        currentImageIndex = index;
        isViewerOpen = true;
        isViewerClosing = false;
        document.body.style.overflow = 'hidden';
    }

    function closeViewer() {
        if (isViewerClosing) return;
        
        isViewerClosing = true;
        
        setTimeout(() => {
            isViewerOpen = false;
            isViewerClosing = false;
            document.body.style.overflow = 'auto';
        }, 150)
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    function previousImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    }

    function handleKeydown(event: KeyboardEvent) {
        if (!isViewerOpen) return;
        
        switch(event.key) {
            case 'Escape':
                closeViewer();
                break;
            case 'ArrowRight':
                nextImage();
                break;
            case 'ArrowLeft':
                previousImage();
                break;
        }
    }

    import { onMount } from 'svelte';
    
    onMount(() => {
        document.addEventListener('keydown', handleKeydown);
        
        return () => {
            document.removeEventListener('keydown', handleKeydown);
        };
    });
</script>

<div class="min-h-screen bg-slate-50">
    <div class="container mx-auto px-4 sm:px-8 lg:px-8 max-w-6xl">
        <div class="pt-24 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
            <article>
                <div class="text-center mb-10 md:mb-20 lg:mb-16">
                    <h1 class="text-[18px] lg:text-[20px] text-gray-700 mb-4 animate-fade-in-delayed">
                        Photo Library
                    </h1>
                    <p class="text-[16px] lg:text-[17px] text-slate-600 mb-2 animate-fade-in-delayed-2">
                        Fujifilm X-T5
                    </p>
                    <p class="text-[14px] lg:text-[15px] text-slate-500 animate-fade-in-delayed-3 lg:mb-8">
                        XF 16-55mm f/2.8 R LM WR II
                    </p>
                </div>
                
                <!-- Responsive Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <!-- Column 1 -->
                    <div class="space-y-4 md:space-y-6">
                        <div>
                            <img src={images[0]} alt="Landscape Photo 1" class="w-full object-cover cursor-pointer hover:opacity-90 transition-opacity animate-image-fade-in-1" on:click={() => openViewer(0)} />
                        </div>
                        <div>
                            <img src={images[1]} alt="Landscape Photo 2" class="w-full object-cover cursor-pointer hover:opacity-90 transition-opacity animate-image-fade-in-2" on:click={() => openViewer(1)} />
                        </div>
                        <div>
                            <img src={images[2]} alt="Landscape Photo 3" class="w-full object-cover cursor-pointer hover:opacity-90 transition-opacity animate-image-fade-in-3" on:click={() => openViewer(2)} />
                        </div>
                        <div>
                            <img src={images[3]} alt="Landscape Photo 4" class="w-full object-cover cursor-pointer hover:opacity-90 transition-opacity" on:click={() => openViewer(3)} />
                        </div>
                        <div>
                            <img src={images[4]} alt="Landscape Photo 5" class="w-full object-cover cursor-pointer hover:opacity-90 transition-opacity" on:click={() => openViewer(4)} />
                        </div>
                        <div>
                            <img src={images[5]} alt="Landscape Photo 6" class="w-full object-cover cursor-pointer hover:opacity-90 transition-opacity" on:click={() => openViewer(5)} />
                        </div>
                    </div>
                    
                    <!-- Column 2 -->
                    <div class="space-y-4 md:space-y-6">
                        <div>
                            <img src={images[6]} alt="Landscape Photo 7" class="w-full object-cover cursor-pointer hover:opacity-90 transition-opacity animate-image-fade-in-7" on:click={() => openViewer(6)} />
                        </div>
                        
                        <div>
                            <img src={images[7]} alt="Landscape Photo 8" class="w-full object-cover cursor-pointer hover:opacity-90 transition-opacity animate-image-fade-in-8" on:click={() => openViewer(7)} />
                        </div>
                        <div>
                            <img src={images[8]} alt="Landscape Photo 9" class="w-full object-cover cursor-pointer hover:opacity-90 transition-opacity animate-image-fade-in-9" on:click={() => openViewer(8)} />
                        </div>
                        <div>
                            <img src={images[9]} alt="Landscape Photo 10" class="w-full object-cover cursor-pointer hover:opacity-90 transition-opacity" on:click={() => openViewer(9)} />
                        </div>
                        <div>
                            <img src={images[10]} alt="Landscape Photo 11" class="w-full object-cover cursor-pointer hover:opacity-90 transition-opacity" on:click={() => openViewer(10)} />
                        </div>
                        <div>
                            <img src={images[11]} alt="Landscape Photo 12" class="w-full object-cover cursor-pointer hover:opacity-90 transition-opacity" on:click={() => openViewer(11)} />
                        </div>
                    </div>
                </div>
            </article>
        </div>
    </div>
</div>

<!-- Full Screen Image Viewer -->
{#if isViewerOpen}
    <div class="fixed bg-slate-50 inset-0 z-50 flex items-center justify-center p-4 viewer-overlay {isViewerClosing ? 'closing' : ''}" on:click={closeViewer} style="background-color: rgb(248 250 252) !important;">
        <div class="relative w-full h-full flex items-center justify-center viewer-content {isViewerClosing ? 'closing' : ''}" on:click|stopPropagation>
            <img 
                src={images[currentImageIndex]} 
                alt="Full screen image" 
                class="max-w-full max-h-full object-contain viewer-image"
            />
            
            <!-- Close Button -->
            <button 
                class="cursor-pointer shadow-xs absolute top-4 right-4 text-slate-700 hover:text-gray-300 transition-colors bg-white bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm viewer-close-btn"
                on:click={closeViewer}
            >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>  
            </button>
            
            <!-- Navigation Arrows -->
            <button 
                class="cursor-pointer shadow-xs absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-700 hover:text-gray-300 transition-colors bg-white bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center backdrop-blur-sm viewer-nav-btn"
                on:click={previousImage}
            >
                <svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
            </button>
            
            <button 
                class="cursor-pointer shadow-xs absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-700 hover:text-gray-300 transition-colors bg-white bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center backdrop-blur-sm viewer-nav-btn"
                on:click={nextImage}
            >
                <svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
            </button>
            
            <!-- Image Counter -->
            <div class="absolute top-3.5 left-4 bg-slate-700 shadow-xs text-sm text-white rounded-full px-3 py-1 backdrop-blur-sm viewer-counter" style="background-color: rgb(51 65 85) !important;">
                {currentImageIndex + 1} / {images.length}
            </div>
        </div>
    </div>
{/if}

<style>
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
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

    .animate-image-fade-in-1 {
        animation: fadeIn 0.5s ease-out 0.45s forwards;
        opacity: 0;
    }

    .animate-image-fade-in-2 {
        animation: fadeIn 0.5s ease-out 0.6s forwards;
        opacity: 0;
    }

    .animate-image-fade-in-3 {
        animation: fadeIn 0.5s ease-out 0.75s forwards;
        opacity: 0;
    }

    .animate-image-fade-in-7 {
        animation: fadeIn 0.5s ease-out 0.45s forwards;
        opacity: 0;
    }

    .animate-image-fade-in-8 {
        animation: fadeIn 0.5s ease-out 0.6s forwards;
        opacity: 0;
    }

    .animate-image-fade-in-9 {
        animation: fadeIn 0.5s ease-out 0.75s forwards;
        opacity: 0;
    }

    /* Photo Viewer Animations */
    .viewer-overlay {
        animation: viewerFadeIn 0.2s ease-out forwards;
    }

    .viewer-content {
        animation: viewerContentFadeIn 0.25s ease-out 0.05s forwards;
        opacity: 0;
        transform: scale(0.98);
    }

    .viewer-image {
        animation: viewerImageFadeIn 0.15s ease-out 0.05s forwards;
        opacity: 0;
        transform: scale(0.98);
    }

    .viewer-close-btn,
    .viewer-nav-btn,
    .viewer-counter {
        animation: viewerControlsFadeIn 0.25s ease-out 0.15s forwards;
        opacity: 0;
        transform: translateY(5px);
    }

    @keyframes viewerFadeIn {
        from {
            opacity: 0;
            backdrop-filter: blur(0px);
        }
        to {
            opacity: 1;
            backdrop-filter: blur(4px);
        }
    }

    @keyframes viewerContentFadeIn {
        from {
            opacity: 0;
            transform: scale(0.98);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    @keyframes viewerImageFadeIn {
        from {
            opacity: 0;
            transform: scale(0.95);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    @keyframes viewerControlsFadeIn {
        from {
            opacity: 0;
            transform: translateY(5px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* Exit animations when closing */
    .viewer-overlay.closing {
        animation: viewerFadeOut 0.15s ease-in forwards;
    }

    .viewer-content.closing {
        animation: viewerContentFadeOut 0.15s ease-in forwards;
    }

    @keyframes viewerFadeOut {
        from {
            opacity: 1;
            backdrop-filter: blur(4px);
        }
        to {
            opacity: 0;
            backdrop-filter: blur(0px);
        }
    }

    @keyframes viewerContentFadeOut {
        from {
            opacity: 1;
            transform: scale(1);
        }
        to {
            opacity: 0;
            transform: scale(0.98);
        }
    }
</style>