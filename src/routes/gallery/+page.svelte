<div class="min-h-screen bg-white font-facebook">
    <div class="container mx-auto px-4 sm:px-6 lg:px-0 max-w-6xl">
        <div class="pt-20 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
            <article>
                <div class="text-center mb-16 md:mb-20">
                    <h1 class="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-900 mb-4 animate-fade-in">
                        Photo Library
                    </h1>
                    <p class="text-lg md:text-lg text-gray-600 mb-2 animate-fade-in-delayed">
                        Fujifilm X-T5
                    </p>
                    <p class="text-base md:text-md text-gray-500 animate-fade-in-delayed-2">
                        XF 16-55mm f/2.8 R LM WR II
                    </p>
                </div>
                
                <!-- Responsive Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <!-- Column 1 -->
                    <div class="space-y-4 md:space-y-6">
                        <div class="animate-fade-in-delayed-2">
                            <img src="https://images.unsplash.com/photo-1666937851890-48dbedacf582?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Landscape 1" class="w-full h-64 md:h-80 object-cover" />
                        </div>
                        <div class="animate-fade-in-delayed-4">
                            <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Landscape 2" class="w-full h-48 md:h-64 object-cover" />
                        </div>
                        <div class="animate-fade-in-delayed-6">
                            <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Landscape 3" class="w-full h-72 md:h-96 object-cover" />
                        </div>
                    </div>
                    
                    <!-- Column 2 (offset) -->
                    <div class="space-y-4 md:space-y-6">
                        <div class="animate-fade-in-delayed-3">
                            <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Landscape 4" class="w-full h-56 md:h-72 object-cover" />
                        </div>
                        <div class="animate-fade-in-delayed-5">
                            <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Landscape 5" class="w-full h-80 md:h-96 object-cover" />
                        </div>
                        <div class="animate-fade-in-delayed-7">
                            <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Landscape 6" class="w-full h-64 md:h-80 object-cover" />
                        </div>
                    </div>
                </div>
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

    .animate-fade-in-delayed-7 {
        animation: fadeIn 0.5s ease-out 1.05s forwards;
        opacity: 0;
    }
</style>