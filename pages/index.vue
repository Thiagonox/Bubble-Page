<template>
    <div>
        <div  class="min-h-screen md:grid md:grid-cols-2 md:grid-rows-6 bg-bg">
            <div class="rounded-3xl px-4 pb-4 flex flex-col justify-between md:m-1 col-span-1 row-span-6  backdrop-blur-xl">
                <header class="w-full h-[16%] flex items-center justify-between mb-12">
                    <span class="text-5xl text-txt-primary">Under</span>
                    <button class="w-28 h-10 rounded-3xl bg-[#000] text-[#FFF]">Pedidos</button>
                </header>
                <div class="text-txt-primary">
                    <h2 class="text-7xl md:text-8xl mb-2">Streetwear</h2>
                    <h2 class="text-7xl md:text-8xl mb-2">Подземный</h2>
                    <p>Welcome to our underground streetwear store. Unique and different pieces that stand out. We believe in personal expression and standing out. Created by indie designers, made with quality. If you're looking for something authentic, you're in the right place. Check out our collection and find your underground streetwear style.</p>
                </div>
            </div>
            <div class="rounded-3xl flex items-center justify-between md:m-1 p-2 col-span-1 row-span-1 bg-[#CDDC39] text-[#1c2331]">
                <button class="p-4 h-10 flex items-center rounded-3xl border-[#1c2331] border-2">A História</button>
                <button class="p-4 h-10 flex items-center rounded-3xl border-[#1c2331] border-2">Encomendas</button>
                <button class="p-4 h-10 flex items-center rounded-3xl border-[#1c2331] border-2">Promoções Secretas</button>
                <button class="p-4 h-10 flex items-center rounded-3xl border-[#1c2331] border-2">Contato</button>
            </div>
            <div class="rounded-3xl md:m-1 overflow-hidden  col-span-1 row-span-5">
                <img class="w-full h-full" src="https://photo-cdn2.icons8.com/YDl2ETzRkKrzg32m3lg7dl97rzt8723vUunWNDrv5Oc/rs:fit:1560:1072/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5l/eHRlcm5hbC9hMmE0/Mi8zODg2ZTJjMDY3/YmI0Y2I0YjE5MzY4/YjFlNWVmNmIzYy5q/cGc.jpg" alt="">
            </div>
        </div>
        </div>
        <div v-bind:style="{left: x + 'px', top: y + 'px'}" class="absolute rounded-full w-5 h-5 backdrop-invert cursor-pointer"></div>

        <div v-for="(bubble, index) in bubbles" :key="index" :style="{ left: bubble.x + 'px', top: bubble.y + 'px' }" class="absolute rounded-full w-32 h-32 backdrop-invert"></div>

        
</template>
<script>
export default {
    data() {
        return {
            bubbles: [],
            x: 0,
            y: 0
        }
    },
    mounted() {

          // Cria bolhas e adiciona posições aleatórias e velocidades
    for (let i = 0; i < 6; i++) {
      let bubble = {
        x: Math.floor(Math.random() * window.innerWidth),
        y: Math.floor(Math.random() * window.innerHeight),
        vx: (Math.random() - 0.5) * 5, // velocidade x aleatória
        vy: (Math.random() - 0.5) * 5, // velocidade y aleatória
      }
      this.bubbles.push(bubble);
    }
    setInterval(() => {
      // Atualiza posições das bolhas e verifica colisões com as bordas
      for (let i = 0; i < this.bubbles.length; i++) {
        this.bubbles[i].x += this.bubbles[i].vx;
        this.bubbles[i].y += this.bubbles[i].vy;
        // verifica colisão com borda esquerda ou direita
        if (this.bubbles[i].x < 0 || this.bubbles[i].x > window.innerWidth) {
          this.bubbles[i].vx = -this.bubbles[i].vx;
        }
        // verifica colisão com borda superior ou inferior
        if (this.bubbles[i].y < 0 || this.bubbles[i].y > window.innerHeight) {
          this.bubbles[i].vy = -this.bubbles[i].vy;
        }
      }
    }, 10);

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
