<script>
  import "../app.css";
</script>

<main>
    <div>
        <div class="text-gray-700 absolute top-8 right-8 z-50 flex items-center gap-6">
        <a href="/" class="text-base font-normal no-underline tracking-[0.01em]">Home</a>
        <a href="/photos" class="text-base font-normal no-underline tracking-[0.01em]">Photos</a>
        </div>
        <slot />
    </div>
</main>
