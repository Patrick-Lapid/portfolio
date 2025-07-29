<script>
  import "../app.css";
</script>

<main>
    <div class="font-facebook">
        <div class="text-slate-600 absolute top-8 right-8 z-50 flex items-center gap-6">
            <a href="/" class="text-[16px] no-underline tracking-[0.01em]">Home</a>
            <a href="/photos" class="text-[16px] no-underline tracking-[0.01em]">Photos</a>
        </div>
        <slot />
        <div class="fixed bottom-6 right-6 text-xs text-gray-400">
            🌒 10:42 PM PST
        </div>
    </div>
</main>

