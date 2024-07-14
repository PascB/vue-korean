<template>
    <div>
        <Navbar />
        <div v-if="letterData">
            <h1>{{ letterData.name }} ({{ letterData.letter }})</h1>
            <p class="descriptionLetter">{{ letterData.description }}</p>
            <div class="images-container">
                <img :src="letterData.image" :alt="letterData.name">
                <img :src="letterData.drawingImage" :alt="'Drawing of ' + letterData.name">
            </div>
            <div>
                <h2>Try it Yourself!</h2>
            </div>
            <div class="canvas-container">
                <canvas ref="drawingCanvas"></canvas>
                <button @click="resetCanvas">Reset</button>
            </div>
        </div>
    </div>
</template>


<script>
import Navbar from '../components/Navbar.vue'
import lettersData from '../letters.json'

export default {
    name: 'LetterPage',
    props: ['letter'],
    components: {
        Navbar
    },
    data() {
        return {
            letterData: null,
            drawing: false,
            ctx: null
        }
    },
    created() {
        this.letterData = lettersData.find(l => l.letter === this.letter);
    },
    mounted() {
        const canvas = this.$refs.drawingCanvas;
        this.ctx = canvas.getContext('2d');

        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        canvas.addEventListener('mousedown', this.startDrawing);
        canvas.addEventListener('mousemove', this.draw);
        canvas.addEventListener('mouseup', this.stopDrawing);
        canvas.addEventListener('mouseout', this.stopDrawing);
    },
    methods: {
        startDrawing(event) {
            this.drawing = true;
            this.draw(event);
        },
        draw(event) {
            if (!this.drawing) return;

            const x = event.offsetX;
            const y = event.offsetY;

            this.ctx.lineWidth = 10;
            this.ctx.lineCap = 'round';
            this.ctx.strokeStyle = 'black';

            this.ctx.lineTo(x, y);
            this.ctx.stroke();
            this.ctx.beginPath();
            this.ctx.moveTo(x, y);
        },
        stopDrawing() {
            this.drawing = false;
            this.ctx.beginPath();
        },
        resetCanvas() {
            const canvas = this.$refs.drawingCanvas;
            this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    },
    beforeDestroy() {
        const canvas = this.$refs.drawingCanvas;
        canvas.removeEventListener('mousedown', this.startDrawing);
        canvas.removeEventListener('mousemove', this.draw);
        canvas.removeEventListener('mouseup', this.stopDrawing);
        canvas.removeEventListener('mouseout', this.stopDrawing);
    }
}
</script>


<style scoped>
.images-container {
    display: flex;
    justify-content: space-between;
}

.images-container img {
    max-width: 48%;
    height: auto;
}

.descriptionLetter {
    text-align: center;
}

.canvas-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

canvas {
    border: 1px solid #000;
    width: 100%;
    max-width: 600px;
    height: 400px;
}
</style>
