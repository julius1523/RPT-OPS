<template>
    <div>
        <v-progress-linear fixed absolute :value="percent" color="cyan" style="z-index: 999999"
            :style="{ opacity: show ? 1 : 0, }"></v-progress-linear>
    </div>
</template>

<script>
export default {
    data() {
        return {
            percent: 0,
            show: false,
            duration: 50,
        };
    },

    methods: {
        start() {
            this.show = true;
            if (this._timer) {
                clearInterval(this._timer);
                this.percent = 0;
            }
            this._cut = 10000 / Math.floor(this.duration);
            this._timer = setInterval(() => {
                this.increase(this._cut * Math.random());
                if (this.percent > 95) {
                    this.finish();
                }
            }, 100);
            return this;
        },
        set(num) {
            this.show = true;
            this.percent = Math.floor(num);
            return this;
        },
        get() {
            return Math.floor(this.percent);
        },
        increase(num) {
            this.percent = this.percent + Math.floor(num);
            return this;
        },
        decrease(num) {
            this.percent = this.percent - Math.floor(num);
            return this;
        },
        finish() {
            this.percent = 100;
            this.hide();
            return this;
        },
        pause() {
            clearInterval(this._timer);
            return this;
        },
        hide() {
            clearInterval(this._timer);
            this._timer = null;
            setTimeout(() => {
                this.show = false;
                this.$nextTick(() => {
                    setTimeout(() => {
                        this.percent = 0;
                    }, 200);
                });
            }, 500);
            return this;
        },
    }
};
</script>
