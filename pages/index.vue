<template>
    <div>
        <div  class="min-h-screen grid md:grid-cols-2 md:grid-rows-6 bg-bg">
            <div class="rounded-3xl px-4 pb-4 flex flex-col justify-between md:m-1 col-span-1 row-span-6  backdrop-blur-xl">
                <header class="w-full h-[16%] flex items-center justify-between">
                    <span class="text-5xl text-txt-primary">Under</span>
                    <button class="w-28 h-10 rounded-3xl bg-[#1c2331] text-[#ffd700]">Pedidos</button>
                </header>
                <div class="text-txt-primary">
                    <h2 class="text-8xl mb-2">Streetwear</h2>
                    <h2 class="text-8xl mb-2">Подземный</h2>
                    <p>Welcome to our underground streetwear store. Unique and different pieces that stand out. We believe in personal expression and standing out. Created by indie designers, made with quality. If you're looking for something authentic, you're in the right place. Check out our collection and find your underground streetwear style.</p>
                </div>
            </div>
            <div class="rounded-3xl flex items-center justify-between md:m-1 p-2 col-span-1 row-span-1 bg-[#ffd700] text-[#1c2331]">
                <button class="p-4 h-10 flex items-center rounded-3xl border-[#1c2331] border-2">A História</button>
                <button class="p-4 h-10 flex items-center rounded-3xl border-[#1c2331] border-2">Encomendas</button>
                <button class="p-4 h-10 flex items-center rounded-3xl border-[#1c2331] border-2">Promoções Secretas</button>
                <button class="p-4 h-10 flex items-center rounded-3xl border-[#1c2331] border-2">A História</button>
            </div>
            <div class="rounded-3xl md:m-1 overflow-hidden  col-span-1 row-span-5">
                <img class="w-full h-full" src="https://photo-cdn2.icons8.com/vyVf2D299YKG9unr7OPmUoyszIkEOGHMuTovvmTfvrM/rs:fit:1612:1072/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5l/eHRlcm5hbC9hMmE0/Mi8xZDEyOTFjYjEy/MzY0Y2EwOGUwNzgy/Yjk5ZjAyOGI3MC5q/cGc.jpg" alt="">
            </div>
        </div>
        <div v-bind:style="{left: x + 'px', top: y + 'px'}" class="absolute rounded-full w-5 h-5 backdrop-invert cursor-pointer"></div>
        <div class="h-screen">
            
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            x: 0,
            y: 0
        }
    },
    mounted() {
        document.addEventListener('mousemove', (event) => {
            this.x = event.clientX;
            this.y = event.clientY;
        });

        const elements = document.querySelectorAll('button');
        elements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.classList.add('backdrop-invert');
            });
            element.addEventListener('mouseleave', () => {
                element.classList.remove('backdrop-invert');
            });
        });
    }
}
</script>
