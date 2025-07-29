<script lang="ts">
  import "../app.css";
  import { onMount } from "svelte";
  import { getTimeEmoji, getTimezoneAbbr } from "$lib/time";
  
  let currentTime = "";
  let timeInterval: number | undefined;
  let timeEmoji = "";
  
  function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    const displayMinutes = minutes.toString().padStart(2, '0');
    const timezoneAbbr = getTimezoneAbbr();
    
    timeEmoji = getTimeEmoji(hours);
    currentTime = `${displayHours}:${displayMinutes} ${ampm} ${timezoneAbbr}`;
  }
  
  onMount(() => {
    updateTime();
    timeInterval = setInterval(updateTime, 1000);
    
    return () => {
      if (timeInterval) clearInterval(timeInterval);
    };
  });
</script>

<main>
    <div class="font-facebook">
        <div class="text-slate-600 absolute top-8 right-8 z-50 flex items-center gap-6">
            <a href="/" class="text-[16px] no-underline tracking-[0.01em]">Home</a>
            <a href="/photos" class="text-[16px] no-underline tracking-[0.01em]">Photos</a>
        </div>
        <slot />
        <div class="fixed bottom-6 right-6 text-xs text-gray-400 hidden lg:block">
            {timeEmoji} {currentTime}
        </div>
    </div>
</main>

